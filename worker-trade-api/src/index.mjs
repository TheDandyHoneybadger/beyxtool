import bcrypt from 'bcryptjs';
import * as jose from 'jose';

// --- Configurações ---
const BCRYPT_SALT_ROUNDS = 10;
const JWT_ALGORITHM = 'HS256';
const JWT_EXPIRATION_TIME = '2h'; // Tempo de expiração do token (ex: 2 horas)

// --- Funções Auxiliares JWT ---
async function generateJwt(userId, secret) {
	if (!secret) {
		console.error("[JWT] Erro Fatal: JWT_SECRET não definido no ambiente do Worker.");
		throw new Error('JWT_SECRET is not defined in Worker environment.');
	}
	const secretKey = new TextEncoder().encode(secret);
	const payload = { userId: userId, iat: Math.floor(Date.now() / 1000) }; // Include issued-at time
	try {
		const jwt = await new jose.SignJWT(payload)
			.setProtectedHeader({ alg: JWT_ALGORITHM })
			.setExpirationTime(JWT_EXPIRATION_TIME)
			.sign(secretKey);
		return jwt;
	} catch (err) {
	    console.error("[JWT] Erro ao gerar token:", err);
	    throw new Error('Could not generate JWT.'); // Lança erro para ser tratado acima
	}
}

async function verifyJwt(token, secret) {
	if (!secret) {
		console.error("[JWT] Erro Fatal: JWT_SECRET não definido no ambiente do Worker.");
		throw new Error('JWT_SECRET is not defined in Worker environment.'); // Lança erro
	}
	if (!token) {
		return null; // Nenhum token fornecido
	}
	const secretKey = new TextEncoder().encode(secret);
	try {
		const { payload } = await jose.jwtVerify(token, secretKey, {
			algorithms: [JWT_ALGORITHM],
		});
		// Verifica se o payload contém userId (essencial)
		if (typeof payload.userId !== 'number') {
		     console.warn("[AUTH] JWT Payload inválido: userId ausente ou não é número.", payload);
		     return null;
		}
		return payload; // Retorna o payload decodificado (ex: { userId: 123, iat: ..., exp: ... })
	} catch (err) {
		// Loga erros específicos de JWT (expirado, assinatura inválida, etc.)
		console.warn(`[AUTH] Verificação JWT falhou: ${err.code || err.message}`);
		return null; // Token inválido ou expirado
	}
}
// --- Fim Funções JWT ---


// --- Middleware de Autenticação Manual ---
// Verifica o token e retorna { userId: number } ou { error: Response }
async function authenticateRequest(request, env) {
	const authHeader = request.headers.get('Authorization');
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		console.warn("[AUTH] Falha: Header Authorization ausente ou mal formatado.");
		// Retorna um objeto de erro contendo uma Resposta pronta
		return { error: new Response(JSON.stringify({ error: 'Unauthorized: Missing or invalid authorization header.' }), { status: 401, headers: { 'Content-Type': 'application/json' } }) };
	}
	const token = authHeader.substring(7); // Remove "Bearer "
	let payload;
	try {
		payload = await verifyJwt(token, env.JWT_SECRET);
	} catch (jwtError) {
		// Captura erros lançados por verifyJwt (como JWT_SECRET ausente)
		console.error("[AUTH] Erro crítico durante verificação JWT:", jwtError);
		return { error: new Response(JSON.stringify({ error: 'Internal Server Error during authentication.'}), { status: 500, headers: { 'Content-Type': 'application/json' } }) };
	}

	if (!payload || !payload.userId) { // Checa se verifyJwt retornou null ou se userId está ausente
		console.warn("[AUTH] Falha: Token JWT inválido, expirado ou payload incorreto.");
		return { error: new Response(JSON.stringify({ error: 'Unauthorized: Invalid or expired token.' }), { status: 401, headers: { 'Content-Type': 'application/json' } }) };
	}

	console.log(`[AUTH] Usuário autenticado ID: ${payload.userId}`);
	return { userId: payload.userId }; // Retorna o ID se sucesso
}
// --- Fim Middleware ---


// --- Handlers das Rotas ---

// POST /trade/api/register
async function handleRegister(request, env) {
	try {
		const body = await request.json();
		const { nick, password, country_code } = body;

		// Validação básica
		if (!nick || !password || nick.length < 3 || password.length < 6) {
			 console.warn(`[REGISTER] Tentativa de registro inválida: nick (${nick ? nick.length : 'null'}) ou password (${password ? password.length : 'null'}) inválido.`);
			return new Response(JSON.stringify({ error:'Bad Request: Nick (min 3 chars) and password (min 6 chars) are required.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}
		if (country_code && !/^[A-Z]{2}$/i.test(country_code)) {
			console.warn(`[REGISTER] Tentativa de registro com country_code inválido: ${country_code}`);
			return new Response(JSON.stringify({ error: 'Bad Request: Invalid country code format (must be 2 letters).'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		// Verificar se o nick já existe (case-insensitive)
		const checkUserStmt = env.DB.prepare('SELECT id FROM users WHERE lower(nick) = lower(?)');
		const existingUser = await checkUserStmt.bind(nick).first();

		if (existingUser) {
			 console.log(`[REGISTER] Tentativa de registro com nick já existente: ${nick}`);
			return new Response(JSON.stringify({ error: 'Conflict: Nickname already taken.'}), { status: 409, headers: { 'Content-Type': 'application/json' } });
		}

		// Gerar hash da senha
		const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

		// Inserir novo usuário
		const insertStmt = env.DB.prepare(
			'INSERT INTO users (nick, hashed_password, country_code, created_at) VALUES (?1, ?2, ?3, datetime("now")) RETURNING id'
		);
		const result = await insertStmt.bind(nick, hashedPassword, country_code?.toUpperCase() || null).first();

		if (result?.id) {
			 console.log(`[REGISTER] Usuário registrado com sucesso: Nick ${nick}, ID ${result.id}`);
			return new Response(JSON.stringify({ message: 'User registered successfully!', userId: result.id }), { status: 201, headers: { 'Content-Type': 'application/json' } });
		} else {
			console.error(`[REGISTER] Falha ao inserir usuário no DB para nick ${nick}. D1 result: ${JSON.stringify(result)}`);
			return new Response(JSON.stringify({ error: 'Internal Server Error: Could not register user.'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
		}
	} catch (e) {
		console.error("[REGISTER] Erro:", e);
		if (e instanceof SyntaxError || (e instanceof TypeError && e.message.includes('JSON'))) {
			return new Response(JSON.stringify({error: 'Bad Request: Invalid JSON format.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}
		if (e.message && e.message.toUpperCase().includes('UNIQUE CONSTRAINT FAILED')) {
            console.warn(`[REGISTER] Conflito de nick (race condition?) para: ${body?.nick}`);
            return new Response(JSON.stringify({ error: 'Conflict: Nickname already taken.'}), { status: 409, headers: { 'Content-Type': 'application/json' } });
        }
		return new Response(JSON.stringify({error: 'Internal Server Error'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
}

// POST /trade/api/login
async function handleLogin(request, env) {
	try {
		const body = await request.json();
		const { nick, password } = body;

		if (!nick || !password) {
			console.warn("[LOGIN] Tentativa de login inválida: nick ou password ausente.");
			return new Response(JSON.stringify({ error: 'Bad Request: Nick and password are required.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		// Buscar usuário pelo nick (case-insensitive)
		const findUserStmt = env.DB.prepare('SELECT id, hashed_password FROM users WHERE lower(nick) = lower(?)');
		const user = await findUserStmt.bind(nick).first();

		if (!user || !user.hashed_password) {
			console.log(`[LOGIN] Tentativa de login falhou: Nick não encontrado ou sem hash (${nick})`);
			return new Response(JSON.stringify({ error: 'Unauthorized: Invalid nickname or password.'}), { status: 401, headers: { 'Content-Type': 'application/json' } });
		}

		// Comparar a senha fornecida com o hash armazenado
		let passwordMatch = false;
        try {
            passwordMatch = await bcrypt.compare(password, user.hashed_password);
        } catch (compareError) {
             console.error(`[LOGIN] Erro ao comparar senha para ${nick}:`, compareError);
             return new Response(JSON.stringify({error: 'Internal Server Error during login process.'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

		if (!passwordMatch) {
			console.log(`[LOGIN] Tentativa de login falhou: Senha incorreta para Nick (${nick})`);
			return new Response(JSON.stringify({ error: 'Unauthorized: Invalid nickname or password.'}), { status: 401, headers: { 'Content-Type': 'application/json' } });
		}

		// Senha correta! Gerar JWT
		let token;
        try {
            token = await generateJwt(user.id, env.JWT_SECRET);
        } catch (jwtError) {
            console.error(`[LOGIN] Erro ao gerar JWT para usuário ${user.id}:`, jwtError);
             return new Response(JSON.stringify({error: 'Internal Server Error: Could not generate session token.'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

		console.log(`[LOGIN] Login bem-sucedido para Nick (${nick}), ID (${user.id}). Token gerado.`);
		return new Response(JSON.stringify({ message: 'Login successful!', token: token, userId: user.id, nick: nick }), { headers: { 'Content-Type': 'application/json' } });
	} catch (e) {
		console.error("[LOGIN] Erro:", e);
		if (e instanceof SyntaxError || (e instanceof TypeError && e.message.includes('JSON'))) {
			return new Response(JSON.stringify({error: 'Bad Request: Invalid JSON format.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}
		return new Response(JSON.stringify({error: 'Internal Server Error'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
}

// GET /trade/api/userdata
async function handleGetUserData(request, env, userId) {
	console.log(`[USERDATA GET] Buscando dados para usuário ID: ${userId}`);
	try {
		const stmt = env.DB.prepare(
			'SELECT collection_data, decks_data FROM users WHERE id = ?1'
		);
		const data = await stmt.bind(userId).first();

		if (!data) {
			console.warn(`[USERDATA GET] Usuário ID ${userId} não encontrado no DB após autenticação.`);
			return new Response(JSON.stringify({ collection: null, decks: null }), { status: 404, headers: { 'Content-Type': 'application/json' } });
		}

		console.log(`[USERDATA GET] Dados encontrados para usuário ID ${userId}. Retornando.`);
		let collection = null;
		let decks = null;

		// Tenta fazer parse dos dados, retorna null se falhar ou se for null no DB
		try {
		    if (data.collection_data) collection = JSON.parse(data.collection_data);
		} catch (parseError) {
		    console.error(`[USERDATA GET] Erro ao fazer parse da coleção do DB para usuário ${userId}:`, parseError);
		    // Mantém collection como null
		}
		try {
		    if (data.decks_data) decks = JSON.parse(data.decks_data);
		} catch (parseError) {
		     console.error(`[USERDATA GET] Erro ao fazer parse dos decks do DB para usuário ${userId}:`, parseError);
		     // Mantém decks como null
		}

		return new Response(JSON.stringify({ collection, decks }), { headers: { 'Content-Type': 'application/json' } });

	} catch (e) {
		console.error(`[USERDATA GET] Erro D1 ao buscar dados para usuário ID ${userId}:`, e);
		return new Response(JSON.stringify({error: 'Internal Server Error fetching user data.'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
}

// POST /trade/api/userdata
async function handlePostUserData(request, env, userId) {
	console.log(`[USERDATA POST] Salvando dados para usuário ID: ${userId}`);
	let collectionJsonString = null;
	let decksJsonString = null;

	try {
		const body = await request.json();
		const collectionData = body?.collection;
		const decksData = body?.decks;

		if (collectionData === undefined && decksData === undefined) {
			 console.warn(`[USERDATA POST] Nenhum dado (collection ou decks) no corpo da requisição para usuário ${userId}.`);
			return new Response(JSON.stringify({error: 'Bad Request: Missing collection or decks data in body.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		if (collectionData !== undefined) {
			 collectionJsonString = JSON.stringify(collectionData);
		}
		if (decksData !== undefined) {
			 decksJsonString = JSON.stringify(decksData);
		}

	} catch (e) {
		 console.error(`[USERDATA POST] Erro ao processar corpo JSON para usuário ID ${userId}:`, e);
		 if (e instanceof SyntaxError || (e instanceof TypeError && e.message.includes('JSON'))) {
			return new Response(JSON.stringify({error: 'Bad Request: Invalid JSON format in request body.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}
		return new Response(JSON.stringify({error: 'Internal Server Error processing request body.'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}

	try {
		let sqlSetParts = [];
		let bindings = [];
		let bindingIndex = 1;

		if (collectionJsonString !== null) {
			sqlSetParts.push(`collection_data = ?${bindingIndex}`);
			bindings.push(collectionJsonString);
			bindingIndex++;
		}
		if (decksJsonString !== null) {
			 sqlSetParts.push(`decks_data = ?${bindingIndex}`);
			 bindings.push(decksJsonString);
			 bindingIndex++;
		}

		if (sqlSetParts.length === 0) {
			 console.warn(`[USERDATA POST] Nenhum dado válido para salvar para usuário ${userId}.`);
			 return new Response(JSON.stringify({error: 'Bad Request: No valid data provided to save.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		bindings.push(userId);
		const sql = `UPDATE users SET ${sqlSetParts.join(', ')} WHERE id = ?${bindingIndex}`;
		console.log(`[USERDATA POST] Executando SQL: ${sql}`);

		const stmt = env.DB.prepare(sql);
		const info = await stmt.bind(...bindings).run();
		console.log(`[USERDATA POST] Resultado da atualização para usuário ${userId}: ${JSON.stringify(info)}`);

		if (info?.meta?.changes > 0) {
			return new Response(JSON.stringify({ message: 'User data saved successfully.' }), { headers: { 'Content-Type': 'application/json' } });
		} else {
			const checkUserStmt = env.DB.prepare('SELECT id FROM users WHERE id = ?');
			const userExists = await checkUserStmt.bind(userId).first();
			if (userExists) {
				 console.log(`[USERDATA POST] Dados para usuário ${userId} não alterados (provavelmente idênticos aos salvos ou nada foi enviado para atualizar).`);
				 return new Response(JSON.stringify({ message: 'User data is up-to-date.' }), { headers: { 'Content-Type': 'application/json' } });
			} else {
				 console.error(`[USERDATA POST] Tentativa de salvar dados para usuário ${userId} que não existe.`);
				 return new Response(JSON.stringify({error: 'User not found, could not save data.'}), { status: 404, headers: { 'Content-Type': 'application/json' } });
			}
		}
	} catch (e) {
		console.error(`[USERDATA POST] Erro D1 ao salvar dados para usuário ID ${userId}:`, e);
		return new Response(JSON.stringify({error: 'Internal Server Error saving user data.'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
}

// POST /trade/api/request
async function handleTradeRequest(request, env, userId) {
    const senderId = userId; // Renomeado para clareza
	console.log(`[REQUEST] Recebida solicitação de troca pelo usuário ID: ${senderId}`);
	try {
		const body = await request.json();
		const receiverNick = body?.receiverNick;

		if (!receiverNick) {
			console.warn("[REQUEST] Requisição inválida: receiverNick ausente no corpo");
			return new Response(JSON.stringify({ error: 'Bad Request: Missing receiverNick in request body.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		const findReceiverStmt = env.DB.prepare('SELECT id FROM users WHERE lower(nick) = lower(?)');
		const receiverResult = await findReceiverStmt.bind(receiverNick).first();

		if (!receiverResult?.id) {
			console.warn(`[REQUEST] Destinatário nick "${receiverNick}" não encontrado.`);
			return new Response(JSON.stringify({ error: `User '${receiverNick}' not found.` }), { status: 404, headers: { 'Content-Type': 'application/json' } });
		}
		const receiverId = receiverResult.id;

		if (senderId === receiverId) {
			console.warn(`[REQUEST] Usuário ${senderId} tentando enviar solicitação para si mesmo.`);
			return new Response(JSON.stringify({ error: 'Cannot send trade request to yourself.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		const checkExistingStmt = env.DB.prepare(
			'SELECT id FROM trade_requests WHERE ((sender_id = ?1 AND receiver_id = ?2) OR (sender_id = ?2 AND receiver_id = ?1)) AND status = ?3 LIMIT 1'
		);
		const existingRequest = await checkExistingStmt.bind(senderId, receiverId, 'pending').first();

		if (existingRequest) {
			console.log(`[REQUEST] Solicitação pendente já existe entre ${senderId} e ${receiverId}.`);
			return new Response(JSON.stringify({ message: 'A pending trade request already exists with this user.' }), { status: 409, headers: { 'Content-Type': 'application/json' } });
		}

		const insertStmt = env.DB.prepare(
			'INSERT INTO trade_requests (sender_id, receiver_id, status, created_at, updated_at) VALUES (?1, ?2, ?3, datetime("now"), datetime("now"))'
		);
		const info = await insertStmt.bind(senderId, receiverId, 'pending').run();
		console.log(`[REQUEST] Solicitação de troca inserida. D1 info: ${JSON.stringify(info)}`);

		if (info?.success) {
			return new Response(JSON.stringify({ message: 'Trade request sent successfully!' }), { headers: { 'Content-Type': 'application/json' } });
		} else {
			console.error(`[REQUEST] Falha ao inserir solicitação de troca do remetente ${senderId} para ${receiverId}. D1 info: ${JSON.stringify(info)}`);
			return new Response(JSON.stringify({ error: 'Failed to send trade request. Please try again.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
		}
	} catch (e) {
		console.error("[REQUEST] Erro:", e);
		 if (e instanceof SyntaxError || (e instanceof TypeError && e.message.includes('JSON'))) {
			return new Response(JSON.stringify({error: 'Bad Request: Invalid JSON format.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}
        if (e.message && e.message.toUpperCase().includes('FOREIGN KEY CONSTRAINT FAILED')) {
             console.error(`[REQUEST] Falha de FK ao inserir trade request. Sender ${senderId} ou Receiver ${body?.receiverNick} podem não existir mais.`);
             return new Response(JSON.stringify({ error: 'Sender or Receiver user not found.' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }
		return new Response(JSON.stringify({error: 'Internal Server Error'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
}

// GET /trade/api/check
async function handleTradeCheck(request, env, userId) {
    const receiverId = userId; // Renomeado para clareza
	console.log(`[CHECK] Verificando solicitações para o usuário ID: ${receiverId}`);
	try {
		const stmt = env.DB.prepare(`
        SELECT tr.id, u.nick AS senderNick, u.country_code AS senderCountry
        FROM trade_requests tr
        JOIN users u ON tr.sender_id = u.id
        WHERE tr.receiver_id = ?1 AND tr.status = ?2
        ORDER BY tr.created_at DESC
      `);
		const { results, error: dbError, success } = await stmt.bind(receiverId, 'pending').all();

        if (!success) {
            console.error(`[CHECK] Erro D1 ao buscar solicitações para ${receiverId}:`, dbError);
            return new Response(JSON.stringify({error: 'Database error checking requests.'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

		const requestCount = results?.length || 0;
		console.log(`[CHECK] Encontradas ${requestCount} solicitações pendentes para o usuário ${receiverId}.`);

		return new Response(JSON.stringify(results || []), { headers: { 'Content-Type': 'application/json' } });
	} catch (e) {
		console.error("[CHECK] Erro inesperado:", e);
		return new Response(JSON.stringify({error: 'Internal Server Error'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
}

// POST /trade/api/respond
async function handleTradeRespond(request, env, userId) {
    // userId é quem está respondendo (deve ser o receiver_id da solicitação)
	console.log(`[RESPOND] Respondendo solicitação pelo usuário ID: ${userId}`);
	try {
		const body = await request.json();
		const requestId = body?.requestId;
		const responseAction = body?.response;

		if (requestId === undefined || typeof requestId !== 'number' || requestId <= 0 || !responseAction || (responseAction !== 'accepted' && responseAction !== 'declined')) {
		    console.warn(`[RESPOND] Requisição inválida: requestId (${requestId}) ou response (${responseAction}) ausente/inválido.`);
			return new Response(JSON.stringify({ error: 'Bad Request: Missing or invalid requestId or response in body.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		console.log(`[RESPOND] Processando resposta à solicitação ID: ${requestId}, Ação: ${responseAction}, Usuário: ${userId}`);

		const stmt = env.DB.prepare(
			'UPDATE trade_requests SET status = ?1, updated_at = datetime("now") WHERE id = ?2 AND receiver_id = ?3 AND status = ?4'
		);
		const info = await stmt.bind(responseAction, requestId, userId, 'pending').run();
		console.log(`[RESPOND] Resultado da atualização para solicitação ID ${requestId}: ${JSON.stringify(info)}`);

		const changes = info?.meta?.changes ?? 0;

		if (changes > 0) {
			console.log(`[RESPOND] Solicitação ${requestId} atualizada para ${responseAction} com sucesso.`);
			return new Response(JSON.stringify({ message: `Request ${responseAction} successfully.` }), { headers: { 'Content-Type': 'application/json' } });
		} else {
            // Verifica por que não atualizou
            const checkStmt = env.DB.prepare('SELECT status, receiver_id FROM trade_requests WHERE id = ?');
            const currentReq = await checkStmt.bind(requestId).first();
            if (!currentReq) {
                 console.warn(`[RESPOND] Solicitação ${requestId} não encontrada.`);
                 return new Response(JSON.stringify({ error: 'Request not found.' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
            } else if (currentReq.receiver_id !== userId) {
                 console.warn(`[RESPOND] Usuário ${userId} tentou responder solicitação ${requestId} destinada a ${currentReq.receiver_id}.`);
                 return new Response(JSON.stringify({ error: 'Forbidden: You are not authorized to respond to this request.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
            } else if (currentReq.status !== 'pending') {
                 console.warn(`[RESPOND] Solicitação ${requestId} já estava no estado ${currentReq.status}.`);
                 return new Response(JSON.stringify({ error: `Conflict: Request has already been ${currentReq.status}.` }), { status: 409, headers: { 'Content-Type': 'application/json' } });
            } else {
                 console.error(`[RESPOND] Nenhuma linha atualizada para solicitação ID ${requestId}, usuário ID ${userId}, mas a verificação não encontrou motivo claro.`);
                 return new Response(JSON.stringify({ error: 'Failed to update request status.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
            }
		}
	} catch (e) {
		console.error("[RESPOND] Erro:", e);
		 if (e instanceof SyntaxError || (e instanceof TypeError && e.message.includes('JSON'))) {
			return new Response(JSON.stringify({error: 'Bad Request: Invalid JSON format.'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}
		return new Response(JSON.stringify({error: 'Internal Server Error'}), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
}
// --- Fim Handlers ---


// --- Handler Principal (Fetch) ---
export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname;
		const method = request.method.toUpperCase();

		console.log(`[FETCH] Recebido: ${method} ${path}`);

		// --- Tratamento CORS ---
		const allowedOrigin = '*'; // MUDE PARA SEU DOMÍNIO EM PRODUÇÃO!
		// const allowedOrigin = 'https://seu-dominio.com';

		const corsHeaders = {
			'Access-Control-Allow-Origin': allowedOrigin,
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Adicionado Authorization
			'Access-Control-Max-Age': '86400', // Cache preflight por 1 dia
		};

		// Responde imediatamente a requisições OPTIONS (preflight)
		if (method === 'OPTIONS') {
			return new Response(null, { headers: corsHeaders });
		}
		// --- Fim CORS ---

		let response; // Variável para a resposta final

		try {
			// --- Roteamento Manual ---
			if (method === 'POST' && path === '/trade/api/register') {
				response = await handleRegister(request, env);
			} else if (method === 'POST' && path === '/trade/api/login') {
				response = await handleLogin(request, env);
			}
			// --- Rotas Protegidas ---
			else if (path.startsWith('/trade/api/')) {
				// 1. Tenta autenticar
				const authResult = await authenticateRequest(request, env);
				if (authResult.error) {
					response = authResult.error; // Retorna o erro de autenticação (401 ou 500)
				} else {
					// 2. Autenticação OK, direciona para o handler correto
					const userId = authResult.userId;
					if (method === 'GET' && path === '/trade/api/userdata') {
						response = await handleGetUserData(request, env, userId);
					} else if (method === 'POST' && path === '/trade/api/userdata') {
						response = await handlePostUserData(request, env, userId);
					} else if (method === 'POST' && path === '/trade/api/request') {
						response = await handleTradeRequest(request, env, userId);
					} else if (method === 'GET' && path === '/trade/api/check') {
						response = await handleTradeCheck(request, env, userId);
					} else if (method === 'POST' && path === '/trade/api/respond') {
						response = await handleTradeRespond(request, env, userId);
					} else {
						// Rota API protegida não encontrada
						response = new Response(JSON.stringify({error:'Not Found - Invalid API endpoint.'}), { status: 404, headers: { 'Content-Type': 'application/json' } });
					}
				}
			}
			// Rota Raiz (Opcional)
			else if (method === 'GET' && path === '/') {
				 response = new Response('BeyXTool Trade API'); // Mensagem simples para a raiz
			}
			// Qualquer outra rota não encontrada
			 else {
				 response = new Response('Not Found.', { status: 404 });
			}

		} catch (err) {
			 // Captura erros inesperados que possam ter escapado dos handlers individuais
			console.error("[FETCH] Erro não capturado no roteamento principal:", err);
			response = new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
		}

		// Adiciona headers CORS à resposta final ANTES de retorná-la
		// Clona a resposta para poder modificar os headers
		const finalResponse = new Response(response.body, response);
		Object.keys(corsHeaders).forEach(key => {
			finalResponse.headers.set(key, corsHeaders[key]);
		});
		// Garante origem específica se não for '*' (importante para produção)
		// if (allowedOrigin !== '*') { finalResponse.headers.set('Access-Control-Allow-Origin', allowedOrigin); }

		return finalResponse;
	}
};
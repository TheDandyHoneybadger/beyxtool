import os
from PIL import Image, ImageChops, ImageDraw
from pathlib import Path

# --- Configuração ---
# O script agora salva os WEBPs na raiz (onde o script está).
# Pasta para onde os PNGs originais serão movidos após o processamento:
PASTA_PNGS_PROCESSADOS = "png_processados"
# Tamanho final da imagem quadrada
TAMANHO_CANVAS = 150

# --- Configurações para remoção de fundo branco ---
# Limiar para detectar se o canto (0,0) é branco (R,G,B,A > valor)
LIMIAR_BRANCO = 245
# Tolerância para o "preenchimento" (flood fill)
TOLERANCIA_FILL = 30
# --------------------------------------------------

def remover_fundo_branco(img: Image.Image) -> Image.Image:
    """
    Remove o fundo branco de uma imagem usando o método flood fill.
    Verifica o pixel (0,0) para decidir se a remoção é necessária.
    """
    # Garante que a imagem esteja no modo RGBA para manipulação
    img = img.convert("RGBA")
    
    # Pega o pixel do canto (0,0) para verificar se é um fundo branco
    seed_pixel = img.getpixel((0, 0))
    r_s, g_s, b_s, a_s = seed_pixel
    
    # Verifica se o pixel (0,0) NÃO é branco e opaco (dentro do limiar)
    if not (r_s >= LIMIAR_BRANCO and \
            g_s >= LIMIAR_BRANCO and \
            b_s >= LIMIAR_BRANCO and \
            a_s >= LIMIAR_BRANCO):
        
        # Se (0,0) NÃO for branco, assumimos que a imagem já é transparente
        print(f"    [INFO] Canto (0,0) não é branco. Pulando remoção de fundo.")
        return img

    # Se chegamos aqui, o canto (0,0) É branco.
    print(f"    [INFO] Canto (0,0) é branco. Iniciando flood fill...")
    
    cor_transparente = (0, 0, 0, 0)
    
    ImageDraw.floodfill(
        img,
        xy=(0, 0),
        value=cor_transparente,
        thresh=TOLERANCIA_FILL 
    )
        
    return img

def processar_imagens():
    """
    Varre o diretório atual (raiz), processa os arquivos PNG, salva os WEBP na raiz
    e move os PNGs processados para a pasta 'PASTA_PNGS_PROCESSADOS'.
    """
    # Path('.') aponta para o diretório atual
    pasta_raiz = Path('.') 
    # Define a pasta de destino para os PNGs processados
    pasta_pngs_movidos = pasta_raiz / PASTA_PNGS_PROCESSADOS

    # Cria a pasta de destino dos PNGs, se não existir
    pasta_pngs_movidos.mkdir(exist_ok=True)

    print(f"Iniciando processamento...")
    print(f"Pasta de Entrada (PNG): {pasta_raiz.resolve()} (Diretório Atual)")
    print(f"Pasta de Saída (WEBP):  {pasta_raiz.resolve()} (Diretório Atual)")
    print(f"Pasta de Destino (PNG): {pasta_pngs_movidos.resolve()}")

    arquivos_processados = 0
    arquivos_ignorados = 0

    # Itera sobre todos os arquivos no diretório atual (raiz)
    for arquivo_path in pasta_raiz.iterdir():
        
        # Verifica se é um arquivo e se é .png
        if arquivo_path.is_file() and arquivo_path.suffix.lower() == '.png':
            try:
                # Abre a imagem PNG
                with Image.open(arquivo_path) as img:
                    print(f"  Processando: {arquivo_path.name}")
                    
                    # --- Etapa 1: Remover Fundo Branco ---
                    img_sem_fundo = remover_fundo_branco(img)
                    
                    # --- Etapa 2: Recortar (Crop) ---
                    bbox = img_sem_fundo.getbbox()
                    if bbox:
                         img_sem_fundo = img_sem_fundo.crop(bbox)
                    else:
                        print(f"    [AVISO] Imagem {arquivo_path.name} ficou vazia. Pulando.")
                        arquivos_ignorados += 1
                        continue

                    # --- Etapa 3: Criar Canvas e Centralizar ---
                    canvas = Image.new("RGBA", (TAMANHO_CANVAS, TAMANHO_CANVAS), (0, 0, 0, 0))
                    img_redimensionada = img_sem_fundo.copy()
                    img_redimensionada.thumbnail((TAMANHO_CANVAS, TAMANHO_CANVAS), Image.Resampling.LANCZOS)
                    pos_x = (TAMANHO_CANVAS - img_redimensionada.width) // 2
                    pos_y = (TAMANHO_CANVAS - img_redimensionada.height) // 2
                    canvas.paste(img_redimensionada, (pos_x, pos_y), mask=img_redimensionada)

                    # --- Etapa 4: Salvar o WEBP na Raiz ---
                    nome_saida_webp = arquivo_path.stem + ".webp"
                    caminho_saida_webp = pasta_raiz / nome_saida_webp
                    
                    canvas.save(caminho_saida_webp, "WEBP", lossless=True, quality=100)
                    print(f"    [OK] Salvo: {nome_saida_webp} (na raiz)")
                    
                    arquivos_processados += 1

                # --- Etapa 5: Mover o PNG original ---
                # Isso é feito *fora* do bloco 'with Image.open(...)'
                # para garantir que o arquivo PNG não esteja mais em uso.
                caminho_destino_png = pasta_pngs_movidos / arquivo_path.name
                arquivo_path.rename(caminho_destino_png)
                print(f"    [OK] Movido: {arquivo_path.name} -> {PASTA_PNGS_PROCESSADOS}/")


            except Exception as e:
                print(f"    [ERRO] Falha ao processar {arquivo_path.name}: {e}")
                print(f"           O arquivo PNG original NÃO será movido.")
                arquivos_ignorados += 1
        else:
            # Ignora outros arquivos (como o .py) e pastas
            if arquivo_path.is_file() and arquivo_path.suffix.lower() != '.py':
                arquivos_ignorados += 1
            pass 

    print("\nProcessamento concluído!")
    print(f"Total processados: {arquivos_processados}")
    print(f"Total ignorados (não-PNG, vazios, etc.): {arquivos_ignorados}")

if __name__ == "__main__":
    processar_imagens()
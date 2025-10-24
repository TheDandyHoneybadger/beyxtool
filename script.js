document.addEventListener('DOMContentLoaded', () => {

    // Verifica se as variáveis do database.js foram carregadas
    if (typeof ALL_VARIANTS === 'undefined' || typeof ALL_PARTS === 'undefined' || typeof translations === 'undefined' || typeof STARTER_GUIDE_PRODUCTS === 'undefined') {
        alert("Erro: Arquivo database.js não carregado ou corrompido. Verifique o console para mais detalhes.");
        console.error("Variáveis de database.js (ALL_VARIANTS, ALL_PARTS, translations, STARTER_GUIDE_PRODUCTS) não encontradas.");
        return;
    }

    let currentLanguage = 'pt-br';
    let deckChartInstances = [null, null, null]; // Array para armazenar instâncias dos gráficos do deck
    let infoModalChartInstance = null; // Instância do gráfico no modal de info

    let app_data = {
        collection: { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() },
        decks: [],
        active_deck_index: 0
    };
    let active_deck_slot = { slotId: null, type: null };
    let variant_modal_part = null;
    let onInputConfirm = null;

    // Variáveis do Placar
    let scoreP1 = 0;
    let scoreP2 = 0;

    // Seletores de Elementos DOM
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const blades_container = document.getElementById('blades-container');
    const ratchets_container = document.getElementById('ratchets-container');
    const bits_container = document.getElementById('bits-container');
    const mainblades_container = document.getElementById('mainblades-container');
    const assistblades_container = document.getElementById('assistblades-container');
    const lockchips_container = document.getElementById('lockchips-container');
    const collection_filter = document.getElementById('collection-filter');
    const collection_sort = document.getElementById('collection-sort');
    const export_button = document.getElementById('export-button');
    const import_button = document.getElementById('import-button');
    const import_file_input = document.getElementById('import-file');
    const export_deck_button = document.getElementById('export-deck-button');
    const collection_tab = document.getElementById('collection-tab');
    const deck_slots = document.querySelectorAll('.deck-slot');
    const clear_deck_button = document.getElementById('clear-deck-button');
    const deck_selector = document.getElementById('deck-selector');
    const deck_name_input = document.getElementById('deck-name-input');
    const add_deck_button = document.getElementById('add-deck-button');
    const delete_deck_button = document.getElementById('delete-deck-button');
    const part_modal = document.getElementById('part-selector-modal');
    const modal_title = document.getElementById('modal-title');
    const modal_parts_list_container = document.getElementById('modal-parts-list-container');
    const part_modal_close = document.getElementById('part-selector-close');
    const variant_modal = document.getElementById('variant-selector-modal');
    const variant_modal_title = document.getElementById('variant-modal-title');
    const variant_modal_checkboxes = document.getElementById('variant-modal-checkboxes');
    const variant_modal_close = document.getElementById('variant-selector-close');
    const langPtBrButton = document.getElementById('lang-pt-br');
    const langEnButton = document.getElementById('lang-en');
    const inputModal = document.getElementById('input-modal');
    const inputModalTitle = document.getElementById('input-modal-title');
    const inputModalField = document.getElementById('input-modal-field');
    const inputModalOk = document.getElementById('input-modal-ok');
    const inputModalCancel = document.getElementById('input-modal-cancel');
    const inputModalClose = document.getElementById('input-modal-close');
    const scoreP1Display = document.getElementById('score-p1');
    const scoreP2Display = document.getElementById('score-p2');
    const scoreButtons = document.querySelectorAll('.score-btn');
    const resetScoreButton = document.getElementById('reset-score-button');
    const p1NameInput = document.querySelector('#player1 .player-name');
    const p2NameInput = document.querySelector('#player2 .player-name');
    const guide_products_container = document.getElementById('guide-products-container');
    const partInfoModal = document.getElementById('part-info-modal');
    const partInfoModalClose = document.getElementById('part-info-close');
    const infoModalPartName = document.getElementById('info-modal-part-name');
    const infoModalSourceList = document.getElementById('info-modal-source-list');
    const infoModalChartCanvas = document.getElementById('info-modal-chart');

    // --- Funções Auxiliares ---

    const showInputModal = (titleKey, placeholderKey, defaultValue = "") => {
        return new Promise((resolve) => {
            const langPack = translations[currentLanguage];
            inputModalTitle.textContent = langPack[titleKey] || titleKey;
            inputModalField.placeholder = langPack[placeholderKey] || placeholderKey;
            inputModalField.value = defaultValue;
            inputModal.style.display = 'block';
            inputModalField.focus();
            onInputConfirm = (value) => {
                if (titleKey === 'deck_name_label' && value !== null && value.trim() === "") {
                    alert(langPack.alert_deck_name_empty || "O nome do deck não pode ser vazio.");
                    return;
                }
                closeInputModal();
                resolve(value);
            };
        });
    };

    const closeInputModal = () => { if (inputModal) inputModal.style.display = 'none'; onInputConfirm = null; };

    const translateUI = () => {
        const langPack = translations[currentLanguage]; if (!langPack) return;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate; if (langPack[key]) {
                 if (element.placeholder !== undefined && key.includes('placeholder')) { element.placeholder = langPack[key]; }
                 else if (element.title !== undefined && key.includes('title')) { element.title = langPack[key]; }
                 else if (element.tagName === 'SPAN' && element.parentElement?.classList.contains('part-placeholder')) { element.textContent = langPack[key]; }
                 else if (element.tagName === 'INPUT' && (key === 'player_1_default' || key === 'player_2_default')) { const defaultP1_pt = translations['pt-br']?.player_1_default || "Jogador 1"; const defaultP1_en = translations['en']?.player_1_default || "Player 1"; const defaultP2_pt = translations['pt-br']?.player_2_default || "Jogador 2"; const defaultP2_en = translations['en']?.player_2_default || "Player 2"; if (key === 'player_1_default' && (element.value === defaultP1_pt || element.value === defaultP1_en)) { element.value = langPack[key]; } else if (key === 'player_2_default' && (element.value === defaultP2_pt || element.value === defaultP2_en)) { element.value = langPack[key]; } }
                 else if (element.tagName !== 'BUTTON' || !element.id.startsWith('lang-')) { element.textContent = langPack[key]; }
            } else { console.warn(`Translation key not found: ${key}`); }
        });
        updateDeckUI();
    };

    const setLanguage = (lang) => { if (translations[lang]) { currentLanguage = lang; localStorage.setItem('beyXToolLanguage', lang); if (lang === 'pt-br') { langPtBrButton?.classList.add('active'); langEnButton?.classList.remove('active'); } else { langPtBrButton?.classList.remove('active'); langEnButton?.classList.add('active'); } translateUI(); } else { console.error(`Idioma não suportado: ${lang}`); } };

    const setupTabs = () => { tabLinks.forEach(link => { link.addEventListener('click', (event) => { event.preventDefault(); tabLinks.forEach(l => l.classList.remove('active')); tabContents.forEach(c => c.classList.remove('active')); const tabId = link.dataset.tab; const correspondingContent = document.getElementById(tabId + '-tab'); link.classList.add('active'); if (correspondingContent) correspondingContent.classList.add('active'); }); }); const initialTab = document.querySelector('.tab-link[data-tab="deck-builder"]'); if (initialTab) initialTab.click(); };

    const createNewDeck = (name) => ({ name: name, bays: [ { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }, { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }, { type: null, part1: null, part2: null, part3: null, part4: null, part5: null } ] });
    const getSerializableCollection = () => ({ blades: Object.fromEntries(Array.from(app_data.collection.blades.entries(), ([id, set]) => [id, [...set]])), ratchets: [...app_data.collection.ratchets], bits: [...app_data.collection.bits], mainblades: [...app_data.collection.mainblades], assistblades: [...app_data.collection.assistblades], lockchips: [...app_data.collection.lockchips], });
    const loadCollectionFromParsed = (parsedCollection) => { const collection = { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() }; try { if (parsedCollection) { if (parsedCollection.blades) collection.blades = new Map(Object.entries(parsedCollection.blades).map(([id, variants]) => [id, new Set(variants)])); if (parsedCollection.ratchets) collection.ratchets = new Set(parsedCollection.ratchets); if (parsedCollection.bits) collection.bits = new Set(parsedCollection.bits); if (parsedCollection.mainblades) collection.mainblades = new Set(parsedCollection.mainblades); if (parsedCollection.assistblades) collection.assistblades = new Set(parsedCollection.assistblades); if (parsedCollection.lockchips) collection.lockchips = new Set(parsedCollection.lockchips); } } catch(e) { console.error("Erro ao processar coleção salva:", e); } return collection; };
    const saveAppData = () => { try { localStorage.setItem('beyblade_x_data', JSON.stringify({ collection: getSerializableCollection(), decks: app_data.decks, active_deck_index: app_data.active_deck_index })); } catch (e) { console.error("Erro ao salvar dados:", e); alert(translations[currentLanguage].alert_save_error); } };

    const loadAppData = () => { const saved_data_str = localStorage.getItem('beyblade_x_data'); if (saved_data_str) { try { const parsed = JSON.parse(saved_data_str); app_data.collection = loadCollectionFromParsed(parsed.collection || {}); app_data.decks = Array.isArray(parsed.decks) ? parsed.decks : []; app_data.active_deck_index = (typeof parsed.active_deck_index === 'number') ? parsed.active_deck_index : 0; app_data.decks.forEach(deck => { deck.bays.forEach((bay, index, arr) => { if (!bay || typeof bay !== 'object' || !bay.hasOwnProperty('part4') || !bay.hasOwnProperty('part5')) { arr[index] = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }; } }); while (deck.bays.length < 3) { deck.bays.push({ type: null, part1: null, part2: null, part3: null, part4: null, part5: null }); } deck.bays = deck.bays.slice(0, 3); }); } catch (e) { console.error("Erro ao carregar dados salvos:", e); app_data = { collection: { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() }, decks: [], active_deck_index: 0 }; } } if (app_data.decks.length === 0) app_data.decks.push(createNewDeck("Meu Primeiro Deck")); if (app_data.active_deck_index >= app_data.decks.length || app_data.active_deck_index < 0) app_data.active_deck_index = 0; const activeDeck = app_data.decks[app_data.active_deck_index]; if (activeDeck) { while (activeDeck.bays.length < 3) { activeDeck.bays.push({ type: null, part1: null, part2: null, part3: null, part4: null, part5: null }); } activeDeck.bays = activeDeck.bays.slice(0, 3); activeDeck.bays.forEach((bay, index, arr) => { if (!bay || typeof bay !== 'object' || !bay.hasOwnProperty('part4') || !bay.hasOwnProperty('part5')) { arr[index] = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }; } }); } const p1Name = localStorage.getItem('beyXToolP1Name'); const p2Name = localStorage.getItem('beyXToolP2Name'); const langPack = translations[currentLanguage] || translations['pt-br']; if (p1NameInput) p1NameInput.value = p1Name || langPack.player_1_default || "Jogador 1"; if (p2NameInput) p2NameInput.value = p2Name || langPack.player_2_default || "Jogador 2"; };

    // --- Funções de Renderização ---

    const renderStarterGuide = () => {
        if (!guide_products_container || typeof STARTER_GUIDE_PRODUCTS === 'undefined') { console.error("Container do Guia de Iniciante ou dados não encontrados."); return; }
        guide_products_container.innerHTML = '';
        STARTER_GUIDE_PRODUCTS.forEach(product => {
            const productCard = document.createElement('div'); productCard.className = 'product-card';
            const header = document.createElement('div'); header.className = 'product-card-header'; header.innerHTML = `<img src="${product.image || 'images/products/placeholder.png'}" alt="${product.productName}" class="product-image"><h4 class="product-name">${product.productName}</h4>`; productCard.appendChild(header);
            const partsContainer = document.createElement('div'); partsContainer.className = 'product-parts';
            product.parts.forEach(partId => {
                const part = ALL_PARTS.find(p => p.id === partId); if (!part) { console.warn(`Peça do Guia ${partId} não encontrada.`); return; }
                const partItem = document.createElement('div'); partItem.className = 'product-part-item'; partItem.dataset.partId = part.id;
                
                const infoIconSpan = document.createElement('span'); infoIconSpan.className = 'part-info-icon'; infoIconSpan.dataset.partId = part.id; infoIconSpan.textContent = '?';
                const imgElement = document.createElement('img'); imgElement.src = part.image || 'images/placeholder.png'; imgElement.alt = part.name;
                const nameElement = document.createElement('p'); nameElement.textContent = part.name;
                
                partItem.appendChild(infoIconSpan);
                partItem.appendChild(imgElement);
                partItem.appendChild(nameElement);

                if (part.tier) { const tierElement = document.createElement('div'); tierElement.className = `part-tier tier-${part.tier.toLowerCase()}`; tierElement.textContent = part.tier; partItem.appendChild(tierElement); }

                const collectionSet = app_data.collection[part.type + 's']; let isOwned = false;
                if (['blade', 'lockchip', 'mainblade', 'assistblade'].includes(part.type)) { isOwned = collectionSet?.has(part.id); } else { isOwned = collectionSet?.has(part.id); }
                if (isOwned) partItem.classList.add('owned');
                
                infoIconSpan.addEventListener('click', (event) => { event.stopPropagation(); openPartInfoModal(part.id); });

                if ((part.type === 'blade' || part.type === 'bit') && part.bey_type) {
                    const typeSymbolDiv = document.createElement('div'); typeSymbolDiv.className = 'part-type-symbol';
                    const typeName = part.bey_type.charAt(0).toUpperCase() + part.bey_type.slice(1);
                    const imgPath = `images/types/${part.bey_type.toLowerCase()}.webp`;
                    const iconLoaderImg = new Image(); // Variável renomeada
                    iconLoaderImg.src = imgPath;
                    iconLoaderImg.onload = () => { typeSymbolDiv.innerHTML = `<img src="${imgPath}" alt="${typeName}" title="${typeName} Type">`; partItem.appendChild(typeSymbolDiv); };
                    iconLoaderImg.onerror = () => { console.warn(`Imagem de tipo ${imgPath} não encontrada.`); };
                }
                partsContainer.appendChild(partItem);
            });
            productCard.appendChild(partsContainer); guide_products_container.appendChild(productCard);
        });
    };

    const renderParts = () => {
        const containers = { blades: blades_container, ratchets: ratchets_container, bits: bits_container, mainblades: mainblades_container, assistblades: assistblades_container, lockchips: lockchips_container };
        Object.values(containers).forEach(c => { if(c) c.innerHTML = ''; });
        const sortValue = collection_sort ? collection_sort.value : 'name_asc';
        const filterOn = collection_filter ? collection_filter.checked : false;
        let partsToRender = [...ALL_PARTS];
        if (filterOn) { partsToRender = partsToRender.filter(part => { const cs = app_data.collection[part.type + 's']; return part.type === 'blade' ? (cs?.has(part.id) && cs.get(part.id).size > 0) : cs?.has(part.id); }); }
        const tierOrder = { 'S': 1, 'A': 2, 'B': 3, 'C': 4, 'D': 5 };
        switch (sortValue) { case 'name_asc': partsToRender.sort((a, b) => a.name.localeCompare(b.name)); break; case 'name_desc': partsToRender.sort((a, b) => b.name.localeCompare(a.name)); break; case 'tier_desc': partsToRender.sort((a, b) => (tierOrder[a.tier] || 6) - (tierOrder[b.tier] || 6) || a.name.localeCompare(b.name)); break; case 'tier_asc': partsToRender.sort((a, b) => (tierOrder[b.tier] || 0) - (tierOrder[a.tier] || 0) || a.name.localeCompare(b.name)); break; case 'type': const typeOrderBey = { 'attack': 1, 'defense': 2, 'stamina': 3, 'balance': 4 }; partsToRender.sort((a, b) => (a.bey_type ? typeOrderBey[a.bey_type.toLowerCase()] : 5) - (b.bey_type ? typeOrderBey[b.bey_type.toLowerCase()] : 5) || a.name.localeCompare(b.name)); break; default: partsToRender.sort((a, b) => a.name.localeCompare(b.name)); }

        partsToRender.forEach(part => {
            const container = containers[part.type + 's']; if (!container) return;
            const collectionSet = app_data.collection[part.type + 's'];
            const part_card = document.createElement('div'); part_card.className = 'part-card'; part_card.dataset.partId = part.id;
            let isOwned = (part.type === 'blade') ? (collectionSet?.has(part.id) && collectionSet.get(part.id).size > 0) : collectionSet?.has(part.id);
            if (isOwned) part_card.classList.add('owned');

            const infoIcon = `<span class="part-info-icon" data-part-id="${part.id}">?</span>`;
            part_card.innerHTML = `${infoIcon}<img src="${part.image || 'images/placeholder.png'}" alt="${part.name}"><p>${part.name}</p>${part.tier ? `<div class="part-tier tier-${part.tier.toLowerCase()}">${part.tier}</div>` : ''}`;

            const infoButton = part_card.querySelector('.part-info-icon');
            if (infoButton) { infoButton.addEventListener('click', (event) => { event.stopPropagation(); openPartInfoModal(part.id); }); }

            if ((part.type === 'blade' || part.type === 'bit') && part.bey_type) { 
                const typeSymbolDiv = document.createElement('div'); typeSymbolDiv.className = 'part-type-symbol'; 
                const typeName = part.bey_type.charAt(0).toUpperCase() + part.bey_type.slice(1); 
                const imgPath = `images/types/${part.bey_type.toLowerCase()}.webp`; 
                const iconLoaderImg = new Image(); // Variável renomeada
                iconLoaderImg.src = imgPath; 
                iconLoaderImg.onload = () => { typeSymbolDiv.innerHTML = `<img src="${imgPath}" alt="${typeName}" title="${typeName} Type">`; part_card.appendChild(typeSymbolDiv); };
                iconLoaderImg.onerror = () => { console.warn(`Imagem de tipo ${imgPath} não encontrada.`); };
            }

            // Lógica de Dois Cliques
            let lastClickTime = 0; const doubleClickDelay = 400;
            part_card.addEventListener('click', (event) => { if (event.target.classList.contains('part-info-icon')) return; const now = Date.now(); if (now - lastClickTime < doubleClickDelay) { togglePartOwnership(part); lastClickTime = 0; } else { lastClickTime = now; } });
            part_card.addEventListener('contextmenu', (e) => e.preventDefault());

            container.appendChild(part_card);
        });
    };

    const renderDeckManager = () => { if (!deck_selector || !deck_name_input) return; if (app_data.active_deck_index < 0 || app_data.active_deck_index >= app_data.decks.length) app_data.active_deck_index = 0; if (app_data.decks.length === 0) return; const currentDeck = app_data.decks[app_data.active_deck_index]; if (!currentDeck) return; deck_selector.innerHTML = ''; app_data.decks.forEach((deck, index) => { const option = document.createElement('option'); option.value = index; option.textContent = deck.name || `Deck ${index + 1}`; deck_selector.appendChild(option); }); deck_selector.value = app_data.active_deck_index; deck_name_input.value = currentDeck.name; };

    const renderDeckBayChart = (bayIndex, bay) => {
        const langPack = translations[currentLanguage]; const canvas = document.getElementById(`chart-slot-${bayIndex}`); const infoContainer = document.getElementById(`bay-info-${bayIndex}`); const heightDisplay = document.getElementById(`bay-height-${bayIndex}`);
        if (!canvas || !infoContainer || !heightDisplay) { console.error(`Elementos do gráfico para o slot ${bayIndex} não encontrados.`); return; }
        if (deckChartInstances[bayIndex]) { deckChartInstances[bayIndex].destroy(); deckChartInstances[bayIndex] = null; }
        infoContainer.style.display = 'block';
        let p1 = bay.part1; let p4 = bay.part4; let p5 = bay.part5;
        const parseStat = (value) => { const num = parseFloat(value); return isNaN(num) ? 0 : num; };
        let bladeAtk = 0, bladeDef = 0, bladeStm = 0; if (bay.type === 'standard' && p1) { bladeAtk = parseStat(p1.attack); bladeDef = parseStat(p1.defense); bladeStm = parseStat(p1.stamina); }
        let ratchetAtk = parseStat(p4?.attack); let ratchetDef = parseStat(p4?.defense); let ratchetStm = parseStat(p4?.stamina); let ratchetHeight = parseStat(p4?.height);
        let bitAtk = parseStat(p5?.attack); let bitDef = parseStat(p5?.defense); let bitStm = parseStat(p5?.stamina); let dash = parseStat(p5?.dash); let burst = parseStat(p5?.burst_resistance);
        let totalAtk = bladeAtk + ratchetAtk + bitAtk; let totalDef = bladeDef + ratchetDef + bitDef; let totalStm = bladeStm + ratchetStm + bitStm;
        const heightLabel = langPack.chart_label_height || 'Height'; heightDisplay.textContent = `${heightLabel}: ${p4 ? ratchetHeight : '--'}`;
        const ctx = canvas.getContext('2d'); if (!ctx) { console.error(`Falha ao obter contexto 2D para o canvas do slot ${bayIndex}.`); return; }
        const chartData = [totalAtk, totalDef, totalStm, dash, burst];
        const data = { labels: [ `${langPack.chart_label_attack || 'Attack'}: ${totalAtk}`, `${langPack.chart_label_defense || 'Defense'}: ${totalDef}`, `${langPack.chart_label_stamina || 'Stamina'}: ${totalStm}`, `${langPack.chart_label_dash || 'Dash'}: ${dash}`, `${langPack.chart_label_burst || 'Burst'}: ${burst}` ], datasets: [{ label: bay.part1?.displayName || bay.part1?.name || '', data: chartData, fill: true, backgroundColor: 'rgba(0, 255, 195, 0.2)', borderColor: 'rgb(0, 255, 195)', pointBackgroundColor: 'rgb(0, 255, 195)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgb(0, 255, 195)' }] };
        const options = { responsive: true, maintainAspectRatio: true, scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.3)' }, grid: { color: 'rgba(255, 255, 255, 0.3)' }, pointLabels: { display: true, color: '#FFFFFF', font: { size: 10 }, formatter: function(value) { if (typeof value === 'string' && value.length > 18) { const parts = value.split(':'); if (parts.length > 1) { return [parts[0] + ':', parts.slice(1).join(':').trim()]; } } return value; } }, ticks: { display: false, stepSize: 50, maxTicksLimit: 5 }, min: 0, suggestedMax: 150 }}, plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(context) { let label = ''; const fullLabel = context.chart.data.labels[context.dataIndex]; const statNameMatch = fullLabel.match(/^[^:]+/); if (statNameMatch) { label = statNameMatch[0] + ': '; } if (context.parsed.r !== null) { label += context.parsed.r; } return label; } }}}};
        try { deckChartInstances[bayIndex] = new Chart(ctx, { type: 'radar', data: data, options: options }); }
        catch (error) { console.error(`Erro ao criar gráfico para bay ${bayIndex}:`, error); heightDisplay.textContent = `${heightLabel}: --`; }
    };

    const updateDeckUI = () => {
        const currentDeck = app_data.decks[app_data.active_deck_index]; if (!currentDeck) return;
        const langPack = translations[currentLanguage]; const selectText = langPack.deck_placeholder_selecione || 'Select';
        deck_slots.forEach((slot, bayIndex) => {
            let bay = currentDeck.bays[bayIndex]; if (!bay || typeof bay !== 'object') { currentDeck.bays[bayIndex] = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }; bay = currentDeck.bays[bayIndex]; } else { if (!bay.hasOwnProperty('part4')) bay.part4 = null; if (!bay.hasOwnProperty('part5')) bay.part5 = null; }
            const selectors = { p1ph: slot.querySelector('.part-placeholder[data-type="primeira"]'), p1n: slot.querySelector('.part-name-display[data-name-type="primeira"]'), p1icon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="primeira"]'), mbph: slot.querySelector('.part-placeholder[data-type="mainblade"]'), mbn: slot.querySelector('.part-name-display[data-name-type="mainblade"]'), mbicon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="mainblade"]'), abph: slot.querySelector('.part-placeholder[data-type="assistblade"]'), abn: slot.querySelector('.part-name-display[data-name-type="assistblade"]'), abicon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="assistblade"]'), rph: slot.querySelector('.part-placeholder[data-type="ratchet"]'), rn: slot.querySelector('.part-name-display[data-name-type="ratchet"]'), ricon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="ratchet"]'), bph: slot.querySelector('.part-placeholder[data-type="bit"]'), bn: slot.querySelector('.part-name-display[data-name-type="bit"]'), bicon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="bit"]') };
            if (Object.values(selectors).some(el => !el)) { console.error(`Elementos faltando no slot ${bayIndex}. Verifique o HTML.`); return; }
            slot.dataset.bayType = bay.type || 'empty';
            const reset = (ph, n, icon, placeholderKey) => { ph.innerHTML = `<span data-translate="${placeholderKey}">${langPack[placeholderKey]||placeholderKey.replace('deck_placeholder_', '').replace('_section_title', '')}</span>`; n.textContent = selectText; icon.innerHTML = ''; };
            const set = (ph, n, icon, part, partSlotName) => { if (!part) return; const name = part.displayName || part.name; let imgHTML = part.image || 'images/placeholder.png'; if (part.type==='blade' && part.variant && part.baseId && ALL_VARIANTS[part.baseId]) { const vData = ALL_VARIANTS[part.baseId].find(v => v.name === part.variant); if (vData?.image) imgHTML=vData.image; else { const sVar = ALL_VARIANTS[part.baseId].find(v => v.name === 'Stock'); if (sVar?.image) imgHTML=sVar.image; } } ph.innerHTML = `<img src="${imgHTML}" alt="${name}">`; n.textContent = name; icon.innerHTML = ''; if ((partSlotName === 'primeira' && part.type === 'blade') || partSlotName === 'bit') { if (part.bey_type) { const typeName = part.bey_type.charAt(0).toUpperCase() + part.bey_type.slice(1); const imgPath = `images/types/${part.bey_type.toLowerCase()}.webp`; icon.innerHTML = `<img src="${imgPath}" alt="${typeName}" title="${typeName} Type">`; }}};
            reset(selectors.p1ph, selectors.p1n, selectors.p1icon, 'deck_placeholder_primeira'); reset(selectors.mbph, selectors.mbn, selectors.mbicon, 'deck_placeholder_mainblade'); reset(selectors.abph, selectors.abn, selectors.abicon, 'deck_placeholder_assistblade'); reset(selectors.rph, selectors.rn, selectors.ricon, 'deck_placeholder_ratchet'); reset(selectors.bph, selectors.bn, selectors.bicon, 'deck_placeholder_bit');
            if (bay.type === 'standard') { set(selectors.p1ph, selectors.p1n, selectors.p1icon, bay.part1, 'primeira'); set(selectors.rph, selectors.rn, selectors.ricon, bay.part4, 'ratchet'); set(selectors.bph, selectors.bn, selectors.bicon, bay.part5, 'bit'); }
            else if (bay.type === 'chip') { set(selectors.p1ph, selectors.p1n, selectors.p1icon, bay.part1, 'primeira'); set(selectors.mbph, selectors.mbn, selectors.mbicon, bay.part2, 'mainblade'); set(selectors.abph, selectors.abn, selectors.abicon, bay.part3, 'assistblade'); set(selectors.rph, selectors.rn, selectors.ricon, bay.part4, 'ratchet'); set(selectors.bph, selectors.bn, selectors.bicon, bay.part5, 'bit'); }
            renderDeckBayChart(bayIndex, bay);
        });
        renderDeckManager();
    };


    // --- Funções de Manipulação da Coleção/Deck ---

    const togglePartOwnership = (part) => {
        const partCard = document.querySelector(`#collection-tab .part-card[data-part-id="${part.id}"]`);
        if (part.type === 'blade') {
            const variantList = part.variantsId ? ALL_VARIANTS[part.variantsId] : null;
            if (part.variantsId && variantList && variantList.length > 1) { openVariantSelector(part); }
            else {
                const collectionSet = app_data.collection.blades; if (!collectionSet) return;
                if (collectionSet.has(part.id)) { collectionSet.delete(part.id); if (partCard) partCard.classList.remove('owned'); app_data.decks.forEach(deck => deck.bays.forEach(bay => { if (bay.part1 && (bay.part1.baseId || bay.part1.id) === part.id) { clearBay(bay); updateDeckUI(); } })); }
                else { const variantToAdd = (part.variantsId && variantList?.length === 1) ? variantList[0].name : 'owned'; collectionSet.set(part.id, new Set([variantToAdd])); if (partCard) partCard.classList.add('owned'); }
                saveAppData(); if (collection_filter?.checked) { renderParts(); } renderStarterGuide();
            }
        } else {
            const collectionSetKey = part.type + 's'; const collection_set = app_data.collection[collectionSetKey]; if (!collection_set) return;
            if (collection_set.has(part.id)) {
                collection_set.delete(part.id); if (partCard) partCard.classList.remove('owned');
                 app_data.decks.forEach(deck => deck.bays.forEach(bay => { let changed = false; if (part.type === 'ratchet' && bay.part4?.id === part.id) { bay.part4 = null; changed = true; } else if (part.type === 'bit' && bay.part5?.id === part.id) { bay.part5 = null; changed = true; } else if (part.type === 'lockchip' && bay.part1?.id === part.id) { clearBay(bay); changed = true; } else if (part.type === 'mainblade' && bay.part2?.id === part.id) { bay.part2 = null; changed = true; } else if (part.type === 'assistblade' && bay.part3?.id === part.id) { bay.part3 = null; changed = true; } if(changed) updateDeckUI(); }));
            } else { collection_set.add(part.id); if (partCard) partCard.classList.add('owned'); }
            saveAppData(); if (collection_filter?.checked) { renderParts(); } renderStarterGuide();
        }
    };

    const openVariantSelector = (part) => {
        variant_modal_part = part; const titlePrefix = translations[currentLanguage].variant_modal_title_prefix || "Select Variants for"; variant_modal_title.textContent = `${titlePrefix} ${part.name}`; variant_modal_checkboxes.innerHTML = '<div id="variant-modal-grid"></div>'; const grid = document.getElementById('variant-modal-grid'); if (!grid) return; const owned = app_data.collection.blades.get(part.id) || new Set(); const variantList = ALL_VARIANTS[part.variantsId]; if (!variantList) { closeVariantModal(); return; } const mainCard = document.querySelector(`#collection-tab .part-card[data-part-id="${part.id}"]`);
        variantList.forEach(vData => { if (!vData?.name) return; const card = document.createElement('div'); card.className = 'variant-card'; card.dataset.variantName = vData.name; card.innerHTML = `<img src="${vData.image || ''}" alt="${vData.name}"><p>${vData.name}</p>`; if (owned.has(vData.name)) card.classList.add('selected');
            card.addEventListener('click', () => { const currentOwned = app_data.collection.blades.get(part.id) || new Set(); let wasModified = false; if (currentOwned.has(vData.name)) { currentOwned.delete(vData.name); card.classList.remove('selected'); wasModified = true; app_data.decks.forEach(deck => deck.bays.forEach(bay => { if (bay.part1?.baseId === part.id && bay.part1.variant === vData.name) { clearBay(bay); updateDeckUI();} })); } else { currentOwned.add(vData.name); card.classList.add('selected'); wasModified = true; }
                if (wasModified) { if (currentOwned.size > 0) { app_data.collection.blades.set(part.id, currentOwned); if (mainCard) mainCard.classList.add('owned'); } else { app_data.collection.blades.delete(part.id); if (mainCard) mainCard.classList.remove('owned'); app_data.decks.forEach(d => d.bays.forEach(b => { if (b.part1?.baseId === part.id) {clearBay(b); updateDeckUI();} })); }
                    saveAppData(); if (collection_filter?.checked) { renderParts(); } renderStarterGuide(); }
                closeVariantModal();
            });
            grid.appendChild(card);
        });
        variant_modal.style.display = 'block';
    };

    const closeVariantModal = () => { if (variant_modal) variant_modal.style.display = 'none'; variant_modal_part = null; };
    const clearBay = (bay) => { if (bay) { bay.type = null; bay.part1 = null; bay.part2 = null; bay.part3 = null; bay.part4 = null; bay.part5 = null; } };
    const closePartModal = () => { if (part_modal) part_modal.style.display = 'none'; };

    const selectPartForDeck = (part) => {
        const { slotId, type } = active_deck_slot; const bay = app_data.decks[app_data.active_deck_index].bays[slotId]; if (!bay) return; const targetPartMap = { 'primeira': 'part1', 'mainblade': 'part2', 'assistblade': 'part3', 'ratchet': 'part4', 'bit': 'part5' }; const targetPartKey = targetPartMap[type]; if (!targetPartKey) { console.error("Tipo de placeholder inválido:", type); closePartModal(); return; } const basePartId = part.baseId || part.id; const basePartData = ALL_PARTS.find(p => p.id === basePartId); if (!basePartData) { console.error(`Peça base ${basePartId} não encontrada em ALL_PARTS.`); closePartModal(); return; } const partForDeck = { ...basePartData, ...part }; const langPack = translations[currentLanguage];
        if (targetPartKey === 'part1') { const newType = (partForDeck.type === 'blade') ? 'standard' : (partForDeck.type === 'lockchip') ? 'chip' : null; if (!newType) return; if (bay.type !== newType) { clearBay(bay); bay.type = newType; } bay.part1 = partForDeck; }
        else if (targetPartKey === 'part2' || targetPartKey === 'part3') { if (bay.type === 'chip') { if ((targetPartKey === 'part2' && partForDeck.type === 'mainblade') || (targetPartKey === 'part3' && partForDeck.type === 'assistblade')) { bay[targetPartKey] = partForDeck; } else { alert(langPack.alert_incompatible_part.replace('{partType}', partForDeck.type).replace('{bayType}', 'Chip Slot')); closePartModal(); return; } } else { alert(langPack.alert_incompatible_part.replace('{partType}', partForDeck.type).replace('{bayType}', bay.type || 'Empty')); closePartModal(); return; } }
        else if (targetPartKey === 'part4' || targetPartKey === 'part5') { if (bay.type === 'standard' || bay.type === 'chip') { if ((targetPartKey === 'part4' && partForDeck.type === 'ratchet') || (targetPartKey === 'part5' && partForDeck.type === 'bit')) { bay[targetPartKey] = partForDeck; } else { alert(langPack.alert_incompatible_part.replace('{partType}', partForDeck.type).replace('{bayType}', 'Ratchet/Bit Slot')); closePartModal(); return; } } else { alert(langPack.alert_incompatible_part.replace('{partType}', partForDeck.type).replace('{bayType}', 'Empty Slot')); closePartModal(); return; } }
        updateDeckUI(); saveAppData(); closePartModal();
    };

    const openPartSelector = (slotId, type) => {
        active_deck_slot = { slotId, type }; const langPack = translations[currentLanguage]; const titlePrefix = langPack.part_selector_modal_title_prefix || "Select:"; modal_title.textContent = `${titlePrefix} ${type.charAt(0).toUpperCase() + type.slice(1)}`; const usedPartIds = new Set(); const currentDeck = app_data.decks[app_data.active_deck_index]; currentDeck.bays.forEach((bay, index) => { if (index.toString() === slotId) return; if (bay.part1) usedPartIds.add(bay.part1.baseId || bay.part1.id); if (bay.part2) usedPartIds.add(bay.part2.id); if (bay.part3) usedPartIds.add(bay.part3.id); if (bay.part4) usedPartIds.add(bay.part4.id); if (bay.part5) usedPartIds.add(bay.part5.id); }); let availableParts = [];
        if (type === 'primeira') { availableParts = [...getOwnedParts('blade'), ...getOwnedParts('lockchip')]; } else if (type === 'ratchet' || type === 'bit' || type === 'mainblade' || type === 'assistblade') { availableParts = getOwnedParts(type); } else { console.error("Tipo de peça desconhecido:", type); return; } const partsToShow = availableParts.filter(part => !usedPartIds.has(part.baseId || part.id)); const individualHeader = langPack.part_individual_header || 'Individual Parts (Owned)'; modal_parts_list_container.innerHTML = `<h4>${individualHeader}</h4><div class="parts-grid"></div>`; const partsGrid = modal_parts_list_container.querySelector('.parts-grid'); if (!partsGrid) return;
        if (partsToShow.length === 0) { const nonePrefix = langPack.part_individual_none_prefix || 'No'; const noneSuffix = langPack.part_individual_none_suffix || 'parts available...'; partsGrid.innerHTML = `<p>${nonePrefix} ${type} ${noneSuffix}</p>`; } else { partsToShow.forEach(part => { if (!part || !part.name) return; const part_card = document.createElement('div'); part_card.className = 'part-card owned'; part_card.innerHTML = `<img src="${part.image || 'images/placeholder.png'}" alt="${part.displayName || part.name}"><p>${part.displayName || part.name}</p>${part.tier ? `<div class="part-tier tier-${part.tier.toLowerCase()}">${part.tier}</div>` : ''}`; part_card.addEventListener('click', () => selectPartForDeck(part)); partsGrid.appendChild(part_card); }); }
        if(partsToShow.length > 0) { part_modal.style.display = 'block'; } else { const nonePrefix = langPack.part_individual_none_prefix || 'No'; const noneSuffix = langPack.part_individual_none_suffix || 'parts available...'; alert(`${nonePrefix} ${type} ${noneSuffix}`); }
    };

    const getOwnedParts = (partType) => { const ownedParts = []; const collectionSetKey = partType + 's'; const collectionSet = app_data.collection[collectionSetKey]; if (!collectionSet) return ownedParts; if (partType === 'blade') { collectionSet.forEach((variantsSet, partId) => { const basePart = ALL_PARTS.find(p => p.id === partId); if (!basePart) { console.warn(`Peça Blade ${partId} na coleção mas não em ALL_PARTS.`); return; } if (basePart.variantsId && ALL_VARIANTS[basePart.variantsId]) { variantsSet.forEach(variantName => { const variantData = ALL_VARIANTS[basePart.variantsId].find(v => v.name === variantName); const displayName = (variantName === "Stock" || variantName === "owned") ? basePart.name : `${basePart.name} (${variantName})`; ownedParts.push({ ...basePart, id: `${basePart.id}-${variantName.replace(/\s+/g, '-')}`, baseId: basePart.id, baseName: basePart.name, name: `${basePart.name} (${variantName})`, displayName: displayName, variant: variantName, image: variantData?.image || basePart.image }); }); } else if (variantsSet.has('owned')) { ownedParts.push({ ...basePart, baseId: basePart.id, baseName: basePart.name, displayName: basePart.name, variant: 'owned' }); } }); } else { collectionSet.forEach(partId => { const part = ALL_PARTS.find(p => p.id === partId); if (part) { ownedParts.push({...part, displayName: part.name}); } else { console.warn(`Peça ${partType} ${partId} na coleção mas não em ALL_PARTS.`); } }); } ownedParts.sort((a, b) => (a.displayName || a.name).localeCompare(b.displayName || b.name)); return ownedParts; };

    // --- Funções do Placar ---
    const updateScoreDisplay = () => { if (scoreP1Display) scoreP1Display.textContent = scoreP1; if (scoreP2Display) scoreP2Display.textContent = scoreP2; };
    const handleScoreButton = (e) => { const player = e.target.dataset.player; const points = parseInt(e.target.dataset.points, 10); if (player === '1') { scoreP1 += points; } else if (player === '2') { scoreP2 += points; } updateScoreDisplay(); };
    const resetScore = () => { const langPack = translations[currentLanguage]; const confirmMsg = langPack.confirm_reset_score || "Tem certeza que deseja reiniciar o placar?"; if (confirm(confirmMsg)) { scoreP1 = 0; scoreP2 = 0; updateScoreDisplay(); } };
    const savePlayerName = (playerNumber, inputElement) => { if (!inputElement) return; const newName = inputElement.value.trim(); const key = `beyXToolP${playerNumber}Name`; const defaultKey = `player_${playerNumber}_default`; const langPack = translations[currentLanguage]; const defaultValue = langPack[defaultKey] || (playerNumber === 1 ? "Jogador 1" : "Jogador 2"); if (newName) { localStorage.setItem(key, newName); } else { inputElement.value = defaultValue; localStorage.setItem(key, defaultValue); } };

    // --- Funções de Gerenciamento de Deck ---
    const addDeck = () => { const newDeckName = `Deck ${app_data.decks.length + 1}`; app_data.decks.push(createNewDeck(newDeckName)); app_data.active_deck_index = app_data.decks.length - 1; updateDeckUI(); saveAppData(); };
    const deleteDeck = () => { if (app_data.decks.length <= 1) { alert(translations[currentLanguage].alert_cannot_delete_last_deck); return; } const deck = app_data.decks[app_data.active_deck_index]; if (!deck) return; const confirmTxt = `${translations[currentLanguage].confirm_delete_deck_prefix}${deck.name}${translations[currentLanguage].confirm_delete_deck_suffix}`; if (confirm(confirmTxt)) { app_data.decks.splice(app_data.active_deck_index, 1); app_data.active_deck_index = Math.max(0, app_data.active_deck_index - 1); updateDeckUI(); saveAppData(); } };
    const renameDeck = () => { const deck = app_data.decks[app_data.active_deck_index]; if (!deck || !deck_name_input) return; const newName = deck_name_input.value.trim(); if (newName && newName !== deck.name) { deck.name = newName; renderDeckManager(); saveAppData(); } else if (!newName) { deck_name_input.value = deck.name; alert(translations[currentLanguage].alert_deck_name_empty); } deck_name_input.blur(); };
    const switchDeck = () => { if (!deck_selector) return; const newIndex = parseInt(deck_selector.value, 10); if (!isNaN(newIndex) && newIndex >= 0 && newIndex < app_data.decks.length) { app_data.active_deck_index = newIndex; updateDeckUI(); saveAppData(); } else { deck_selector.value = app_data.active_deck_index; } };
    const clearDeck = () => { if (app_data.decks[app_data.active_deck_index]) { app_data.decks[app_data.active_deck_index].bays.forEach(clearBay); updateDeckUI(); saveAppData(); } };

    // --- Funções de Import/Export ---
    const exportDeckList = async () => { const deck = app_data.decks[app_data.active_deck_index]; if (!deck) return; const completeBays = deck.bays.filter(b => (b?.type === 'standard' && b.part1 && b.part4 && b.part5) || (b?.type === 'chip' && b.part1 && b.part2 && b.part3 && b.part4 && b.part5)); if (completeBays.length === 0) { alert(translations[currentLanguage].alert_export_deck_empty); return; } const personName = await showInputModal('prompt_export_person_name', 'prompt_export_person_placeholder'); if (personName === null) return; const eventName = await showInputModal('prompt_export_tournament_name', 'prompt_export_tournament_placeholder'); if (eventName === null) return; const today = new Date(); const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getFullYear()).slice(-2)}`; let deckString = `=== DECK LIST ===\n---- ${formattedDate} ----\n==== NOME ====\n${personName}\n\n==== EVENTO ====\n${eventName}\n\n===== DECK =====\n`; completeBays.forEach((bay, index) => { if (index > 0) deckString += "\n"; if (bay.type === 'standard') { deckString += `B: ${bay.part1.displayName || bay.part1.name}\nR: ${bay.part4.displayName || bay.part4.name}\nBT: ${bay.part5.displayName || bay.part5.name}\n`; } else if (bay.type === 'chip') { deckString += `C: ${bay.part1.displayName || bay.part1.name}\nMB: ${bay.part2.displayName || bay.part2.name}\nAB: ${bay.part3.displayName || bay.part3.name}\n${bay.part4 ? `R: ${bay.part4.displayName || bay.part4.name}\n` : ''}${bay.part5 ? `BT: ${bay.part5.displayName || bay.part5.name}\n` : ''}`; } }); deckString += `\n===============\nCriado por\nhttps://beyxtool.pages.dev/\n`; navigator.clipboard.writeText(deckString).then(() => alert(translations[currentLanguage].alert_export_copied)).catch(err => { console.error("Falha ao copiar:", err); alert(`${translations[currentLanguage].alert_export_copy_failed} ${deckString}`); }); };
    const exportData = () => { saveAppData(); const data_str = localStorage.getItem('beyblade_x_data'); if (!data_str) { alert("Não há dados para exportar."); return; } const data_blob = new Blob([data_str], {type: 'application/json;charset=utf-8'}); const url = URL.createObjectURL(data_blob); const a = document.createElement('a'); a.href = url; const timestamp = new Date().toISOString().slice(0, 10); a.download = `beyxtool_dados_${timestamp}.bx`; document.body.appendChild(a); a.click(); setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100); };
    const importData = (event) => { const file = event.target.files[0]; if (!file) return; if (!file.name.endsWith('.bx') && file.type !== 'application/json') { alert("Por favor, selecione um arquivo .bx válido."); if (import_file_input) import_file_input.value = ''; return; } const reader = new FileReader(); reader.onload = (e) => { try { const imported_data_str = e.target.result; if (!imported_data_str) throw new Error(translations[currentLanguage].alert_file_read_error || "Erro ao ler o arquivo."); const parsed = JSON.parse(imported_data_str); if (typeof parsed === 'object' && parsed !== null && 'collection' in parsed && 'decks' in parsed && 'active_deck_index' in parsed) { const confirmMsg = translations[currentLanguage].confirm_import_overwrite || "Importar substituirá dados atuais. Continuar?"; if (confirm(confirmMsg)) { localStorage.setItem('beyblade_x_data', imported_data_str); loadAppData(); renderParts(); renderStarterGuide(); updateDeckUI(); alert(translations[currentLanguage].alert_import_success || "Dados importados com sucesso!"); } } else { throw new Error(translations[currentLanguage].alert_invalid_file_format || "Formato inválido ou corrompido."); } } catch (error) { console.error("Erro ao importar dados:", error); alert(`${translations[currentLanguage].alert_import_error || "Erro ao importar:"} ${error.message}`); } finally { if (import_file_input) import_file_input.value = ''; } }; reader.onerror = (error) => { console.error("Erro ao ler arquivo:", error); alert(translations[currentLanguage].alert_file_read_error || "Erro ao ler o arquivo selecionado."); if (import_file_input) import_file_input.value = ''; }; reader.readAsText(file); };

    // --- Funções para o Modal de Info ---
    const drawPartStatsChart = (canvasId, part) => {
        const langPack = translations[currentLanguage]; const canvas = document.getElementById(canvasId); if (!canvas || !part) return;
        if (canvasId === 'info-modal-chart' && infoModalChartInstance) { infoModalChartInstance.destroy(); infoModalChartInstance = null; }
        const ctx = canvas.getContext('2d'); if (!ctx) return;
        const parseStat = (value) => { const num = parseFloat(value); return isNaN(num) ? 0 : num; };
        let chartData = []; let chartLabels = [];
        if (part.type === 'blade') { chartData = [parseStat(part.attack), parseStat(part.defense), parseStat(part.stamina)]; chartLabels = [ `${langPack.chart_label_attack || 'Attack'}: ${chartData[0]}`, `${langPack.chart_label_defense || 'Defense'}: ${chartData[1]}`, `${langPack.chart_label_stamina || 'Stamina'}: ${chartData[2]}` ]; }
        else if (part.type === 'ratchet') { chartData = [parseStat(part.attack), parseStat(part.defense), parseStat(part.stamina), parseStat(part.height)]; chartLabels = [ `${langPack.chart_label_attack || 'Attack'}: ${chartData[0]}`, `${langPack.chart_label_defense || 'Defense'}: ${chartData[1]}`, `${langPack.chart_label_stamina || 'Stamina'}: ${chartData[2]}`, `${langPack.chart_label_height || 'Height'}: ${chartData[3]}` ]; }
        else if (part.type === 'bit') { chartData = [parseStat(part.attack), parseStat(part.defense), parseStat(part.stamina), parseStat(part.dash), parseStat(part.burst_resistance)]; chartLabels = [ `${langPack.chart_label_attack || 'Attack'}: ${chartData[0]}`, `${langPack.chart_label_defense || 'Defense'}: ${chartData[1]}`, `${langPack.chart_label_stamina || 'Stamina'}: ${chartData[2]}`, `${langPack.chart_label_dash || 'Dash'}: ${chartData[3]}`, `${langPack.chart_label_burst || 'Burst'}: ${chartData[4]}` ]; }
        else { canvas.style.display = 'none'; return; } // Peças sem stats definidos para gráfico
        canvas.style.display = 'block';
        const data = { labels: chartLabels, datasets: [{ label: part.name, data: chartData, fill: true, backgroundColor: 'rgba(0, 255, 195, 0.2)', borderColor: 'rgb(0, 255, 195)', pointBackgroundColor: 'rgb(0, 255, 195)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgb(0, 255, 195)' }] };
        const options = { responsive: true, maintainAspectRatio: true, scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.3)' }, grid: { color: 'rgba(255, 255, 255, 0.3)' }, pointLabels: { display: true, color: '#FFFFFF', font: { size: 9 } }, ticks: { display: false, stepSize: 25, maxTicksLimit: 5 }, min: 0, suggestedMax: 100 }}, plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(context) { let label = ''; const fullLabel = context.chart.data.labels[context.dataIndex]; const statNameMatch = fullLabel.match(/^[^:]+/); if (statNameMatch) { label = statNameMatch[0] + ': '; } if (context.parsed.r !== null) { label += context.parsed.r; } return label; } }}}};
        try { const chartInstance = new Chart(ctx, { type: 'radar', data: data, options: options }); if (canvasId === 'info-modal-chart') infoModalChartInstance = chartInstance; }
        catch (error) { console.error(`Erro ao criar gráfico de stats para ${part.id}:`, error); canvas.style.display = 'none';}
    };

    const openPartInfoModal = (partId) => {
        const part = ALL_PARTS.find(p => p.id === partId); if (!part || !partInfoModal) return;
        infoModalPartName.textContent = part.name;
        const sources = PART_SOURCES[part.id]; if (sources && sources.length > 0) { infoModalSourceList.innerHTML = sources.map(s => `<li>${s}</li>`).join(''); } else { infoModalSourceList.innerHTML = `<li>Informação não disponível.</li>`; }
        drawPartStatsChart('info-modal-chart', part);
        partInfoModal.style.display = 'block';
    };

    const closePartInfoModal = () => { if (partInfoModal) partInfoModal.style.display = 'none'; if (infoModalChartInstance) { infoModalChartInstance.destroy(); infoModalChartInstance = null; } };

    // --- INICIALIZAÇÃO E EVENT LISTENERS ---
    const savedLanguage = localStorage.getItem('beyXToolLanguage'); if (savedLanguage && translations[savedLanguage]) currentLanguage = savedLanguage;
    setupTabs(); loadAppData(); renderParts(); renderStarterGuide(); setLanguage(currentLanguage); updateScoreDisplay();

    // Listeners
    langPtBrButton?.addEventListener('click', () => setLanguage('pt-br')); langEnButton?.addEventListener('click', () => setLanguage('en'));
    collection_filter?.addEventListener('change', () => { renderParts(); renderStarterGuide(); });
    collection_sort?.addEventListener('change', renderParts);
    export_button?.addEventListener('click', exportData); import_button?.addEventListener('click', () => import_file_input?.click()); import_file_input?.addEventListener('change', importData);
    clear_deck_button?.addEventListener('click', clearDeck); export_deck_button?.addEventListener('click', exportDeckList);
    deck_slots.forEach(slot => { slot.querySelectorAll('.part-placeholder').forEach(ph => { ph.addEventListener('click', () => { const sId = slot.dataset.slotId; const t = ph.dataset.type; if(sId !== undefined && t) openPartSelector(sId, t); }); }); });
    add_deck_button?.addEventListener('click', addDeck); delete_deck_button?.addEventListener('click', deleteDeck); deck_selector?.addEventListener('change', switchDeck);
    deck_name_input?.addEventListener('blur', renameDeck); deck_name_input?.addEventListener('keypress', (e) => { if (e.key === 'Enter') { renameDeck(); } });
    part_modal_close?.addEventListener('click', closePartModal); variant_modal_close?.addEventListener('click', closeVariantModal);
    inputModalOk?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(inputModalField.value); }); inputModalCancel?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(null); }); inputModalClose?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(null); }); inputModalField?.addEventListener('keypress', (e) => { if (e.key === 'Enter' && onInputConfirm) { onInputConfirm(inputModalField.value); } });
    scoreButtons.forEach(button => button.addEventListener('click', handleScoreButton)); resetScoreButton?.addEventListener('click', resetScore);
    p1NameInput?.addEventListener('blur', () => savePlayerName(1, p1NameInput));
    p2NameInput?.addEventListener('blur', () => savePlayerName(2, p2NameInput)); // [CORRIGIDO] Removido o 'ci>'
    p1NameInput?.addEventListener('keypress', (e) => { if (e.key === 'Enter') { savePlayerName(1, p1NameInput); p1NameInput.blur(); } });
    p2NameInput?.addEventListener('keypress', (e) => { if (e.key === 'Enter') { savePlayerName(2, p2NameInput); p2NameInput.blur(); } });
    partInfoModalClose?.addEventListener('click', closePartInfoModal);

    window.addEventListener('click', (event) => { if (event.target === part_modal) closePartModal(); if (event.target === variant_modal) closeVariantModal(); if (event.target === inputModal) { if (onInputConfirm) onInputConfirm(null); } if (event.target === partInfoModal) closePartInfoModal(); });

}); // Fim do DOMContentLoaded
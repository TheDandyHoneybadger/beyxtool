document.addEventListener('DOMContentLoaded', () => {

    // Verifica se as variáveis do database.js foram carregadas
    if (typeof ALL_VARIANTS === 'undefined' || typeof ALL_PARTS === 'undefined' || typeof translations === 'undefined' || typeof STARTER_GUIDE_PRODUCTS === 'undefined') {
        alert("Erro: Arquivo database.js não carregado ou corrompido. Verifique o console para mais detalhes.");
        console.error("Variáveis de database.js (ALL_VARIANTS, ALL_PARTS, translations, STARTER_GUIDE_PRODUCTS) não encontradas.");
        return;
    }

    let currentLanguage = 'en'; // Padrão inicial
    let deckChartInstances = [null, null, null];
    let infoModalChartInstance = null;

    let app_data = {
        collection: { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() },
        decks: [],
        active_deck_index: 0,
        trades: {
            want: { blades: new Set(), ratchets: new Set(), bits: new Set(), lockchips: new Set(), mainblades: new Set(), assistblades: new Set() },
            have: { blades: new Set(), ratchets: new Set(), bits: new Set(), lockchips: new Set(), mainblades: new Set(), assistblades: new Set() },
            combos: [] // Array para combos de venda
        }
    };

    let active_part_selection = { context: null, slotId: null, type: null }; // context: 'deck' ou 'combo'

    let trade_combo_builder = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null };

    let variant_modal_part = null;
    let onInputConfirm = null;

    // Variáveis do Placar
    let scoreP1 = 0;
    let scoreP2 = 0;

    // Seletores de Elementos DOM Gerais
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const langPtBrButton = document.getElementById('lang-pt-br');
    const langEnButton = document.getElementById('lang-en');

    // Seletores Coleção
    const blades_container = document.getElementById('blades-container');
    const ratchets_container = document.getElementById('ratchets-container');
    const bits_container = document.getElementById('bits-container');
    const mainblades_container = document.getElementById('mainblades-container');
    const assistblades_container = document.getElementById('assistblades-container');
    const lockchips_container = document.getElementById('lockchips-container');
    const collection_filter = document.getElementById('collection-filter');
    const collection_sort = document.getElementById('collection-sort');
    const collection_tab = document.getElementById('collection-tab');

    // Seletores Deck Builder
    const deck_slots = document.querySelectorAll('.deck-slot');
    const clear_deck_button = document.getElementById('clear-deck-button');
    const deck_selector = document.getElementById('deck-selector');
    const deck_name_input = document.getElementById('deck-name-input');
    const add_deck_button = document.getElementById('add-deck-button');
    const delete_deck_button = document.getElementById('delete-deck-button');
    const export_deck_button = document.getElementById('export-deck-button');

    // Seletores Placar
    const scoreP1Display = document.getElementById('score-p1');
    const scoreP2Display = document.getElementById('score-p2');
    const resetScoreButton = document.getElementById('reset-score-button');
    const toggleLayoutButton = document.getElementById('toggle-layout-button');
    const scoreContainer = document.getElementById('score-container');
    const scoreButtonSides = document.querySelectorAll('.btn-side');

    // Seletores Guia
    const guide_products_container = document.getElementById('guide-products-container');

    // Seletores Trades
    const trades_blades_container = document.getElementById('trades-blades-container');
    const trades_ratchets_container = document.getElementById('trades-ratchets-container');
    const trades_bits_container = document.getElementById('trades-bits-container');
    const trades_lockchips_container = document.getElementById('trades-lockchips-container');
    const trades_mainblades_container = document.getElementById('trades-mainblades-container');
    const trades_assistblades_container = document.getElementById('trades-assistblades-container');
    const copy_trades_button = document.getElementById('copy-trades-button');
    const export_trades_button = document.getElementById('export-trades-button');
    const tradesWantDisplay = document.getElementById('trades-want-display');
    const tradesHaveDisplay = document.getElementById('trades-have-display');
    const tradesCombosDisplay = document.getElementById('trades-combos-display');
    const tradesCombosList = document.getElementById('trades-combos-list');
    const comboBuilderSpoiler = document.getElementById('combo-builder-spoiler');
    const comboBuilderSlot = document.getElementById('combo-builder-slot');
    const comboBuilderPlaceholders = comboBuilderSlot ? comboBuilderSlot.querySelectorAll('.part-placeholder') : [];
    const clearComboBuilderButton = document.getElementById('clear-combo-builder-button');
    const addComboToListButton = document.getElementById('add-combo-to-list-button');


    // Seletores Configurações
    const export_button = document.getElementById('export-button');
    const import_button = document.getElementById('import-button');
    const import_file_input = document.getElementById('import-file');

    // Seletores Modais
    const part_modal = document.getElementById('part-selector-modal');
    const modal_title = document.getElementById('modal-title');
    const modal_parts_list_container = document.getElementById('modal-parts-list-container');
    const part_modal_close = document.getElementById('part-selector-close');
    const variant_modal = document.getElementById('variant-selector-modal');
    const variant_modal_title = document.getElementById('variant-modal-title');
    const variant_modal_checkboxes = document.getElementById('variant-modal-checkboxes');
    const variant_modal_close = document.getElementById('variant-selector-close');
    const variantModalDoneButton = document.getElementById('variant-modal-done');
    const inputModal = document.getElementById('input-modal');
    const inputModalTitle = document.getElementById('input-modal-title');
    const inputModalField = document.getElementById('input-modal-field');
    const inputModalOk = document.getElementById('input-modal-ok');
    const inputModalCancel = document.getElementById('input-modal-cancel');
    const inputModalClose = document.getElementById('input-modal-close');
    const partInfoModal = document.getElementById('part-info-modal');
    const partInfoModalClose = document.getElementById('part-info-close');
    const infoModalPartName = document.getElementById('info-modal-part-name');
    const infoModalSourceList = document.getElementById('info-modal-source-list');
    const infoModalChartCanvas = document.getElementById('info-modal-chart');

    // --- Funções Auxiliares ---

    const showInputModal = (titleKey, placeholderKey, defaultValue = "") => {
        return new Promise((resolve) => {
            const langPack = translations[currentLanguage] || translations['en'];
            inputModalTitle.textContent = langPack[titleKey] || titleKey;
            inputModalField.placeholder = langPack[placeholderKey] || placeholderKey;
            inputModalField.value = defaultValue;
            inputModal.style.display = 'block';
            inputModalField.focus();
            onInputConfirm = (value) => {
                if (titleKey === 'deck_name_label' && value !== null && value.trim() === "") {
                    alert(langPack.alert_deck_name_empty || "Deck name cannot be empty.");
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
                 if (element.title !== undefined && key.includes('title')) {
                     element.title = langPack[key];
                 }
                 if (element.placeholder !== undefined && key.includes('placeholder')) {
                     element.placeholder = langPack[key];
                 }
                 else if (element.tagName === 'SPAN' && element.parentElement?.classList.contains('part-placeholder')) {
                     element.textContent = langPack[key];
                 }
                 else if (element.tagName !== 'BUTTON' || !element.id.startsWith('lang-')) {
                     if (element.classList.contains('empty-list-message') || element.tagName === 'P' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'LABEL' || element.tagName === 'A' || element.tagName === 'BUTTON' || element.tagName === 'OPTION' || element.tagName === 'SUMMARY' || element.tagName === 'LI' || (element.tagName === 'SPAN' && !element.classList.contains('btn-side'))) {
                         element.textContent = langPack[key];
                     }
                 }
            } else { console.warn(`Translation key not found: ${key}`); }
        });
        updateDeckUI();
        renderStarterGuide();
        renderTradesTab();
        renderTradeComboBuilder();
        renderTradeComboList();
    };


    const setLanguage = (lang) => { if (translations[lang]) { currentLanguage = lang; localStorage.setItem('beyXToolLanguage', lang); if (lang === 'pt-br') { langPtBrButton?.classList.add('active'); langEnButton?.classList.remove('active'); } else { langPtBrButton?.classList.remove('active'); langEnButton?.classList.add('active'); } translateUI(); } else { console.error(`Idioma não suportado: ${lang}`); } };

    const setupTabs = () => {
        tabLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                tabLinks.forEach(l => l.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                const tabId = link.dataset.tab;
                const correspondingContent = document.getElementById(tabId + '-tab');
                link.classList.add('active');
                if (correspondingContent) correspondingContent.classList.add('active');
            });
        });
        const initialTab = document.querySelector('.tab-link[data-tab="welcome"]');
        if (initialTab) initialTab.click();
    };

    const createNewDeck = (name) => ({ name: name, bays: [ { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }, { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }, { type: null, part1: null, part2: null, part3: null, part4: null, part5: null } ] });
    const getSerializableCollection = () => ({ blades: Object.fromEntries(Array.from(app_data.collection.blades.entries(), ([id, set]) => [id, [...set]])), ratchets: [...app_data.collection.ratchets], bits: [...app_data.collection.bits], mainblades: [...app_data.collection.mainblades], assistblades: [...app_data.collection.assistblades], lockchips: [...app_data.collection.lockchips], });
    const loadCollectionFromParsed = (parsedCollection) => { const collection = { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() }; try { if (parsedCollection) { if (parsedCollection.blades) collection.blades = new Map(Object.entries(parsedCollection.blades).map(([id, variants]) => [id, new Set(variants)])); if (parsedCollection.ratchets) collection.ratchets = new Set(parsedCollection.ratchets); if (parsedCollection.bits) collection.bits = new Set(parsedCollection.bits); if (parsedCollection.mainblades) collection.mainblades = new Set(parsedCollection.mainblades); if (parsedCollection.assistblades) collection.assistblades = new Set(parsedCollection.assistblades); if (parsedCollection.lockchips) collection.lockchips = new Set(parsedCollection.lockchips); } } catch(e) { console.error("Erro ao processar coleção salva:", e); } return collection; };

    // Funções Trades Data
    const getSerializableTrades = () => {
        const serializable = { want: {}, have: {}, combos: [] };
        for (const listType of ['want', 'have']) {
            for (const partType in app_data.trades[listType]) {
                serializable[listType][partType] = [...app_data.trades[listType][partType]];
            }
        }
        serializable.combos = app_data.trades.combos;
        return serializable;
    };
    const loadTradesFromParsed = (parsedTrades) => {
        const trades = {
            want: { blades: new Set(), ratchets: new Set(), bits: new Set(), lockchips: new Set(), mainblades: new Set(), assistblades: new Set() },
            have: { blades: new Set(), ratchets: new Set(), bits: new Set(), lockchips: new Set(), mainblades: new Set(), assistblades: new Set() },
            combos: []
        };
        try {
            if (parsedTrades) {
                for (const listType of ['want', 'have']) {
                    if(parsedTrades[listType]) {
                        for (const partType in trades[listType]) {
                            if (parsedTrades[listType][partType] && Array.isArray(parsedTrades[listType][partType])) {
                                trades[listType][partType] = new Set(parsedTrades[listType][partType]);
                            }
                        }
                    }
                }
                if (parsedTrades.combos && Array.isArray(parsedTrades.combos)) {
                    trades.combos = parsedTrades.combos;
                }
            }
        } catch (e) {
            console.error("Erro ao processar trades salvos:", e);
        }
        return trades;
    };

    // Save/Load App Data Atualizados
    const saveAppData = () => {
        try {
            localStorage.setItem('beyblade_x_data', JSON.stringify({
                collection: getSerializableCollection(),
                decks: app_data.decks,
                active_deck_index: app_data.active_deck_index,
                trades: getSerializableTrades()
            }));
        } catch (e) {
            console.error("Erro ao salvar dados:", e);
            const langPack = translations[currentLanguage] || translations['en'];
            alert(langPack.alert_save_error);
        }
    };

    const loadAppData = () => {
        const saved_data_str = localStorage.getItem('beyblade_x_data');
        let parsed = {};
        const defaultTrades = {
             want: { blades: new Set(), ratchets: new Set(), bits: new Set(), lockchips: new Set(), mainblades: new Set(), assistblades: new Set() },
             have: { blades: new Set(), ratchets: new Set(), bits: new Set(), lockchips: new Set(), mainblades: new Set(), assistblades: new Set() },
             combos: []
         };

        if (saved_data_str) {
            try {
                parsed = JSON.parse(saved_data_str);
                app_data.collection = loadCollectionFromParsed(parsed.collection || {});
                app_data.decks = Array.isArray(parsed.decks) ? parsed.decks : [];
                app_data.active_deck_index = (typeof parsed.active_deck_index === 'number') ? parsed.active_deck_index : 0;
                 app_data.decks.forEach(deck => {
                    deck.bays.forEach((bay, index, arr) => { if (!bay || typeof bay !== 'object' || !bay.hasOwnProperty('part4') || !bay.hasOwnProperty('part5')) { arr[index] = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }; } });
                    while (deck.bays.length < 3) { deck.bays.push({ type: null, part1: null, part2: null, part3: null, part4: null, part5: null }); }
                    deck.bays = deck.bays.slice(0, 3);
                 });

            } catch (e) {
                console.error("Erro ao carregar dados salvos:", e);
                app_data = {
                    collection: { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() },
                    decks: [],
                    active_deck_index: 0,
                    trades: defaultTrades
                };
                parsed = {};
            }
        } else {
             app_data.trades = defaultTrades;
        }

         app_data.trades = loadTradesFromParsed(parsed.trades || defaultTrades);

        if (app_data.decks.length === 0) app_data.decks.push(createNewDeck("Deck 01"));
        if (app_data.active_deck_index >= app_data.decks.length || app_data.active_deck_index < 0) app_data.active_deck_index = 0;
        const activeDeck = app_data.decks[app_data.active_deck_index];
         if (activeDeck) {
             while (activeDeck.bays.length < 3) { activeDeck.bays.push({ type: null, part1: null, part2: null, part3: null, part4: null, part5: null }); }
             activeDeck.bays = activeDeck.bays.slice(0, 3);
             activeDeck.bays.forEach((bay, index, arr) => { if (!bay || typeof bay !== 'object' || !bay.hasOwnProperty('part4') || !bay.hasOwnProperty('part5')) { arr[index] = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }; } });
         }
        const langPack = translations[currentLanguage] || translations['en'];
    };


    // --- Funções de Renderização ---

    const renderStarterGuide = () => {
        if (!guide_products_container || typeof STARTER_GUIDE_PRODUCTS === 'undefined' || typeof STARTER_GUIDE_PRODUCTS.hasbro === 'undefined' || typeof STARTER_GUIDE_PRODUCTS.takaraTomy === 'undefined') {
            if (guide_products_container) guide_products_container.innerHTML = '<p>Erro ao carregar dados do guia.</p>';
            return;
        }
        guide_products_container.innerHTML = '';

        const brands = [
            { key: 'hasbro', titleKey: 'guide_spoiler_hasbro', defaultTitle: 'Hasbro Products', openByDefault: false },
            { key: 'takaraTomy', titleKey: 'guide_spoiler_takara', defaultTitle: 'Takara Tomy Products', openByDefault: false }
        ];

        brands.forEach(brandInfo => {
            const products = STARTER_GUIDE_PRODUCTS[brandInfo.key];
            if (!products || products.length === 0) return;

            const detailsElement = document.createElement('details');
            detailsElement.className = 'brand-spoiler';
            if (brandInfo.openByDefault) {
                detailsElement.open = true;
            }

            const summaryElement = document.createElement('summary');
            summaryElement.className = 'brand-spoiler-title';
            summaryElement.dataset.translate = brandInfo.titleKey;
            const langPack = translations[currentLanguage] || translations['en'];
            summaryElement.textContent = langPack[brandInfo.titleKey] || brandInfo.defaultTitle;

            const gridContainer = document.createElement('div');
            gridContainer.className = 'brand-products-grid';

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                const header = document.createElement('div');
                header.className = 'product-card-header';
                header.innerHTML = `<img src="${product.image || 'images/products/placeholder.webp'}" alt="${product.productName}" class="product-image"><h4 class="product-name">${product.productName}</h4>`;
                productCard.appendChild(header);

                const partsContainer = document.createElement('div');
                partsContainer.className = 'product-parts';

                product.parts.forEach(partId => {
                    const part = ALL_PARTS.find(p => p.id === partId);
                    if (!part) {
                         if (partId.match(/^\d+-\d+[A-Z]*$/i)) {
                        } else {
                            console.warn(`Peça do Guia '${partId}' no produto '${product.productName}' não encontrada em ALL_PARTS.`);
                        }
                        return;
                    }
                    const partItem = document.createElement('div');
                    partItem.className = 'product-part-item';
                    partItem.dataset.partId = part.id;

                    const infoIconSpan = document.createElement('span');
                    infoIconSpan.className = 'part-info-icon';
                    infoIconSpan.dataset.partId = part.id;
                    infoIconSpan.textContent = '?';

                    const imgElement = document.createElement('img');
                    imgElement.src = part.image || 'images/placeholder.webp';
                    imgElement.alt = part.name;

                    const nameElement = document.createElement('p');
                    nameElement.textContent = part.name;

                    partItem.appendChild(infoIconSpan);
                    partItem.appendChild(imgElement);
                    partItem.appendChild(nameElement);

                    if (part.tier) {
                        const tierElement = document.createElement('div');
                        tierElement.className = `part-tier tier-${part.tier.toLowerCase()}`;
                        tierElement.textContent = part.tier;
                        partItem.appendChild(tierElement);
                    }

                    let isOwned = false;
                    const collectionSetKey = part.type + 's';
                    const collectionSet = app_data.collection[collectionSetKey];

                    if (part.type === 'blade') {
                        isOwned = collectionSet?.has(part.id) && collectionSet.get(part.id).size > 0;
                    } else if (['lockchip', 'mainblade', 'assistblade', 'ratchet', 'bit'].includes(part.type)) {
                        isOwned = collectionSet?.has(part.id);
                    }

                    if (isOwned) {
                        partItem.classList.add('owned');
                    }

                    infoIconSpan.addEventListener('click', (event) => {
                        event.stopPropagation();
                        openPartInfoModal(part.id);
                    });

                    if ((part.type === 'blade' || part.type === 'bit') && part.bey_type) {
                        const typeSymbolDiv = document.createElement('div');
                        typeSymbolDiv.className = 'part-type-symbol';
                        const typeName = part.bey_type.charAt(0).toUpperCase() + part.bey_type.slice(1);
                        const imgPath = `images/types/${part.bey_type.toLowerCase()}.webp`;
                        const iconLoaderImg = new Image();
                        iconLoaderImg.src = imgPath;
                        iconLoaderImg.onload = () => {
                            typeSymbolDiv.innerHTML = `<img src="${imgPath}" alt="${typeName}" title="${typeName} Type">`;
                            partItem.appendChild(typeSymbolDiv);
                        };
                        iconLoaderImg.onerror = () => { console.warn(`Imagem de tipo ${imgPath} não encontrada.`); };
                    }

                    partsContainer.appendChild(partItem);
                });
                productCard.appendChild(partsContainer);
                gridContainer.appendChild(productCard);
            });

            detailsElement.appendChild(summaryElement);
            detailsElement.appendChild(gridContainer);
            guide_products_container.appendChild(detailsElement);
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
            part_card.innerHTML = `${infoIcon}<img src="${part.image || 'images/placeholder.webp'}" alt="${part.name}"><p>${part.name}</p>${part.tier ? `<div class="part-tier tier-${part.tier.toLowerCase()}">${part.tier}</div>` : ''}`;

            const infoButton = part_card.querySelector('.part-info-icon');
            if (infoButton) { infoButton.addEventListener('click', (event) => { event.stopPropagation(); openPartInfoModal(part.id); }); }

            if ((part.type === 'blade' || part.type === 'bit') && part.bey_type) {
                const typeSymbolDiv = document.createElement('div'); typeSymbolDiv.className = 'part-type-symbol';
                const typeName = part.bey_type.charAt(0).toUpperCase() + part.bey_type.slice(1);
                const imgPath = `images/types/${part.bey_type.toLowerCase()}.webp`;
                const iconLoaderImg = new Image();
                iconLoaderImg.src = imgPath;
                iconLoaderImg.onload = () => { typeSymbolDiv.innerHTML = `<img src="${imgPath}" alt="${typeName}" title="${typeName} Type">`; part_card.appendChild(typeSymbolDiv); };
                iconLoaderImg.onerror = () => { console.warn(`Imagem de tipo ${imgPath} não encontrada.`); };
            }

            let lastClickTime = 0; const doubleClickDelay = 400;
            part_card.addEventListener('click', (event) => { if (event.target.classList.contains('part-info-icon')) return; const now = Date.now(); if (now - lastClickTime < doubleClickDelay) { togglePartOwnership(part); lastClickTime = 0; } else { lastClickTime = now; } });
            part_card.addEventListener('contextmenu', (e) => e.preventDefault());

            container.appendChild(part_card);
        });
    };

    const renderTradesTab = () => {
        const containers = {
            blades: trades_blades_container,
            ratchets: trades_ratchets_container,
            bits: trades_bits_container,
            lockchips: trades_lockchips_container,
            mainblades: trades_mainblades_container,
            assistblades: trades_assistblades_container
        };
        Object.values(containers).forEach(c => { if (c) c.innerHTML = ''; });

        const sortedParts = [...ALL_PARTS].sort((a, b) => a.name.localeCompare(b.name));

        sortedParts.forEach(part => {
            const container = containers[part.type + 's'];
            if (!container) return;

            const trade_card = document.createElement('div');
            trade_card.className = 'part-card';
            trade_card.dataset.partId = part.id;
            trade_card.dataset.partType = part.type;

            if (app_data.trades.want[part.type + 's']?.has(part.id)) {
                trade_card.classList.add('wanting');
            } else if (app_data.trades.have[part.type + 's']?.has(part.id)) {
                trade_card.classList.add('trading');
            }

            trade_card.innerHTML = `<img src="${part.image || 'images/placeholder.webp'}" alt="${part.name}"><p>${part.name}</p>`;

            if ((part.type === 'blade' || part.type === 'bit') && part.bey_type) {
                const typeSymbolDiv = document.createElement('div');
                typeSymbolDiv.className = 'part-type-symbol';
                const typeName = part.bey_type.charAt(0).toUpperCase() + part.bey_type.slice(1);
                const imgPath = `images/types/${part.bey_type.toLowerCase()}.webp`;
                const iconLoaderImg = new Image();
                iconLoaderImg.src = imgPath;
                iconLoaderImg.onload = () => {
                    typeSymbolDiv.innerHTML = `<img src="${imgPath}" alt="${typeName}" title="${typeName} Type">`;
                    trade_card.appendChild(typeSymbolDiv);
                };
                iconLoaderImg.onerror = () => { console.warn(`Imagem de tipo ${imgPath} não encontrada.`); };
            }

            trade_card.removeEventListener('dblclick', handleTradeCardClick);
            trade_card.addEventListener('dblclick', handleTradeCardClick);
            trade_card.addEventListener('contextmenu', (e) => e.preventDefault());

            container.appendChild(trade_card);
        });

        const langPack = translations[currentLanguage] || translations['en'];
        document.querySelectorAll('#trades-tab .part-type-spoiler summary[data-translate]').forEach(summary => {
            const key = summary.dataset.translate;
            if (langPack[key]) {
                summary.textContent = langPack[key];
            }
        });
        renderTradeDisplayLists();
        renderTradeComboList();
    };

    const renderTradeDisplayLists = () => {
        const langPack = translations[currentLanguage] || translations['en'];

        let wantGrid = tradesWantDisplay.querySelector('.trade-list-grid');
        if (!wantGrid) {
            wantGrid = document.createElement('div');
            wantGrid.className = 'trade-list-grid';
            tradesWantDisplay.appendChild(wantGrid);
        }
        let haveGrid = tradesHaveDisplay.querySelector('.trade-list-grid');
        if (!haveGrid) {
            haveGrid = document.createElement('div');
            haveGrid.className = 'trade-list-grid';
            tradesHaveDisplay.appendChild(haveGrid);
        }

        wantGrid.innerHTML = '';
        haveGrid.innerHTML = '';

        const partTypes = ['blades', 'ratchets', 'bits', 'lockchips', 'mainblades', 'assistblades'];
        let wantIsEmpty = true;
        let haveIsEmpty = true;

        const createTradeListCard = (part, statusClass) => {
            const card = document.createElement('div');
            card.className = `trade-list-card ${statusClass}`;
            card.dataset.partId = part.id;
            card.innerHTML = `
                <img src="${part.image || 'images/placeholder.webp'}" alt="${part.name}">
                <p>${part.name}</p>
            `;
            return card;
        };

        partTypes.forEach(typeKey => {
            const wantSet = app_data.trades.want[typeKey];
            const haveSet = app_data.trades.have[typeKey];

            if (wantSet && wantSet.size > 0) {
                wantIsEmpty = false;
                const sortedIds = [...wantSet].sort((a, b) => {
                    const partA = ALL_PARTS.find(p => p.id === a);
                    const partB = ALL_PARTS.find(p => p.id === b);
                    return (partA?.name || a).localeCompare(partB?.name || b);
                });
                sortedIds.forEach(partId => {
                    const part = ALL_PARTS.find(p => p.id === partId);
                    if (part) {
                        wantGrid.appendChild(createTradeListCard(part, 'wanting'));
                    }
                });
            }

            if (haveSet && haveSet.size > 0) {
                haveIsEmpty = false;
                const sortedIds = [...haveSet].sort((a, b) => {
                    const partA = ALL_PARTS.find(p => p.id === a);
                    const partB = ALL_PARTS.find(p => p.id === b);
                    return (partA?.name || a).localeCompare(partB?.name || b);
                });
                sortedIds.forEach(partId => {
                    const part = ALL_PARTS.find(p => p.id === partId);
                    if (part) {
                        haveGrid.appendChild(createTradeListCard(part, 'trading'));
                    }
                });
            }
        });

        const emptyMsgKey = 'trades_list_empty';
        const emptyMsg = `<p class="empty-list-message" data-translate="${emptyMsgKey}">${langPack[emptyMsgKey] || "List is empty."}</p>`;

        if (wantIsEmpty && !wantGrid.querySelector('.empty-list-message')) {
            wantGrid.innerHTML = emptyMsg;
        }
        if (haveIsEmpty && !haveGrid.querySelector('.empty-list-message')) {
            haveGrid.innerHTML = emptyMsg;
        }

        tradesWantDisplay.querySelector('h4').textContent = langPack.trades_list_header_want || "== PROCURANDO ==";
        tradesHaveDisplay.querySelector('h4').textContent = langPack.trades_list_header_have || "== PASSANDO ==";
        if (tradesCombosDisplay) {
             tradesCombosDisplay.querySelector('h4').textContent = langPack.trades_list_header_combos || "== COMBOS PARA VENDA ==";
        }
    };

    const renderTradeComboBuilder = () => {
        if (!comboBuilderSlot) return;

        const langPack = translations[currentLanguage] || translations['en'];
        const selectText = langPack.deck_placeholder_selecione || 'Select';
        const bay = trade_combo_builder;

        const selectors = {
            p1ph: comboBuilderSlot.querySelector('.part-placeholder[data-type="primeira"]'),
            p1n: comboBuilderSlot.querySelector('.part-name-display[data-name-type="primeira"]'),
            p1icon: comboBuilderSlot.querySelector('.part-type-icon-placeholder[data-icon-type="primeira"]'),
            mbph: comboBuilderSlot.querySelector('.part-placeholder[data-type="mainblade"]'),
            mbn: comboBuilderSlot.querySelector('.part-name-display[data-name-type="mainblade"]'),
            mbicon: comboBuilderSlot.querySelector('.part-type-icon-placeholder[data-icon-type="mainblade"]'),
            abph: comboBuilderSlot.querySelector('.part-placeholder[data-type="assistblade"]'),
            abn: comboBuilderSlot.querySelector('.part-name-display[data-name-type="assistblade"]'),
            abicon: comboBuilderSlot.querySelector('.part-type-icon-placeholder[data-icon-type="assistblade"]'),
            rph: comboBuilderSlot.querySelector('.part-placeholder[data-type="ratchet"]'),
            rn: comboBuilderSlot.querySelector('.part-name-display[data-name-type="ratchet"]'),
            ricon: comboBuilderSlot.querySelector('.part-type-icon-placeholder[data-icon-type="ratchet"]'),
            bph: comboBuilderSlot.querySelector('.part-placeholder[data-type="bit"]'),
            bn: comboBuilderSlot.querySelector('.part-name-display[data-name-type="bit"]'),
            bicon: comboBuilderSlot.querySelector('.part-type-icon-placeholder[data-icon-type="bit"]')
        };

        if (Object.values(selectors).some(el => !el)) {
            console.error("Elementos faltando no slot do Combo Builder.");
            return;
        }

        comboBuilderSlot.dataset.bayType = bay.type || 'empty';

        const reset = (ph, n, icon, placeholderKey) => {
            ph.innerHTML = `<span data-translate="${placeholderKey}">${langPack[placeholderKey]||placeholderKey.replace('deck_placeholder_', '').replace('_section_title', '')}</span>`;
            n.textContent = selectText;
            icon.innerHTML = '';
        };
        const set = (ph, n, icon, part, partSlotName) => {
            if (!part) return;
            const name = part.displayName || part.name;
            let imgHTML = part.image || 'images/placeholder.webp';
            if (part.type==='blade' && part.variant && part.baseId && ALL_VARIANTS[part.baseId]) {
                const vData = ALL_VARIANTS[part.baseId].find(v => v.name === part.variant);
                if (vData?.image) imgHTML=vData.image;
                else { const sVar = ALL_VARIANTS[part.baseId].find(v => v.name === 'Stock');
                if (sVar?.image) imgHTML=sVar.image; }
            }
            ph.innerHTML = `<img src="${imgHTML}" alt="${name}">`;
            n.textContent = name;
            icon.innerHTML = '';
            if ((partSlotName === 'primeira' && part.type === 'blade') || partSlotName === 'bit') {
                if (part.bey_type) {
                    const typeName = part.bey_type.charAt(0).toUpperCase() + part.bey_type.slice(1);
                    const imgPath = `images/types/${part.bey_type.toLowerCase()}.webp`;
                    icon.innerHTML = `<img src="${imgPath}" alt="${typeName}" title="${typeName} Type">`;
                }
            }
        };

        reset(selectors.p1ph, selectors.p1n, selectors.p1icon, 'deck_placeholder_primeira');
        reset(selectors.mbph, selectors.mbn, selectors.mbicon, 'deck_placeholder_mainblade');
        reset(selectors.abph, selectors.abn, selectors.abicon, 'deck_placeholder_assistblade');
        reset(selectors.rph, selectors.rn, selectors.ricon, 'deck_placeholder_ratchet');
        reset(selectors.bph, selectors.bn, selectors.bicon, 'deck_placeholder_bit');

        if (bay.type === 'standard') {
            set(selectors.p1ph, selectors.p1n, selectors.p1icon, bay.part1, 'primeira');
            set(selectors.rph, selectors.rn, selectors.ricon, bay.part4, 'ratchet');
            set(selectors.bph, selectors.bn, selectors.bicon, bay.part5, 'bit');
        }
        else if (bay.type === 'chip') {
            set(selectors.p1ph, selectors.p1n, selectors.p1icon, bay.part1, 'primeira');
            set(selectors.mbph, selectors.mbn, selectors.mbicon, bay.part2, 'mainblade');
            set(selectors.abph, selectors.abn, selectors.abicon, bay.part3, 'assistblade');
            set(selectors.rph, selectors.rn, selectors.ricon, bay.part4, 'ratchet');
            set(selectors.bph, selectors.bn, selectors.bicon, bay.part5, 'bit');
        }
    };

    const renderTradeComboList = () => {
        if (!tradesCombosList) return;

        tradesCombosList.innerHTML = '';
        const langPack = translations[currentLanguage] || translations['en'];

        if (app_data.trades.combos.length === 0) {
            const emptyMsgKey = 'trades_combo_list_empty';
            tradesCombosList.innerHTML = `<p class="empty-list-message" data-translate="${emptyMsgKey}">${langPack[emptyMsgKey] || "Lista de combos vazia."}</p>`;
            return;
        }

        app_data.trades.combos.forEach((combo, index) => {
            const comboItem = document.createElement('div');
            comboItem.className = 'trade-combo-item';

            const comboParts = document.createElement('div');
            comboParts.className = 'trade-combo-parts';

            const parts = [combo.part1, combo.part2, combo.part3, combo.part4, combo.part5];
            let comboName = "";

            parts.forEach(part => {
                if (part) {
                    let partImage = part.image || 'images/placeholder.webp';
                    if (part.type === 'blade' && part.variant && part.baseId && ALL_VARIANTS[part.baseId]) {
                        const vData = ALL_VARIANTS[part.baseId].find(v => v.name === part.variant);
                        if (vData?.image) partImage = vData.image;
                    }

                    const img = document.createElement('img');
                    img.src = partImage;
                    img.alt = part.name;
                    img.title = part.displayName || part.name;
                    comboParts.appendChild(img);

                    if (part.type === 'blade' || part.type === 'lockchip' || part.type === 'mainblade') {
                         comboName += `${part.displayName || part.name} `;
                    } else if (part.type === 'assistblade') {
                         // Não adiciona ao nome curto
                    } else if (part.type === 'ratchet' || part.type === 'bit') {
                        comboName += `${part.name} `;
                    }
                }
            });

            combo.name = comboName.trim().replace(/ \([\s\S]*?\)/g, '');

            const comboNameP = document.createElement('p');
            comboNameP.className = 'trade-combo-name';
            comboNameP.textContent = combo.name;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'combo-delete-btn danger-button';
            deleteBtn.innerHTML = '&times;';
            deleteBtn.dataset.comboIndex = index;
            deleteBtn.title = "Remover Combo";
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteTradeCombo(index);
            });

            comboItem.appendChild(comboParts);
            comboItem.appendChild(comboNameP);
            comboItem.appendChild(deleteBtn);
            tradesCombosList.appendChild(comboItem);
        });
    };

    const renderDeckManager = () => { if (!deck_selector || !deck_name_input) return; if (app_data.active_deck_index < 0 || app_data.active_deck_index >= app_data.decks.length) app_data.active_deck_index = 0; if (app_data.decks.length === 0) return; const currentDeck = app_data.decks[app_data.active_deck_index]; if (!currentDeck) return; deck_selector.innerHTML = ''; app_data.decks.forEach((deck, index) => { const option = document.createElement('option'); option.value = index; option.textContent = deck.name || `Deck ${index + 1}`; deck_selector.appendChild(option); }); deck_selector.value = app_data.active_deck_index; deck_name_input.value = currentDeck.name; };

    const renderDeckBayChart = (bayIndex, bay) => {
        const langPack = translations[currentLanguage] || translations['en'];
        const canvas = document.getElementById(`chart-slot-${bayIndex}`); const infoContainer = document.getElementById(`bay-info-${bayIndex}`); const heightDisplay = document.getElementById(`bay-height-${bayIndex}`);
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
        const langPack = translations[currentLanguage] || translations['en'];
        const selectText = langPack.deck_placeholder_selecione || 'Select';
        deck_slots.forEach((slot, bayIndex) => {
            let bay = currentDeck.bays[bayIndex]; if (!bay || typeof bay !== 'object') { currentDeck.bays[bayIndex] = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }; bay = currentDeck.bays[bayIndex]; } else { if (!bay.hasOwnProperty('part4')) bay.part4 = null; if (!bay.hasOwnProperty('part5')) bay.part5 = null; }
            const selectors = { p1ph: slot.querySelector('.part-placeholder[data-type="primeira"]'), p1n: slot.querySelector('.part-name-display[data-name-type="primeira"]'), p1icon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="primeira"]'), mbph: slot.querySelector('.part-placeholder[data-type="mainblade"]'), mbn: slot.querySelector('.part-name-display[data-name-type="mainblade"]'), mbicon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="mainblade"]'), abph: slot.querySelector('.part-placeholder[data-type="assistblade"]'), abn: slot.querySelector('.part-name-display[data-name-type="assistblade"]'), abicon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="assistblade"]'), rph: slot.querySelector('.part-placeholder[data-type="ratchet"]'), rn: slot.querySelector('.part-name-display[data-name-type="ratchet"]'), ricon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="ratchet"]'), bph: slot.querySelector('.part-placeholder[data-type="bit"]'), bn: slot.querySelector('.part-name-display[data-name-type="bit"]'), bicon: slot.querySelector('.part-type-icon-placeholder[data-icon-type="bit"]') };
            if (Object.values(selectors).some(el => !el)) { console.error(`Elementos faltando no slot ${bayIndex}. Verifique o HTML.`); return; }
            slot.dataset.bayType = bay.type || 'empty';
            const reset = (ph, n, icon, placeholderKey) => { ph.innerHTML = `<span data-translate="${placeholderKey}">${langPack[placeholderKey]||placeholderKey.replace('deck_placeholder_', '').replace('_section_title', '')}</span>`; n.textContent = selectText; icon.innerHTML = ''; };
            const set = (ph, n, icon, part, partSlotName) => { if (!part) return; const name = part.displayName || part.name; let imgHTML = part.image || 'images/placeholder.webp'; if (part.type==='blade' && part.variant && part.baseId && ALL_VARIANTS[part.baseId]) { const vData = ALL_VARIANTS[part.baseId].find(v => v.name === part.variant); if (vData?.image) imgHTML=vData.image; else { const sVar = ALL_VARIANTS[part.baseId].find(v => v.name === 'Stock'); if (sVar?.image) imgHTML=sVar.image; } } ph.innerHTML = `<img src="${imgHTML}" alt="${name}">`; n.textContent = name; icon.innerHTML = ''; if ((partSlotName === 'primeira' && part.type === 'blade') || partSlotName === 'bit') { if (part.bey_type) { const typeName = part.bey_type.charAt(0).toUpperCase() + part.bey_type.slice(1); const imgPath = `images/types/${part.bey_type.toLowerCase()}.webp`; icon.innerHTML = `<img src="${imgPath}" alt="${typeName}" title="${typeName} Type">`; }}};
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
                let needsDeckUpdate = false;
                if (collectionSet.has(part.id)) {
                    collectionSet.delete(part.id);
                    if (partCard) partCard.classList.remove('owned');
                    app_data.decks.forEach(deck => deck.bays.forEach(bay => { if (bay.part1 && (bay.part1.baseId || bay.part1.id) === part.id) { clearBay(bay); needsDeckUpdate = true; } }));
                    if (trade_combo_builder.part1?.id === part.id || trade_combo_builder.part1?.baseId === part.id) {
                        clearTradeComboBuilder();
                        renderTradeComboBuilder();
                    }
                } else {
                    const variantToAdd = (part.variantsId && variantList?.length === 1) ? variantList[0].name : 'owned';
                    collectionSet.set(part.id, new Set([variantToAdd]));
                    if (partCard) partCard.classList.add('owned');
                }
                if (needsDeckUpdate) updateDeckUI();
                saveAppData(); if (collection_filter?.checked) { renderParts(); } renderStarterGuide();
            }
        } else {
            const collectionSetKey = part.type + 's'; const collection_set = app_data.collection[collectionSetKey]; if (!collection_set) return;
            let needsDeckUpdate = false;
            if (collection_set.has(part.id)) {
                collection_set.delete(part.id); if (partCard) partCard.classList.remove('owned');
                 app_data.decks.forEach(deck => deck.bays.forEach(bay => { let changed = false; if (part.type === 'ratchet' && bay.part4?.id === part.id) { bay.part4 = null; changed = true; } else if (part.type === 'bit' && bay.part5?.id === part.id) { bay.part5 = null; changed = true; } else if (part.type === 'lockchip' && bay.part1?.id === part.id) { clearBay(bay); changed = true; } else if (part.type === 'mainblade' && bay.part2?.id === part.id) { bay.part2 = null; changed = true; } else if (part.type === 'assistblade' && bay.part3?.id === part.id) { bay.part3 = null; changed = true; } if(changed) needsDeckUpdate = true; }));
                 let comboBuilderChanged = false;
                 if (part.type === 'ratchet' && trade_combo_builder.part4?.id === part.id) { trade_combo_builder.part4 = null; comboBuilderChanged = true; }
                 else if (part.type === 'bit' && trade_combo_builder.part5?.id === part.id) { trade_combo_builder.part5 = null; comboBuilderChanged = true; }
                 else if (part.type === 'lockchip' && trade_combo_builder.part1?.id === part.id) { clearTradeComboBuilder(); comboBuilderChanged = true; }
                 else if (part.type === 'mainblade' && trade_combo_builder.part2?.id === part.id) { trade_combo_builder.part2 = null; comboBuilderChanged = true; }
                 else if (part.type === 'assistblade' && trade_combo_builder.part3?.id === part.id) { trade_combo_builder.part3 = null; comboBuilderChanged = true; }
                 if(comboBuilderChanged) renderTradeComboBuilder();

            } else { collection_set.add(part.id); if (partCard) partCard.classList.add('owned'); }
            if (needsDeckUpdate) updateDeckUI();
            saveAppData(); if (collection_filter?.checked) { renderParts(); } renderStarterGuide();
        }
    };

    const openVariantSelector = (part) => {
        variant_modal_part = part;
        const langPack = translations[currentLanguage] || translations['en'];
        const titlePrefix = langPack.variant_modal_title_prefix || "Select Variants for";
        variant_modal_title.textContent = `${titlePrefix} ${part.name}`;
        variant_modal_checkboxes.innerHTML = '<div id="variant-modal-grid"></div>';
        const grid = document.getElementById('variant-modal-grid');
        if (!grid) {
            console.error("Elemento 'variant-modal-grid' não encontrado.");
            return;
        }

        const originalOwned = app_data.collection.blades.get(part.id) || new Set();
        const tempSelectedVariants = new Set(originalOwned);

        const variantList = ALL_VARIANTS[part.variantsId];
        if (!variantList) {
            console.error(`Lista de variantes não encontrada para ${part.variantsId}`);
            closeVariantModal();
            return;
        }

        grid.innerHTML = '';

        variantList.forEach(vData => {
            if (!vData?.name) return;
            const card = document.createElement('div');
            card.className = 'variant-card';
            card.dataset.variantName = vData.name;
            card.innerHTML = `<img src="${vData.image || 'images/placeholder.webp'}" alt="${vData.name}"><p>${vData.name}</p>`;
            if (tempSelectedVariants.has(vData.name)) {
                card.classList.add('selected');
            }
            card.addEventListener('click', () => {
                const variantName = vData.name;
                console.log(`Clicou na variante: ${variantName}`); // Log 1
                if (tempSelectedVariants.has(variantName)) {
                    tempSelectedVariants.delete(variantName);
                    card.classList.remove('selected');
                    console.log(`Removido ${variantName}. tempSelectedVariants:`, new Set(tempSelectedVariants)); // Log 2
                } else {
                    tempSelectedVariants.add(variantName);
                    card.classList.add('selected');
                    console.log(`Adicionado ${variantName}. tempSelectedVariants:`, new Set(tempSelectedVariants)); // Log 3
                }
            });
            grid.appendChild(card);
        });

        const handleVariantModalDone = () => {
            console.log("handleVariantModalDone executando..."); // Log 4
            let changed = false;
            if (originalOwned.size !== tempSelectedVariants.size) {
                changed = true;
            } else {
                for (const item of originalOwned) {
                    if (!tempSelectedVariants.has(item)) {
                        changed = true;
                        break;
                    }
                }
                if (!changed) {
                     for (const item of tempSelectedVariants) {
                        if (!originalOwned.has(item)) {
                            changed = true;
                            break;
                        }
                    }
                }
            }

            console.log("Original:", originalOwned, "Temp:", tempSelectedVariants, "Changed:", changed); // Log 5

            if (changed) {
                console.log("Mudanças detectadas, iniciando salvamento..."); // Log 6
                let needsDeckUpdate = false;
                const mainCard = document.querySelector(`#collection-tab .part-card[data-part-id="${part.id}"]`);

                originalOwned.forEach(originalVariant => {
                    if (!tempSelectedVariants.has(originalVariant)) {
                        app_data.decks.forEach(deck => deck.bays.forEach(bay => {
                             if (bay.part1?.baseId === part.id && bay.part1.variant === originalVariant) {
                                clearBay(bay);
                                needsDeckUpdate = true;
                            }
                        }));
                        if (trade_combo_builder.part1?.baseId === part.id && trade_combo_builder.part1.variant === originalVariant) {
                            clearTradeComboBuilder();
                            renderTradeComboBuilder();
                        }
                    }
                });

                console.log("Estado da coleção ANTES de salvar:", app_data.collection.blades.get(part.id)); // Log 7

                if (tempSelectedVariants.size > 0) {
                    app_data.collection.blades.set(part.id, new Set(tempSelectedVariants));
                    if (mainCard) mainCard.classList.add('owned');
                } else {
                    app_data.collection.blades.delete(part.id);
                    if (mainCard) mainCard.classList.remove('owned');
                     app_data.decks.forEach(d => d.bays.forEach(b => {
                        if (b.part1?.baseId === part.id) {
                            clearBay(b);
                            needsDeckUpdate = true;
                        }
                    }));
                    if (trade_combo_builder.part1?.baseId === part.id) {
                        clearTradeComboBuilder();
                        renderTradeComboBuilder();
                    }
                }

                console.log("Estado da coleção DEPOIS de atualizar, ANTES de saveAppData():", app_data.collection.blades.get(part.id)); // Log 8
                saveAppData();
                console.log("saveAppData() chamado."); // Log 9

                if (needsDeckUpdate) {
                    updateDeckUI();
                }
                if (collection_filter?.checked) {
                    renderParts();
                }
                renderStarterGuide();
            } else {
                console.log("Nenhuma mudança detectada entre os sets original e temporário."); // Log 10
            }

            closeVariantModal();
        };

        if (variantModalDoneButton) {
            if (variantModalDoneButton._listener) {
                variantModalDoneButton.removeEventListener('click', variantModalDoneButton._listener);
            }
            variantModalDoneButton._listener = handleVariantModalDone;
            // --- INÍCIO DA MODIFICAÇÃO ---
            variantModalDoneButton.addEventListener('click', handleVariantModalDone); // Removido { once: true }
            // --- FIM DA MODIFICAÇÃO ---
        }

        variant_modal.style.display = 'block';
    };

    const closeVariantModal = () => {
        if (variant_modal) {
            variant_modal.style.display = 'none';
        }
        variant_modal_part = null;

        if (variantModalDoneButton && variantModalDoneButton._listener) {
             variantModalDoneButton.removeEventListener('click', variantModalDoneButton._listener);
             variantModalDoneButton._listener = null;
        }
    };

    const clearBay = (bay) => { if (bay) { bay.type = null; bay.part1 = null; bay.part2 = null; bay.part3 = null; bay.part4 = null; bay.part5 = null; } };
    const closePartModal = () => { if (part_modal) part_modal.style.display = 'none'; active_part_selection = { context: null, slotId: null, type: null }; };

    const selectPart = (part) => {
        const { context, slotId, type } = active_part_selection;
        if (context === null || type === null) { console.error("active_part_selection inválido"); return; }

        const langPack = translations[currentLanguage] || translations['en'];
        const targetPartMap = { 'primeira': 'part1', 'mainblade': 'part2', 'assistblade': 'part3', 'ratchet': 'part4', 'bit': 'part5' };
        const targetPartKey = targetPartMap[type];
        if (!targetPartKey) { console.error("Tipo de placeholder inválido:", type); closePartModal(); return; }

        const basePartId = part.baseId || part.id;
        const basePartData = ALL_PARTS.find(p => p.id === basePartId);
        if (!basePartData) { console.error(`Peça base ${basePartId} não encontrada em ALL_PARTS.`); closePartModal(); return; }

        const partForSelection = { ...basePartData, ...(part.baseId && { baseId: part.baseId, variant: part.variant, displayName: part.displayName, image: part.image || basePartData.image }) };

        let targetBay;
        if (context === 'deck') {
            if (slotId === null) { console.error("SlotId nulo para contexto 'deck'"); return; }
            const currentDeck = app_data.decks[app_data.active_deck_index];
            if (!currentDeck || !currentDeck.bays[slotId]) { console.error(`Deck ou Bay inválido: index ${app_data.active_deck_index}, slot ${slotId}`); return; }
            targetBay = currentDeck.bays[slotId];
        } else if (context === 'combo') {
            targetBay = trade_combo_builder;
        } else {
            console.error("Contexto de seleção desconhecido:", context);
            return;
        }

        if (targetPartKey === 'part1') {
            const newType = (partForSelection.type === 'blade') ? 'standard' : (partForSelection.type === 'lockchip') ? 'chip' : null;
            if (!newType) { console.error("Tipo inválido para primeira peça:", partForSelection.type); closePartModal(); return; }
            if (targetBay.type !== newType && targetBay.type !== null) { clearBay(targetBay); }
            targetBay.type = newType;
            targetBay.part1 = partForSelection;
            if (newType === 'standard') { targetBay.part2 = null; targetBay.part3 = null; }
        } else if (targetPartKey === 'part2' || targetPartKey === 'part3') {
            if (targetBay.type === 'chip') {
                if ((targetPartKey === 'part2' && partForSelection.type === 'mainblade') || (targetPartKey === 'part3' && partForSelection.type === 'assistblade')) {
                    targetBay[targetPartKey] = partForSelection;
                } else {
                    alert(langPack.alert_incompatible_part.replace('{partType}', partForSelection.type).replace('{bayType}', 'Chip Slot'));
                    closePartModal(); return;
                }
            } else {
                alert(langPack.alert_incompatible_part.replace('{partType}', partForSelection.type).replace('{bayType}', targetBay.type || 'Empty'));
                closePartModal(); return;
            }
        } else if (targetPartKey === 'part4' || targetPartKey === 'part5') {
            if (targetBay.type === 'standard' || targetBay.type === 'chip') {
                if ((targetPartKey === 'part4' && partForSelection.type === 'ratchet') || (targetPartKey === 'part5' && partForSelection.type === 'bit')) {
                    targetBay[targetPartKey] = partForSelection;
                } else {
                    alert(langPack.alert_incompatible_part.replace('{partType}', partForSelection.type).replace('{bayType}', 'Ratchet/Bit Slot'));
                    closePartModal(); return;
                }
            } else {
                 alert(langPack.alert_incompatible_part.replace('{partType}', partForSelection.type).replace('{bayType}', 'Empty Slot'));
                 closePartModal(); return;
            }
        }

        if (context === 'deck') {
            updateDeckUI();
            saveAppData();
        } else if (context === 'combo') {
            renderTradeComboBuilder();
        }

        closePartModal();
    };


    const openPartSelector = (context, slotId, type) => {
        active_part_selection = { context, slotId, type };
        const langPack = translations[currentLanguage] || translations['en'];
        const titlePrefix = langPack.part_selector_modal_title_prefix || "Select:";
        const partTypeName = langPack[`deck_placeholder_${type}`] || type.charAt(0).toUpperCase() + type.slice(1);
        modal_title.textContent = `${titlePrefix} ${partTypeName}`;

        const usedPartIds = new Set();

        if (context === 'deck') {
            const currentDeck = app_data.decks[app_data.active_deck_index];
            if (!currentDeck) return;
            currentDeck.bays.forEach((bay, index) => {
                if (index.toString() === slotId) return;
                if (bay.part1) usedPartIds.add(bay.part1.baseId || bay.part1.id);
                if (bay.part2) usedPartIds.add(bay.part2.id);
                if (bay.part3) usedPartIds.add(bay.part3.id);
                if (bay.part4) usedPartIds.add(bay.part4.id);
                if (bay.part5) usedPartIds.add(bay.part5.id);
            });
        } else if (context === 'combo') {
            const bay = trade_combo_builder;
            const currentKey = { 'primeira': 'part1', 'mainblade': 'part2', 'assistblade': 'part3', 'ratchet': 'part4', 'bit': 'part5' }[type];
            if (bay.part1 && currentKey !== 'part1') usedPartIds.add(bay.part1.baseId || bay.part1.id);
            if (bay.part2 && currentKey !== 'part2') usedPartIds.add(bay.part2.id);
            if (bay.part3 && currentKey !== 'part3') usedPartIds.add(bay.part3.id);
            if (bay.part4 && currentKey !== 'part4') usedPartIds.add(bay.part4.id);
            if (bay.part5 && currentKey !== 'part5') usedPartIds.add(bay.part5.id);
        }

        let availableParts = [];
        const partTypeKey = (type === 'primeira') ? null : type;

        const sourceParts = (context === 'deck' || context === 'combo') ? getOwnedParts(partTypeKey || 'blade') : [];
        if (type === 'primeira') {
             availableParts = [...getOwnedParts('blade'), ...getOwnedParts('lockchip')];
        } else {
             availableParts = getOwnedParts(type);
        }

        const partsToShow = availableParts.filter(part => !usedPartIds.has(part.baseId || part.id));

        const individualHeader = langPack.part_individual_header || 'Individual Parts (Owned)';
        modal_parts_list_container.innerHTML = `<h4>${individualHeader}</h4><div class="parts-grid"></div>`;
        const partsGrid = modal_parts_list_container.querySelector('.parts-grid');
        if (!partsGrid) return;

        if (partsToShow.length === 0) {
            const nonePrefix = langPack.part_individual_none_prefix || 'No';
            const noneSuffix = langPack.part_individual_none_suffix || 'parts available (check collection or parts already in use).';
            partsGrid.innerHTML = `<p>${nonePrefix} ${partTypeName} ${noneSuffix}</p>`;
        } else {
            partsToShow.forEach(part => {
                if (!part || !part.name) return;
                const part_card = document.createElement('div');
                part_card.className = 'part-card owned';
                const displayName = part.displayName || part.name;
                const displayImage = (part.type === 'blade' && part.variant && part.image) ? part.image : (part.image || 'images/placeholder.webp');

                part_card.innerHTML = `<img src="${displayImage}" alt="${displayName}"><p>${displayName}</p>${part.tier ? `<div class="part-tier tier-${part.tier.toLowerCase()}">${part.tier}</div>` : ''}`;
                part_card.addEventListener('click', () => selectPart(part));
                partsGrid.appendChild(part_card);
            });
        }

        part_modal.style.display = 'block';
    };


    const getOwnedParts = (partType) => { const ownedParts = []; const collectionSetKey = partType + 's'; const collectionSet = app_data.collection[collectionSetKey]; if (!collectionSet) return ownedParts; if (partType === 'blade') { collectionSet.forEach((variantsSet, partId) => { const basePart = ALL_PARTS.find(p => p.id === partId); if (!basePart) { console.warn(`Peça Blade ${partId} na coleção mas não em ALL_PARTS.`); return; } if (basePart.variantsId && ALL_VARIANTS[basePart.variantsId]) { variantsSet.forEach(variantName => { const variantData = ALL_VARIANTS[basePart.variantsId].find(v => v.name === variantName); const displayName = (variantName === "Stock" || variantName === "owned") ? basePart.name : `${basePart.name} (${variantName})`; ownedParts.push({ ...basePart, id: `${basePart.id}-${variantName.replace(/\s+/g, '-')}`, baseId: basePart.id, baseName: basePart.name, name: `${basePart.name} (${variantName})`, displayName: displayName, variant: variantName, image: variantData?.image || basePart.image }); }); } else if (variantsSet.has('owned')) { ownedParts.push({ ...basePart, baseId: basePart.id, baseName: basePart.name, displayName: basePart.name, variant: 'owned' }); } }); } else { collectionSet.forEach(partId => { const part = ALL_PARTS.find(p => p.id === partId); if (part) { ownedParts.push({...part, displayName: part.name}); } else { console.warn(`Peça ${partType} ${partId} na coleção mas não em ALL_PARTS.`); } }); } ownedParts.sort((a, b) => (a.displayName || a.name).localeCompare(b.displayName || b.name)); return ownedParts; };

    // --- Funções do Placar ---
    const updateScoreDisplay = () => { if (scoreP1Display) scoreP1Display.textContent = scoreP1; if (scoreP2Display) scoreP2Display.textContent = scoreP2; };

    const handleSplitScoreButton = (event) => {
        const sideClicked = event.currentTarget;
        const buttonContainer = sideClicked.closest('.split-score-btn');
        if (!buttonContainer) return;

        const player = buttonContainer.dataset.player;
        const points = parseInt(buttonContainer.dataset.points, 10);
        let pointChange = 0;

        if (sideClicked.classList.contains('btn-increase')) {
            pointChange = points;
        } else if (sideClicked.classList.contains('btn-decrease')) {
            pointChange = -points;
        }

        if (player === '1') {
            scoreP1 = Math.max(0, scoreP1 + pointChange);
        } else if (player === '2') {
            scoreP2 = Math.max(0, scoreP2 + pointChange);
        }

        updateScoreDisplay();
    };

    const resetScore = () => { const langPack = translations[currentLanguage] || translations['en']; const confirmMsg = langPack.confirm_reset_score || "Are you sure you want to reset the scoreboard?"; if (confirm(confirmMsg)) { scoreP1 = 0; scoreP2 = 0; updateScoreDisplay(); } };

    const toggleScoreLayout = () => {
        if (!scoreContainer) return;
        const isVertical = scoreContainer.classList.contains('vertical-score');
        if (isVertical) {
            scoreContainer.classList.remove('vertical-score');
            scoreContainer.classList.add('horizontal-score');
            localStorage.setItem('beyXScoreLayout', 'horizontal');
        } else {
            scoreContainer.classList.remove('horizontal-score');
            scoreContainer.classList.add('vertical-score');
            localStorage.setItem('beyXScoreLayout', 'vertical');
        }
    };

    const loadScoreLayout = () => {
        const savedLayout = localStorage.getItem('beyXScoreLayout');
        if (scoreContainer) {
             scoreContainer.classList.remove('vertical-score', 'horizontal-score');
            if (savedLayout === 'horizontal') {
                scoreContainer.classList.add('horizontal-score');
            } else {
                scoreContainer.classList.add('vertical-score');
            }
        }
    };

    // --- Funções de Gerenciamento de Deck ---
    const addDeck = () => { const newDeckName = `Deck ${app_data.decks.length + 1}`; app_data.decks.push(createNewDeck(newDeckName)); app_data.active_deck_index = app_data.decks.length - 1; updateDeckUI(); saveAppData(); };
    const deleteDeck = () => { const langPack = translations[currentLanguage] || translations['en']; if (app_data.decks.length <= 1) { alert(langPack.alert_cannot_delete_last_deck); return; } const deck = app_data.decks[app_data.active_deck_index]; if (!deck) return; const confirmTxt = `${langPack.confirm_delete_deck_prefix}${deck.name}${langPack.confirm_delete_deck_suffix}`; if (confirm(confirmTxt)) { app_data.decks.splice(app_data.active_deck_index, 1); app_data.active_deck_index = Math.max(0, app_data.active_deck_index - 1); updateDeckUI(); saveAppData(); } };
    const renameDeck = () => { const deck = app_data.decks[app_data.active_deck_index]; if (!deck || !deck_name_input) return; const newName = deck_name_input.value.trim(); const langPack = translations[currentLanguage] || translations['en']; if (newName && newName !== deck.name) { deck.name = newName; renderDeckManager(); saveAppData(); } else if (!newName) { deck_name_input.value = deck.name; alert(langPack.alert_deck_name_empty); } deck_name_input.blur(); };
    const switchDeck = () => { if (!deck_selector) return; const newIndex = parseInt(deck_selector.value, 10); if (!isNaN(newIndex) && newIndex >= 0 && newIndex < app_data.decks.length) { app_data.active_deck_index = newIndex; updateDeckUI(); saveAppData(); } else { deck_selector.value = app_data.active_deck_index; } };
    const clearDeck = () => { if (app_data.decks[app_data.active_deck_index]) { app_data.decks[app_data.active_deck_index].bays.forEach(clearBay); updateDeckUI(); saveAppData(); } };

    // --- Funções da Aba Trades ---
     const handleTradeCardClick = (event) => {
        const card = event.currentTarget;
        const partId = card.dataset.partId;
        const partType = card.dataset.partType;
        const typeKey = partType + 's';

        const wantSet = app_data.trades.want[typeKey];
        const haveSet = app_data.trades.have[typeKey];

        if (!wantSet || !haveSet) {
            console.error(`Trade sets não encontrados para o tipo: ${typeKey}`);
            return;
        }

        const isWanting = card.classList.contains('wanting');
        const isTrading = card.classList.contains('trading');

        if (!isWanting && !isTrading) {
            wantSet.add(partId);
            haveSet.delete(partId);
            card.classList.add('wanting');
            card.classList.remove('trading');
        } else if (isWanting) {
            wantSet.delete(partId);
            haveSet.add(partId);
            card.classList.remove('wanting');
            card.classList.add('trading');
        } else {
            wantSet.delete(partId);
            haveSet.delete(partId);
            card.classList.remove('wanting');
            card.classList.remove('trading');
        }

        saveAppData();
        renderTradeDisplayLists();
    };

    const copyTradeList = () => {
        const langPack = translations[currentLanguage] || translations['en'];
        let output = "";

        const sections = [
            { title: langPack.trades_list_header_want || "== WANT ==", list: app_data.trades.want },
            { title: langPack.trades_list_header_have || "== SELLING/TRADING ==", list: app_data.trades.have }
        ];

        const partTypes = ['blades', 'ratchets', 'bits', 'lockchips', 'mainblades', 'assistblades'];

        if (app_data.trades.combos.length > 0) {
            output += (langPack.trades_list_header_combos || "== COMBOS FOR SALE ==") + "\n\n";
            app_data.trades.combos.forEach(combo => {
                output += `- ${combo.name}\n`;
            });
            output += "\n";
        }

        sections.forEach(section => {
            let sectionHasContent = false;
            let sectionOutput = section.title + "\n";

            partTypes.forEach(typeKey => {
                const partSet = section.list[typeKey];
                if (partSet && partSet.size > 0) {
                    sectionHasContent = true;
                    sectionOutput += `\n${langPack[`trades_list_section_${typeKey}`] || `-- ${typeKey.charAt(0).toUpperCase() + typeKey.slice(1)} --`}\n`;
                    const sortedIds = [...partSet].sort((a, b) => {
                        const partA = ALL_PARTS.find(p => p.id === a);
                        const partB = ALL_PARTS.find(p => p.id === b);
                        return (partA?.name || a).localeCompare(partB?.name || b);
                    });
                    sortedIds.forEach(partId => {
                        const part = ALL_PARTS.find(p => p.id === partId);
                        sectionOutput += `- ${part ? part.name : partId}\n`;
                    });
                }
            });

            if (sectionHasContent) {
                output += sectionOutput + "\n";
            }
        });

        if (output.trim() === "") {
             alert(langPack.trades_list_empty || "Your trade list is empty.");
             return;
        }

        navigator.clipboard.writeText(output.trim())
            .then(() => {
                alert(langPack.trades_copy_success || "Trade list copied!");
            })
            .catch(err => {
                console.error('Erro ao copiar:', err);
                alert(langPack.trades_copy_fail || "Failed to copy list.");
            });
    };

    const exportTradesAsImage = () => {
        const langPack = translations[currentLanguage] || translations['en'];

        if (typeof html2canvas === 'undefined') {
            console.error("html2canvas is not loaded. Make sure the library is included in index.html.");
            alert(langPack.trades_export_error || "Error generating image.");
            return;
        }

        const originalContainer = document.getElementById('trade-display-container');
        if (!originalContainer) {
            console.error("Container 'trade-display-container' não encontrado.");
            return;
        }

        const captureContainer = originalContainer.cloneNode(true);
        captureContainer.className = 'trade-display-container trade-capture-clone';
        captureContainer.id = 'trade-capture-clone-temp';

        const header = document.createElement('div');
        header.className = 'trade-capture-header';
        header.innerHTML = `
            <img src="images/logo.png" class="trade-capture-logo" alt="BeyXTool Logo">
            <p class="trade-capture-url">https://beyxtool.pages.dev/</p>
        `;
        captureContainer.prepend(header);

        captureContainer.querySelectorAll('.trade-list-grid').forEach(grid => {
            grid.style.maxHeight = 'none';
            grid.style.overflowY = 'visible';
        });

        const comboList = captureContainer.querySelector('#trades-combos-list');
        if (comboList) {
            comboList.style.maxHeight = 'none';
            comboList.style.overflowY = 'visible';
        }

        document.body.appendChild(captureContainer);

        const logoImg = captureContainer.querySelector('.trade-capture-logo');

        const captureFunction = () => {
            html2canvas(captureContainer, {
                useCORS: true,
                backgroundColor: getComputedStyle(document.body).getPropertyValue('--secondary-bg').trim() || '#181818',
                scale: 2
            }).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'BeyXTool_Trades_List.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            }).catch(err => {
                console.error('Erro no html2canvas:', err);
                alert(langPack.trades_export_error || "Error generating image.");
            }).finally(() => {
                if (document.body.contains(captureContainer)) {
                    document.body.removeChild(captureContainer);
                }
            });
        };

        setTimeout(() => {
            if (logoImg && logoImg.complete && logoImg.naturalHeight > 0) {
                captureFunction();
            } else if (logoImg) {
                logoImg.onload = captureFunction;
                logoImg.onerror = () => {
                    console.error("Erro ao carregar logo para o canvas.");
                    alert("Erro ao carregar o logo; a imagem pode sair incompleta.");
                    captureFunction();
                };
            } else {
                captureFunction();
            }
        }, 100);
    };

    const clearTradeComboBuilder = () => {
        trade_combo_builder = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null };
        renderTradeComboBuilder();
    };

    const addTradeComboToList = () => {
        const bay = trade_combo_builder;
        const langPack = translations[currentLanguage] || translations['en'];
        let isComplete = false;

        if (bay.type === 'standard' && bay.part1 && bay.part4 && bay.part5) {
            isComplete = true;
        } else if (bay.type === 'chip' && bay.part1 && bay.part2 && bay.part3 && bay.part4 && bay.part5) {
            isComplete = true;
        }

        if (isComplete) {
            const comboToSave = JSON.parse(JSON.stringify(bay));

            let comboName = "";
            const parts = [comboToSave.part1, comboToSave.part2, comboToSave.part3, comboToSave.part4, comboToSave.part5];
             parts.forEach(part => {
                if (part) {
                     if (part.type === 'blade' || part.type === 'lockchip' || part.type === 'mainblade') {
                         comboName += `${part.displayName || part.name} `;
                    } else if (part.type === 'ratchet' || part.type === 'bit') {
                        comboName += `${part.name} `;
                    }
                }
            });
            comboToSave.name = comboName.trim().replace(/ \([\s\S]*?\)/g, '');

            app_data.trades.combos.push(comboToSave);
            saveAppData();
            renderTradeComboList();
            clearTradeComboBuilder();
        } else {
            alert(langPack.alert_combo_incomplete || "O combo deve estar completo.");
        }
    };

    const deleteTradeCombo = (index) => {
        if (index >= 0 && index < app_data.trades.combos.length) {
            app_data.trades.combos.splice(index, 1);
            saveAppData();
            renderTradeComboList();
        }
    };

    // --- Funções de Import/Export ---
    const exportDeckList = async () => {
        const deck = app_data.decks[app_data.active_deck_index];
        const langPack = translations[currentLanguage] || translations['en'];
        if (!deck) return;

        const completeBays = deck.bays.filter(b =>
            (b?.type === 'standard' && b.part1 && b.part4 && b.part5) ||
            (b?.type === 'chip' && b.part1 && b.part2 && b.part3 && b.part4 && b.part5)
        );

        if (completeBays.length === 0) {
            alert(langPack.alert_export_deck_empty);
            return;
        }

        const personName = await showInputModal('prompt_export_person_name', 'prompt_export_person_placeholder');
        if (personName === null) return;

        const eventName = await showInputModal('prompt_export_tournament_name', 'prompt_export_tournament_placeholder');
        if (eventName === null) return;

        const today = new Date();
        const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getFullYear()).slice(-2)}`;

        let deckString = `=== DECK LIST ===\n---- ${formattedDate} ----\n==== NOME ====\n${personName}\n\n==== EVENTO ====\n${eventName}\n\n===== DECK =====\n`;

        completeBays.forEach((bay, index) => {
            if (index > 0) deckString += "\n";
            const part1Name = bay.part1.displayName || bay.part1.name;
            const part4Name = bay.part4?.displayName || bay.part4?.name || '';
            const part5Name = bay.part5?.displayName || bay.part5?.name || '';

            if (bay.type === 'standard') {
                deckString += `B: ${part1Name}\nR: ${part4Name}\nBT: ${part5Name}\n`;
            } else if (bay.type === 'chip') {
                const part2Name = bay.part2.displayName || bay.part2.name;
                const part3Name = bay.part3.displayName || bay.part3.name;
                deckString += `C: ${part1Name}\nMB: ${part2Name}\nAB: ${part3Name}\n${part4Name ? `R: ${part4Name}\n` : ''}${part5Name ? `BT: ${part5Name}\n` : ''}`;
            }
        });

        deckString += `\n===============\nCriado por\nhttps://beyxtool.pages.dev/\n`;

        navigator.clipboard.writeText(deckString)
            .then(() => alert(langPack.alert_export_copied))
            .catch(err => {
                console.error("Falha ao copiar:", err);
                alert(`${langPack.alert_export_copy_failed} ${deckString}`);
            });
    };

    const exportData = () => { saveAppData(); const data_str = localStorage.getItem('beyblade_x_data'); const langPack = translations[currentLanguage] || translations['en']; if (!data_str) { alert("Não há dados para exportar."); return; } const data_blob = new Blob([data_str], {type: 'application/json;charset=utf-8'}); const url = URL.createObjectURL(data_blob); const a = document.createElement('a'); a.href = url; const timestamp = new Date().toISOString().slice(0, 10); a.download = `beyxtool_dados_${timestamp}.bx`; document.body.appendChild(a); a.click(); setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100); };
    const importData = (event) => { const file = event.target.files[0]; const langPack = translations[currentLanguage] || translations['en']; if (!file) return; if (!file.name.endsWith('.bx') && file.type !== 'application/json') { alert("Por favor, selecione um arquivo .bx válido."); if (import_file_input) import_file_input.value = ''; return; } const reader = new FileReader(); reader.onload = (e) => { try { const imported_data_str = e.target.result; if (!imported_data_str) throw new Error(langPack.alert_file_read_error || "Erro ao ler o arquivo."); const parsed = JSON.parse(imported_data_str); if (typeof parsed === 'object' && parsed !== null && 'collection' in parsed && 'decks' in parsed && 'active_deck_index' in parsed) { const confirmMsg = langPack.confirm_import_overwrite || "Importar substituirá dados atuais. Continuar?"; if (confirm(confirmMsg)) { localStorage.setItem('beyblade_x_data', imported_data_str); loadAppData(); renderParts(); renderStarterGuide(); updateDeckUI(); renderTradesTab(); renderTradeDisplayLists(); renderTradeComboList(); alert(langPack.alert_import_success || "Dados importados com sucesso!"); } } else { throw new Error(langPack.alert_invalid_file_format || "Formato inválido ou corrompido."); } } catch (error) { console.error("Erro ao importar dados:", error); alert(`${langPack.alert_import_error || "Erro ao importar:"} ${error.message}`); } finally { if (import_file_input) import_file_input.value = ''; } }; reader.onerror = (error) => { console.error("Erro ao ler arquivo:", error); alert(langPack.alert_file_read_error || "Erro ao ler o arquivo selecionado."); if (import_file_input) import_file_input.value = ''; }; reader.readAsText(file); };

    // --- Funções para o Modal de Info ---
    const drawPartStatsChart = (canvasId, part) => {
        const langPack = translations[currentLanguage] || translations['en'];
        const canvas = document.getElementById(canvasId); if (!canvas || !part) return;
        if (canvasId === 'info-modal-chart' && infoModalChartInstance) { infoModalChartInstance.destroy(); infoModalChartInstance = null; }
        const ctx = canvas.getContext('2d'); if (!ctx) return;
        const parseStat = (value) => { const num = parseFloat(value); return isNaN(num) ? 0 : num; };
        let chartData = []; let chartLabels = [];
        if (part.type === 'blade') { chartData = [parseStat(part.attack), parseStat(part.defense), parseStat(part.stamina)]; chartLabels = [ `${langPack.chart_label_attack || 'Attack'}: ${chartData[0]}`, `${langPack.chart_label_defense || 'Defense'}: ${chartData[1]}`, `${langPack.chart_label_stamina || 'Stamina'}: ${chartData[2]}` ]; }
        else if (part.type === 'ratchet') { chartData = [parseStat(part.attack), parseStat(part.defense), parseStat(part.stamina), parseStat(part.height)]; chartLabels = [ `${langPack.chart_label_attack || 'Attack'}: ${chartData[0]}`, `${langPack.chart_label_defense || 'Defense'}: ${chartData[1]}`, `${langPack.chart_label_stamina || 'Stamina'}: ${chartData[2]}`, `${langPack.chart_label_height || 'Height'}: ${chartData[3]}` ]; }
        else if (part.type === 'bit') { chartData = [parseStat(part.attack), parseStat(part.defense), parseStat(part.stamina), parseStat(part.dash), parseStat(part.burst_resistance)]; chartLabels = [ `${langPack.chart_label_attack || 'Attack'}: ${chartData[0]}`, `${langPack.chart_label_defense || 'Defense'}: ${chartData[1]}`, `${langPack.chart_label_stamina || 'Stamina'}: ${chartData[2]}`, `${langPack.chart_label_dash || 'Dash'}: ${chartData[3]}`, `${langPack.chart_label_burst || 'Burst'}: ${chartData[4]}` ]; }
        else { canvas.style.display = 'none'; return; }
        canvas.style.display = 'block';
        const data = { labels: chartLabels, datasets: [{ label: part.name, data: chartData, fill: true, backgroundColor: 'rgba(0, 255, 195, 0.2)', borderColor: 'rgb(0, 255, 195)', pointBackgroundColor: 'rgb(0, 255, 195)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgb(0, 255, 195)' }] };
        const options = { responsive: true, maintainAspectRatio: true, scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.3)' }, grid: { color: 'rgba(255, 255, 255, 0.3)' }, pointLabels: { display: true, color: '#FFFFFF', font: { size: 9 } }, ticks: { display: false, stepSize: 25, maxTicksLimit: 5 }, min: 0, suggestedMax: 100 }}, plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(context) { let label = ''; const fullLabel = context.chart.data.labels[context.dataIndex]; const statNameMatch = fullLabel.match(/^[^:]+/); if (statNameMatch) { label = statNameMatch[0] + ': '; } if (context.parsed.r !== null) { label += context.parsed.r; } return label; } }}}};
        try { const chartInstance = new Chart(ctx, { type: 'radar', data: data, options: options }); if (canvasId === 'info-modal-chart') infoModalChartInstance = chartInstance; }
        catch (error) { console.error(`Erro ao criar gráfico de stats para ${part.id}:`, error); canvas.style.display = 'none';}
    };

    const openPartInfoModal = (partId) => {
        const part = ALL_PARTS.find(p => p.id === partId); if (!part || !partInfoModal) return;
        infoModalPartName.textContent = part.name;
        const sources = PART_SOURCES[part.id]; const langPack = translations[currentLanguage] || translations['en']; if (sources && sources.length > 0) { infoModalSourceList.innerHTML = sources.map(s => `<li>${s}</li>`).join(''); } else { infoModalSourceList.innerHTML = `<li>Informação não disponível.</li>`; }
        const sourceTitleElement = infoModalSourceList.previousElementSibling; if (sourceTitleElement && sourceTitleElement.tagName === 'H4') { sourceTitleElement.textContent = langPack.part_source_title || 'Found in:'; }
        drawPartStatsChart('info-modal-chart', part);
        partInfoModal.style.display = 'block';
    };

    const closePartInfoModal = () => { if (partInfoModal) partInfoModal.style.display = 'none'; if (infoModalChartInstance) { infoModalChartInstance.destroy(); infoModalChartInstance = null; } };

    // --- INICIALIZAÇÃO E EVENT LISTENERS ---
    const savedLanguage = localStorage.getItem('beyXToolLanguage'); if (savedLanguage && translations[savedLanguage]) currentLanguage = savedLanguage; else currentLanguage = 'en';
    setupTabs();
    loadAppData();
    loadScoreLayout();
    renderParts();
    renderTradesTab();
    setLanguage(currentLanguage);
    updateScoreDisplay();
    renderTradeComboBuilder();

    // Listeners Idioma
    langPtBrButton?.addEventListener('click', () => setLanguage('pt-br'));
    langEnButton?.addEventListener('click', () => setLanguage('en'));
    // Listeners Coleção
    collection_filter?.addEventListener('change', () => { renderParts(); renderStarterGuide(); });
    collection_sort?.addEventListener('change', renderParts);
    // Listeners Configurações
    export_button?.addEventListener('click', exportData);
    import_button?.addEventListener('click', () => import_file_input?.click());
    import_file_input?.addEventListener('change', importData);
    // Listeners Deck Builder
    clear_deck_button?.addEventListener('click', clearDeck);
    export_deck_button?.addEventListener('click', exportDeckList);
    deck_slots.forEach(slot => { slot.querySelectorAll('.part-placeholder').forEach(ph => { ph.addEventListener('click', () => { const sId = slot.dataset.slotId; const t = ph.dataset.type; if(sId !== undefined && t) openPartSelector('deck', sId, t); }); }); });
    add_deck_button?.addEventListener('click', addDeck);
    delete_deck_button?.addEventListener('click', deleteDeck);
    deck_selector?.addEventListener('change', switchDeck);
    deck_name_input?.addEventListener('blur', renameDeck);
    deck_name_input?.addEventListener('keypress', (e) => { if (e.key === 'Enter') { renameDeck(); } });
    // Listeners Modais
    part_modal_close?.addEventListener('click', closePartModal);
    variant_modal_close?.addEventListener('click', closeVariantModal);
    variantModalDoneButton?.addEventListener('click', () => {
        // A lógica de clique no botão OK é anexada dinamicamente em openVariantSelector
        // Este listener atua como um fallback, MAS NÃO DEVE SER NECESSÁRIO com a correção
        // Se ainda não funcionar, pode indicar outro problema.
        // console.log("Fallback listener do OK clicado"); // Log extra se necessário
        // if (variant_modal.style.display === 'block' && variantModalDoneButton._listener) {
        //      variantModalDoneButton._listener(); // Tenta chamar manualmente
        // }
    });
    inputModalOk?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(inputModalField.value); });
    inputModalCancel?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(null); });
    inputModalClose?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(null); });
    inputModalField?.addEventListener('keypress', (e) => { if (e.key === 'Enter' && onInputConfirm) { onInputConfirm(inputModalField.value); } });
    partInfoModalClose?.addEventListener('click', closePartInfoModal);
    // Listeners Placar
    scoreButtonSides.forEach(side => side.addEventListener('click', handleSplitScoreButton));
    toggleLayoutButton?.addEventListener('click', toggleScoreLayout);
    resetScoreButton?.addEventListener('click', resetScore);
    // Listener Trades
    copy_trades_button?.addEventListener('click', copyTradeList);
    export_trades_button?.addEventListener('click', exportTradesAsImage);
    // Listeners do Combo Builder
    comboBuilderPlaceholders.forEach(ph => {
        ph.addEventListener('click', () => {
            const t = ph.dataset.type;
            if (t) openPartSelector('combo', null, t);
        });
    });
    clearComboBuilderButton?.addEventListener('click', clearTradeComboBuilder);
    addComboToListButton?.addEventListener('click', addTradeComboToList);


    // Fechar Modais clicando fora
    window.addEventListener('click', (event) => {
        if (event.target === part_modal) closePartModal();
        if (event.target === variant_modal) closeVariantModal();
        if (event.target === inputModal) { if (onInputConfirm) onInputConfirm(null); }
        if (event.target === partInfoModal) closePartInfoModal();
    });

}); // Fim do DOMContentLoaded
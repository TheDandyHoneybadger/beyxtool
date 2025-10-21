document.addEventListener('DOMContentLoaded', () => {

    // Verifica se as variáveis do database.js foram carregadas
    if (typeof ALL_VARIANTS === 'undefined' || typeof ALL_PARTS === 'undefined' || typeof ALL_COMBOS === 'undefined' || typeof translations === 'undefined') {
        alert("Erro: Arquivo database.js não carregado ou corrompido. Verifique o console para mais detalhes.");
        console.error("Variáveis de database.js (ALL_VARIANTS, ALL_PARTS, ALL_COMBOS, translations) não encontradas.");
        return; // Impede a execução do restante do script
    }

    const TOP_10_COMBOS = ALL_COMBOS.slice(0, 10);

    // --- Variável de estado do idioma ---
    let currentLanguage = 'pt-br'; // Padrão

    // --- ESTRUTURA DE DADOS PRINCIPAL ---
    let app_data = {
        collection: { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() },
        decks: [],
        active_deck_index: 0
    };
    let active_deck_slot = { slotId: null, type: null };
    let variant_modal_part = null;
    let infoPopupTimeout;
    let onInputConfirm = null;

    // --- ELEMENTOS DO DOM ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const blades_container = document.getElementById('blades-container');
    const ratchets_container = document.getElementById('ratchets-container');
    const bits_container = document.getElementById('bits-container');
    const mainblades_container = document.getElementById('mainblades-container');
    const assistblades_container = document.getElementById('assistblades-container');
    const lockchips_container = document.getElementById('lockchips-container');
    const collection_filter = document.getElementById('collection-filter');
    const export_button = document.getElementById('export-button');
    const import_button = document.getElementById('import-button');
    const import_file_input = document.getElementById('import-file');
    const export_deck_button = document.getElementById('export-deck-button');
    const collection_tab = document.getElementById('collection-tab');
    const deck_slots = document.querySelectorAll('.deck-slot');
    const clear_deck_button = document.getElementById('clear-deck-button');
    const meta_combos_container = document.getElementById('meta-combos-container');
    const deck_selector = document.getElementById('deck-selector');
    const deck_name_input = document.getElementById('deck-name-input');
    const add_deck_button = document.getElementById('add-deck-button');
    const delete_deck_button = document.getElementById('delete-deck-button');
    const part_modal = document.getElementById('part-selector-modal');
    const modal_title = document.getElementById('modal-title');
    const modal_suggestions_container = document.getElementById('modal-suggestions-container');
    const modal_parts_list_container = document.getElementById('modal-parts-list-container');
    const part_modal_close = document.getElementById('part-selector-close');
    const variant_modal = document.getElementById('variant-selector-modal');
    const variant_modal_title = document.getElementById('variant-modal-title');
    const variant_modal_checkboxes = document.getElementById('variant-modal-checkboxes');
    const variant_modal_save = document.getElementById('variant-modal-save');
    const variant_modal_close = document.getElementById('variant-selector-close');
    const langPtBrButton = document.getElementById('lang-pt-br');
    const langEnButton = document.getElementById('lang-en');
    const inputModal = document.getElementById('input-modal');
    const inputModalTitle = document.getElementById('input-modal-title');
    const inputModalField = document.getElementById('input-modal-field');
    const inputModalOk = document.getElementById('input-modal-ok');
    const inputModalCancel = document.getElementById('input-modal-cancel');
    const inputModalClose = document.getElementById('input-modal-close');

    // --- LÓGICA DO MODAL DE INPUT ---
    const showInputModal = (titleKey, placeholderKey, defaultValue = "") => {
        return new Promise((resolve) => {
            const langPack = translations[currentLanguage];
            inputModalTitle.textContent = langPack[titleKey] || titleKey;
            inputModalField.placeholder = langPack[placeholderKey] || placeholderKey;
            inputModalField.value = defaultValue;
            inputModal.style.display = 'block';
            inputModalField.focus();
            onInputConfirm = (value) => {
                if (value !== null && value.trim() === "") {
                    alert(langPack.alert_deck_name_empty || "O nome não pode ser vazio.");
                    return;
                }
                closeInputModal();
                resolve(value);
            };
        });
    };

    const closeInputModal = () => {
        if (inputModal) inputModal.style.display = 'none';
        onInputConfirm = null;
    };

     // --- Funções de Tradução ---
     const translateUI = () => {
        const langPack = translations[currentLanguage];
        if (!langPack) return;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (langPack[key]) {
                 if (element.placeholder !== undefined && key.includes('placeholder')) { element.placeholder = langPack[key]; }
                 else if (element.title !== undefined && key.includes('title')) { element.title = langPack[key]; }
                 else if (element.tagName !== 'BUTTON' || !element.id.startsWith('lang-')) { element.textContent = langPack[key]; }
            } else { console.warn(`Translation key not found: ${key}`); }
        });
        updateDeckUI();
    };

    const setLanguage = (lang) => {
        if (translations[lang]) {
            currentLanguage = lang;
            localStorage.setItem('beyXToolLanguage', lang);
            if (lang === 'pt-br') { langPtBrButton?.classList.add('active'); langEnButton?.classList.remove('active'); }
            else { langPtBrButton?.classList.remove('active'); langEnButton?.classList.add('active'); }
            translateUI();
        } else { console.error(`Idioma não suportado: ${lang}`); }
    };

    // --- LÓGICA DAS ABAS ---
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
        const initialTab = document.querySelector('.tab-link[data-tab="meta"]');
        if (initialTab) initialTab.click();
    };

    // --- FUNÇÕES DE DADOS (SALVAR/CARREGAR) ---
    const createNewDeck = (name) => ({ name: name, bays: [ { type: null, part1: null, part2: null, part3: null }, { type: null, part1: null, part2: null, part3: null }, { type: null, part1: null, part2: null, part3: null } ] });
    const getSerializableCollection = () => ({ blades: Object.fromEntries(Array.from(app_data.collection.blades.entries(), ([id, set]) => [id, [...set]])), ratchets: [...app_data.collection.ratchets], bits: [...app_data.collection.bits], mainblades: [...app_data.collection.mainblades], assistblades: [...app_data.collection.assistblades], lockchips: [...app_data.collection.lockchips], });
    const loadCollectionFromParsed = (parsedCollection) => {
        const collection = { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() };
        try { if (parsedCollection) { if (parsedCollection.blades) collection.blades = new Map(Object.entries(parsedCollection.blades).map(([id, variants]) => [id, new Set(variants)])); if (parsedCollection.ratchets) collection.ratchets = new Set(parsedCollection.ratchets); if (parsedCollection.bits) collection.bits = new Set(parsedCollection.bits); if (parsedCollection.mainblades) collection.mainblades = new Set(parsedCollection.mainblades); if (parsedCollection.assistblades) collection.assistblades = new Set(parsedCollection.assistblades); if (parsedCollection.lockchips) collection.lockchips = new Set(parsedCollection.lockchips); } } catch(e) { console.error("Erro ao processar coleção salva:", e); } return collection;
    };
    const saveAppData = () => { try { localStorage.setItem('beyblade_x_data', JSON.stringify({ collection: getSerializableCollection(), decks: app_data.decks, active_deck_index: app_data.active_deck_index })); } catch (e) { console.error("Erro ao salvar dados:", e); alert(translations[currentLanguage].alert_save_error); } };
    const loadAppData = () => {
        const saved_data_str = localStorage.getItem('beyblade_x_data');
        if (saved_data_str) { try { const parsed = JSON.parse(saved_data_str); app_data.collection = loadCollectionFromParsed(parsed.collection || {}); app_data.decks = Array.isArray(parsed.decks) ? parsed.decks : []; app_data.active_deck_index = (typeof parsed.active_deck_index === 'number') ? parsed.active_deck_index : 0; } catch (e) { console.error("Erro ao carregar dados salvos:", e); app_data = { collection: { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() }, decks: [], active_deck_index: 0 }; } }
        if (app_data.decks.length === 0) app_data.decks.push(createNewDeck("Meu Primeiro Deck"));
        if (app_data.active_deck_index >= app_data.decks.length || app_data.active_deck_index < 0) app_data.active_deck_index = 0;
    };

    // --- FUNÇÕES DE RENDERIZAÇÃO (UI) ---
    const renderMetaCombos = () => {
        if (!meta_combos_container) return; meta_combos_container.innerHTML = '';
        TOP_10_COMBOS.forEach((combo, index) => {
            const blade_part = ALL_PARTS.find(p => p.name === combo.blade); const ratchet_part = ALL_PARTS.find(p => p.name === combo.ratchet); const bit_part = ALL_PARTS.find(p => p.name === combo.bit); if (!blade_part || !ratchet_part || !bit_part) return;
            const combo_card = document.createElement('div'); combo_card.className = 'meta-combo-card';
            combo_card.innerHTML = `<div class="rank">#${index + 1}</div><div class="parts"><div class="part-display"><img src="${blade_part.image}" alt="${combo.blade}"><span>${combo.blade}</span></div><div class="part-display"><img src="${ratchet_part.image}" alt="${combo.ratchet}"><span>${combo.ratchet}</span></div><div class="part-display"><img src="${bit_part.image}" alt="${combo.bit}"><span>${combo.bit}</span></div></div><div class="points">${combo.points.toFixed(2)} pts</div>`;
            meta_combos_container.appendChild(combo_card);
        });
    };

    const renderParts = () => {
        const containers = { blades: blades_container, ratchets: ratchets_container, bits: bits_container, mainblades: mainblades_container, assistblades: assistblades_container, lockchips: lockchips_container };
        Object.values(containers).forEach(c => { if(c) c.innerHTML = ''; });
        const sortedParts = [...ALL_PARTS].sort((a, b) => a.name.localeCompare(b.name));
        sortedParts.forEach(part => {
            const container = containers[part.type + 's']; if (!container) return;
            const collectionSet = app_data.collection[part.type + 's']; const part_card = document.createElement('div'); part_card.className = 'part-card'; part_card.dataset.partId = part.id;
            let isOwned = (part.type === 'blade') ? (collectionSet?.has(part.id) && collectionSet.get(part.id).size > 0) : collectionSet?.has(part.id);
            if (isOwned) part_card.classList.add('owned');
            part_card.innerHTML = `<img src="${part.image || 'images/placeholder.png'}" alt="${part.name}"><p>${part.name}</p><div class="part-score">${part.score.toFixed(2)}</div>`;
            let pressTimer; let isHeld = false;
            const startHold = (e) => { if (e.button === 2) return; isHeld = false; pressTimer = setTimeout(() => { isHeld = true; showProductInfoPopup(part, part_card); }, 700); };
            const cancelHold = (e) => { clearTimeout(pressTimer); if (!isHeld && e.type !== 'mouseleave' && e.type !== 'touchcancel') togglePartOwnership(part); isHeld = false; };
            part_card.addEventListener('mousedown', startHold); part_card.addEventListener('touchstart', startHold, { passive: true });
            part_card.addEventListener('mouseup', cancelHold); part_card.addEventListener('mouseleave', cancelHold);
            part_card.addEventListener('touchend', cancelHold); part_card.addEventListener('touchcancel', cancelHold);
            part_card.addEventListener('contextmenu', (e) => e.preventDefault());
            container.appendChild(part_card);
        });
    };

    const renderDeckManager = () => {
        if (!deck_selector || !deck_name_input) return;
        if (app_data.active_deck_index < 0 || app_data.active_deck_index >= app_data.decks.length) app_data.active_deck_index = 0;
        if (app_data.decks.length === 0) return; const currentDeck = app_data.decks[app_data.active_deck_index]; if (!currentDeck) return;
        deck_selector.innerHTML = ''; app_data.decks.forEach((deck, index) => { const option = document.createElement('option'); option.value = index; option.textContent = deck.name || `Deck ${index + 1}`; deck_selector.appendChild(option); });
        deck_selector.value = app_data.active_deck_index; deck_name_input.value = currentDeck.name;
    };

    const updateDeckUI = () => {
        const currentDeck = app_data.decks[app_data.active_deck_index]; if (!currentDeck) return;
        let totalDeckScore = 0; const langPack = translations[currentLanguage]; const selectText = langPack.deck_placeholder_selecione || 'Select';
        deck_slots.forEach((slot, bayIndex) => {
            let bay = currentDeck.bays[bayIndex]; if (!bay) { currentDeck.bays[bayIndex] = { type: null, part1: null, part2: null, part3: null }; bay = currentDeck.bays[bayIndex]; } let bayScore = 0;
            const selectors = { p1ph: slot.querySelector('.part-placeholder[data-type="primeira"]'), p1n: slot.querySelector('.part-name-display[data-name-type="primeira"]'), rph: slot.querySelector('.part-placeholder[data-type="ratchet"]'), rn: slot.querySelector('.part-name-display[data-name-type="ratchet"]'), bph: slot.querySelector('.part-placeholder[data-type="bit"]'), bn: slot.querySelector('.part-name-display[data-name-type="bit"]'), mbph: slot.querySelector('.part-placeholder[data-type="mainblade"]'), mbn: slot.querySelector('.part-name-display[data-name-type="mainblade"]'), abph: slot.querySelector('.part-placeholder[data-type="assistblade"]'), abn: slot.querySelector('.part-name-display[data-name-type="assistblade"]'), scoreEl: slot.querySelector('.bey-score') };
            if (Object.values(selectors).some(el => !el)) { console.error(`Elementos faltando no slot ${bayIndex}.`); return; }
            slot.dataset.bayType = bay.type || 'empty';
            const reset = (ph, n, key) => { ph.innerHTML = `<span>${langPack[key]||key}</span>`; n.textContent = selectText; };
            const set = (ph, n, part) => { if (!part) return; const name = part.variant ? `${part.baseName} (${part.variant})` : part.name; let img = part.image || 'images/placeholder.png'; if (part.type==='blade' && part.variant && part.baseId && ALL_VARIANTS[part.baseId]) { const vData = ALL_VARIANTS[part.baseId].find(v => v.name === part.variant); if (vData?.image) img=vData.image; else { const sVar = ALL_VARIANTS[part.baseId].find(v => v.name === 'Stock'); if (sVar?.image) img=sVar.image; } } const score = (typeof part.score === 'number') ? part.score : 0; ph.innerHTML = `<img src="${img}" alt="${name}"><span class="part-score-deck">${score.toFixed(2)}</span>`; n.textContent = name; };
            reset(selectors.rph, selectors.rn, 'deck_placeholder_ratchet'); reset(selectors.bph, selectors.bn, 'deck_placeholder_bit'); reset(selectors.mbph, selectors.mbn, 'deck_placeholder_mainblade'); reset(selectors.abph, selectors.abn, 'deck_placeholder_assistblade');
            if (bay.type === 'standard') { if (bay.part1) { set(selectors.p1ph, selectors.p1n, bay.part1); bayScore += bay.part1.score || 0; } else reset(selectors.p1ph, selectors.p1n, 'blades_section_title'); if (bay.part2) { set(selectors.rph, selectors.rn, bay.part2); bayScore += bay.part2.score || 0; } if (bay.part3) { set(selectors.bph, selectors.bn, bay.part3); bayScore += bay.part3.score || 0; } }
            else if (bay.type === 'chip') { if (bay.part1) { set(selectors.p1ph, selectors.p1n, bay.part1); bayScore += bay.part1.score || 0; } else reset(selectors.p1ph, selectors.p1n, 'lockchips_section_title'); if (bay.part2) { set(selectors.mbph, selectors.mbn, bay.part2); bayScore += bay.part2.score || 0; } if (bay.part3) { set(selectors.abph, selectors.abn, bay.part3); bayScore += bay.part3.score || 0; } }
            else { reset(selectors.p1ph, selectors.p1n, 'deck_placeholder_primeira'); }
            selectors.scoreEl.innerHTML = `${langPack.deck_score_label || 'Sum:'} <span>${bayScore.toFixed(2)}</span>`; totalDeckScore += bayScore;
        });
        const deckInfoScoreP = document.querySelector('.deck-info p'); if (deckInfoScoreP) { const totalLabel = langPack.deck_total_score_label || 'Total:'; deckInfoScoreP.innerHTML = `${totalLabel} <span id="deck-score">${totalDeckScore.toFixed(2)}</span>`;}
        renderDeckManager();
    };

    // --- FUNÇÕES DE LÓGICA DO APP ---
    const showProductInfoPopup = (part, element) => {
        clearTimeout(infoPopupTimeout); document.querySelectorAll('.part-info-popup').forEach(p => p.remove());
        const sources = PART_SOURCES[part.id]; if (!sources || sources.length === 0) return;
        const popup = document.createElement('div'); popup.className = 'part-info-popup';
        const titleText = translations[currentLanguage].part_source_title || "Found in:";
        popup.innerHTML = `<h5>${titleText}</h5><ul>${sources.map(s => `<li>${s}</li>`).join('')}</ul>`;
        const rect = element.getBoundingClientRect(); document.body.appendChild(popup);
        if (rect.bottom + popup.offsetHeight + 10 < window.innerHeight) popup.style.top = `${window.scrollY + rect.bottom + 5}px`; else popup.style.top = `${window.scrollY + rect.top - popup.offsetHeight - 5}px`;
        popup.style.left = `${window.scrollX + rect.left + (element.offsetWidth / 2) - (popup.offsetWidth / 2)}px`;
        infoPopupTimeout = setTimeout(() => popup.remove(), 3000);
        popup.addEventListener('mouseleave', () => { clearTimeout(infoPopupTimeout); popup.remove(); });
    };

    const togglePartOwnership = (part) => {
        const partCard = document.querySelector(`#collection-tab [data-part-id="${part.id}"]`);
        if (part.type === 'blade') {
            const variantList = part.variantsId ? ALL_VARIANTS[part.variantsId] : null;
            if (part.variantsId && variantList && variantList.length > 1) { openVariantSelector(part); }
            else {
                const collectionSet = app_data.collection.blades; if (!collectionSet) return;
                if (collectionSet.has(part.id)) {
                    collectionSet.delete(part.id); if (partCard) partCard.classList.remove('owned');
                    app_data.decks.forEach(deck => deck.bays.forEach(bay => { if (bay.part1 && (bay.part1.baseId || bay.part1.id) === part.id) clearBay(bay); }));
                } else { const variantToAdd = (part.variantsId && variantList?.length === 1) ? variantList[0].name : 'owned'; collectionSet.set(part.id, new Set([variantToAdd])); if (partCard) partCard.classList.add('owned'); }
                saveAppData(); updateDeckUI();
            }
        } else {
            const collectionSetKey = part.type + 's'; const collection_set = app_data.collection[collectionSetKey]; if (!collection_set) return;
            if (collection_set.has(part.id)) {
                collection_set.delete(part.id); if (partCard) partCard.classList.remove('owned');
                app_data.decks.forEach(deck => deck.bays.forEach(bay => { if (bay.part2?.id === part.id) bay.part2 = null; if (bay.part3?.id === part.id) bay.part3 = null; }));
            } else { collection_set.add(part.id); if (partCard) partCard.classList.add('owned'); }
            saveAppData(); updateDeckUI();
        }
    };

    const openVariantSelector = (part) => {
        variant_modal_part = part; const titlePrefix = translations[currentLanguage].variant_modal_title_prefix; variant_modal_title.textContent = `${titlePrefix} ${part.name}`;
        variant_modal_checkboxes.innerHTML = '<div id="variant-modal-grid"></div>'; const grid = document.getElementById('variant-modal-grid'); if(!grid) return;
        const owned = app_data.collection.blades.get(part.id) || new Set(); const variantList = ALL_VARIANTS[part.variantsId]; if (!variantList) { closeVariantModal(); return; }
        variantList.forEach(vData => {
            if (!vData?.name) return; const card = document.createElement('div'); card.className = 'variant-card'; card.dataset.variantName = vData.name; card.innerHTML = `<img src="${vData.image || ''}" alt="${vData.name}"><p>${vData.name}</p>`; if (owned.has(vData.name)) card.classList.add('selected');
            card.addEventListener('click', () => {
                const currentOwned = app_data.collection.blades.get(part.id) || new Set(); if (currentOwned.has(vData.name)) currentOwned.delete(vData.name); else currentOwned.add(vData.name);
                const mainCard = document.querySelector(`#collection-tab [data-part-id="${part.id}"]`);
                if (currentOwned.size > 0) { app_data.collection.blades.set(part.id, currentOwned); mainCard?.classList.add('owned'); }
                else { app_data.collection.blades.delete(part.id); mainCard?.classList.remove('owned'); app_data.decks.forEach(d => d.bays.forEach(b => { if (b.part1?.baseId === part.id) clearBay(b); })); }
                saveAppData(); updateDeckUI(); closeVariantModal();
            });
            grid.appendChild(card);
        });
        if(variant_modal_save) variant_modal_save.style.display = 'none';
        variant_modal.style.display = 'block';
    };

    const applyFilter = () => { if(collection_tab && collection_filter) collection_tab.classList.toggle('filter-on', collection_filter.checked); };
    const closeVariantModal = () => { if (variant_modal) variant_modal.style.display = 'none'; variant_modal_part = null; };
    const clearBay = (bay) => { if (bay) { bay.type = null; bay.part1 = null; bay.part2 = null; bay.part3 = null; } };
    const closePartModal = () => { if (part_modal) part_modal.style.display = 'none'; };

    const selectPartForDeck = (part) => {
        const { slotId, type } = active_deck_slot; const bay = app_data.decks[app_data.active_deck_index].bays[slotId]; if (!bay) return;
        if (part.type === 'blade' && !part.baseId) { part.baseId = part.id; part.baseName = part.name; if (!part.variant) part.variant = 'Stock'; }
        if (type === 'primeira') { if (bay.part1 || (bay.type === 'standard' && part.type !== 'blade') || (bay.type === 'chip' && part.type !== 'lockchip')) clearBay(bay); bay.part1 = part; if (part.type === 'blade') bay.type = 'standard'; else if (part.type === 'lockchip') bay.type = 'chip'; }
        else {
            const partMap = { 'ratchet': 'part2', 'bit': 'part3', 'mainblade': 'part2', 'assistblade': 'part3' }; const targetSlot = partMap[type]; if (!targetSlot) { closePartModal(); return; }
            if ((bay.type === 'standard' && (type === 'ratchet' || type === 'bit')) || (bay.type === 'chip' && (type === 'mainblade' || type === 'assistblade'))) bay[targetSlot] = part;
            else { let alertMsg = translations[currentLanguage].alert_incompatible_part.replace('{partType}', type).replace('{bayType}', bay.type || 'Vazio'); alert(alertMsg); closePartModal(); return; }
        }
        updateDeckUI(); saveAppData(); closePartModal();
    };

  const openPartSelector = (slotId, type) => {
        active_deck_slot = { slotId, type };
        // Traduz o título do modal
        const titlePrefix = translations[currentLanguage].part_selector_modal_title_prefix || "Select:";
        modal_title.textContent = `${titlePrefix} ${type.charAt(0).toUpperCase() + type.slice(1)}`;


        const currentBay = app_data.decks[app_data.active_deck_index].bays[slotId];
        const ownedPartsCollection = app_data.collection; // Renomeado para clareza

        // Encontra peças já usadas nos OUTROS slots do deck atual
        const usedPartIds = new Set();
        const currentDeck = app_data.decks[app_data.active_deck_index];
        currentDeck.bays.forEach((bay, index) => {
            if (index.toString() === slotId) return; // Ignora o slot atual
             // Adiciona o ID base da Blade (part1.baseId) ou o ID normal das outras peças
            if (bay.part1) usedPartIds.add(bay.part1.baseId || bay.part1.id);
            if (bay.part2) usedPartIds.add(bay.part2.id); // Ratchet ou MainBlade
            if (bay.part3) usedPartIds.add(bay.part3.id); // Bit ou AssistBlade
        });

        let availableParts = [];
        let showStandardSuggestions = false;
        let showChipSuggestions = false;

        // Determina quais tipos de peças buscar com base no tipo de slot clicado
        if (type === 'primeira') {
            availableParts = [ ...getOwnedParts('blade'), ...getOwnedParts('lockchip') ];
             // Mostra ambos os tipos de sugestão se o slot estiver vazio ou já for do tipo correspondente
             showStandardSuggestions = (!currentBay.type || currentBay.type === 'standard');
             showChipSuggestions = (!currentBay.type || currentBay.type === 'chip');
        } else if (type === 'ratchet' || type === 'bit') {
            availableParts = getOwnedParts(type);
             // Só mostra sugestões standard se for um slot standard ou vazio
             showStandardSuggestions = (!currentBay.type || currentBay.type === 'standard');
        } else if (type === 'mainblade' || type === 'assistblade') {
            availableParts = getOwnedParts(type);
             // Sugestões Chip não são mostradas ao selecionar Main/Assist individualmente
             showChipSuggestions = false;
        } else {
             console.error("Tipo de peça desconhecido:", type);
             return;
        }


        // Filtra as peças disponíveis, removendo as que já estão usadas em outros slots
        const partsToShow = availableParts.filter(part => !usedPartIds.has(part.baseId || part.id));

        // --- Renderiza Sugestões ---
        modal_suggestions_container.innerHTML = ''; // Limpa sugestões anteriores
        let suggestionsFound = false;

         if (showStandardSuggestions || showChipSuggestions) {
              modal_suggestions_container.style.display = 'block';

              // Sugestões STANDARD (Blade, Ratchet, Bit)
              if (showStandardSuggestions) {
                   const headerText = translations[currentLanguage].part_suggestions_header || 'META Suggestions (Owned)';
                   modal_suggestions_container.innerHTML += `<h4>${headerText}</h4>`;
                  const matchingCombos = ALL_COMBOS.filter(combo => {
                      const bladePart = ALL_PARTS.find(p => p.name === combo.blade);
                      const ratchetPart = ALL_PARTS.find(p => p.name === combo.ratchet);
                      const bitPart = ALL_PARTS.find(p => p.name === combo.bit);

                      if (!bladePart || !ratchetPart || !bitPart) return false;

                      // Verifica posse das peças base
                      const bladeOwned = ownedPartsCollection.blades.has(bladePart.id) && ownedPartsCollection.blades.get(bladePart.id).size > 0;
                      const ratchetOwned = ownedPartsCollection.ratchets.has(ratchetPart.id);
                      const bitOwned = ownedPartsCollection.bits.has(bitPart.id);
                      if (!bladeOwned || !ratchetOwned || !bitOwned) return false;

                      // Verifica se alguma peça JÁ ESTÁ EM USO em OUTRO slot
                      if (usedPartIds.has(bladePart.id) || usedPartIds.has(ratchetPart.id) || usedPartIds.has(bitPart.id)) {
                          return false;
                      }

                      // Verifica compatibilidade com peças JÁ NO SLOT ATUAL (se houver)
                       if (currentBay.type === 'standard') {
                           if (currentBay.part1 && (currentBay.part1.baseId || currentBay.part1.id) !== bladePart.id) return false;
                           if (currentBay.part2 && currentBay.part2.id !== ratchetPart.id) return false;
                           if (currentBay.part3 && currentBay.part3.id !== bitPart.id) return false;
                       } // Se currentBay.type for 'chip' ou null, não há restrição aqui

                      return true;
                  });

                  if (matchingCombos.length > 0) {
                      suggestionsFound = true;
                      matchingCombos.forEach(combo => {
                          const bladePart = ALL_PARTS.find(p => p.name === combo.blade);
                          const ratchetPart = ALL_PARTS.find(p => p.name === combo.ratchet);
                          const bitPart = ALL_PARTS.find(p => p.name === combo.bit);
                           // Verificação extra
                           if (!bladePart || !ratchetPart || !bitPart) return;

                          const card = document.createElement('div');
                          card.className = 'suggestion-card';
                          card.innerHTML = `
                              <div class="suggestion-part"><img src="${bladePart.image}"><span>${bladePart.name}</span></div>
                              <div class="suggestion-part"><img src="${ratchetPart.image}"><span>${ratchetPart.name}</span></div>
                              <div class="suggestion-part"><img src="${bitPart.image}"><span>${bitPart.name}</span></div>`;
                          card.addEventListener('click', () => applySuggestion(slotId, combo)); // Usa a função existente
                          modal_suggestions_container.appendChild(card);
                      });
                  }
              }

              // Sugestões CHIP (Lockchip, MainBlade, AssistBlade)
              if (showChipSuggestions && ALL_CHIP_COMBOS && ALL_CHIP_COMBOS.length > 0) {
                   const headerText = translations[currentLanguage].part_chip_suggestions_header || 'Combo Suggestions (Chip)';
                   modal_suggestions_container.innerHTML += `<h4>${headerText}</h4>`;
                   const matchingChipCombos = ALL_CHIP_COMBOS.filter(combo => {
                       const chipPart = ALL_PARTS.find(p => p.name === combo.lockchip && p.type === 'lockchip');
                       const mainPart = ALL_PARTS.find(p => p.name === combo.mainblade && p.type === 'mainblade');
                       const assistPart = ALL_PARTS.find(p => p.name === combo.assistblade && p.type === 'assistblade');

                       if (!chipPart || !mainPart || !assistPart) return false;

                       // Verifica posse
                       const chipOwned = ownedPartsCollection.lockchips.has(chipPart.id);
                       const mainOwned = ownedPartsCollection.mainblades.has(mainPart.id);
                       const assistOwned = ownedPartsCollection.assistblades.has(assistPart.id);
                       if (!chipOwned || !mainOwned || !assistOwned) return false;

                       // Verifica se já está em uso em OUTRO slot
                       if (usedPartIds.has(chipPart.id) || usedPartIds.has(mainPart.id) || usedPartIds.has(assistPart.id)) {
                           return false;
                       }
                        // Verifica compatibilidade com peças JÁ NO SLOT ATUAL (se houver)
                        if (currentBay.type === 'chip') {
                            if (currentBay.part1 && currentBay.part1.id !== chipPart.id) return false;
                             // Não precisamos checar part2 e part3 aqui, pois estamos no modal da part1 (tipo 'primeira')
                        } // Se currentBay.type for 'standard' ou null, não há restrição aqui

                       return true;
                   });

                   if (matchingChipCombos.length > 0) {
                       suggestionsFound = true;
                       matchingChipCombos.forEach(combo => {
                           const chipPart = ALL_PARTS.find(p => p.name === combo.lockchip && p.type === 'lockchip');
                           const mainPart = ALL_PARTS.find(p => p.name === combo.mainblade && p.type === 'mainblade');
                           const assistPart = ALL_PARTS.find(p => p.name === combo.assistblade && p.type === 'assistblade');
                            // Verificação extra
                            if (!chipPart || !mainPart || !assistPart) return;

                           const card = document.createElement('div');
                           card.className = 'suggestion-card';
                           card.innerHTML = `
                               <div class="suggestion-part"><img src="${chipPart.image}"><span>${chipPart.name}</span></div>
                               <div class="suggestion-part"><img src="${mainPart.image}"><span>${mainPart.name}</span></div>
                               <div class="suggestion-part"><img src="${assistPart.image}"><span>${assistPart.name}</span></div>`;
                           // card.addEventListener('click', () => applyChipSuggestion(slotId, combo)); // Necessitaria de uma função applyChipSuggestion
                           modal_suggestions_container.appendChild(card);
                       });
                   }
              }

              // Mensagem se nenhuma sugestão for encontrada
              if (!suggestionsFound && modal_suggestions_container) { // Verifica se o container ainda existe
                   modal_suggestions_container.innerHTML += `<p>${translations[currentLanguage].part_suggestions_none || 'No suggestions found...'}</p>`;
              }

          } else {
               modal_suggestions_container.style.display = 'none'; // Esconde a área de sugestões
          }


        // --- Renderiza Lista de Peças Individuais ---
        const individualHeader = translations[currentLanguage].part_individual_header || 'Individual Parts (Owned)';
        modal_parts_list_container.innerHTML = `<h4>${individualHeader}</h4><div class="parts-grid"></div>`;
        const partsGrid = modal_parts_list_container.querySelector('.parts-grid');
         if (!partsGrid) return; // Segurança

        if (partsToShow.length === 0) {
            const nonePrefix = translations[currentLanguage].part_individual_none_prefix || 'No';
            const noneSuffix = translations[currentLanguage].part_individual_none_suffix || 'parts available...';
            partsGrid.innerHTML = `<p>${nonePrefix} ${type} ${noneSuffix}</p>`;
        } else {
            partsToShow.forEach(part => {
                 // Segurança: Garante que 'part' é válido
                 if (!part || !part.name || !part.image) return;

                const part_card = document.createElement('div');
                part_card.className = 'part-card owned'; // Mostra como 'owned' pois já filtramos
                part_card.innerHTML = `<img src="${part.image}" alt="${part.name}"><p>${part.name}</p><div class="part-score">${(typeof part.score === 'number' ? part.score : 0).toFixed(2)}</div>`;
                part_card.addEventListener('click', () => selectPartForDeck(part));
                partsGrid.appendChild(part_card);
            });
        }
         // Só mostra o modal se houver conteúdo para mostrar (peças ou sugestões)
         if(partsToShow.length > 0 || suggestionsFound) {
            part_modal.style.display = 'block';
         } else {
              // Se não há peças nem sugestões, mostra um alerta
               const nonePrefix = translations[currentLanguage].part_individual_none_prefix || 'No';
               const noneSuffix = translations[currentLanguage].part_individual_none_suffix || 'parts available...';
              alert(`${nonePrefix} ${type} ${noneSuffix}`);
         }
    };
	
	    const getOwnedParts = (partType) => {
        const ownedParts = [];
        const collectionSetKey = partType + 's';
        const collectionSet = app_data.collection[collectionSetKey];

         if (!collectionSet) return ownedParts; // Retorna array vazio se a coleção não existir

        if (partType === 'blade') {
            collectionSet.forEach((variantsSet, partId) => {
                const basePart = ALL_PARTS.find(p => p.id === partId);
                if (basePart) {
                    if (basePart.variantsId && ALL_VARIANTS[basePart.variantsId]) { // Usa variantsId e verifica se existe em ALL_VARIANTS
                        // Blade COM variantes
                        variantsSet.forEach(variantName => {
                             // Encontra os dados da variante (incluindo a imagem)
                             const variantData = ALL_VARIANTS[basePart.variantsId].find(v => v.name === variantName);
                             ownedParts.push({
                                 ...basePart,
                                 id: `${basePart.id}-${variantName.replace(/\s+/g, '-')}`, // ID único para a UI mais seguro
                                 baseId: basePart.id, // ID base para verificação de duplicados
                                 baseName: basePart.name,
                                 name: `${basePart.name} (${variantName})`,
                                 variant: variantName,
                                 image: variantData?.image || basePart.image // Usa imagem da variante ou fallback para imagem base
                             });
                        });
                    } else if (variantsSet.has('owned')) { // Verifica se tem o marcador 'owned'
                        // Blade SEM variantes (marcada com 'owned')
                        ownedParts.push({ ...basePart, baseId: basePart.id, baseName: basePart.name });
                    }
                } else {
                     console.warn(`Peça Blade com ID ${partId} encontrada na coleção mas não em ALL_PARTS.`);
                }
            });
        } else {
            // Outros tipos de peças
            collectionSet.forEach(partId => {
                const part = ALL_PARTS.find(p => p.id === partId);
                if (part) {
                     ownedParts.push(part); // ID base já é o part.id
                } else {
                    console.warn(`Peça ${partType} com ID ${partId} encontrada na coleção mas não em ALL_PARTS.`);
                }
            });
        }
        // Ordena as peças pelo nome para consistência
        ownedParts.sort((a, b) => a.name.localeCompare(b.name));
        return ownedParts;
    };
    // --- [MODIFICADO] ---
    // Removemos o 'async' e a chamada ao 'showInputModal'
    // Adiciona o deck diretamente.
    const addDeck = () => {
        const newDeckName = `Deck ${app_data.decks.length + 1}`;
        app_data.decks.push(createNewDeck(newDeckName));
        app_data.active_deck_index = app_data.decks.length - 1;
        updateDeckUI();
        saveAppData();
    };

    const deleteDeck = () => {
        if (app_data.decks.length <= 1) { alert(translations[currentLanguage].alert_cannot_delete_last_deck); return; }
        const deck = app_data.decks[app_data.active_deck_index]; if (!deck) return;
        const confirmTxt = `${translations[currentLanguage].confirm_delete_deck_prefix}${deck.name}${translations[currentLanguage].confirm_delete_deck_suffix}`;
        if (confirm(confirmTxt)) {
            app_data.decks.splice(app_data.active_deck_index, 1);
            app_data.active_deck_index = Math.max(0, app_data.active_deck_index - 1);
            updateDeckUI();
            saveAppData();
        }
    };
    
    const renameDeck = () => {
        const deck = app_data.decks[app_data.active_deck_index]; if (!deck || !deck_name_input) return;
        const newName = deck_name_input.value.trim();
        if (newName && newName !== deck.name) {
            deck.name = newName;
            renderDeckManager();
            saveAppData();
        } else if (!newName) {
            deck_name_input.value = deck.name;
            alert(translations[currentLanguage].alert_deck_name_empty);
        }
        deck_name_input.blur();
    };
    
    const switchDeck = () => {
        if (!deck_selector) return;
        const newIndex = parseInt(deck_selector.value, 10);
        if (!isNaN(newIndex) && newIndex >= 0 && newIndex < app_data.decks.length) {
            app_data.active_deck_index = newIndex;
            updateDeckUI();
            saveAppData();
        } else {
            deck_selector.value = app_data.active_deck_index;
        }
    };

    // --- [MODIFICADO] ---
    // Removemos as chamadas ao 'showInputModal' para 'pName' e 'tName'.
    // A lista de exportação agora não inclui Nome ou Evento.
    const exportDeckList = async () => {
        const deck = app_data.decks[app_data.active_deck_index]; if (!deck) return;
        const bayStrings = deck.bays.map(b => { if(!b) return null; if (b.type === 'standard' && b.part1 && b.part2 && b.part3) return `${b.part1.baseName||b.part1.name}/${b.part2.name}-${b.part3.name}`; if (b.type === 'chip' && b.part1 && b.part2 && b.part3) return `${b.part1.name} (${b.part2.name}/${b.part3.name})`; return null; }).filter(Boolean);
        if (bayStrings.length === 0) { alert(translations[currentLanguage].alert_export_deck_empty); return; }
        
        // Modificado para remover pName e tName
        const list = `=== DECK LIST ===\n\n===== DECK =====\n${bayStrings.join('\n')}\n\n===============`;
        
        navigator.clipboard.writeText(list)
            .then(() => alert(translations[currentLanguage].alert_export_copied))
            .catch(err => alert(`${translations[currentLanguage].alert_export_copy_failed} ${list}`));
    };
    
    // --- Função clearDeck (REINTEGRADA) ---
    const clearDeck = () => {
        if (app_data.decks[app_data.active_deck_index]) {
            app_data.decks[app_data.active_deck_index].bays.forEach(clearBay);
            updateDeckUI();
            saveAppData();
        }
    };
    
    const exportData = () => {
        saveAppData(); const data_str = localStorage.getItem('beyblade_x_data');
        if (!data_str) { alert("Não há dados para exportar."); return; }
        const data_blob = new Blob([data_str], {type: 'application/json;charset=utf-8'}); const url = URL.createObjectURL(data_blob); const a = document.createElement('a'); a.href = url;
        const timestamp = new Date().toISOString().slice(0, 10); a.download = `beyxtool_dados_${timestamp}.bx`; document.body.appendChild(a); a.click();
        setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
    };
    
    const importData = (event) => {
        const file = event.target.files[0]; if (!file) return; if (!file.name.endsWith('.bx') && file.type !== 'application/json') { alert("Por favor, selecione um arquivo .bx válido."); if (import_file_input) import_file_input.value = ''; return; }
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported_data_str = e.target.result;
                if (!imported_data_str) throw new Error(translations[currentLanguage].alert_file_read_error);
                const parsed = JSON.parse(imported_data_str);
                if (typeof parsed === 'object' && parsed !== null && 'collection' in parsed && 'decks' in parsed && 'active_deck_index' in parsed) {
                    const confirmMsg = translations[currentLanguage].confirm_import_overwrite;
                    if (confirm(confirmMsg)) {
                        localStorage.setItem('beyblade_x_data', imported_data_str);
                        loadAppData();
                        renderParts();
                        updateDeckUI();
                        alert(translations[currentLanguage].alert_import_success);
                    }
                } else {
                    throw new Error(translations[currentLanguage].alert_invalid_file_format);
                }
            } catch (error) {
                console.error("Erro ao importar dados:", error);
                alert(`${translations[currentLanguage].alert_import_error} ${error.message}`);
            } finally {
                if (import_file_input) import_file_input.value = '';
            }
        };
        reader.onerror = (error) => {
            console.error("Erro ao ler arquivo:", error);
            alert(translations[currentLanguage].alert_file_read_error);
            if (import_file_input) import_file_input.value = '';
        };
        reader.readAsText(file);
    };

    // --- INICIALIZAÇÃO E EVENTOS ---
    const savedLanguage = localStorage.getItem('beyXToolLanguage');
    if (savedLanguage && translations[savedLanguage]) currentLanguage = savedLanguage;
    setupTabs();
    loadAppData();
    renderParts();
    renderMetaCombos();
    updateDeckUI();
    setLanguage(currentLanguage);

    langPtBrButton?.addEventListener('click', () => setLanguage('pt-br'));
    langEnButton?.addEventListener('click', () => setLanguage('en'));
    collection_filter?.addEventListener('change', applyFilter);
    export_button?.addEventListener('click', exportData);
    import_button?.addEventListener('click', () => import_file_input?.click());
    import_file_input?.addEventListener('change', importData);
    clear_deck_button?.addEventListener('click', clearDeck);
    export_deck_button?.addEventListener('click', exportDeckList);
    deck_slots.forEach(slot => { slot.querySelectorAll('.part-placeholder').forEach(ph => { ph.addEventListener('click', () => { const sId = slot.dataset.slotId; const t = ph.dataset.type; if(sId !== undefined && t) openPartSelector(sId, t); }); }); });
    add_deck_button?.addEventListener('click', addDeck);
    delete_deck_button?.addEventListener('click', deleteDeck);
    deck_selector?.addEventListener('change', switchDeck);
    deck_name_input?.addEventListener('blur', renameDeck);
    part_modal_close?.addEventListener('click', closePartModal);
    variant_modal_close?.addEventListener('click', closeVariantModal);
    
    // Listeners do modal de input
    inputModalOk?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(inputModalField.value); });
    inputModalCancel?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(null); });
    inputModalClose?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(null); });

    window.addEventListener('click', (event) => { 
        if (event.target === part_modal) closePartModal(); 
        if (event.target === variant_modal) closeVariantModal(); 
        
        // Corrigido para disparar o fluxo de 'cancelar' (onInputConfirm(null)) ao clicar fora
        // Isso garante que a Promise de 'showInputModal' seja resolvida, se estiver aberta.
        if (event.target === inputModal) {
             if (onInputConfirm) onInputConfirm(null);
        }
    });

});
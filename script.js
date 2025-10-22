document.addEventListener('DOMContentLoaded', () => {

    // Verifica se as variáveis do database.js foram carregadas
    if (typeof ALL_VARIANTS === 'undefined' || typeof ALL_PARTS === 'undefined' || typeof ALL_COMBOS === 'undefined' || typeof translations === 'undefined') {
        alert("Erro: Arquivo database.js não carregado ou corrompido. Verifique o console para mais detalhes.");
        console.error("Variáveis de database.js (ALL_VARIANTS, ALL_PARTS, ALL_COMBOS, translations) não encontradas.");
        return;
    }

    const TOP_10_COMBOS = ALL_COMBOS.slice(0, 10);
    let currentLanguage = 'pt-br';

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
    const variant_modal_close = document.getElementById('variant-selector-close');
    const langPtBrButton = document.getElementById('lang-pt-br');
    const langEnButton = document.getElementById('lang-en');
    const inputModal = document.getElementById('input-modal');
    const inputModalTitle = document.getElementById('input-modal-title');
    const inputModalField = document.getElementById('input-modal-field');
    const inputModalOk = document.getElementById('input-modal-ok');
    const inputModalCancel = document.getElementById('input-modal-cancel');
    const inputModalClose = document.getElementById('input-modal-close');

    // Elementos do Placar
    const scoreP1Display = document.getElementById('score-p1');
    const scoreP2Display = document.getElementById('score-p2');
    const scoreButtons = document.querySelectorAll('.score-btn');
    const resetScoreButton = document.getElementById('reset-score-button');
    const p1NameInput = document.querySelector('#player1 .player-name');
    const p2NameInput = document.querySelector('#player2 .player-name');

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

    const closeInputModal = () => {
        if (inputModal) inputModal.style.display = 'none';
        onInputConfirm = null;
    };

    const translateUI = () => {
        const langPack = translations[currentLanguage];
        if (!langPack) return;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (langPack[key]) {
                 if (element.placeholder !== undefined && key.includes('placeholder')) { element.placeholder = langPack[key]; }
                 else if (element.title !== undefined && key.includes('title')) { element.title = langPack[key]; }
                 else if (element.tagName === 'SPAN' && element.parentElement?.classList.contains('part-placeholder')) { element.textContent = langPack[key]; }
                 else if (element.tagName === 'SPAN' && element.parentElement?.classList.contains('bey-score')) { element.textContent = langPack[key]; }
                 else if (element.tagName === 'INPUT' && (key === 'player_1_default' || key === 'player_2_default')) {
                    const defaultP1_pt = translations['pt-br']?.player_1_default || "Jogador 1";
                    const defaultP1_en = translations['en']?.player_1_default || "Player 1";
                    const defaultP2_pt = translations['pt-br']?.player_2_default || "Jogador 2";
                    const defaultP2_en = translations['en']?.player_2_default || "Player 2";

                    if (key === 'player_1_default' && (element.value === defaultP1_pt || element.value === defaultP1_en)) {
                         element.value = langPack[key];
                    } else if (key === 'player_2_default' && (element.value === defaultP2_pt || element.value === defaultP2_en)) {
                         element.value = langPack[key];
                    }
                 }
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

    const createNewDeck = (name) => ({
        name: name,
        bays: [
            { type: null, part1: null, part2: null, part3: null, part4: null, part5: null },
            { type: null, part1: null, part2: null, part3: null, part4: null, part5: null },
            { type: null, part1: null, part2: null, part3: null, part4: null, part5: null }
        ]
    });
    const getSerializableCollection = () => ({ blades: Object.fromEntries(Array.from(app_data.collection.blades.entries(), ([id, set]) => [id, [...set]])), ratchets: [...app_data.collection.ratchets], bits: [...app_data.collection.bits], mainblades: [...app_data.collection.mainblades], assistblades: [...app_data.collection.assistblades], lockchips: [...app_data.collection.lockchips], });
    const loadCollectionFromParsed = (parsedCollection) => {
        const collection = { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() };
        try { if (parsedCollection) { if (parsedCollection.blades) collection.blades = new Map(Object.entries(parsedCollection.blades).map(([id, variants]) => [id, new Set(variants)])); if (parsedCollection.ratchets) collection.ratchets = new Set(parsedCollection.ratchets); if (parsedCollection.bits) collection.bits = new Set(parsedCollection.bits); if (parsedCollection.mainblades) collection.mainblades = new Set(parsedCollection.mainblades); if (parsedCollection.assistblades) collection.assistblades = new Set(parsedCollection.assistblades); if (parsedCollection.lockchips) collection.lockchips = new Set(parsedCollection.lockchips); } } catch(e) { console.error("Erro ao processar coleção salva:", e); } return collection;
    };
    const saveAppData = () => { try { localStorage.setItem('beyblade_x_data', JSON.stringify({ collection: getSerializableCollection(), decks: app_data.decks, active_deck_index: app_data.active_deck_index })); } catch (e) { console.error("Erro ao salvar dados:", e); alert(translations[currentLanguage].alert_save_error); } };

    const loadAppData = () => {
        const saved_data_str = localStorage.getItem('beyblade_x_data');
        if (saved_data_str) {
            try {
                const parsed = JSON.parse(saved_data_str);
                app_data.collection = loadCollectionFromParsed(parsed.collection || {});
                app_data.decks = Array.isArray(parsed.decks) ? parsed.decks : [];
                app_data.active_deck_index = (typeof parsed.active_deck_index === 'number') ? parsed.active_deck_index : 0;

                app_data.decks.forEach(deck => {
                    deck.bays.forEach(bay => {
                        if (bay && typeof bay === 'object') {
                            if (!bay.hasOwnProperty('part4')) { bay.part4 = null; }
                            if (!bay.hasOwnProperty('part5')) { bay.part5 = null; }
                        } else {
                            const index = deck.bays.indexOf(bay);
                            if (index !== -1) {
                                deck.bays[index] = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null };
                            }
                        }
                    });
                     while (deck.bays.length < 3) {
                         deck.bays.push({ type: null, part1: null, part2: null, part3: null, part4: null, part5: null });
                     }
                     deck.bays = deck.bays.slice(0, 3);
                });

            } catch (e) {
                console.error("Erro ao carregar dados salvos:", e);
                app_data = { collection: { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() }, decks: [], active_deck_index: 0 };
            }
        }
        if (app_data.decks.length === 0) app_data.decks.push(createNewDeck("Meu Primeiro Deck"));
        if (app_data.active_deck_index >= app_data.decks.length || app_data.active_deck_index < 0) app_data.active_deck_index = 0;

         const activeDeck = app_data.decks[app_data.active_deck_index];
         if (activeDeck) {
             while (activeDeck.bays.length < 3) {
                 activeDeck.bays.push({ type: null, part1: null, part2: null, part3: null, part4: null, part5: null });
             }
             activeDeck.bays = activeDeck.bays.slice(0, 3);
             activeDeck.bays.forEach(bay => {
                  if (!bay || typeof bay !== 'object') {
                      const index = activeDeck.bays.indexOf(bay);
                      if (index !== -1) activeDeck.bays[index] = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null };
                  } else {
                       if (!bay.hasOwnProperty('part4')) bay.part4 = null;
                       if (!bay.hasOwnProperty('part5')) bay.part5 = null;
                  }
             });
         }

         // Carregar nomes dos players
         const p1Name = localStorage.getItem('beyXToolP1Name');
         const p2Name = localStorage.getItem('beyXToolP2Name');
         const langPack = translations[currentLanguage] || translations['pt-br']; // Garante fallback para pt-br
         if (p1NameInput) p1NameInput.value = p1Name || langPack.player_1_default || "Jogador 1";
         if (p2NameInput) p2NameInput.value = p2Name || langPack.player_2_default || "Jogador 2";
    };

    const renderMetaCombos = () => {
        if (!meta_combos_container) return; meta_combos_container.innerHTML = '';
        TOP_10_COMBOS.forEach((combo, index) => {
            const blade_part = ALL_PARTS.find(p => p.name === combo.blade); const ratchet_part = ALL_PARTS.find(p => p.name === combo.ratchet); const bit_part = ALL_PARTS.find(p => p.name === combo.bit); if (!blade_part || !ratchet_part || !bit_part) return;
            const combo_card = document.createElement('div'); combo_card.className = 'meta-combo-card';
            combo_card.innerHTML = `<div class="rank">#${index + 1}</div><div class="parts"><div class="part-display"><img src="${blade_part.image || 'images/placeholder.png'}" alt="${combo.blade}"><span>${combo.blade}</span></div><div class="part-display"><img src="${ratchet_part.image || 'images/placeholder.png'}" alt="${combo.ratchet}"><span>${combo.ratchet}</span></div><div class="part-display"><img src="${bit_part.image || 'images/placeholder.png'}" alt="${combo.bit}"><span>${combo.bit}</span></div></div><div class="points">${combo.points.toFixed(2)} pts</div>`;
            meta_combos_container.appendChild(combo_card);
        });
    };

    const renderParts = () => {
        const containers = { blades: blades_container, ratchets: ratchets_container, bits: bits_container, mainblades: mainblades_container, assistblades: assistblades_container, lockchips: lockchips_container };
        Object.values(containers).forEach(c => { if(c) c.innerHTML = ''; });

        const sortValue = collection_sort ? collection_sort.value : 'name_asc';
        const filterOn = collection_filter ? collection_filter.checked : false;

        let partsToRender = [...ALL_PARTS];

        if (filterOn) {
            partsToRender = partsToRender.filter(part => {
                const collectionSet = app_data.collection[part.type + 's'];
                if (part.type === 'blade') {
                    return (collectionSet?.has(part.id) && collectionSet.get(part.id).size > 0);
                }
                return collectionSet?.has(part.id);
            });
        }

        switch (sortValue) {
            case 'name_asc':
                partsToRender.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name_desc':
                partsToRender.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'score_desc':
                partsToRender.sort((a, b) => {
                    if (b.score !== a.score) return b.score - a.score;
                    return a.name.localeCompare(b.name);
                });
                break;
            case 'score_asc':
                partsToRender.sort((a, b) => {
                    if (a.score !== b.score) return a.score - b.score;
                    return a.name.localeCompare(b.name);
                });
                break;
            case 'type':
                const typeOrder = { 'attack': 1, 'defense': 2, 'stamina': 3, 'balance': 4 };
                partsToRender.sort((a, b) => {
                    const typeA = a.bey_type ? typeOrder[a.bey_type.toLowerCase()] : 5;
                    const typeB = b.bey_type ? typeOrder[b.bey_type.toLowerCase()] : 5;
                    if (typeA !== typeB) return typeA - typeB;
                    return a.name.localeCompare(b.name);
                });
                break;
            default:
                partsToRender.sort((a, b) => a.name.localeCompare(b.name));
        }

        partsToRender.forEach(part => {
            const container = containers[part.type + 's']; if (!container) return;
            const collectionSet = app_data.collection[part.type + 's'];

            const part_card = document.createElement('div');
            part_card.className = 'part-card';
            part_card.dataset.partId = part.id;

            let isOwned = (part.type === 'blade') ? (collectionSet?.has(part.id) && collectionSet.get(part.id).size > 0) : collectionSet?.has(part.id);
            if (isOwned) part_card.classList.add('owned');

            part_card.innerHTML = `<img src="${part.image || 'images/placeholder.png'}" alt="${part.name}"><p>${part.name}</p><div class="part-score">${part.score.toFixed(2)}</div>`;

            if ((part.type === 'blade' || part.type === 'bit') && part.bey_type) {
                const typeSymbolDiv = document.createElement('div');
                typeSymbolDiv.className = 'part-type-symbol';
                const typeName = part.bey_type.charAt(0).toUpperCase() + part.bey_type.slice(1);
                const imgPath = `images/types/${part.bey_type.toLowerCase()}.png`;
                const img = new Image();
                img.src = imgPath;
                img.onload = () => {
                    typeSymbolDiv.innerHTML = `<img src="${imgPath}" alt="${typeName}" title="${typeName} Type">`;
                    part_card.appendChild(typeSymbolDiv);
                }
                img.onerror = () => { console.warn(`Imagem de tipo não encontrada: ${imgPath}`); }
            }

            // --- [INÍCIO DA LÓGICA ATUALIZADA DE HOLD/CLIQUE] ---
            let pressTimerOwner = null;
            let pressTimerInfo = null;
            let didOwnerHold = false;
            let didInfoHold = false;
            let interactionStartTime = 0; // Para medir tempo de clique

            const startHold = (e) => {
                if (e.button === 2) return;
                interactionStartTime = Date.now(); // Marca o tempo de início
                didOwnerHold = false;
                didInfoHold = false;

                pressTimerOwner = setTimeout(() => {
                    didOwnerHold = true;
                }, 500);

                pressTimerInfo = setTimeout(() => {
                    didInfoHold = true;
                    didOwnerHold = false;
                    showProductInfoPopup(part, part_card);
                }, 2000);
            };

            const releaseHold = (e) => {
                clearTimeout(pressTimerOwner);
                clearTimeout(pressTimerInfo);

                const interactionTime = Date.now() - interactionStartTime;
                const isMouseEvent = e.type === 'mouseup'; // Verifica se foi evento de mouse

                if (didInfoHold) {
                    // >= 2s: Info foi mostrado, não faz nada ao soltar.
                } else if (didOwnerHold) {
                    // 0.5s <= tempo < 2s: Faz o toggle (ação normal de hold para touch/mouse).
                    togglePartOwnership(part);
                } else if (isMouseEvent && interactionTime < 500) {
                    // < 0.5s E é mouse: Faz o toggle (ação de clique rápido no PC).
                    togglePartOwnership(part);
                }
                // Se for evento de toque (touchend) e interactionTime < 500, não faz nada (evita swipe click).

                didOwnerHold = false;
                didInfoHold = false;
                interactionStartTime = 0;
            };


            const abortHold = (e) => {
                 clearTimeout(pressTimerOwner);
                 clearTimeout(pressTimerInfo);
                 didOwnerHold = false;
                 didInfoHold = false;
                 interactionStartTime = 0;
            };

            part_card.addEventListener('mousedown', startHold);
            part_card.addEventListener('touchstart', startHold, { passive: true });
            part_card.addEventListener('mouseup', releaseHold);
            part_card.addEventListener('touchend', releaseHold);
            part_card.addEventListener('mouseleave', abortHold);
            part_card.addEventListener('touchcancel', abortHold);
            part_card.addEventListener('contextmenu', (e) => e.preventDefault());
             // --- [FIM DA LÓGICA ATUALIZADA DE HOLD/CLIQUE] ---

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
            let bay = currentDeck.bays[bayIndex];
            if (!bay || typeof bay !== 'object') {
                currentDeck.bays[bayIndex] = { type: null, part1: null, part2: null, part3: null, part4: null, part5: null };
                bay = currentDeck.bays[bayIndex];
            } else {
                 if (!bay.hasOwnProperty('part4')) bay.part4 = null;
                 if (!bay.hasOwnProperty('part5')) bay.part5 = null;
            }
            let bayScore = 0;

            const selectors = {
                p1ph: slot.querySelector('.part-placeholder[data-type="primeira"]'), p1n: slot.querySelector('.part-name-display[data-name-type="primeira"]'),
                mbph: slot.querySelector('.part-placeholder[data-type="mainblade"]'), mbn: slot.querySelector('.part-name-display[data-name-type="mainblade"]'),
                abph: slot.querySelector('.part-placeholder[data-type="assistblade"]'), abn: slot.querySelector('.part-name-display[data-name-type="assistblade"]'),
                rph: slot.querySelector('.part-placeholder[data-type="ratchet"]'), rn: slot.querySelector('.part-name-display[data-name-type="ratchet"]'),
                bph: slot.querySelector('.part-placeholder[data-type="bit"]'), bn: slot.querySelector('.part-name-display[data-name-type="bit"]'),
                scoreEl: slot.querySelector('.bey-score span:last-child')
            };

            const scoreLabelEl = slot.querySelector('.bey-score span:first-child');
             if (scoreLabelEl && langPack.deck_score_label) {
                 scoreLabelEl.textContent = langPack.deck_score_label + ": ";
             }

            if (Object.values(selectors).some(el => !el)) { console.error(`Elementos faltando no slot ${bayIndex}. Verifique o HTML.`); return; }

            slot.dataset.bayType = bay.type || 'empty';

            const reset = (ph, n, key) => {
                 ph.innerHTML = `<span data-translate="${key}">${langPack[key]||key.replace('deck_placeholder_', '').replace('_section_title', '')}</span>`;
                 n.textContent = selectText;
             };
            const set = (ph, n, part) => {
                if (!part) return 0;
                const name = part.variant ? `${part.baseName} (${part.variant})` : part.name;
                let img = part.image || 'images/placeholder.png';
                if (part.type==='blade' && part.variant && part.baseId && ALL_VARIANTS[part.baseId]) {
                    const vData = ALL_VARIANTS[part.baseId].find(v => v.name === part.variant);
                    if (vData?.image) img=vData.image;
                    else { const sVar = ALL_VARIANTS[part.baseId].find(v => v.name === 'Stock'); if (sVar?.image) img=sVar.image; }
                }
                const score = (typeof part.score === 'number') ? part.score : 0;
                ph.innerHTML = `<img src="${img}" alt="${name}"><span class="part-score-deck">${score.toFixed(2)}</span>`;
                n.textContent = name;
                return score;
            };

            reset(selectors.p1ph, selectors.p1n, 'deck_placeholder_primeira');
            reset(selectors.mbph, selectors.mbn, 'deck_placeholder_mainblade');
            reset(selectors.abph, selectors.abn, 'deck_placeholder_assistblade');
            reset(selectors.rph, selectors.rn, 'deck_placeholder_ratchet');
            reset(selectors.bph, selectors.bn, 'deck_placeholder_bit');

            if (bay.type === 'standard') {
                bayScore += set(selectors.p1ph, selectors.p1n, bay.part1);
                bayScore += set(selectors.rph, selectors.rn, bay.part4);
                bayScore += set(selectors.bph, selectors.bn, bay.part5);
            } else if (bay.type === 'chip') {
                bayScore += set(selectors.p1ph, selectors.p1n, bay.part1);
                bayScore += set(selectors.mbph, selectors.mbn, bay.part2);
                bayScore += set(selectors.abph, selectors.abn, bay.part3);
                bayScore += set(selectors.rph, selectors.rn, bay.part4);
                bayScore += set(selectors.bph, selectors.bn, bay.part5);
            }

            selectors.scoreEl.textContent = bayScore.toFixed(2);
            totalDeckScore += bayScore;
        });

        const deckInfoScoreP = document.querySelector('.deck-info p');
        if (deckInfoScoreP) {
            const totalLabel = langPack.deck_total_score_label || 'Total Deck Score:';
             deckInfoScoreP.querySelector('span:first-of-type').textContent = totalLabel + " ";
             deckInfoScoreP.querySelector('#deck-score').textContent = totalDeckScore.toFixed(2);
        }

        renderDeckManager();
    };


    const showProductInfoPopup = (part, element) => {
        document.querySelectorAll('.part-info-popup').forEach(p => p.remove());
        // [MODIFICADO] Busca a fonte usando o ID base da Blade, se for uma variante
        const sourceId = part.baseId || part.id;
        const sources = PART_SOURCES[sourceId];
        if (!sources || sources.length === 0) return;
        const popup = document.createElement('div'); popup.className = 'part-info-popup';
        const titleText = translations[currentLanguage].part_source_title || "Found in:";
        popup.innerHTML = `<h5>${titleText}</h5><ul>${sources.map(s => `<li>${s}</li>`).join('')}</ul>`;
        const rect = element.getBoundingClientRect(); document.body.appendChild(popup);
        if (rect.bottom + popup.offsetHeight + 10 < window.innerHeight) popup.style.top = `${window.scrollY + rect.bottom + 5}px`; else popup.style.top = `${window.scrollY + rect.top - popup.offsetHeight - 5}px`;
        popup.style.left = `${window.scrollX + rect.left + (element.offsetWidth / 2) - (popup.offsetWidth / 2)}px`;
    };

    // --- [FUNÇÃO MODIFICADA] togglePartOwnership ---
    const togglePartOwnership = (part) => {
        document.querySelectorAll('.part-info-popup').forEach(p => p.remove());
        // Encontra o card *antes* de modificar os dados
        const partCard = document.querySelector(`#collection-tab .part-card[data-part-id="${part.id}"]`);

        if (part.type === 'blade') {
            const variantList = part.variantsId ? ALL_VARIANTS[part.variantsId] : null;
            if (part.variantsId && variantList && variantList.length > 1) {
                // Se tem variantes e mais de uma, abre o seletor (não muda posse aqui)
                openVariantSelector(part);
            } else {
                // Se não tem variantes ou só tem uma, faz o toggle direto
                const collectionSet = app_data.collection.blades;
                if (!collectionSet) return;

                if (collectionSet.has(part.id)) {
                    // Remove da coleção
                    collectionSet.delete(part.id);
                    if (partCard) partCard.classList.remove('owned'); // Atualiza a classe
                    // Remove de decks
                    app_data.decks.forEach(deck => deck.bays.forEach(bay => {
                        if (bay.part1 && (bay.part1.baseId || bay.part1.id) === part.id) clearBay(bay);
                    }));
                } else {
                    // Adiciona à coleção
                    const variantToAdd = (part.variantsId && variantList?.length === 1) ? variantList[0].name : 'owned';
                    collectionSet.set(part.id, new Set([variantToAdd]));
                    if (partCard) partCard.classList.add('owned'); // Atualiza a classe
                }
                saveAppData(); // Salva a alteração
                updateDeckUI(); // Atualiza o deck builder se a peça foi removida
                // Não chama renderParts()
            }
        } else {
            // Lógica para Ratchets, Bits, etc. (sem variantes)
            const collectionSetKey = part.type + 's';
            const collection_set = app_data.collection[collectionSetKey];
            if (!collection_set) return;

            if (collection_set.has(part.id)) {
                // Remove
                collection_set.delete(part.id);
                if (partCard) partCard.classList.remove('owned'); // Atualiza classe
                // Remove de decks (part2 a part5)
                app_data.decks.forEach(deck => deck.bays.forEach(bay => {
                    if (bay.part2?.id === part.id) bay.part2 = null;
                    if (bay.part3?.id === part.id) bay.part3 = null;
                    if (bay.part4?.id === part.id) bay.part4 = null;
                    if (bay.part5?.id === part.id) bay.part5 = null;
                }));
            } else {
                // Adiciona
                collection_set.add(part.id);
                if (partCard) partCard.classList.add('owned'); // Atualiza classe
            }
            saveAppData(); // Salva
            updateDeckUI(); // Atualiza deck builder
            // Não chama renderParts()
        }
    };
    // --- [FIM DA FUNÇÃO MODIFICADA] ---


    // --- [MANIPULADOR DE CLIQUE MODIFICADO] openVariantSelector ---
    const openVariantSelector = (part) => {
        variant_modal_part = part;
        const titlePrefix = translations[currentLanguage].variant_modal_title_prefix || "Select Variants for";
        variant_modal_title.textContent = `${titlePrefix} ${part.name}`;
        variant_modal_checkboxes.innerHTML = '<div id="variant-modal-grid"></div>';
        const grid = document.getElementById('variant-modal-grid');
        if (!grid) return;

        const owned = app_data.collection.blades.get(part.id) || new Set();
        const variantList = ALL_VARIANTS[part.variantsId];
        if (!variantList) { closeVariantModal(); return; }

        // Encontra o card principal na coleção ANTES de adicionar listeners
        const mainCard = document.querySelector(`#collection-tab .part-card[data-part-id="${part.id}"]`);

        variantList.forEach(vData => {
            if (!vData?.name) return;
            const card = document.createElement('div');
            card.className = 'variant-card';
            card.dataset.variantName = vData.name;
            card.innerHTML = `<img src="${vData.image || ''}" alt="${vData.name}"><p>${vData.name}</p>`;
            if (owned.has(vData.name)) card.classList.add('selected');

            card.addEventListener('click', () => {
                const currentOwned = app_data.collection.blades.get(part.id) || new Set();
                let wasModified = false;

                // Atualiza a posse da variante específica
                if (currentOwned.has(vData.name)) {
                    currentOwned.delete(vData.name);
                    card.classList.remove('selected'); // Atualiza visual do card da variante
                    wasModified = true;
                } else {
                    currentOwned.add(vData.name);
                    card.classList.add('selected'); // Atualiza visual do card da variante
                    wasModified = true;
                }

                if (wasModified) {
                    // Atualiza a coleção principal
                    if (currentOwned.size > 0) {
                        app_data.collection.blades.set(part.id, currentOwned);
                        if (mainCard) mainCard.classList.add('owned'); // Atualiza classe do card principal
                    } else {
                        app_data.collection.blades.delete(part.id);
                        if (mainCard) mainCard.classList.remove('owned'); // Atualiza classe do card principal
                        // Remove a blade de qualquer deck se nenhuma variante for possuída
                        app_data.decks.forEach(d => d.bays.forEach(b => {
                            if (b.part1?.baseId === part.id) clearBay(b);
                        }));
                    }
                    saveAppData(); // Salva
                    updateDeckUI(); // Atualiza deck builder
                    // Não chama renderParts()
                }
                 closeVariantModal(); // Fecha o modal após o clique
            });
            grid.appendChild(card);
        });
        variant_modal.style.display = 'block';
    };
    // --- [FIM DO MANIPULADOR MODIFICADO] ---

    const closeVariantModal = () => { if (variant_modal) variant_modal.style.display = 'none'; variant_modal_part = null; };

    const clearBay = (bay) => {
        if (bay) {
            bay.type = null;
            bay.part1 = null;
            bay.part2 = null;
            bay.part3 = null;
            bay.part4 = null;
            bay.part5 = null;
        }
    };
    const closePartModal = () => { if (part_modal) part_modal.style.display = 'none'; };

    const selectPartForDeck = (part) => {
        const { slotId, type } = active_deck_slot;
        const bay = app_data.decks[app_data.active_deck_index].bays[slotId];
        if (!bay) return;

        if (part.type === 'blade' && !part.baseId) {
            part = { ...part, baseId: part.id, baseName: part.name, variant: part.variant || 'Stock' };
        }

        const targetPartMap = {
            'primeira': 'part1', 'mainblade': 'part2', 'assistblade': 'part3',
            'ratchet': 'part4', 'bit': 'part5'
        };
        const targetPartKey = targetPartMap[type];

        if (!targetPartKey) { console.error("Tipo de placeholder inválido:", type); closePartModal(); return; }

        if (targetPartKey === 'part1') {
            const newType = (part.type === 'blade') ? 'standard' : (part.type === 'lockchip') ? 'chip' : null;
            if (!newType) return;

            if (bay.type !== newType) {
                 if (newType === 'standard') {
                     bay.part2 = null;
                     bay.part3 = null;
                 }
                 bay.type = newType;
            }
            bay.part1 = part;
             if (bay.type === 'standard') { bay.part2 = null; bay.part3 = null; }

        } else if (targetPartKey === 'part2' || targetPartKey === 'part3') {
            if (bay.type === 'chip') {
                if ((targetPartKey === 'part2' && part.type === 'mainblade') || (targetPartKey === 'part3' && part.type === 'assistblade')) {
                    bay[targetPartKey] = part;
                } else { alert(translations[currentLanguage].alert_incompatible_part.replace('{partType}', part.type).replace('{bayType}', 'Chip Slot')); closePartModal(); return; }
            } else { alert(translations[currentLanguage].alert_incompatible_part.replace('{partType}', part.type).replace('{bayType}', bay.type || 'Empty')); closePartModal(); return; }

        } else if (targetPartKey === 'part4' || targetPartKey === 'part5') {
            if (bay.type === 'standard' || bay.type === 'chip') {
                 if ((targetPartKey === 'part4' && part.type === 'ratchet') || (targetPartKey === 'part5' && part.type === 'bit')) {
                      bay[targetPartKey] = part;
                 } else { alert(translations[currentLanguage].alert_incompatible_part.replace('{partType}', part.type).replace('{bayType}', 'Ratchet/Bit Slot')); closePartModal(); return; }
            } else { alert(translations[currentLanguage].alert_incompatible_part.replace('{partType}', part.type).replace('{bayType}', 'Empty Slot')); closePartModal(); return; }
        }

        updateDeckUI();
        saveAppData();
        closePartModal();
    };

 const openPartSelector = (slotId, type) => {
        active_deck_slot = { slotId, type };
        const titlePrefix = translations[currentLanguage].part_selector_modal_title_prefix || "Select:";
        modal_title.textContent = `${titlePrefix} ${type.charAt(0).toUpperCase() + type.slice(1)}`;

        const currentBay = app_data.decks[app_data.active_deck_index].bays[slotId];
        const ownedPartsCollection = app_data.collection;

        const usedPartIds = new Set();
        const currentDeck = app_data.decks[app_data.active_deck_index];
        currentDeck.bays.forEach((bay, index) => {
            if (index.toString() === slotId) return;
            if (bay.part1) usedPartIds.add(bay.part1.baseId || bay.part1.id);
            if (bay.part2) usedPartIds.add(bay.part2.id);
            if (bay.part3) usedPartIds.add(bay.part3.id);
            if (bay.part4) usedPartIds.add(bay.part4.id);
            if (bay.part5) usedPartIds.add(bay.part5.id);
        });

        let availableParts = [];
        let showStandardSuggestions = false;
        let showChipSuggestions = false;

        if (type === 'primeira') {
            availableParts = [...getOwnedParts('blade'), ...getOwnedParts('lockchip')];
            showStandardSuggestions = (!currentBay.type || currentBay.type === 'standard');
            showChipSuggestions = (!currentBay.type || currentBay.type === 'chip');
        } else if (type === 'ratchet' || type === 'bit') {
            availableParts = getOwnedParts(type);
            showStandardSuggestions = (currentBay.type === 'standard');
            showChipSuggestions = (currentBay.type === 'chip');
        } else if (type === 'mainblade' || type === 'assistblade') {
            availableParts = getOwnedParts(type);
            showChipSuggestions = (!currentBay.type || currentBay.type === 'chip');
        } else {
             console.error("Tipo de peça desconhecido:", type); return;
        }

        const partsToShow = availableParts.filter(part => !usedPartIds.has(part.baseId || part.id));

        modal_suggestions_container.innerHTML = '';
        let suggestionsFound = false;
        modal_suggestions_container.style.display = 'none';

        if (showStandardSuggestions || showChipSuggestions) {
            modal_suggestions_container.style.display = 'block';

            if (showStandardSuggestions && (type === 'primeira' || type === 'ratchet' || type === 'bit')) {
                const headerText = translations[currentLanguage].part_suggestions_header || 'META Suggestions (Owned)';
                modal_suggestions_container.innerHTML += `<h4>${headerText}</h4>`;
                const matchingCombos = ALL_COMBOS.filter(combo => {
                    const bladePart = ALL_PARTS.find(p => p.name === combo.blade);
                    const ratchetPart = ALL_PARTS.find(p => p.name === combo.ratchet);
                    const bitPart = ALL_PARTS.find(p => p.name === combo.bit);
                    if (!bladePart || !ratchetPart || !bitPart) return false;
                    const bladeOwned = ownedPartsCollection.blades.has(bladePart.id) && ownedPartsCollection.blades.get(bladePart.id).size > 0;
                    const ratchetOwned = ownedPartsCollection.ratchets.has(ratchetPart.id);
                    const bitOwned = ownedPartsCollection.bits.has(bitPart.id);
                    if (!bladeOwned || !ratchetOwned || !bitOwned) return false;
                    if (usedPartIds.has(bladePart.id) || usedPartIds.has(ratchetPart.id) || usedPartIds.has(bitPart.id)) return false;

                    if (!currentBay.type || currentBay.type === 'standard') {
                        if (currentBay.part1 && (currentBay.part1.baseId || currentBay.part1.id) !== bladePart.id) return false;
                        if (currentBay.part4 && currentBay.part4.id !== ratchetPart.id) return false;
                        if (currentBay.part5 && currentBay.part5.id !== bitPart.id) return false;
                    } else { return false; }
                    return true;
                });
                if (matchingCombos.length > 0) {
                     suggestionsFound = true;
                     matchingCombos.forEach(combo => {
                        const bladePart = ALL_PARTS.find(p => p.name === combo.blade);
                        const ratchetPart = ALL_PARTS.find(p => p.name === combo.ratchet);
                        const bitPart = ALL_PARTS.find(p => p.name === combo.bit);
                        if (!bladePart || !ratchetPart || !bitPart) return;
                        const card = document.createElement('div');
                        card.className = 'suggestion-card';

                        card.innerHTML = `
                            <div class="suggestion-part"><img src="${bladePart.image || 'images/placeholder.png'}"><span>${bladePart.name}</span></div>
                            <div class="suggestion-part"><img src="${ratchetPart.image || 'images/placeholder.png'}"><span>${ratchetPart.name}</span></div>
                            <div class="suggestion-part"><img src="${bitPart.image || 'images/placeholder.png'}"><span>${bitPart.name}</span></div>
                            <div class="suggestion-points">${combo.points.toFixed(2)} META Points</div>`;

                        card.addEventListener('click', () => applySuggestion(slotId, combo));
                        modal_suggestions_container.appendChild(card);
                     });
                 }
            }

            if (showChipSuggestions && typeof ALL_CHIP_COMBOS !== 'undefined' && ALL_CHIP_COMBOS.length > 0 && (type === 'primeira' || type === 'mainblade' || type === 'assistblade' || type === 'ratchet' || type === 'bit')) {
                const headerText = translations[currentLanguage].part_chip_suggestions_header || 'Combo Suggestions (Chip)';
                if (!suggestionsFound || !showStandardSuggestions) { modal_suggestions_container.innerHTML += `<h4>${headerText}</h4>`; }
                else { modal_suggestions_container.innerHTML += `<hr style="margin: 1rem 0; border-color: var(--border-color);"><h4>${headerText}</h4>`; }

                const matchingChipCombos = ALL_CHIP_COMBOS.filter(combo => {
                    const chipPart = ALL_PARTS.find(p => p.name === combo.lockchip && p.type === 'lockchip');
                    const mainPart = ALL_PARTS.find(p => p.name === combo.mainblade && p.type === 'mainblade');
                    const assistPart = ALL_PARTS.find(p => p.name === combo.assistblade && p.type === 'assistblade');
                    const ratchetPart = combo.ratchet ? ALL_PARTS.find(p => p.name === combo.ratchet && p.type === 'ratchet') : null;
                    const bitPart = combo.bit ? ALL_PARTS.find(p => p.name === combo.bit && p.type === 'bit') : null;
                    if (!chipPart || !mainPart || !assistPart) return false;

                    const chipOwned = ownedPartsCollection.lockchips.has(chipPart.id);
                    const mainOwned = ownedPartsCollection.mainblades.has(mainPart.id);
                    const assistOwned = ownedPartsCollection.assistblades.has(assistPart.id);
                    const ratchetOwned = !ratchetPart || ownedPartsCollection.ratchets.has(ratchetPart.id);
                    const bitOwned = !bitPart || ownedPartsCollection.bits.has(bitPart.id);
                    if (!chipOwned || !mainOwned || !assistOwned || !ratchetOwned || !bitOwned) return false;

                    if (usedPartIds.has(chipPart.id) || usedPartIds.has(mainPart.id) || usedPartIds.has(assistPart.id) || (ratchetPart && usedPartIds.has(ratchetPart.id)) || (bitPart && usedPartIds.has(bitPart.id))) return false;

                    if (!currentBay.type || currentBay.type === 'chip') {
                        if (currentBay.part1 && currentBay.part1.id !== chipPart.id) return false;
                        if (currentBay.part2 && currentBay.part2.id !== mainPart.id) return false;
                        if (currentBay.part3 && currentBay.part3.id !== assistPart.id) return false;
                        if (ratchetPart && currentBay.part4 && currentBay.part4.id !== ratchetPart.id) return false;
                        if (bitPart && currentBay.part5 && currentBay.part5.id !== bitPart.id) return false;
                    } else { return false; }
                    return true;
                });

                if (matchingChipCombos.length > 0) {
                    suggestionsFound = true;
                    matchingChipCombos.forEach(combo => {
                        const chipPart = ALL_PARTS.find(p => p.name === combo.lockchip && p.type === 'lockchip');
                        const mainPart = ALL_PARTS.find(p => p.name === combo.mainblade && p.type === 'mainblade');
                        const assistPart = ALL_PARTS.find(p => p.name === combo.assistblade && p.type === 'assistblade');
                        if (!chipPart || !mainPart || !assistPart) return;

                        const card = document.createElement('div');
                        card.className = 'suggestion-card';

                        let html = `
                            <div class="suggestion-part"><img src="${chipPart.image || 'images/placeholder.png'}"><span>${chipPart.name}</span></div>
                            <div class="suggestion-part"><img src="${mainPart.image || 'images/placeholder.png'}"><span>${mainPart.name}</span></div>
                            <div class="suggestion-part"><img src="${assistPart.image || 'images/placeholder.png'}"><span>${assistPart.name}</span></div>`;

                        if (combo.ratchet) {
                            const rPart = ALL_PARTS.find(p=>p.name === combo.ratchet && p.type === 'ratchet');
                            if(rPart) html += `<div class="suggestion-part"><img src="${rPart.image || 'images/placeholder.png'}"><span>${rPart.name}</span></div>`;
                        }
                         if (combo.bit) {
                             const bPart = ALL_PARTS.find(p=>p.name === combo.bit && p.type === 'bit');
                             if(bPart) html += `<div class="suggestion-part"><img src="${bPart.image || 'images/placeholder.png'}"><span>${bPart.name}</span></div>`;
                         }

                        html += `<div class="suggestion-points">${combo.points.toFixed(2)} pts</div>`;
                        card.innerHTML = html;

                        card.addEventListener('click', () => applyChipSuggestion(slotId, combo));
                        modal_suggestions_container.appendChild(card);
                     });
                 }
            }

            if (!suggestionsFound && modal_suggestions_container.innerHTML.includes('<h4>')) {
                modal_suggestions_container.innerHTML += `<p>${translations[currentLanguage].part_suggestions_none || 'No suggestions found...'}</p>`;
            } else if (!suggestionsFound) {
                 modal_suggestions_container.style.display = 'none';
            }
        }

        const individualHeader = translations[currentLanguage].part_individual_header || 'Individual Parts (Owned)';
        modal_parts_list_container.innerHTML = `<h4>${individualHeader}</h4><div class="parts-grid"></div>`;
        const partsGrid = modal_parts_list_container.querySelector('.parts-grid');
        if (!partsGrid) return;

        if (partsToShow.length === 0) {
            const nonePrefix = translations[currentLanguage].part_individual_none_prefix || 'No';
            const noneSuffix = translations[currentLanguage].part_individual_none_suffix || 'parts available...';
            partsGrid.innerHTML = `<p>${nonePrefix} ${type} ${noneSuffix}</p>`;
        } else {
            partsToShow.forEach(part => {
                 if (!part || !part.name) return;
                const part_card = document.createElement('div');
                part_card.className = 'part-card owned';
                part_card.innerHTML = `<img src="${part.image || 'images/placeholder.png'}" alt="${part.name}"><p>${part.name}</p><div class="part-score">${(typeof part.score === 'number' ? part.score : 0).toFixed(2)}</div>`;
                part_card.addEventListener('click', () => selectPartForDeck(part));
                partsGrid.appendChild(part_card);
            });
        }

         if(partsToShow.length > 0 || suggestionsFound) {
            part_modal.style.display = 'block';
         } else {
             const nonePrefix = translations[currentLanguage].part_individual_none_prefix || 'No';
             const noneSuffix = translations[currentLanguage].part_individual_none_suffix || 'parts available...';
             alert(`${nonePrefix} ${type} ${noneSuffix}`);
         }
    };


    const applySuggestion = (slotId, combo) => {
        const bay = app_data.decks[app_data.active_deck_index].bays[slotId];
        if (!bay) return;
        const bladePart = ALL_PARTS.find(p => p.name === combo.blade);
        const ratchetPart = ALL_PARTS.find(p => p.name === combo.ratchet);
        const bitPart = ALL_PARTS.find(p => p.name === combo.bit);
        if (!bladePart || !ratchetPart || !bitPart) return;
        const ownedBladeVersion = getOwnedParts('blade').find(p => (p.baseId || p.id) === bladePart.id);
        if (!ownedBladeVersion) { alert("Erro: Blade sugerida não encontrada na coleção."); return; }
        clearBay(bay);
        bay.type = 'standard';
        bay.part1 = ownedBladeVersion;
        bay.part4 = ratchetPart;
        bay.part5 = bitPart;
        updateDeckUI();
        saveAppData();
        closePartModal();
    };

    const applyChipSuggestion = (slotId, combo) => {
        const bay = app_data.decks[app_data.active_deck_index].bays[slotId];
        if (!bay) return;
        const chipPart = ALL_PARTS.find(p => p.name === combo.lockchip && p.type === 'lockchip');
        const mainPart = ALL_PARTS.find(p => p.name === combo.mainblade && p.type === 'mainblade');
        const assistPart = ALL_PARTS.find(p => p.name === combo.assistblade && p.type === 'assistblade');
        const ratchetPart = combo.ratchet ? ALL_PARTS.find(p => p.name === combo.ratchet && p.type === 'ratchet') : bay.part4;
        const bitPart = combo.bit ? ALL_PARTS.find(p => p.name === combo.bit && p.type === 'bit') : bay.part5;

        if (!chipPart || !mainPart || !assistPart) return;

        bay.part1 = chipPart;
        bay.part2 = mainPart;
        bay.part3 = assistPart;
        bay.type = 'chip';
        bay.part4 = ratchetPart;
        bay.part5 = bitPart;

        updateDeckUI();
        saveAppData();
        closePartModal();
    };

	    const getOwnedParts = (partType) => {
        const ownedParts = [];
        const collectionSetKey = partType + 's';
        const collectionSet = app_data.collection[collectionSetKey];

         if (!collectionSet) return ownedParts;

        if (partType === 'blade') {
            collectionSet.forEach((variantsSet, partId) => {
                const basePart = ALL_PARTS.find(p => p.id === partId);
                if (basePart) {
                    if (basePart.variantsId && ALL_VARIANTS[basePart.variantsId]) {
                        variantsSet.forEach(variantName => {
                             const variantData = ALL_VARIANTS[basePart.variantsId].find(v => v.name === variantName);
                             ownedParts.push({
                                 ...basePart,
                                 id: `${basePart.id}-${variantName.replace(/\s+/g, '-')}`,
                                 baseId: basePart.id,
                                 baseName: basePart.name,
                                 name: `${basePart.name} (${variantName})`,
                                 variant: variantName,
                                 image: variantData?.image || basePart.image
                             });
                        });
                    } else if (variantsSet.has('owned')) {
                        ownedParts.push({ ...basePart, baseId: basePart.id, baseName: basePart.name });
                    }
                } else {
                     console.warn(`Peça Blade com ID ${partId} encontrada na coleção mas não em ALL_PARTS.`);
                }
            });
        } else {
            collectionSet.forEach(partId => {
                const part = ALL_PARTS.find(p => p.id === partId);
                if (part) {
                     ownedParts.push(part);
                } else {
                    console.warn(`Peça ${partType} com ID ${partId} encontrada na coleção mas não em ALL_PARTS.`);
                }
            });
        }
        ownedParts.sort((a, b) => a.name.localeCompare(b.name));
        return ownedParts;
    };

    // --- Funções do Placar ---
    const updateScoreDisplay = () => {
        if (scoreP1Display) scoreP1Display.textContent = scoreP1;
        if (scoreP2Display) scoreP2Display.textContent = scoreP2;
    };

    const handleScoreButton = (e) => {
        const player = e.target.dataset.player;
        const points = parseInt(e.target.dataset.points, 10);

        if (player === '1') {
            scoreP1 += points;
        } else if (player === '2') {
            scoreP2 += points;
        }
        updateScoreDisplay();
    };

    const resetScore = () => {
        const langPack = translations[currentLanguage];
        const confirmMsg = langPack.confirm_reset_score || "Tem certeza que deseja reiniciar o placar?";
        if (confirm(confirmMsg)) {
            scoreP1 = 0;
            scoreP2 = 0;
            updateScoreDisplay();
        }
    };

    const savePlayerName = (playerNumber, inputElement) => {
        if (!inputElement) return;
        const newName = inputElement.value.trim();
        const key = `beyXToolP${playerNumber}Name`;
        const defaultKey = `player_${playerNumber}_default`;
        const langPack = translations[currentLanguage];
        const defaultValue = langPack[defaultKey] || (playerNumber === 1 ? "Jogador 1" : "Jogador 2");

        if (newName) {
            localStorage.setItem(key, newName);
        } else {
            inputElement.value = defaultValue;
            localStorage.setItem(key, defaultValue);
        }
    };
    // --- Fim Funções do Placar ---

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

    const exportDeckList = async () => {
        const deck = app_data.decks[app_data.active_deck_index];
        if (!deck) return;

        const completeBays = deck.bays.filter(b => {
             if (!b || !b.type || !b.part1) return false;
             if (b.type === 'standard' && b.part4 && b.part5) return true;
             if (b.type === 'chip' && b.part2 && b.part3 && b.part4 && b.part5) return true;
             return false;
         });

        if (completeBays.length === 0) {
            alert(translations[currentLanguage].alert_export_deck_empty);
            return;
        }

        const personName = await showInputModal('prompt_export_person_name', 'prompt_export_person_placeholder');
        if (personName === null) return;

        const eventName = await showInputModal('prompt_export_tournament_name', 'prompt_export_tournament_placeholder');
        if (eventName === null) return;

        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = String(today.getFullYear()).slice(-2);
        const formattedDate = `${day}/${month}/${year}`;

        let deckString = `=== DECK LIST ===\n`;
        deckString += `---- ${formattedDate} ----\n`;
        deckString += `==== NOME ====\n${personName}\n\n`;
        deckString += `==== EVENTO ====\n${eventName}\n\n`;
        deckString += `===== DECK =====\n`;

        completeBays.forEach((bay, index) => {
            if (index > 0) deckString += "\n";
            if (bay.type === 'standard') {
                deckString += `B: ${bay.part1.baseName || bay.part1.name}\n`;
                deckString += `R: ${bay.part4.name}\n`;
                deckString += `BT: ${bay.part5.name}\n`;
            } else if (bay.type === 'chip') {
                deckString += `C: ${bay.part1.name}\n`;
                deckString += `MB: ${bay.part2.name}\n`;
                deckString += `AB: ${bay.part3.name}\n`;
                if (bay.part4) deckString += `R: ${bay.part4.name}\n`;
                if (bay.part5) deckString += `BT: ${bay.part5.name}\n`;
            }
        });

        deckString += `\n===============\n`;
        deckString += `Criado por\n`;
        deckString += `https://beyxtool.pages.dev/\n`;

        navigator.clipboard.writeText(deckString)
            .then(() => alert(translations[currentLanguage].alert_export_copied))
            .catch(err => {
                console.error("Falha ao copiar:", err);
                alert(`${translations[currentLanguage].alert_export_copy_failed} ${deckString}`);
            });
    };

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
    updateScoreDisplay(); // Inicializa o placar

    langPtBrButton?.addEventListener('click', () => setLanguage('pt-br'));
    langEnButton?.addEventListener('click', () => setLanguage('en'));

    collection_filter?.addEventListener('change', renderParts);
    collection_sort?.addEventListener('change', renderParts);

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

    inputModalOk?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(inputModalField.value); });
    inputModalCancel?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(null); });
    inputModalClose?.addEventListener('click', () => { if (onInputConfirm) onInputConfirm(null); });

    // Event listeners do Placar
    scoreButtons.forEach(button => button.addEventListener('click', handleScoreButton));
    resetScoreButton?.addEventListener('click', resetScore);
    p1NameInput?.addEventListener('blur', () => savePlayerName(1, p1NameInput));
    p2NameInput?.addEventListener('blur', () => savePlayerName(2, p2NameInput));

    window.addEventListener('click', (event) => {
        if (event.target === part_modal) closePartModal();
        if (event.target === variant_modal) closeVariantModal();
        if (event.target === inputModal) {
             if (onInputConfirm) onInputConfirm(null);
        }
        const activePopup = document.querySelector('.part-info-popup');
        if (activePopup) {
            if (!activePopup.contains(event.target) && !event.target.closest('.part-card')) {
                activePopup.remove();
            }
        }
    });

});
document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DADOS DAS VARIANTES (AJUSTADA) ---
    const ALL_VARIANTS = {
        'aerpegasus': [
            { name: "Stock", image: "images/blades/AeroPegasus.png" }
        ],
        'bearscratch': [
            { name: "Stock", image: "images/blades/BearScratch.png" }
        ],
        'blackshell': [
            { name: "Stock", image: "images/blades/BlackShell.png" },
            { name: "ver. 2", image: "images/variantes/BlackShell_9-80B.png" }
        ],
        'cobaltdragoon': [
            { name: "Stock", image: "images/blades/CobaltDragoon.png" }
        ],
        'cobaltdrake': [
            { name: "Stock", image: "images/blades/CobaltDrake.png" },
            { name: "ver. 2", image: "images/variantes/CobaltDrake_9-60R.png" }
        ],
        'crimsongaruda': [
            { name: "Stock", image: "images/blades/CrimsonGaruda.png" }
        ],
        'croccrunch': [
            { name: "Stock", image: "images/blades/CrocCrunch.png" }
        ],
        'darthvader': [
            { name: "Stock", image: "images/blades/DarthVader.png" }
        ],
        'dracielshield': [
            { name: "Stock", image: "images/blades/DracielShield.png" }
        ],
        'dragoonsform': [
            { name: "Stock", image: "images/blades/DragoonStorm.png" }
        ],
        'dranbuster': [
            { name: "Stock", image: "images/blades/DranBuster.png" },
            { name: "ver. 2", image: "images/variantes/DranBuster_3-70N.png" }
        ],
        'drandagger': [
            { name: "Stock", image: "images/blades/DranDagger.png" },
            { name: "ver. 2", image: "images/variantes/DranDagger_4-60R.png" },
            { name: "ver. 3", image: "images/variantes/DranDagger_4-70P.png" },
            { name: "ver. 4", image: "images/variantes/DranDagger_9-60LF.png" }
        ],
        'dransword': [
            { name: "Stock", image: "images/blades/DranSword.png" },
            { name: "ver. 2", image: "images/variantes/DranSword_3-80B.png" },
            { name: "ver. 3", image: "images/variantes/DranSword_4-80DB.png" },
            { name: "ver. 4", image: "images/variantes/2.png" },
            { name: "ver. 5", image: "images/variantes/3.png" },
            { name: "ver. 6", image: "images/variantes/latest.png" }
        ],
        'dranzerspiral': [
            { name: "Stock", image: "images/blades/DranzerSpiral.png" }
        ],
        'drigerslash': [
            { name: "Stock", image: "images/blades/DrigerSlash.png" }
        ],
        'generalgrievous': [
            { name: "Stock", image: "images/blades/GeneralGrievous.png" }
        ],
        'ghostcircle': [
            { name: "Stock", image: "images/blades/GhostCircle.png" },
            { name: "ver. 2", image: "images/variantes/GhostCircle_4-60H.png" }
        ],
        'gillshark': [
            { name: "Stock", image: "images/blades/GillShark.png" }
        ],
        'hellschain': [
            { name: "Stock", image: "images/blades/HellsChain.png" },
            { name: "ver. 2", image: "images/variantes/HellsChain_9-80O.png" }
        ],
        'hellshammer': [
            { name: "Stock", image: "images/blades/HellsHammer.png" }
        ],
        'hellsscythe': [
            { name: "Stock", image: "images/blades/HellsScythe.png" },
            { name: "ver. 2", image: "images/variantes/HellsScythe_3-80F.png" },
            { name: "ver. 3", image: "images/variantes/HellsScythe_4-60T.png" },
            { name: "ver. 4", image: "images/variantes/HellsScythe_4-80LF.png" }
        ],
        'hoverwyvern': [
            { name: "Stock", image: "images/blades/HoverWyvern.png" }
        ],
        'impactdrake': [
            { name: "Stock", image: "images/blades/ImpactDrake.png" },
            { name: "ver. 2", image: "images/variantes/ImpactDrake_9-60LR.png" }
        ],
        'knightlance': [
            { name: "Stock", image: "images/blades/KnightLance.png" },
            { name: "ver. 2", image: "images/variantes/KnightLance_4-60GB.png" },
            { name: "ver. 3", image: "images/variantes/KnightLance_4-80HN.png" }
        ],
        'knightmail': [
            { name: "Stock", image: "images/blades/KnightMail.png" }
        ],
        'knightshield': [
            { name: "Stock", image: "images/blades/KnightShield.png" },
            { name: "ver. 2", image: "images/variantes/KnightShield_4-60LF.png" },
            { name: "ver. 3", image: "images/variantes/KnightShield_4-80T.png" },
            { name: "ver. 4", image: "images/variantes/KnightShield_5-80T.png" }
        ],
        'leonclaw': [
            { name: "Stock", image: "images/blades/LeonClaw.png" },
            { name: "ver. 2", image: "images/variantes/LeonClaw_3-80HN.png" },
            { name: "ver. 3", image: "images/variantes/LeonClaw_5-60P.png" }
        ],
        'leoncrest': [
            { name: "Stock", image: "images/blades/LeonCrest.png" },
            { name: "ver. 2", image: "images/variantes/LeonCrest_9-80K.png" }
        ],
        'lightningl-drago': [
            { name: "Stock", image: "images/blades/LightningL-Drago.png" },
            { name: "ver. 2", image: "images/variantes/Lightning_L-Drago_1-60F.png" }
        ],
        'mammothtusk': [
            { name: "Stock", image: "images/blades/MammothTusk.png" }
        ],
        'moffgideon': [
            { name: "Stock", image: "images/blades/MoffGideon.png" }
        ],
        'mosasaurus': [
            { name: "Stock", image: "images/blades/Mosasaurus.png" }
        ],
        'optimusprimal': [
            { name: "Stock", image: "images/blades/OptimusPrimal.png" }
        ],
        'optimusprime': [
            { name: "Stock", image: "images/blades/OptimusPrime.png" }
        ],
        'phoenixfeather': [
            { name: "Stock", image: "images/blades/PhoenixFeather.png" },
            { name: "ver. 2", image: "images/variantes/PhoenixFeather_3-60F.png" },
            { name: "ver. 3", image: "images/variantes/PhoenixFeather_4-60LF.png" }
        ],
        'phoenixrudder': [
            { name: "Stock", image: "images/blades/PhoenixRudder.png" },
            { name: "ver. 2", image: "images/variantes/PhoenixRudder_9-70G.png" }
        ],
        'phoenixwing': [
            { name: "Stock", image: "images/blades/PhoenixWing.png" },
            { name: "ver. 2", image: "images/variantes/PhoenixWing_9-60GF.png" },
            { name: "ver. 3", image: "images/variantes/PhoenixWing_9-80DB.png" }
        ],
        'quetzalcoatlus': [
            { name: "Stock", image: "images/blades/Quetzalcoatlus.png" }
        ],
        'rhinohorn': [
            { name: "Stock", image: "images/blades/RhinoHorn.png" },
            { name: "ver. 2", image: "images/variantes/RhinoHorn_5-80Q.png" }
        ],
        'rockleone': [
            { name: "Stock", image: "images/blades/RockLeone.png" }
        ],
        'samuraicalibur': [
            { name: "Stock", image: "images/blades/SamuraiCalibur.png" }
        ],
        'samuraisaber': [
            { name: "Stock", image: "images/blades/SamuraiSaber.png" }
        ],
        'scorpiospear': [
            { name: "Stock", image: "images/blades/ScorpioSpear.png" }
        ],
        'sharkedge': [
            { name: "Stock", image: "images/blades/SharkEdge.png" },
            { name: "ver. 2", image: "images/variantes/SharkEdge_3-60LF.png" },
            { name: "ver. 3", image: "images/variantes/SharkEdge_3-80F.png" },
            { name: "ver. 4", image: "images/variantes/SharkEdge_4-80N.png" },
            { name: "ver. 5", image: "images/variantes/SharkEdge_5-60GF.png" }
        ],
        'sharkscale': [
            { name: "Stock", image: "images/blades/SharkScale.png" }
        ],
        'shelterdrake': [
            { name: "Stock", image: "images/blades/ShelterDrake.png" },
            { name: "ver. 2", image: "images/variantes/ShelterDrake_5-70O.png" },
            { name: "ver. 3", image: "images/variantes/ShelterDrake_7-80GP.png" }
        ],
        'shinobiknife': [
            { name: "Stock", image: "images/blades/ShinobiKnife.png" }
        ],
        'shinobishadow': [
            { name: "Stock", image: "images/blades/ShinobiShadow.png" },
            { name: "ver. 2", image: "images/variantes/ShinobiShadow_3-70GP.png" },
            { name: "ver. 3", image: "images/variantes/ShinobiShadow_3-80F.png" },
            { name: "ver. 4", image: "images/variantes/ShinobiShadow_9-60LF.png" }
        ],
        'silverwolf': [
            { name: "Stock", image: "images/blades/SilverWolf.png" }
        ],
        'sphinx-cowl': [
            { name: "Stock", image: "images/blades/SphinxCowl.png" },
            { name: "ver. 2", image: "images/variantes/SphinxCowl_4-80HT.png" },
            { name: "ver. 3", image: "images/variantes/SphinxCowl_5-60O.png" },
            { name: "ver. 4", image: "images/variantes/SphinxCowl_9-80GN.png" }
        ],
        'spider-man': [
            { name: "Stock", image: "images/blades/Spider-Man.png" }
        ],
        'spinosaurus': [
            { name: "Stock", image: "images/blades/Spinosaurus.png" }
        ],
        'stormpegasis': [
            { name: "Stock", image: "images/blades/StormPegasis.png" }
        ],
        't.rex': [
            { name: "Stock", image: "images/blades/T.Rex.png" }
        ],
        'tacklegoat': [
            { name: "Stock", image: "images/blades/TackleGoat.png" }
        ],
        'thanos': [
            { name: "Stock", image: "images/blades/Thanos.png" }
        ],
        'tricerapress': [
            { name: "Stock", image: "images/blades/TriceraPress.png" }
        ],
        'tyrannobeat': [
            { name: "Stock", image: "images/blades/TyrannoBeat.png" },
            { name: "ver. 2", image: "images/variantes/TyrannoBeat_4-70Q.png" }
        ],
        'tyrannoroar': [
            { name: "Stock", image: "images/blades/TyrannoRoar.png" }
        ],
        'unicornsting': [
            { name: "Stock", image: "images/blades/UnicornSting.png" },
            { name: "ver. 2", image: "images/variantes/UnicornSting_5-60GP.png" }
        ],
        'venom': [
            { name: "Stock", image: "images/blades/Venom.png" }
        ],
        'victoryvalkyrie': [
            { name: "Stock", image: "images/blades/VictoryValkyrie.png" }
        ],
        'vipertail': [
            { name: "Stock", image: "images/blades/ViperTail.png" },
            { name: "ver. 2", image: "images/variantes/ViperTail_4-60F.png" },
            { name: "ver. 3", image: "images/variantes/ViperTail_5-60F.png" },
            { name: "ver. 4", image: "images/variantes/ViperTail_5-70D.png" },
            { name: "ver. 5", image: "images/variantes/ViperTail_5-80O.png" }
        ],
        'weisstiger': [
            { name: "Stock", image: "images/blades/WeissTiger.png" }
        ],
        'whalewave': [
            { name: "Stock", image: "images/blades/WhaleWave.png" },
            { name: "ver. 2", image: "images/variantes/WhaleWave_4-70HN.png" },
            { name: "ver. 3", image: "images/variantes/WhaleWave_5-80E.png" },
            { name: "ver. 4", image: "images/variantes/WhaleWave_7-60K.png" }
        ],
        'wizardarrow': [
            { name: "Stock", image: "images/blades/WizardArrow.png" },
            { name: "ver. 2", image: "images/variantes/WizardArrow_4-60N.png" },
            { name: "ver. 4", image: "images/variantes/WizardArrow_4-80GB.png" },
            { name: "ver. 3", image: "images/variantes/WizardArrow_4-80N.png" },
            { name: "ver. 5", image: "images/variantes/4.png" }
        ],
        'wizardrod': [
            { name: "Stock", image: "images/blades/WizardRod.png" },
            { name: "ver. 2", image: "images/variantes/WizardRod_5-70DB.png" }
        ],
        'wyverngale': [
            { name: "Stock", image: "images/blades/WyvernGale.png" },
            { name: "ver. 2", image: "images/variantes/WyvernGale_2-60S.png" },
            { name: "ver. 3", image: "images/variantes/WyvernGale_3-60T.png" },
            { name: "ver. 4", image: "images/variantes/WyvernGale_5-80GB.png" }
        ],
        'xenoxcalibur': [
            { name: "Stock", image: "images/blades/XenoXcalibur.png" }
        ],
        'yellkong': [
            { name: "Stock", image: "images/blades/YellKong.png" }
        ]
    };

    // --- BASE DE DADOS DAS PEÇAS E COMBOS ---
    const ALL_PARTS = [
        // Blades (Variações)
        { id: 'aerpegasus', name: 'AeroPegasus', type: 'blade', image: 'images/blades/AeroPegasus.png', score: 26.2, variantsId: 'aerpegasus' },
        { id: 'cobaltdragoon', name: 'CobaltDragoon', type: 'blade', image: 'images/blades/CobaltDragoon.png', score: 279, variantsId: 'cobaltdragoon' },
        { id: 'dranbuster', name: 'DranBuster', type: 'blade', image: 'images/blades/DranBuster.png', score: 16.5, variantsId: 'dranbuster' },
        { id: 'drandagger', name: 'DranDagger', type: 'blade', image: 'images/blades/DranDagger.png', score: 4.5, variantsId: 'drandagger' },
        { id: 'dransword', name: 'DranSword', type: 'blade', image: 'images/blades/DranSword.png', score: 6, variantsId: 'dransword' },
        { id: 'hellschain', name: 'HellsChain', type: 'blade', image: 'images/blades/HellsChain.png', score: 6.5, variantsId: 'hellschain' },
        { id: 'hellsscythe', name: 'HellsScythe', type: 'blade', image: 'images/blades/HellsScythe.png', score: 6.5, variantsId: 'hellsscythe' },
        { id: 'hoverwyvern', name: 'HoverWyvern', type: 'blade', image: 'images/blades/HoverWyvern.png', score: 13.5, variantsId: 'hoverwyvern' },
        { id: 'knightmail', name: 'KnightMail', type: 'blade', image: 'images/blades/KnightMail.png', score: 11.5, variantsId: 'knightmail' },
        { id: 'knightshield', name: 'KnightShield', type: 'blade', image: 'images/blades/KnightShield.png', score: 5, variantsId: 'knightshield' },
        { id: 'leonclaw', name: 'LeonClaw', type: 'blade', image: 'images/blades/LeonClaw.png', score: 4, variantsId: 'leonclaw' },
        { id: 'phoenixwing', name: 'PhoenixWing', type: 'blade', image: 'images/blades/PhoenixWing.png', score: 71, variantsId: 'phoenixwing' },
        { id: 'sharkscale', name: 'SharkScale', type: 'blade', image: 'images/blades/SharkScale.png', score: 26.5, variantsId: 'sharkscale' },
        { id: 'silverwolf', name: 'SilverWolf', type: 'blade', image: 'images/blades/SilverWolf.png', score: 28, variantsId: 'silverwolf' },
        { id: 'tyrannobeat', name: 'TyrannoBeat', type: 'blade', image: 'images/blades/TyrannoBeat.png', score: 21, variantsId: 'tyrannobeat' },
        { id: 'unicornsting', name: 'UnicornSting', type: 'blade', image: 'images/blades/UnicornSting.png', score: 8.5, variantsId: 'unicornsting' },
        { id: 'wizardarrow', name: 'WizardArrow', type: 'blade', image: 'images/blades/WizardArrow.png', score: 3.5, variantsId: 'wizardarrow' },
        { id: 'wizardrod', name: 'WizardRod', type: 'blade', image: 'images/blades/WizardRod.png', score: 262.5, variantsId: 'wizardrod' },
        { id: 'arc', name: 'Arc', type: 'blade', image: 'images/blades/Arc.png', score: 3.5 },
        { id: 'bearscratch', name: 'BearScratch', type: 'blade', image: 'images/blades/BearScratch.png', score: 2, variantsId: 'bearscratch' },
        { id: 'blackshell', name: 'BlackShell', type: 'blade', image: 'images/blades/BlackShell.png', score: 4, variantsId: 'blackshell' },
        { id: 'blast', name: 'Blast', type: 'blade', image: 'images/blades/Blast.png', score: 10 },
        { id: 'bolt', name: 'Bolt', type: 'blade', image: 'images/blades/Bolt.png', score: 4.5 },
        { id: 'brave', name: 'Brave', type: 'blade', image: 'images/blades/Brave.png', score: 4.5 },
        { id: 'brush', name: 'Brush', type: 'blade', image: 'images/blades/Brush.png', score: 2 },
        { id: 'cobaltdrake', name: 'CobaltDrake', type: 'blade', image: 'images/blades/CobaltDrake.png', score: 3.5, variantsId: 'cobaltdrake' },
        { id: 'crimsongaruda', name: 'CrimsonGaruda', type: 'blade', image: 'images/blades/CrimsonGaruda.png', score: 4.5, variantsId: 'crimsongaruda' },
        { id: 'croccrunch', name: 'CrocCrunch', type: 'blade', image: 'images/blades/CrocCrunch.png', score: 2, variantsId: 'croccrunch' },
        { id: 'dark', name: 'Dark', type: 'blade', image: 'images/blades/Dark.png', score: 2.5 },
        { id: 'darthvader', name: 'DarthVader', type: 'blade', image: 'images/blades/DarthVader.png', score: 2.5, variantsId: 'darthvader' },
        { id: 'dracielshield', name: 'DracielShield', type: 'blade', image: 'images/blades/DracielShield.png', score: 1.5, variantsId: 'dracielshield' },
        { id: 'dragoonsform', name: 'DragoonStorm', type: 'blade', image: 'images/blades/DragoonStorm.png', score: 1, variantsId: 'dragoonsform' },
        { id: 'dranzerspiral', name: 'DranzerSpiral', type: 'blade', image: 'images/blades/DranzerSpiral.png', score: 2.5, variantsId: 'dranzerspiral' },
        { id: 'drigerslash', name: 'DrigerSlash', type: 'blade', image: 'images/blades/DrigerSlash.png', score: 1.5, variantsId: 'drigerslash' },
        { id: 'eclipse', name: 'Eclipse', type: 'blade', image: 'images/blades/Eclipse.png', score: 2 },
        { id: 'flame', name: 'Flame', type: 'blade', image: 'images/blades/Flame.png', score: 1.5 },
        { id: 'generalgrievous', name: 'GeneralGrievous', type: 'blade', image: 'images/blades/GeneralGrievous.png', score: 1, variantsId: 'generalgrievous' },
        { id: 'ghostcircle', name: 'GhostCircle', type: 'blade', image: 'images/blades/GhostCircle.png', score: 2, variantsId: 'ghostcircle' },
        { id: 'gillshark', name: 'GillShark', type: 'blade', image: 'images/blades/GillShark.png', score: 2, variantsId: 'gillshark' },
        { id: 'golemrock', name: 'GolemRock', type: 'blade', image: 'images/blades/GolemRock.png', score: 1 }, // Peça adicionada
        { id: 'hellshammer', name: 'HellsHammer', type: 'blade', image: 'images/blades/HellsHammer.png', score: 4.5, variantsId: 'hellshammer' },
        { id: 'hornet', name: 'Hornet', type: 'blade', image: 'images/blades/Hornet.png', score: 1 },
        { id: 'impactdrake', name: 'ImpactDrake', type: 'blade', image: 'images/blades/ImpactDrake.png', score: 5.5, variantsId: 'impactdrake' },
        { id: 'knightlance', name: 'KnightLance', type: 'blade', image: 'images/blades/KnightLance.png', score: 3.5, variantsId: 'knightlance' },
        { id: 'kraken', name: 'Kraken', type: 'blade', image: 'images/blades/Kraken.png', score: 1 },
        { id: 'leoncrest', name: 'LeonCrest', type: 'blade', image: 'images/blades/LeonCrest.png', score: 2.5, variantsId: 'leoncrest' },
        { id: 'lightningl-drago', name: 'LightningL-Drago', type: 'blade', image: 'images/blades/LightningL-Drago.png', score: 3.5, variantsId: 'lightningl-drago' },
        { id: 'mammothtusk', name: 'MammothTusk', type: 'blade', image: 'images/blades/MammothTusk.png', score: 1.5, variantsId: 'mammothtusk' },
        { id: 'moffgideon', name: 'MoffGideon', type: 'blade', image: 'images/blades/MoffGideon.png', score: 1, variantsId: 'moffgideon' },
        { id: 'mosasaurus', name: 'Mosasaurus', type: 'blade', image: 'images/blades/Mosasaurus.png', score: 1, variantsId: 'mosasaurus' },
        { id: 'optimusprimal', name: 'OptimusPrimal', type: 'blade', image: 'images/blades/OptimusPrimal.png', score: 2, variantsId: 'optimusprimal' },
        { id: 'optimusprime', name: 'OptimusPrime', type: 'blade', image: 'images/blades/OptimusPrime.png', score: 1, variantsId: 'optimusprime' },
        { id: 'phoenixfeather', name: 'PhoenixFeather', type: 'blade', image: 'images/blades/PhoenixFeather.png', score: 1.5, variantsId: 'phoenixfeather' },
        { id: 'phoenixrudder', name: 'PhoenixRudder', type: 'blade', image: 'images/blades/PhoenixRudder.png', score: 2, variantsId: 'phoenixrudder' },
        { id: 'pteraswing', name: 'PteraSwing', type: 'blade', image: 'images/blades/PteraSwing.png', score: 1.5 },
        { id: 'quetzalcoatlus', name: 'Quetzalcoatlus', type: 'blade', image: 'images/blades/Quetzalcoatlus.png', score: 1, variantsId: 'quetzalcoatlus' },
        { id: 'reaper', name: 'Reaper', type: 'blade', image: 'images/blades/Reaper.png', score: 2.5 },
        { id: 'rhinohorn', name: 'RhinoHorn', type: 'blade', image: 'images/blades/RhinoHorn.png', score: 1.5, variantsId: 'rhinohorn' },
        { id: 'rockleone', name: 'RockLeone', type: 'blade', image: 'images/blades/RockLeone.png', score: 1.5, variantsId: 'rockleone' },
        { id: 'samuraicalibur', name: 'SamuraiCalibur', type: 'blade', image: 'images/blades/SamuraiCalibur.png', score: 3, variantsId: 'samuraicalibur' },
        { id: 'samuraisaber', name: 'SamuraiSaber', type: 'blade', image: 'images/blades/SamuraiSaber.png', score: 5, variantsId: 'samuraisaber' },
        { id: 'samuraisteel', name: 'SamuraiSteel', type: 'blade', image: 'images/blades/SamuraiSteel.png', score: 1 },
        { id: 'scorpiospear', name: 'ScorpioSpear', type: 'blade', image: 'images/blades/ScorpioSpear.png', score: 8, variantsId: 'scorpiospear' },
        { id: 'sharkedge', name: 'SharkEdge', type: 'blade', image: 'images/blades/SharkEdge.png', score: 9.5, variantsId: 'sharkedge' },
        { id: 'shelterdrake', name: 'ShelterDrake', type: 'blade', image: 'images/blades/ShelterDrake.png', score: 2, variantsId: 'shelterdrake' },
        { id: 'shinobiknife', name: 'ShinobiKnife', type: 'blade', image: 'images/blades/ShinobiKnife.png', score: 1, variantsId: 'shinobiknife' },
        { id: 'shinobishadow', name: 'ShinobiShadow', type: 'blade', image: 'images/blades/ShinobiShadow.png', score: 1.5, variantsId: 'shinobishadow' },
        { id: 'spider-man', name: 'Spider-Man', type: 'blade', image: 'images/blades/Spider-Man.png', score: 1, variantsId: 'spider-man' },
        { id: 'sphinx-cowl', name: 'SphinxCowl', type: 'blade', image: 'images/blades/SphinxCowl.png', score: 1.5, variantsId: 'sphinx-cowl' },
        { id: 'spinosaurus', name: 'Spinosaurus', type: 'blade', image: 'images/blades/Spinosaurus.png', score: 1, variantsId: 'spinosaurus' },
        { id: 'stormpegasis', name: 'StormPegasis', type: 'blade', image: 'images/blades/StormPegasis.png', score: 1, variantsId: 'stormpegasis' },
        { id: 't.rex', name: 'T.Rex', type: 'blade', image: 'images/blades/T.Rex.png', score: 1, variantsId: 't.rex' },
        { id: 'tacklegoat', name: 'TackleGoat', type: 'blade', image: 'images/blades/TackleGoat.png', score: 1, variantsId: 'tacklegoat' },
        { id: 'thanos', name: 'Thanos', type: 'blade', image: 'images/blades/Thanos.png', score: 1, variantsId: 'thanos' },
        { id: 'tricerapress', name: 'TriceraPress', type: 'blade', image: 'images/blades/TriceraPress.png', score: 2.5, variantsId: 'tricerapress' },
        { id: 'tyrannoroar', name: 'TyrannoRoar', type: 'blade', image: 'images/blades/TyrannoRoar.png', score: 5, variantsId: 'tyrannoroar' },
        { id: 'venom', name: 'Venom', type: 'blade', image: 'images/blades/Venom.png', score: 2, variantsId: 'venom' },
        { id: 'victoryvalkyrie', name: 'VictoryValkyrie', type: 'blade', image: 'images/blades/VictoryValkyrie.png', score: 1, variantsId: 'victoryvalkyrie' },
        { id: 'vipertail', name: 'ViperTail', type: 'blade', image: 'images/blades/ViperTail.png', score: 2.5, variantsId: 'vipertail' },
        { id: 'weisstiger', name: 'WeissTiger', type: 'blade', image: 'images/blades/WeissTiger.png', score: 2, variantsId: 'weisstiger' },
        { id: 'whalewave', name: 'WhaleWave', type: 'blade', image: 'images/blades/WhaleWave.png', score: 6, variantsId: 'whalewave' },
        { id: 'wyverngale', name: 'WyvernGale', type: 'blade', image: 'images/blades/WyvernGale.png', score: 1.5, variantsId: 'wyverngale' },
        { id: 'xenoxcaliburius', name: 'XenoXcaliburius', type: 'blade', image: 'images/blades/XenoXcaliburius.png', score: 1 },
        { id: 'xenoxcalibur', name: 'XenoXcalibur', type: 'blade', image: 'images/blades/XenoXcalibur.png', score: 1, variantsId: 'xenoxcalibur' },
        { id: 'yellkong', name: 'YellKong', type: 'blade', image: 'images/blades/YellKong.png', score: 1.5, variantsId: 'yellkong' },

        // Ratchets
        { id: '0-70', name: '0-70', type: 'ratchet', image: 'images/ratchets/0-70.png', score: 39 }, { id: '0-80', name: '0-80', type: 'ratchet', image: 'images/ratchets/0-80.png', score: 48.5 }, { id: '1-60', name: '1-60', type: 'ratchet', image: 'images/ratchets/1-60.png', score: 3389.15 }, { id: '1-70', name: '1-70', type: 'ratchet', image: 'images/ratchets/1-70.png', score: 409.15 }, { id: '1-80', name: '1-80', type: 'ratchet', image: 'images/ratchets/1-80.png', score: 114 }, { id: '2-60', name: '2-60', type: 'ratchet', image: 'images/ratchets/2-60.png', score: 49.25 }, { id: '2-70', name: '2-70', type: 'ratchet', image: 'images/ratchets/2-70.png', score: 13 }, { id: '2-80', name: '2-80', type: 'ratchet', image: 'images/ratchets/2-80.png', score: 5 }, { id: '3-60', name: '3-60', type: 'ratchet', image: 'images/ratchets/3-60.png', score: 2580.5 }, { id: '3-70', name: '3-70', type: 'ratchet', image: 'images/ratchets/3-70.png', score: 114.15 }, { id: '3-80', name: '3-80', type: 'ratchet', image: 'images/ratchets/3-80.png', score: 88.25 }, { id: '3-85', name: '3-85', type: 'ratchet', image: 'images/ratchets/3-85.png', score: 16 }, { id: '4-50', name: '4-50', type: 'ratchet', image: 'images/ratchets/4-50.png', score: 356 }, { id: '4-55', name: '4-55', type: 'ratchet', image: 'images/ratchets/4-55.png', score: 82.15 }, { id: '4-60', name: '4-60', type: 'ratchet', image: 'images/ratchets/4-60.png', score: 178.5 }, { id: '4-70', name: '4-70', type: 'ratchet', image: 'images/ratchets/4-70.png', score: 22.5 }, { id: '4-80', name: '4-80', type: 'ratchet', image: 'images/ratchets/4-80.png', score: 28.25 }, { id: '5-60', name: '5-60', type: 'ratchet', image: 'images/ratchets/5-60.png', score: 1760.15 }, { id: '5-70', name: '5-70', type: 'ratchet', image: 'images/ratchets/5-70.png', score: 150 }, { id: '5-80', name: '5-80', type: 'ratchet', image: 'images/ratchets/5-80.png', score: 70 }, { id: '6-60', name: '6-60', type: 'ratchet', image: 'images/ratchets/6-60.png', score: 345.25 }, { id: '6-70', name: '6-70', type: 'ratchet', image: 'images/ratchets/6-70.png', score: 5 }, { id: '6-80', name: '6-80', type: 'ratchet', image: 'images/ratchets/6-80.png', score: 22.5 }, { id: '7-60', name: '7-60', type: 'ratchet', image: 'images/ratchets/7-60.png', score: 1174 }, { id: '7-70', name: '7-70', type: 'ratchet', image: 'images/ratchets/7-70.png', score: 228.25 }, { id: '7-80', name: '7-80', type: 'ratchet', image: 'images/ratchets/7-80.png', score: 17.25 }, { id: '9-60', name: '9-60', type: 'ratchet', image: 'images/ratchets/9-60.png', score: 3327.5 }, { id: '9-70', name: '9-70', type: 'ratchet', image: 'images/ratchets/9-70.png', score: 296.5 }, { id: '9-80', name: '9-80', type: 'ratchet', image: 'images/ratchets/9-80.png', score: 94 }, { id: 'm-85', name: 'M-85', type: 'ratchet', image: 'images/ratchets/M-85.png', score: 11 },

        // Bits
        { id: 'accel', name: 'Accel', type: 'bit', image: 'images/bits/Accel.png', score: 39 }, { id: 'ball', name: 'Ball', type: 'bit', image: 'images/bits/Ball.png', score: 1298.25 }, { id: 'boundspike', name: 'BoundSpike', type: 'bit', image: 'images/bits/BoundSpike.png', score: 39.5 }, { id: 'cyclone', name: 'Cyclone', type: 'bit', image: 'images/bits/Cyclone.png', score: 79 }, { id: 'diskball', name: 'DiskBall', type: 'bit', image: 'images/bits/DiskBall.png', score: 17 }, { id: 'dot', name: 'Dot', type: 'bit', image: 'images/bits/Dot.png', score: 39.5 }, { id: 'elevate', name: 'Elevate', type: 'bit', image: 'images/bits/Elevate.png', score: 1299 }, { id: 'flat', name: 'Flat', type: 'bit', image: 'images/bits/Flat.png', score: 223 }, { id: 'freeball', name: 'FreeBall', type: 'bit', image: 'images/bits/FreeBall.png', score: 716 }, { id: 'gearball', name: 'GearBall', type: 'bit', image: 'images/bits/GearBall.png', score: 35 }, { id: 'gearflat', name: 'GearFlat', type: 'bit', image: 'images/bits/GearFlat.png', score: 48.15 }, { id: 'gearneedle', name: 'GearNeedle', type: 'bit', image: 'images/bits/GearNeedle.png', score: 11.5 }, { id: 'gearpoint', name: 'GearPoint', type: 'bit', image: 'images/bits/GearPoint.png', score: 54 }, { id: 'gearrush', name: 'GearRush', type: 'bit', image: 'images/bits/GearRush.png', score: 25 }, { id: 'glide', name: 'Glide', type: 'bit', image: 'images/bits/Glide.png', score: 19.5 }, { id: 'hexa', name: 'Hexa', type: 'bit', image: 'images/bits/Hexa.png', score: 1908.15 }, { id: 'highneedle', name: 'HighNeedle', type: 'bit', image: 'images/bits/HighNeedle.png', score: 39.25 }, { id: 'hightaper', name: 'HighTaper', type: 'bit', image: 'images/bits/HighTaper.png', score: 29.25 }, { id: 'kick', name: 'Kick', type: 'bit', image: 'images/bits/Kick.png', score: 1050 }, { id: 'level', name: 'Level', type: 'bit', image: 'images/bits/Level.png', score: 1007.5 }, { id: 'lowflat', name: 'LowFlat', type: 'bit', image: 'images/bits/LowFlat.png', score: 350.15 }, { id: 'loworb', name: 'LowOrb', type: 'bit', image: 'images/bits/LowOrb.png', score: 351 }, { id: 'lowrush', name: 'LowRush', type: 'bit', image: 'images/bits/LowRush.png', score: 2011.5 }, { id: 'merge', name: 'Merge', type: 'bit', image: 'images/bits/Merge.png', score: 3 }, { id: 'metalneedle', name: 'MetalNeedle', type: 'bit', image: 'images/bits/MetalNeedle.png', score: 4.15 }, { id: 'needle', name: 'Needle', type: 'bit', image: 'images/bits/Needle.png', score: 31.5 }, { id: 'orb', name: 'Orb', type: 'bit', image: 'images/bits/Orb.png', score: 126 }, { id: 'point', name: 'Point', type: 'bit', image: 'images/bits/Point.png', score: 752.15 }, { id: 'quake', name: 'Quake', type: 'bit', image: 'images/bits/Quake.png', score: 21.5 }, { id: 'rubberaccel', name: 'RubberAccel', type: 'bit', image: 'images/bits/RubberAccel.png', score: 110.15 }, { id: 'rush', name: 'Rush', type: 'bit', image: 'images/bits/Rush.png', score: 2214 }, { id: 'spike', name: 'Spike', type: 'bit', image: 'images/bits/Spike.png', score: 19 }, { id: 'taper', name: 'Taper', type: 'bit', image: 'images/bits/Taper.png', score: 336 }, { id: 'transpoint', name: 'TransPoint', type: 'bit', image: 'images/bits/TransPoint.png', score: 24.25 }, { id: 'underneedle', name: 'UnderNeedle', type: 'bit', image: 'images/bits/UnderNeedle.png', score: 162.5 }, { id: 'unite', name: 'Unite', type: 'bit', image: 'images/bits/Unite.png', score: 169.25 }, { id: 'vortex', name: 'Vortex', type: 'bit', image: 'images/bits/Vortex.png', score: 24.15 }, { id: 'wedge', name: 'Wedge', type: 'bit', image: 'images/bits/Wedge.png', score: 301.15 }, { id: 'zap', name: 'Zap', type: 'bit', image: 'images/bits/Zap.png', score: 47 },

        // --- Peças de Chip (Scores atualizados com valores de EXEMPLO) ---
        { id: 'lockchip-dran', name: 'Dran', type: 'lockchip', image: 'images/lockchips/Dran.png', score: 5 },
        { id: 'lockchip-fox', name: 'Fox', type: 'lockchip', image: 'images/lockchips/Fox.png', score: 5 },
        { id: 'lockchip-hells', name: 'Hells', type: 'lockchip', image: 'images/lockchips/Hells.png', score: 5 },
        { id: 'lockchip-hornet', name: 'Hornet', type: 'lockchip', image: 'images/lockchips/Hornet.png', score: 5 },
        { id: 'lockchip-kraken', name: 'Kraken', type: 'lockchip', image: 'images/lockchips/Kraken.png', score: 5 },
        { id: 'lockchip-leon', name: 'Leon', type: 'lockchip', image: 'images/lockchips/Leon.png', score: 5 },
        { id: 'lockchip-perseus', name: 'Perseus', type: 'lockchip', image: 'images/lockchips/Perseus.png', score: 5 },
        { id: 'lockchip-rhino', name: 'Rhino', type: 'lockchip', image: 'images/lockchips/Rhino.png', score: 5 },
        { id: 'lockchip-sol', name: 'Sol', type: 'lockchip', image: 'images/lockchips/Sol.png', score: 5 },
        { id: 'lockchip-stag', name: 'Stag', type: 'lockchip', image: 'images/lockchips/Stag.png', score: 5 },
        { id: 'lockchip-valkyrie', name: 'Valkyrie', type: 'lockchip', image: 'images/lockchips/Valkyrie.png', score: 5 },
        { id: 'lockchip-wizard', name: 'Wizard', type: 'lockchip', image: 'images/lockchips/Wizard.png', score: 5 },

        { id: 'mainblade-arc', name: 'Arc', type: 'mainblade', image: 'images/mainblades/Arc.png', score: 10 },
        { id: 'mainblade-brave', name: 'Brave', type: 'mainblade', image: 'images/mainblades/Brave.png', score: 10 },
        { id: 'mainblade-brush', name: 'Brush', type: 'mainblade', image: 'images/mainblades/Brush.png', score: 10 },
        { id: 'mainblade-dark', name: 'Dark', type: 'mainblade', image: 'images/mainblades/Dark.png', score: 10 },
        { id: 'mainblade-fang', name: 'Fang', type: 'mainblade', image: 'images/mainblades/Fang.png', score: 10 },
        { id: 'mainblade-fort', name: 'Fort', type: 'mainblade', image: 'images/mainblades/Fort.png', score: 10 },
        { id: 'mainblade-reaper', name: 'Reaper', type: 'mainblade', image: 'images/mainblades/Reaper.png', score: 10 },
        { id: 'mainblade-volt', name: 'Volt', type: 'mainblade', image: 'images/mainblades/Volt.png', score: 10 },
        { id: 'mainblade-wriggle', name: 'Wriggle', type: 'mainblade', image: 'images/mainblades/Wriggle.png', score: 10 },
        { id: 'antler', name: 'Antler', type: 'mainblade', image: 'images/mainblades/antler.png', score: 10 }, // Peça adicionada

        { id: 'assistblade-bumper', name: 'Bumper', type: 'assistblade', image: 'images/assistblades/Bumper.png', score: 8 },
        { id: 'assistblade-charge', name: 'Charge', type: 'assistblade', image: 'images/assistblades/Charge.png', score: 8 },
        { id: 'assistblade-jaggy', name: 'Jaggy', type: 'assistblade', image: 'images/assistblades/Jaggy.png', score: 8 },
        { id: 'assistblade-round', name: 'Round', type: 'assistblade', image: 'images/assistblades/Round.png', score: 8 },
        { id: 'assistblade-slash', name: 'Slash', type: 'assistblade', image: 'images/assistblades/Slash.png', score: 8 },
        { id: 'assistblade-turn', name: 'Turn', type: 'assistblade', image: 'images/assistblades/Turn.png', score: 8 },
    ];

    // Lista completa de combos do meta
    const ALL_COMBOS = [
        { blade: 'CobaltDragoon', ratchet: '5-60', bit: 'Elevate', points: 721.75 }, { blade: 'WizardRod', ratchet: '1-60', bit: 'Hexa', points: 668.75 }, { blade: 'WizardRod', ratchet: '9-60', bit: 'Ball', points: 622.25 }, { blade: 'PhoenixWing', ratchet: '3-60', bit: 'Rush', points: 305.25 }, { blade: 'PhoenixWing', ratchet: '1-60', bit: 'Rush', points: 275.25 }, { blade: 'CobaltDragoon', ratchet: '9-60', bit: 'Elevate', points: 202.5 }, { blade: 'HoverWyvern', ratchet: '9-60', bit: 'Kick', points: 187 }, { blade: 'WizardRod', ratchet: '3-60', bit: 'Ball', points: 167 }, { blade: 'AeroPegasus', ratchet: '1-60', bit: 'Rush', points: 149.25 }, { blade: 'PhoenixWing', ratchet: '1-60', bit: 'LowRush', points: 132.5 }, { blade: 'PhoenixWing', ratchet: '3-60', bit: 'LowRush', points: 119.5 }, { blade: 'SharkScale', ratchet: '4-50', bit: 'LowRush', points: 119 }, { blade: 'SharkScale', ratchet: '3-60', bit: 'LowRush', points: 111 }, { blade: 'WizardRod', ratchet: '9-60', bit: 'Hexa', points: 107.25 }, { blade: 'SilverWolf', ratchet: '9-60', bit: 'FreeBall', points: 100.75 }, { blade: 'TyrannoBeat', ratchet: '1-60', bit: 'Rush', points: 99.75 }, { blade: 'WizardRod', ratchet: '9-60', bit: 'LowOrb', points: 97.5 }, { blade: 'AeroPegasus', ratchet: '1-60', bit: 'Kick', points: 95 }, { blade: 'SharkScale', ratchet: '1-70', bit: 'LowRush', points: 94 }, { blade: 'PhoenixWing', ratchet: '3-60', bit: 'Point', points: 86.75 }, { blade: 'SilverWolf', ratchet: '9-60', bit: 'Hexa', points: 86.75 }, { blade: 'WizardRod', ratchet: '9-60', bit: 'FreeBall', points: 86.25 }, { blade: 'SharkScale', ratchet: '1-60', bit: 'LowRush', points: 80 }, { blade: 'KnightMail', ratchet: '1-60', bit: 'Rush', points: 69.25 }, { blade: 'CobaltDragoon', ratchet: '1-60', bit: 'Elevate', points: 69.25 }, { blade: 'HoverWyvern', ratchet: '1-60', bit: 'Kick', points: 69 }, { blade: 'PhoenixWing', ratchet: '9-60', bit: 'Rush', points: 68.5 }, { blade: 'WizardRod', ratchet: '1-60', bit: 'Rush', points: 67.5 }, { blade: 'WizardRod', ratchet: '1-70', bit: 'Hexa', points: 64 }, { blade: 'WizardRod', ratchet: '3-60', bit: 'Hexa', points: 63.75 }, { blade: 'PhoenixWing', ratchet: '5-60', bit: 'Point', points: 63.25 }, { blade: 'AeroPegasus', ratchet: '3-60', bit: 'LowRush', points: 60.25 }, { blade: 'AeroPegasus', ratchet: '1-60', bit: 'LowRush', points: 59 }, { blade: 'CobaltDragoon', ratchet: '7-60', bit: 'Level', points: 58.5 }, { blade: 'PhoenixWing', ratchet: '7-60', bit: 'Rush', points: 58.25 }, { blade: 'HoverWyvern', ratchet: '1-60', bit: 'LowRush', points: 58 }, { blade: 'WizardRod', ratchet: '7-60', bit: 'Hexa', points: 56.5 }, { blade: 'AeroPegasus', ratchet: '7-60', bit: 'Rush', points: 55 }, { blade: 'AeroPegasus', ratchet: '1-60', bit: 'Level', points: 53.25 }, { blade: 'WizardRod', ratchet: '5-60', bit: 'Hexa', points: 51.5 }, { blade: 'DranBuster', ratchet: '1-60', bit: 'Rush', points: 51.5 }, { blade: 'SilverWolf', ratchet: '9-60', bit: 'Ball', points: 51 }, { blade: 'WizardRod', ratchet: '3-60', bit: 'FreeBall', points: 49.5 }, { blade: 'TyrannoBeat', ratchet: '3-60', bit: 'Rush', points: 49 }, { blade: 'AeroPegasus', ratchet: '3-60', bit: 'Rush', points: 49 }, { blade: 'PhoenixWing', ratchet: '1-60', bit: 'Point', points: 48 }, { blade: 'ScorpioSpear', ratchet: '9-60', bit: 'FreeBall', points: 48 }, { blade: 'AeroPegasus', ratchet: '7-60', bit: 'LowRush', points: 46.5 }, { blade: 'DranBuster', ratchet: '1-60', bit: 'LowFlat', points: 45.75 }, { blade: 'SilverWolf', ratchet: '3-60', bit: 'FreeBall', points: 45.5 },
    ];
    const TOP_10_COMBOS = ALL_COMBOS.slice(0, 10);

    // Lista de combos de Chip (Exemplo)
    const ALL_CHIP_COMBOS = [
        { lockchip: 'Dran', mainblade: 'Brave', assistblade: 'Slash', points: 30 },
        { lockchip: 'Hells', mainblade: 'Reaper', assistblade: 'Charge', points: 28 },
        { lockchip: 'Fox', mainblade: 'Brush', assistblade: 'Round', points: 25 }
    ];

     // --- Traduções ---
     const translations = {
        'pt-br': {
            // Abas
            tab_meta: "META",
            tab_deck_builder: "Deck Builder",
            tab_collection: "Coleção",
            tab_settings: "Configurações",
            // Cabeçalhos das Abas
            meta_header: "Top 10 Combos do META",
            deck_builder_header: "Montador de Decks",
            collection_header: "Minha Coleção",
            settings_header: "Importar & Exportar Dados",
            // Aba Coleção
            collection_filter_label: "Mostrar Apenas os que Possuo",
            blades_section_title: "Blades", // (Ajustado)
            ratchets_section_title: "Ratchets",
            bits_section_title: "Bits",
            lockchips_section_title: "Lock Chips",
            mainblades_section_title: "Main Blades",
            assistblades_section_title: "Assist Blades",
            // Aba Deck Builder
            active_deck_label: "Deck Ativo:",
            deck_name_label: "Nome do Deck:",
            deck_name_placeholder: "Digite o nome do deck",
            add_deck_button_title: "Adicionar Novo Deck",
            delete_deck_button_title: "Deletar Deck Ativo",
            deck_placeholder_primeira: "Primeira Peça",
            deck_placeholder_selecione: "Selecione",
            deck_placeholder_ratchet: "Ratchet",
            deck_placeholder_bit: "Bit",
            deck_placeholder_mainblade: "Main Blade",
            deck_placeholder_assistblade: "Assist Blade",
            deck_score_label: "Soma:",
            deck_total_score_label: "Pontuação Total do Deck:",
            clear_deck_button: "Limpar Beyblades",
            export_deck_list_button: "Exportar Deck List",
             // Aba Configurações
             settings_description: "Salve sua coleção e decks em um arquivo (.bx) para backup ou para transferir para outro dispositivo.",
             language_settings_title: "Idioma / Language",
             export_button: "Exportar Dados (.bx)",
             import_button: "Importar Dados (.bx)",
             // Modal Seletor de Peças
             part_selector_modal_title_prefix: "Selecione:",
             part_suggestions_header: "Sugestões do META (que você possui)",
             part_chip_suggestions_header: "Sugestões de Combos (Chip)",
             part_suggestions_none: "Nenhuma sugestão encontrada com as peças que você possui (ou peças já estão em uso).",
             part_individual_header: "Peças Individuais (que você possui)",
             part_individual_none_prefix: "Nenhuma peça",
             part_individual_none_suffix: "disponível (verifique sua coleção ou peças já em uso no deck).",
             // Modal Variantes
             variant_modal_title_prefix: "Selecionar Variantes de",
             variant_modal_save_button: "Salvar",
              // Alertas e Prompts (Exemplo)
             prompt_new_deck_name: "Digite o nome do novo deck:",
             alert_cannot_delete_last_deck: "Você não pode deletar o último deck.",
             confirm_delete_deck_prefix: "Tem certeza que deseja deletar o deck \"",
             confirm_delete_deck_suffix: "\"? Esta ação não pode ser desfeita.",
             alert_deck_name_empty: "O nome do deck não pode ser vazio.",
             prompt_export_person_name: "Digite seu nome:",
             prompt_export_tournament_name: "Digite o nome do evento/torneio:",
             alert_export_deck_empty: "Seu deck está vazio ou não possui Beyblades completos para exportar. Adicione 3 Beyblades completos.",
             alert_export_copied: "Deck List copiada para o clipboard!",
             alert_export_copy_failed: "Falha ao copiar automaticamente. Copie o texto abaixo manualmente:\n\n",
             confirm_import_overwrite: "Importar este arquivo substituirá sua coleção e decks atuais. Deseja continuar?",
             alert_import_success: "Dados importados com sucesso!",
             alert_import_error: "Erro ao importar o arquivo:", // Sufixo adicionado pela função
             alert_invalid_file_format: "Formato de arquivo inválido ou dados corrompidos.",
             alert_file_read_error: "Erro ao ler o arquivo selecionado.",
             alert_save_error: "Não foi possível salvar os dados. O armazenamento pode estar cheio ou indisponível.",
             alert_suggestion_apply_error: "Não é possível aplicar esta sugestão. Uma ou mais peças já estão em uso neste deck.",
             alert_incompatible_part: "Não é possível adicionar uma peça do tipo '{partType}' a um Beyblade do tipo '{bayType}'. Selecione a primeira peça primeiro ou limpe o slot." // Novo
             // Adicione mais chaves conforme necessário...
        },
        'en': {
            // Tabs
            tab_meta: "META",
            tab_deck_builder: "Deck Builder",
            tab_collection: "Collection",
            tab_settings: "Settings",
             // Tab Headers
             meta_header: "Top 10 META Combos",
             deck_builder_header: "Deck Builder",
             collection_header: "My Collection",
             settings_header: "Import & Export Data",
             // Collection Tab
             collection_filter_label: "Show Only Owned",
             blades_section_title: "Blades",
             ratchets_section_title: "Ratchets",
             bits_section_title: "Bits",
             lockchips_section_title: "Lock Chips",
             mainblades_section_title: "Main Blades",
             assistblades_section_title: "Assist Blades",
             // Deck Builder Tab
             active_deck_label: "Active Deck:",
             deck_name_label: "Deck Name:",
             deck_name_placeholder: "Enter deck name",
             add_deck_button_title: "Add New Deck",
             delete_deck_button_title: "Delete Active Deck",
             deck_placeholder_primeira: "First Part",
             deck_placeholder_selecione: "Select",
             deck_placeholder_ratchet: "Ratchet",
             deck_placeholder_bit: "Bit",
             deck_placeholder_mainblade: "Main Blade",
             deck_placeholder_assistblade: "Assist Blade",
             deck_score_label: "Sum:",
             deck_total_score_label: "Total Deck Score:",
             clear_deck_button: "Clear Beyblades",
             export_deck_list_button: "Export Deck List",
             // Settings Tab
             settings_description: "Save your collection and decks to a (.bx) file for backup or transfer to another device.",
             language_settings_title: "Idioma / Language",
             export_button: "Export Data (.bx)",
             import_button: "Import Data (.bx)",
              // Part Selector Modal
             part_selector_modal_title_prefix: "Select:",
             part_suggestions_header: "META Suggestions (Owned)",
             part_chip_suggestions_header: "Combo Suggestions (Chip)",
             part_suggestions_none: "No suggestions found with the parts you own (or parts are already in use).",
             part_individual_header: "Individual Parts (Owned)",
             part_individual_none_prefix: "No",
             part_individual_none_suffix: "parts available (check collection or parts already in use in the deck).",
             // Variant Modal
             variant_modal_title_prefix: "Select Variants for",
             variant_modal_save_button: "Save",
             // Alerts and Prompts (Example)
             prompt_new_deck_name: "Enter the name for the new deck:",
             alert_cannot_delete_last_deck: "You cannot delete the last deck.",
             confirm_delete_deck_prefix: "Are you sure you want to delete the deck \"",
             confirm_delete_deck_suffix: "\"? This action cannot be undone.",
             alert_deck_name_empty: "Deck name cannot be empty.",
             prompt_export_person_name: "Enter your name:",
             prompt_export_tournament_name: "Enter the event/tournament name:",
             alert_export_deck_empty: "Your deck is empty or does not have complete Beyblades to export. Add 3 complete Beyblades.",
             alert_export_copied: "Deck List copied to clipboard!",
             alert_export_copy_failed: "Failed to copy automatically. Please copy the text below manually:\n\n",
             confirm_import_overwrite: "Importing this file will overwrite your current collection and decks. Continue?",
             alert_import_success: "Data imported successfully!",
             alert_import_error: "Error importing file:", // Suffix added by function
             alert_invalid_file_format: "Invalid file format or corrupted data.",
             alert_file_read_error: "Error reading the selected file.",
             alert_save_error: "Could not save data. Storage might be full or unavailable.",
             alert_suggestion_apply_error: "Cannot apply this suggestion. One or more parts are already in use in this deck.",
             alert_incompatible_part: "Cannot add part of type '{partType}' to a Beyblade of type '{bayType}'. Select the first part first or clear the slot." // Novo
             // Add more keys as needed...
        }
    };


    // --- Variável de estado do idioma ---
    let currentLanguage = 'pt-br'; // Padrão

    // --- ESTRUTURA DE DADOS PRINCIPAL ---
    let app_data = {
        collection: {
            blades: new Map(), // { 'dransword': Set(['Stock', 'ver. 2']) }
            ratchets: new Set(),
            bits: new Set(),
            mainblades: new Set(),
            assistblades: new Set(),
            lockchips: new Set()
        },
        decks: [],
        active_deck_index: 0
    };
    let active_deck_slot = { slotId: null, type: null };
    let variant_modal_part = null;

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
    const deck_score_span = document.getElementById('deck-score');
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
    const variant_modal_checkboxes = document.getElementById('variant-modal-checkboxes'); // Mantém o ID, mas conterá o grid
    const variant_modal_save = document.getElementById('variant-modal-save');
    const variant_modal_close = document.getElementById('variant-selector-close');
    const langPtBrButton = document.getElementById('lang-pt-br'); // NOVO
    const langEnButton = document.getElementById('lang-en');     // NOVO


     // --- Função para traduzir a UI ---
     const translateUI = () => {
        const langPack = translations[currentLanguage];
        if (!langPack) return; // Sai se o pacote de idioma não for encontrado

        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (langPack[key]) {
                 // Verifica se é um placeholder ou title
                 if (element.placeholder !== undefined && key.includes('placeholder')) {
                      element.placeholder = langPack[key];
                 } else if (element.title !== undefined && key.includes('title')) {
                     element.title = langPack[key];
                 }
                 // Para outros elementos, usa textContent (mais seguro que innerHTML)
                 // Verifica se é um botão para não sobrescrever imagens, etc.
                 else if (element.tagName !== 'BUTTON' || !element.querySelector('img')) {
                      element.textContent = langPack[key];
                 } else if (element.tagName === 'BUTTON' && !element.id.startsWith('lang-')) {
                      // Para botões de ação (Exportar, Importar, Limpar), define o texto
                      element.textContent = langPack[key];
                 }
                 // Nota: Para botões com imagens (bandeiras), não mudamos textContent
            } else {
                 console.warn(`Translation key not found for language '${currentLanguage}': ${key}`);
            }
        });

         // --- Traduções Específicas que não usam data-translate ---

         // Placeholders do Deck Builder (usando querySelectorAll para pegar todos)
         document.querySelectorAll('.part-placeholder[data-type="primeira"] span').forEach(el => el.textContent = langPack.deck_placeholder_primeira || 'Primeira Peça');
         document.querySelectorAll('.part-placeholder[data-type="ratchet"] span').forEach(el => el.textContent = langPack.deck_placeholder_ratchet || 'Ratchet');
         document.querySelectorAll('.part-placeholder[data-type="bit"] span').forEach(el => el.textContent = langPack.deck_placeholder_bit || 'Bit');
         document.querySelectorAll('.part-placeholder[data-type="mainblade"] span').forEach(el => el.textContent = langPack.deck_placeholder_mainblade || 'Main Blade');
         document.querySelectorAll('.part-placeholder[data-type="assistblade"] span').forEach(el => el.textContent = langPack.deck_placeholder_assistblade || 'Assist Blade');
         document.querySelectorAll('.part-name-display').forEach(el => {
             // Se o texto atual for "Selecione" (em qualquer idioma), traduz. Senão, mantém o nome da peça.
             if(el.textContent === translations['pt-br'].deck_placeholder_selecione || el.textContent === translations['en'].deck_placeholder_selecione) {
                 el.textContent = langPack.deck_placeholder_selecione || 'Select';
             }
         });
          document.querySelectorAll('.bey-score').forEach(el => {
              // Recria o texto mantendo o span para a pontuação
              const scoreSpan = el.querySelector('span');
              const scoreValue = scoreSpan ? scoreSpan.textContent : '0.00';
              el.innerHTML = `${langPack.deck_score_label || 'Sum:'} <span>${scoreValue}</span>`;
          });


         // Título do modal de seleção de peças (atualizado dinamicamente)
         // O título é definido em openPartSelector, mas podemos definir o prefixo aqui se necessário,
         // ou garantir que openPartSelector use a tradução correta.

         // Título do modal de variantes (atualizado dinamicamente)
         // Idem - garantir que openVariantSelector use a tradução.

         // Textos de Alertas e Prompts são usados diretamente nas funções JS.
    };

    // --- Função para definir o idioma ---
    const setLanguage = (lang) => {
        if (translations[lang]) {
            currentLanguage = lang;
            localStorage.setItem('beyXToolLanguage', lang); // Salva a preferência

            // Atualiza o estilo dos botões de idioma
            if (lang === 'pt-br') {
                langPtBrButton?.classList.add('active');
                langEnButton?.classList.remove('active');
            } else {
                langPtBrButton?.classList.remove('active');
                langEnButton?.classList.add('active');
            }

            translateUI(); // Aplica as traduções
        } else {
            console.error(`Idioma não suportado: ${lang}`);
        }
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
                if (correspondingContent) {
                    correspondingContent.classList.add('active');
                }
            });
        });
        // Define a aba inicial como META
        const initialTab = document.querySelector('.tab-link[data-tab="meta"]');
        const initialContent = document.getElementById('meta-tab');
        if (initialTab && initialContent) {
            tabLinks.forEach(l => l.classList.remove('active')); // Limpa todas
            tabContents.forEach(c => c.classList.remove('active')); // Limpa todas
            initialTab.classList.add('active'); // Ativa a META
            initialContent.classList.add('active'); // Mostra o conteúdo META
        } else { // Fallback se a aba META não existir
             const firstTab = document.querySelector('.tab-link');
             const firstContent = document.querySelector('.tab-content');
             if(firstTab && firstContent) {
                 firstTab.classList.add('active');
                 firstContent.classList.add('active');
             }
        }
    };

    // --- FUNÇÕES DE DADOS (SALVAR/CARREGAR) ---
    const createNewDeck = (name) => ({
        name: name,
        bays: [
            { type: null, part1: null, part2: null, part3: null },
            { type: null, part1: null, part2: null, part3: null },
            { type: null, part1: null, part2: null, part3: null }
        ]
    });

    const getSerializableCollection = () => {
        return {
            blades: Object.fromEntries(Array.from(app_data.collection.blades.entries(), ([id, set]) => [id, [...set]])),
            ratchets: [...app_data.collection.ratchets],
            bits: [...app_data.collection.bits],
            mainblades: [...app_data.collection.mainblades],
            assistblades: [...app_data.collection.assistblades],
            lockchips: [...app_data.collection.lockchips],
        };
    };

    const loadCollectionFromParsed = (parsedCollection) => {
        // Garante que a estrutura base exista mesmo se o save estiver vazio/corrompido
        const collection = {
             blades: new Map(),
             ratchets: new Set(),
             bits: new Set(),
             mainblades: new Set(),
             assistblades: new Set(),
             lockchips: new Set()
        };
        try {
            if (parsedCollection) {
                if (parsedCollection.blades) {
                     collection.blades = new Map(Object.entries(parsedCollection.blades).map(([id, variants]) => [id, new Set(variants)]));
                }
                if (parsedCollection.ratchets) {
                    collection.ratchets = new Set(parsedCollection.ratchets);
                }
                if (parsedCollection.bits) {
                    collection.bits = new Set(parsedCollection.bits);
                }
                 if (parsedCollection.mainblades) { // Adicionado
                     collection.mainblades = new Set(parsedCollection.mainblades);
                 }
                 if (parsedCollection.assistblades) { // Adicionado
                     collection.assistblades = new Set(parsedCollection.assistblades);
                 }
                 if (parsedCollection.lockchips) { // Adicionado
                     collection.lockchips = new Set(parsedCollection.lockchips);
                 }
            }
        } catch(e) {
             console.error("Erro ao processar coleção salva:", e);
             // Retorna a coleção vazia padrão em caso de erro grave
             return { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() };
        }
        return collection;
    };


    const saveAppData = () => {
        const serializable_data = {
            collection: getSerializableCollection(),
            decks: app_data.decks,
            active_deck_index: app_data.active_deck_index
        };
        try {
            localStorage.setItem('beyblade_x_data', JSON.stringify(serializable_data));
        } catch (e) {
            console.error("Erro ao salvar dados no localStorage:", e);
            alert(translations[currentLanguage].alert_save_error || "Não foi possível salvar os dados. O armazenamento pode estar cheio ou indisponível.");
        }
    };

    const loadAppData = () => {
        const saved_data_str = localStorage.getItem('beyblade_x_data');
        if (saved_data_str) {
            try {
                const parsed = JSON.parse(saved_data_str);
                app_data.collection = loadCollectionFromParsed(parsed.collection || {}); // Passa o objeto collection ou um vazio
                app_data.decks = Array.isArray(parsed.decks) ? parsed.decks : []; // Garante que decks seja um array
                app_data.active_deck_index = (typeof parsed.active_deck_index === 'number') ? parsed.active_deck_index : 0; // Garante que seja um número

            } catch (e) {
                console.error("Erro ao carregar dados salvos:", e);
                // Reseta para o estado inicial seguro se houver erro
                app_data.collection = { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() };
                app_data.decks = [];
                app_data.active_deck_index = 0;
            }
        } else {
             // Estado inicial se não houver dados salvos
             app_data.collection = { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() };
             app_data.decks = [];
             app_data.active_deck_index = 0;
        }

        // Garante que sempre exista pelo menos um deck
        if (app_data.decks.length === 0) {
            app_data.decks.push(createNewDeck("Meu Primeiro Deck"));
            app_data.active_deck_index = 0;
        }

        // Corrige índice inválido (se decks foram deletados e o índice ficou fora)
        if (app_data.active_deck_index >= app_data.decks.length || app_data.active_deck_index < 0) {
            app_data.active_deck_index = 0;
        }
    };


    // --- FUNÇÕES DE RENDERIZAÇÃO (UI) ---

    const renderMetaCombos = () => {
        if (!meta_combos_container) return;
        meta_combos_container.innerHTML = '';
        TOP_10_COMBOS.forEach((combo, index) => {
            const blade_part = ALL_PARTS.find(p => p.name === combo.blade);
            const ratchet_part = ALL_PARTS.find(p => p.name === combo.ratchet);
            const bit_part = ALL_PARTS.find(p => p.name === combo.bit);

            // Adiciona verificação para garantir que as peças foram encontradas
            if (!blade_part || !ratchet_part || !bit_part) {
                 console.warn(`Peça não encontrada para o combo META #${index + 1}:`, combo);
                 return; // Pula este combo se alguma peça não for encontrada
            }

            const combo_card = document.createElement('div');
            combo_card.className = 'meta-combo-card';
            combo_card.innerHTML = `
                <div class="rank">#${index + 1}</div>
                <div class="parts">
                    <div class="part-display"><img src="${blade_part.image}" alt="${combo.blade}"><span>${combo.blade}</span></div>
                    <div class="part-display"><img src="${ratchet_part.image}" alt="${combo.ratchet}"><span>${combo.ratchet}</span></div>
                    <div class="part-display"><img src="${bit_part.image}" alt="${combo.bit}"><span>${combo.bit}</span></div>
                </div>
                <div class="points">${combo.points.toFixed(2)} pts</div>`;
            meta_combos_container.appendChild(combo_card);
        });
    };

    const renderParts = () => {
        // Garante que os containers existam antes de tentar acessá-los
        if (!blades_container || !ratchets_container || !bits_container || !mainblades_container || !assistblades_container || !lockchips_container) {
             console.error("Um ou mais containers de peças não foram encontrados no DOM.");
             return;
        }

        blades_container.innerHTML = '';
        ratchets_container.innerHTML = '';
        bits_container.innerHTML = '';
        mainblades_container.innerHTML = '';
        assistblades_container.innerHTML = '';
        lockchips_container.innerHTML = '';

        // Ordena ALL_PARTS por nome antes de renderizar
        const sortedParts = [...ALL_PARTS].sort((a, b) => a.name.localeCompare(b.name));


        sortedParts.forEach(part => {
            let container;
            let collectionSet;

            switch (part.type) {
                case 'blade': container = blades_container; collectionSet = app_data.collection.blades; break;
                case 'ratchet': container = ratchets_container; collectionSet = app_data.collection.ratchets; break;
                case 'bit': container = bits_container; collectionSet = app_data.collection.bits; break;
                case 'mainblade': container = mainblades_container; collectionSet = app_data.collection.mainblades; break;
                case 'assistblade': container = assistblades_container; collectionSet = app_data.collection.assistblades; break;
                case 'lockchip': container = lockchips_container; collectionSet = app_data.collection.lockchips; break;
                default: return; // Ignora tipos desconhecidos
            }

             // Segurança extra: verifica se o container existe
             if (!container) return;

            const part_card = document.createElement('div');
            part_card.className = 'part-card';
            part_card.dataset.partId = part.id;

            let isOwned = false;
            if (part.type === 'blade' && collectionSet) {
                 // Para blades, verifica se existe a entrada no Map E se o Set de variantes não está vazio
                isOwned = collectionSet.has(part.id) && collectionSet.get(part.id).size > 0;
            } else if (collectionSet) {
                 // Para outras peças, apenas verifica se o ID está no Set
                isOwned = collectionSet.has(part.id);
            }

            if (isOwned) {
                part_card.classList.add('owned');
            }

            const imagePath = part.image || 'images/placeholder.png'; // Fallback para imagem
            part_card.innerHTML = `<img src="${imagePath}" alt="${part.name}"><p>${part.name}</p><div class="part-score">${part.score.toFixed(2)}</div>`;

            // Adiciona o event listener para o clique
            part_card.addEventListener('click', () => togglePartOwnership(part));

            container.appendChild(part_card);
        });
    };


    const renderDeckManager = () => {
         // Garante que os elementos existam
         if (!deck_selector || !deck_name_input) {
             console.error("Elementos do gerenciador de deck (select/input) não encontrados.");
             return;
         }

        // Garante que o índice ativo seja válido
        if (app_data.active_deck_index < 0 || app_data.active_deck_index >= app_data.decks.length) {
            app_data.active_deck_index = 0;
             // Se não houver decks, o loadAppData já terá criado um
             if (app_data.decks.length === 0) {
                  console.error("Nenhum deck encontrado após loadAppData.");
                  return; // Sai se algo deu muito errado
             }
        }

        const currentDeck = app_data.decks[app_data.active_deck_index];
         if (!currentDeck) {
             console.error(`Deck no índice ${app_data.active_deck_index} não encontrado.`);
             // Tenta resetar para o primeiro deck como segurança
             app_data.active_deck_index = 0;
             if (!app_data.decks[0]) return; // Sai se nem o primeiro existir
             currentDeck = app_data.decks[0];
         }


        deck_selector.innerHTML = '';
        app_data.decks.forEach((deck, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = deck.name || `Deck ${index + 1}`; // Nome padrão se estiver vazio
            deck_selector.appendChild(option);
        });
        deck_selector.value = app_data.active_deck_index;
        deck_name_input.value = currentDeck.name;
    };


    // Função ATUALIZADA para lidar com imagens de variantes no deck e tradução
    const updateDeckUI = () => {
        const currentDeck = app_data.decks[app_data.active_deck_index];
        if (!currentDeck) {
             console.error("Deck ativo não encontrado para atualizar UI.");
             return; // Sai se o deck ativo não for válido
        }

        let totalDeckScore = 0;

        deck_slots.forEach((slot, bayIndex) => {
            const bay = currentDeck.bays[bayIndex];
             // Garante que 'bay' seja um objeto válido
             if (!bay) {
                  console.warn(`Bay inválido no índice ${bayIndex} do deck ${currentDeck.name}`);
                  // Cria um bay vazio padrão para evitar erros
                  currentDeck.bays[bayIndex] = { type: null, part1: null, part2: null, part3: null };
                  bay = currentDeck.bays[bayIndex];
             }

            let bayScore = 0;

            // Seletores mais robustos
            const primeiraPh = slot.querySelector('.part-placeholder[data-type="primeira"]');
            const primeiraName = slot.querySelector('.part-name-display[data-name-type="primeira"]');
            const ratchetPh = slot.querySelector('.part-placeholder[data-type="ratchet"]');
            const ratchetName = slot.querySelector('.part-name-display[data-name-type="ratchet"]');
            const bitPh = slot.querySelector('.part-placeholder[data-type="bit"]');
            const bitName = slot.querySelector('.part-name-display[data-name-type="bit"]');
            const mainBladePh = slot.querySelector('.part-placeholder[data-type="mainblade"]');
            const mainBladeName = slot.querySelector('.part-name-display[data-name-type="mainblade"]');
            const assistBladePh = slot.querySelector('.part-placeholder[data-type="assistblade"]');
            const assistBladeName = slot.querySelector('.part-name-display[data-name-type="assistblade"]');
            const beyScoreSpan = slot.querySelector('.bey-score span');

             // Verifica se todos os elementos foram encontrados
             if (!primeiraPh || !primeiraName || !ratchetPh || !ratchetName || !bitPh || !bitName || !mainBladePh || !mainBladeName || !assistBladePh || !assistBladeName || !beyScoreSpan) {
                  console.error(`Elementos faltando no deck slot ${bayIndex}. Verifique o HTML.`);
                  return; // Pula este slot se algo estiver faltando
             }

            slot.dataset.bayType = bay.type || 'empty'; // Define 'empty' se o tipo for null

            // Usa a tradução atual para os textos padrão
            const langPack = translations[currentLanguage];
            const selectText = langPack.deck_placeholder_selecione || 'Select';

            const resetPlaceholder = (ph, nameEl, defaultTextKey) => {
                 const defaultText = langPack[defaultTextKey] || defaultTextKey; // Usa chave como fallback
                ph.innerHTML = `<span>${defaultText}</span>`;
                nameEl.textContent = selectText;
            };

            const setPlaceholder = (ph, nameEl, part) => {
                 // Garante que 'part' é um objeto válido
                 if (!part || typeof part !== 'object') {
                     console.warn("Tentativa de definir placeholder com peça inválida:", part);
                     resetPlaceholder(ph, nameEl, 'Erro'); // Mostra um erro no placeholder
                     return;
                 }

                const partName = part.variant ? `${part.baseName} (${part.variant})` : part.name;
                let imagePath = part.image || 'images/placeholder.png'; // Fallback inicial

                // --- LÓGICA ATUALIZADA PARA IMAGEM DA VARIANTE ---
                if (part.type === 'blade' && part.variant && part.baseId && ALL_VARIANTS[part.baseId]) {
                    const variantData = ALL_VARIANTS[part.baseId].find(v => v.name === part.variant);
                    if (variantData && variantData.image) {
                        imagePath = variantData.image; // Usa a imagem específica da variante
                    } else {
                         // Fallback para a imagem 'Stock' se a variante específica não tiver imagem
                         const stockVariant = ALL_VARIANTS[part.baseId].find(v => v.name === 'Stock');
                         if (stockVariant && stockVariant.image) {
                             imagePath = stockVariant.image;
                         }
                         // Se nem a Stock tiver, mantém a imagem base da ALL_PARTS (já em imagePath)
                    }
                }
                // --- FIM DA LÓGICA ATUALIZADA ---

                // Garante que score seja um número
                const score = (typeof part.score === 'number') ? part.score : 0;

                ph.innerHTML = `<img src="${imagePath}" alt="${partName}"><span class="part-score-deck">${score.toFixed(2)}</span>`;
                nameEl.textContent = partName;
            };

            // Reseta todos os placeholders condicionais primeiro, usando chaves de tradução
             resetPlaceholder(ratchetPh, ratchetName, 'deck_placeholder_ratchet');
             resetPlaceholder(bitPh, bitName, 'deck_placeholder_bit');
             resetPlaceholder(mainBladePh, mainBladeName, 'deck_placeholder_mainblade');
             resetPlaceholder(assistBladePh, assistBladeName, 'deck_placeholder_assistblade');


            if (bay.type === 'standard') {
                if (bay.part1) { setPlaceholder(primeiraPh, primeiraName, bay.part1); bayScore += (typeof bay.part1.score === 'number' ? bay.part1.score : 0); }
                else { resetPlaceholder(primeiraPh, primeiraName, 'blades_section_title'); } // Usa a chave 'Blades'
                if (bay.part2) { setPlaceholder(ratchetPh, ratchetName, bay.part2); bayScore += (typeof bay.part2.score === 'number' ? bay.part2.score : 0); }
                if (bay.part3) { setPlaceholder(bitPh, bitName, bay.part3); bayScore += (typeof bay.part3.score === 'number' ? bay.part3.score : 0); }
            } else if (bay.type === 'chip') {
                if (bay.part1) { setPlaceholder(primeiraPh, primeiraName, bay.part1); bayScore += (typeof bay.part1.score === 'number' ? bay.part1.score : 0); }
                else { resetPlaceholder(primeiraPh, primeiraName, 'lockchips_section_title'); } // Usa a chave 'Lock Chips'
                if (bay.part2) { setPlaceholder(mainBladePh, mainBladeName, bay.part2); bayScore += (typeof bay.part2.score === 'number' ? bay.part2.score : 0); }
                if (bay.part3) { setPlaceholder(assistBladePh, assistBladeName, bay.part3); bayScore += (typeof bay.part3.score === 'number' ? bay.part3.score : 0); }
            } else {
                 // Slot vazio ou tipo indefinido
                resetPlaceholder(primeiraPh, primeiraName, 'deck_placeholder_primeira');
            }

            // Atualiza o texto "Soma:" ou "Sum:"
            const scoreLabel = langPack.deck_score_label || 'Sum:';
            beyScoreSpan.parentElement.innerHTML = `${scoreLabel} <span>${bayScore.toFixed(2)}</span>`; // Recria o HTML interno
            totalDeckScore += bayScore;
        });

         // Garante que deck_score_span exista e atualiza o texto total
         if (deck_score_span) {
              const totalScoreLabel = translations[currentLanguage].deck_total_score_label || 'Total Deck Score:';
              // Atualiza o parágrafo inteiro para incluir o texto traduzido
              deck_score_span.parentElement.innerHTML = `${totalScoreLabel} <span id="deck-score">${totalDeckScore.toFixed(2)}</span>`;
         } else {
              console.error("Elemento 'deck-score' não encontrado para atualizar pontuação total.");
         }
        renderDeckManager(); // Atualiza o select e input de nome
    };


    // --- FUNÇÕES DE COLEÇÃO E MODAIS ---

    // Função ATUALIZADA para pular o modal se só houver a variante 'Stock'
    const togglePartOwnership = (part) => {
        const part_card_collection = document.querySelector(`#collection-tab [data-part-id="${part.id}"]`);
        const collectionSet = app_data.collection.blades; // Definido aqui para ambos os casos de blade

        if (part.type === 'blade') {
            const variantList = part.variantsId ? ALL_VARIANTS[part.variantsId] : null;

            // Condição MODIFICADA: Abre o modal APENAS se houver variantsId E a lista de variantes tiver MAIS DE UM item.
            if (part.variantsId && variantList && variantList.length > 1) {
                openVariantSelector(part);
            } else {
                // Lógica para Blade SEM variantes OU com APENAS a variante 'Stock'
                if (!collectionSet) return; // Segurança

                if (collectionSet.has(part.id)) {
                    // Se já tem, remove
                    collectionSet.delete(part.id);
                    if(part_card_collection) part_card_collection.classList.remove('owned');
                     // Remove a peça dos decks se foi desmarcada
                     app_data.decks.forEach(deck => {
                          deck.bays.forEach(bay => {
                               if (bay.part1 && (bay.part1.baseId || bay.part1.id) === part.id) {
                                   clearBay(bay); // Limpa o bay inteiro
                               }
                          });
                     });

                } else {
                    // Se não tem, adiciona com a variante 'Stock' (ou 'owned' se não tiver variantsId)
                    const variantToAdd = (part.variantsId && variantList && variantList.length === 1) ? variantList[0].name : 'owned';
                    collectionSet.set(part.id, new Set([variantToAdd]));
                    if(part_card_collection) part_card_collection.classList.add('owned');
                }
                saveAppData();
                 updateDeckUI(); // Atualiza deck caso a peça tenha sido removida
            }
        } else {
            // Lógica para todas as outras peças (inalterada)
            const collectionSetKey = part.type + 's';
            const collection_set = app_data.collection[collectionSetKey];
            if (!collection_set) return;

            if (collection_set.has(part.id)) {
                collection_set.delete(part.id);
                if(part_card_collection) part_card_collection.classList.remove('owned');
                 // Remove a peça dos decks se foi desmarcada
                 app_data.decks.forEach(deck => {
                      deck.bays.forEach(bay => {
                           if (bay.part2?.id === part.id) bay.part2 = null;
                           if (bay.part3?.id === part.id) bay.part3 = null;
                      });
                 });
            } else {
                collection_set.add(part.id);
                if(part_card_collection) part_card_collection.classList.add('owned');
            }
            saveAppData();
             updateDeckUI(); // Atualiza deck caso a peça tenha sido removida
        }
    };


    // Função ATUALIZADA para usar cards no modal de variantes e tradução
    const openVariantSelector = (part) => {
         variant_modal_part = part;
         // Traduz o título do modal
         const titlePrefix = translations[currentLanguage].variant_modal_title_prefix || "Select Variants for";
         variant_modal_title.textContent = `${titlePrefix} ${part.name}`;

        // MODIFICADO: Limpa e adiciona um container de grid
        variant_modal_checkboxes.innerHTML = '<div id="variant-modal-grid"></div>';
        const gridContainer = document.getElementById('variant-modal-grid');
         if(!gridContainer) return; // Segurança

        const ownedVariants = app_data.collection.blades.get(part.id) || new Set();

        const variantList = ALL_VARIANTS[part.variantsId];
        if (!variantList) {
            console.error(`Nenhuma lista de variantes encontrada para ${part.variantsId}`);
            closeVariantModal();
            return;
        }

        variantList.forEach(variantData => {
            const variantName = variantData.name;
             // Segurança: Garante que variantData e nome existam
             if (!variantData || typeof variantName !== 'string') return;

            const isOwned = ownedVariants.has(variantName);

            // Cria o card da variante
            const card = document.createElement('div');
            card.className = 'variant-card';
            card.dataset.variantName = variantName; // Armazena o nome da variante
            card.innerHTML = `
                <img src="${variantData.image || 'images/placeholder.png'}" alt="${variantName}">
                <p>${variantName}</p>
            `;

            // Marca como selecionado se já pertencer à coleção
            if (isOwned) {
                card.classList.add('selected');
            }

            // Adiciona evento de clique para alternar seleção
            card.addEventListener('click', () => {
                card.classList.toggle('selected');
            });

            gridContainer.appendChild(card); // Adiciona ao grid
        });

         // Traduz o botão Salvar dentro do modal
         if(variant_modal_save) {
            variant_modal_save.textContent = translations[currentLanguage].variant_modal_save_button || 'Save';
         }

        variant_modal.style.display = 'block';
    };

    // Função ATUALIZADA para ler seleção dos cards
    const saveVariantSelection = () => {
        if (!variant_modal_part) return;

        const ownedVariants = new Set();
        // MODIFICADO: Seleciona os cards com a classe 'selected'
        const selectedCards = variant_modal_checkboxes.querySelectorAll('.variant-card.selected');
        selectedCards.forEach(card => {
             // Garante que o dataset exista antes de adicionar
             if(card.dataset.variantName) {
                ownedVariants.add(card.dataset.variantName); // Pega o nome do data attribute
             }
        });

        const part_card_collection = document.querySelector(`#collection-tab [data-part-id="${variant_modal_part.id}"]`);

        if (ownedVariants.size > 0) {
            app_data.collection.blades.set(variant_modal_part.id, ownedVariants);
            if(part_card_collection) part_card_collection.classList.add('owned');
        } else {
            app_data.collection.blades.delete(variant_modal_part.id);
            if(part_card_collection) part_card_collection.classList.remove('owned');
             // Se a peça foi removida da coleção, remove também dos decks
             app_data.decks.forEach(deck => {
                  deck.bays.forEach(bay => {
                       if (bay.part1 && (bay.part1.baseId || bay.part1.id) === variant_modal_part.id) {
                           // bay.part1 = null; // Remove apenas a peça
                           // Se remover a primeira peça, invalida o bay inteiro
                           if(bay.type === 'standard' || bay.type === 'chip') {
                                clearBay(bay); // Limpa o bay inteiro
                           }
                       }
                  });
             });
        }

        saveAppData();
        updateDeckUI(); // Adicionado para refletir a variante correta se estiver no deck ou se foi removida
        closeVariantModal();
    };


    const closeVariantModal = () => {
         if (variant_modal) {
             variant_modal.style.display = 'none';
         }
        variant_modal_part = null;
    };

    const applyFilter = () => {
         if(collection_tab && collection_filter) {
             collection_tab.classList.toggle('filter-on', collection_filter.checked);
         }
    };

    const exportData = () => {
        saveAppData(); // Garante que os dados mais recentes sejam salvos
        const data_str = localStorage.getItem('beyblade_x_data');
        if (!data_str) {
             alert("Não há dados para exportar."); // Deveria ser traduzido se fosse uma mensagem principal
             return;
        }
        const data_blob = new Blob([data_str], {type: 'application/json;charset=utf-8'}); // Define charset
        const url = URL.createObjectURL(data_blob);
        const a = document.createElement('a');
        a.href = url;
        const timestamp = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
        a.download = `beyxtool_dados_${timestamp}.bx`; // Nome de arquivo mais descritivo
        document.body.appendChild(a);
        a.click();
        // Limpeza após o download
        setTimeout(() => {
             document.body.removeChild(a);
             URL.revokeObjectURL(url);
        }, 100); // Pequeno delay para garantir o início do download
    };


    const importData = (event) => {
        const file = event.target.files[0];
        if (!file) return;

         // Verifica o tipo do arquivo (opcional, mas bom para UX)
         if (!file.name.endsWith('.bx') && file.type !== 'application/json') {
             alert("Por favor, selecione um arquivo .bx válido."); // Traduzir se necessário
              if (import_file_input) import_file_input.value = ''; // Limpa o input
             return;
         }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported_data_str = e.target.result;
                 if (!imported_data_str) throw new Error(translations[currentLanguage].alert_file_read_error || "Erro ao ler o arquivo selecionado."); // Verifica se leu algo

                const parsed = JSON.parse(imported_data_str);

                // Validação básica da estrutura
                if (typeof parsed === 'object' && parsed !== null && 'collection' in parsed && 'decks' in parsed && 'active_deck_index' in parsed) {
                     // Confirmação do usuário antes de sobrescrever
                     const confirmMsg = translations[currentLanguage].confirm_import_overwrite || "Importar este arquivo substituirá sua coleção e decks atuais. Deseja continuar?";
                     if (confirm(confirmMsg)) {
                          localStorage.setItem('beyblade_x_data', imported_data_str); // Salva os novos dados
                          loadAppData(); // Recarrega os dados na aplicação
                          renderParts(); // Atualiza a UI da coleção
                          updateDeckUI(); // Atualiza a UI do deck builder
                          alert(translations[currentLanguage].alert_import_success || 'Dados importados com sucesso!');
                     }
                } else {
                     throw new Error(translations[currentLanguage].alert_invalid_file_format || 'Formato de arquivo inválido ou dados corrompidos.');
                }
            } catch (error) {
                 console.error("Erro ao importar dados:", error);
                 alert(`${translations[currentLanguage].alert_import_error || 'Erro ao importar o arquivo:'} ${error.message}`);
            } finally {
                 // Limpa o input de arquivo para permitir importar o mesmo arquivo novamente se necessário
                 if (import_file_input) {
                      import_file_input.value = '';
                 }
            }
        };
        reader.onerror = (error) => {
             console.error("Erro ao ler arquivo:", error);
             alert(translations[currentLanguage].alert_file_read_error || "Erro ao ler o arquivo selecionado.");
             if (import_file_input) {
                  import_file_input.value = '';
             }
        };
        reader.readAsText(file);
    };


    // Função ATUALIZADA com tradução
    const applySuggestion = (slotId, combo) => {
        const currentDeck = app_data.decks[app_data.active_deck_index];
        const usedPartIds = new Set();
        currentDeck.bays.forEach((bay, index) => {
            if (index.toString() === slotId) return; // Ignora o slot atual
            if (bay.part1) usedPartIds.add(bay.part1.baseId || bay.part1.id);
            if (bay.part2) usedPartIds.add(bay.part2.id); // Ratchet ou MainBlade
            if (bay.part3) usedPartIds.add(bay.part3.id); // Bit ou AssistBlade
        });

        const bladePart = ALL_PARTS.find(p => p.name === combo.blade);
        const ratchetPart = ALL_PARTS.find(p => p.name === combo.ratchet);
        const bitPart = ALL_PARTS.find(p => p.name === combo.bit);

         // Adiciona verificação se as peças foram encontradas
         if (!bladePart || !ratchetPart || !bitPart) {
             alert("Erro ao encontrar as peças para a sugestão."); // Pode ser traduzido se quiser
             return;
         }

        // Verifica se as peças da sugestão já estão em uso em OUTROS slots
        if (usedPartIds.has(bladePart.id) || usedPartIds.has(ratchetPart.id) || usedPartIds.has(bitPart.id)) {
            alert(translations[currentLanguage].alert_suggestion_apply_error || "Não é possível aplicar esta sugestão. Uma ou mais peças já estão em uso neste deck.");
            return;
        }

        const bay = app_data.decks[app_data.active_deck_index].bays[slotId];
         if (!bay) return; // Segurança

        clearBay(bay);
        bay.type = 'standard'; // Sugestões são sempre do tipo standard por enquanto

        const ownedVariants = app_data.collection.blades.get(bladePart.id);
        if (!ownedVariants || ownedVariants.size === 0) {
             alert("Erro: Blade sugerida não encontrada na coleção ao aplicar."); // Pode traduzir
             return;
        }

        // Prioriza 'Stock' se o usuário a possuir, senão pega a primeira que ele tiver.
        const variant = ownedVariants.has('Stock') ? 'Stock' : ownedVariants.values().next().value;

        // Cria o objeto da peça com dados da variante correta
        bay.part1 = {
             ...bladePart,
             baseId: bladePart.id,
             baseName: bladePart.name,
             variant: variant,
             name: `${bladePart.name} (${variant})`
        };
        bay.part2 = ratchetPart;
        bay.part3 = bitPart;

        updateDeckUI();
        saveAppData();
        closePartModal();
    };


    // Função ATUALIZADA para buscar imagem da variante
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


    // Função ATUALIZADA com lógica de sugestões Chip e Standard separada e tradução
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


    const closePartModal = () => {
         if (part_modal) {
              part_modal.style.display = 'none';
         }
    };

    const clearBay = (bay) => {
         if (bay && typeof bay === 'object') {
             bay.type = null;
             bay.part1 = null;
             bay.part2 = null;
             bay.part3 = null;
         }
    };

    // Função ATUALIZADA - Lógica de compatibilidade e definição de tipo e tradução
    const selectPartForDeck = (part) => {
        const { slotId, type } = active_deck_slot;
        const bay = app_data.decks[app_data.active_deck_index].bays[slotId];
         if (!bay) return; // Segurança

        // Adiciona baseId e baseName se não existirem (importante para Blades com ou sem variantes)
        if (part.type === 'blade' && !part.baseId) {
            part.baseId = part.id;
            part.baseName = part.name;
            // Define uma variante padrão se for uma blade SEM variantsId mas selecionada individualmente
            if (!part.variant) part.variant = 'Stock'; // Ou pode deixar null/undefined se preferir
        }

        if (type === 'primeira') {
            // Limpa o bay APENAS se a peça atual for de tipo diferente da nova peça
            // Ou se já houver uma peça lá (para permitir trocar uma blade por outra blade, por ex)
            if (bay.part1 ||
                (bay.type === 'standard' && part.type !== 'blade') ||
                (bay.type === 'chip' && part.type !== 'lockchip'))
             {
                 clearBay(bay);
            }

            bay.part1 = part;
            // Define o tipo do Bay com base na primeira peça adicionada
            if (part.type === 'blade') {
                bay.type = 'standard';
            } else if (part.type === 'lockchip') {
                bay.type = 'chip';
            }
        } else {
            // Mapeamento dos tipos de placeholder para as propriedades do bay
            const partMap = {
                'ratchet': 'part2',
                'bit': 'part3',
                'mainblade': 'part2', // No tipo 'chip', MainBlade vai para part2
                'assistblade': 'part3' // No tipo 'chip', AssistBlade vai para part3
            };

            // Verifica se o TIPO DE PEÇA é compatível com o TIPO DE BAY atual
             const targetSlot = partMap[type];
             if (!targetSlot) {
                 console.error("Mapeamento inválido para o tipo:", type);
                 closePartModal();
                 return;
             }

             if ((bay.type === 'standard' && (type === 'ratchet' || type === 'bit')) ||
                 (bay.type === 'chip' && (type === 'mainblade' || type === 'assistblade')))
             {
                  // Adiciona a peça ao slot correto (part2 ou part3)
                  bay[targetSlot] = part;
             } else {
                  // Se o bay ainda não tem tipo (está vazio), ou se o tipo é incompatível
                  let alertMsg = translations[currentLanguage].alert_incompatible_part || "Cannot add part of type '{partType}' to a Beyblade of type '{bayType}'. Select the first part first or clear the slot.";
                  alertMsg = alertMsg.replace('{partType}', type).replace('{bayType}', bay.type || 'Empty'); // Usa Empty como fallback
                  alert(alertMsg);
                  console.warn(`Tentativa de adicionar peça ${type} incompatível com o tipo de bay ${bay.type}`);
                  closePartModal(); // Fecha o modal sem fazer a alteração
                  return;
             }
        }

        updateDeckUI();
        saveAppData();
        closePartModal();
    };


    const clearDeck = () => {
         if (app_data.decks[app_data.active_deck_index]) {
             app_data.decks[app_data.active_deck_index].bays.forEach(clearBay);
             updateDeckUI();
             saveAppData();
         }
    };

    // Funções Add/Delete/Rename/Switch Deck (Traduzir prompts/alerts nelas)
     const addDeck = () => {
         const promptText = translations[currentLanguage].prompt_new_deck_name || `Enter the name for the new deck:`;
         const defaultName = `Deck ${app_data.decks.length + 1}`;
         const newDeckName = prompt(promptText, defaultName);
         if (newDeckName && newDeckName.trim() !== "") {
             app_data.decks.push(createNewDeck(newDeckName.trim()));
             app_data.active_deck_index = app_data.decks.length - 1;
             updateDeckUI();
             saveAppData();
         } else if (newDeckName !== null) { // Clicou OK mas deixou vazio
              alert(translations[currentLanguage].alert_deck_name_empty || "Deck name cannot be empty.");
         }
     };

     const deleteDeck = () => {
         if (app_data.decks.length <= 1) {
             alert(translations[currentLanguage].alert_cannot_delete_last_deck || "You cannot delete the last deck.");
             return;
         }
         const deckToDelete = app_data.decks[app_data.active_deck_index];
         if (!deckToDelete) return;

         const confirmText = `${translations[currentLanguage].confirm_delete_deck_prefix || 'Are you sure you want to delete the deck "'}${deckToDelete.name}${translations[currentLanguage].confirm_delete_deck_suffix || '"? This action cannot be undone.'}`;

         if (confirm(confirmText)) {
             app_data.decks.splice(app_data.active_deck_index, 1);
             app_data.active_deck_index = Math.max(0, app_data.active_deck_index - 1);
             updateDeckUI();
             saveAppData();
         }
     };

    const renameDeck = () => {
         const currentDeck = app_data.decks[app_data.active_deck_index];
         if (!currentDeck || !deck_name_input) return; // Segurança

        const newName = deck_name_input.value.trim();
        if (newName && newName !== currentDeck.name) { // Renomeia apenas se for diferente e não vazio
            currentDeck.name = newName;
            renderDeckManager(); // Atualiza o <select> com o novo nome
            saveAppData();
        } else if (!newName) { // Se ficou vazio, restaura o nome antigo
            deck_name_input.value = currentDeck.name;
             alert(translations[currentLanguage].alert_deck_name_empty || "Deck name cannot be empty.");
        }
         deck_name_input.blur(); // Tira o foco do input em qualquer caso
    };


    const switchDeck = () => {
         if (!deck_selector) return; // Segurança
         const newIndex = parseInt(deck_selector.value, 10);
         // Valida o novo índice
         if (!isNaN(newIndex) && newIndex >= 0 && newIndex < app_data.decks.length) {
              app_data.active_deck_index = newIndex;
              updateDeckUI();
              saveAppData(); // Salva o índice ativo
         } else {
              console.error("Índice de deck inválido selecionado:", deck_selector.value);
              // Opcional: reverter a seleção para o índice válido anterior
              deck_selector.value = app_data.active_deck_index;
         }
    };


    const exportDeckList = () => {
         const personNamePrompt = translations[currentLanguage].prompt_export_person_name || "Enter your name:";
         const tournamentNamePrompt = translations[currentLanguage].prompt_export_tournament_name || "Enter the event/tournament name:";
        const personName = prompt(personNamePrompt, "");
        if (personName === null) return; // Cancelou

        const tournamentName = prompt(tournamentNamePrompt, "");
        if (tournamentName === null) return; // Cancelou

        const currentDeck = app_data.decks[app_data.active_deck_index];
         if (!currentDeck) {
              alert("Erro: Deck ativo não encontrado."); // Pode traduzir
              return;
         }

        const bayStrings = currentDeck.bays.map((bay, index) => {
             // Validação básica do bay
             if (!bay || typeof bay !== 'object') return null;

            if (bay.type === 'standard' && bay.part1 && bay.part2 && bay.part3) {
                 // Usa baseName para Blades para não incluir a variante na exportação padrão
                const bladeName = bay.part1.baseName || bay.part1.name;
                return `${bladeName}/${bay.part2.name}-${bay.part3.name}`;
            } else if (bay.type === 'chip' && bay.part1 && bay.part2 && bay.part3) {
                return `${bay.part1.name} (${bay.part2.name}/${bay.part3.name})`;
            }
            return null;
        }).filter(Boolean);

        if (bayStrings.length === 0) {
            alert(translations[currentLanguage].alert_export_deck_empty || "Your deck is empty or does not have complete Beyblades to export. Add 3 complete Beyblades.");
            return;
        }

        const deckListString = `=== DECK LIST ===\n\n===== NOME =====\n${personName.trim()}\n\n==== EVENTO ====\n${tournamentName.trim()}\n\n===== DECK =====\n${bayStrings.join('\n')}\n\n===============`;

        navigator.clipboard.writeText(deckListString).then(() => {
            alert(translations[currentLanguage].alert_export_copied || "Deck List copied to clipboard!");
        }).catch(err => {
            console.error('Erro ao copiar para o clipboard: ', err);
            alert(`${translations[currentLanguage].alert_export_copy_failed || 'Failed to copy automatically. Please copy the text below manually:\n\n'} ${deckListString}`);
        });
    };


    // --- INICIALIZAÇÃO E EVENTOS ---

    // Carrega o idioma salvo ou usa o padrão
    const savedLanguage = localStorage.getItem('beyXToolLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    } // else mantém o padrão 'pt-br'

    setupTabs();
    loadAppData();
    renderParts();
    renderMetaCombos();
    updateDeckUI(); // Renderiza UI inicial antes de traduzir
    setLanguage(currentLanguage); // Aplica o idioma inicial (DEPOIS de renderizar a UI inicial)

    // Adiciona listeners aos botões de idioma (se existirem)
    if(langPtBrButton) {
        langPtBrButton.addEventListener('click', () => setLanguage('pt-br'));
    }
    if(langEnButton) {
        langEnButton.addEventListener('click', () => setLanguage('en'));
    }

    // Adiciona listeners apenas se os elementos existirem
    if (collection_filter) collection_filter.addEventListener('change', applyFilter);
    if (export_button) export_button.addEventListener('click', exportData);
    if (import_button) import_button.addEventListener('click', () => import_file_input?.click());
    if (import_file_input) import_file_input.addEventListener('change', importData);
    if (clear_deck_button) clear_deck_button.addEventListener('click', clearDeck);
    if (export_deck_button) export_deck_button.addEventListener('click', exportDeckList);

    deck_slots.forEach(slot => {
        slot.querySelectorAll('.part-placeholder').forEach(ph => {
            ph.addEventListener('click', () => {
                const slotId = slot.dataset.slotId;
                const type = ph.dataset.type; // 'primeira', 'ratchet', 'bit', 'mainblade', 'assistblade'
                if(slotId !== undefined && type) { // Verifica se os data attributes existem
                     openPartSelector(slotId, type);
                } else {
                     console.error("Placeholder sem data-slot-id ou data-type:", ph);
                }
            });
        });
    });

    if (add_deck_button) add_deck_button.addEventListener('click', addDeck);
    if (delete_deck_button) delete_deck_button.addEventListener('click', deleteDeck);
    if (deck_selector) deck_selector.addEventListener('change', switchDeck);
    // 'blur' é geralmente melhor para renomear, pois 'change' só dispara ao perder o foco após alteração
    if (deck_name_input) deck_name_input.addEventListener('blur', renameDeck);

    if (part_modal_close) part_modal_close.addEventListener('click', closePartModal);
    if (variant_modal_close) variant_modal_close.addEventListener('click', closeVariantModal);
    if (variant_modal_save) variant_modal_save.addEventListener('click', saveVariantSelection);

    // Fechar modais ao clicar fora
    window.addEventListener('click', (event) => {
        if (event.target === part_modal) closePartModal();
        if (event.target === variant_modal) closeVariantModal();
    });

});
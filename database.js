// --- [MODIFICADO] DADOS DO GUIA DE INICIANTE (Hasbro + Custom Line/CX) ---
// --- ADICIONE AS IMAGENS DE PRODUTO na pasta images/products/ ---
const STARTER_GUIDE_PRODUCTS = [
    // --- [NOVO] Produtos Custom Line (Hasbro) ---
    {
        productName: "Hasbro Custom Line: Courage Dran S 6-60V (G1677)",
        image: "images/products/hasbro_G1677.png", // ADICIONE ESTA IMAGEM
        parts: ['lockchip-dran', 'mainblade-brave', 'assistblade-slash', '6-60', 'vortex']
    },
    {
        productName: "Hasbro Custom Line: Reaper Incendio T 4-70K (G1678)",
        image: "images/products/hasbro_G1678.png", // ADICIONE ESTA IMAGEM
        parts: ['lockchip-hells', 'mainblade-reaper', 'assistblade-turn', '4-70', 'kick']
    },
    {
        productName: "Hasbro Custom Line: Arc Wizard R 4-55LO (G1679)",
        image: "images/products/hasbro_G1679.png", // ADICIONE ESTA IMAGEM
        parts: ['lockchip-wizard', 'mainblade-arc', 'assistblade-round', '4-55', 'loworb']
    },
    {
        productName: "Hasbro Custom Line: Dark Perseus B 6-80W (G1680)",
        image: "images/products/hasbro_G1680.png", // ADICIONE ESTA IMAGEM
        parts: ['lockchip-perseus', 'mainblade-dark', 'assistblade-bumper', '6-80', 'wedge']
    },
    {
        productName: "Hasbro Custom Line: Brush Fox J 9-70GR (G1681)",
        image: "images/products/hasbro_G1681.png", // ADICIONE ESTA IMAGEM
        parts: ['lockchip-fox', 'mainblade-brush', 'assistblade-jaggy', '9-70', 'gearrush']
    },
    {
        productName: "Hasbro Custom Line: Fort Hornet R 7-60T (G1682)",
        image: "images/products/hasbro_G1682.png", // ADICIONE ESTA IMAGEM
        parts: ['lockchip-hornet', 'mainblade-fort', 'assistblade-turn', '7-60', 'taper']
    },
    {
        productName: "Hasbro Custom Line: Wriggle Kraken S 3-85O (G1683)",
        image: "images/products/hasbro_G1683.png", // ADICIONE ESTA IMAGEM
        parts: ['lockchip-kraken', 'mainblade-wriggle', 'assistblade-turn', '3-85', 'orb']
    },
    {
        productName: "Hasbro Custom Line: Antler Stag B 2-60HN (G1684)",
        image: "images/products/hasbro_G1684.png", // ADICIONE ESTA IMAGEM
        parts: ['lockchip-stag', 'antler', 'assistblade-bumper', '2-60', 'highneedle']
    },

    // --- Produtos Hasbro (Starters, Boosters, etc.) ---
    {
        productName: "Hasbro Starter Dran Sword 3-60F (F9580)",
        image: "images/products/hasbro_F9580.png",
        parts: ['dransword', '3-60', 'flat']
    },
    {
        productName: "Hasbro Starter Hells Scythe 4-60T (F9583)",
        image: "images/products/hasbro_F9583.png",
        parts: ['hellsscythe', '4-60', 'taper']
    },
    {
        productName: "Hasbro Starter Knight Shield 3-80N (F9581)",
        image: "images/products/hasbro_F9581.png",
        parts: ['knightshield', '3-80', 'needle']
    },
    {
        productName: "Hasbro Starter Wizard Arrow 4-80B (F9582)",
        image: "images/products/hasbro_F9582.png",
        parts: ['wizardarrow', '4-80', 'ball']
    },
    {
        productName: "Hasbro Starter Knight Lance 4-80HN (G0184)",
        image: "images/products/hasbro_G0184.png",
        parts: ['knightlance', '4-80', 'highneedle']
    },
    {
        productName: "Hasbro Starter Leon Claw 5-60P (G0193)",
        image: "images/products/hasbro_G0193.png",
        parts: ['leonclaw', '5-60', 'point']
    },
    {
        productName: "Hasbro Starter Dran Buster 1-60A (G1536)",
        image: "images/products/hasbro_G1536.png",
        parts: ['dranbuster', '1-60', 'accel']
    },
    {
        productName: "Hasbro Starter Wand Wizard 5-70DB (G1537)",
        image: "images/products/hasbro_G1537.png",
        parts: ['wizardrod', '5-70', 'diskball']
    },
    {
        productName: "Hasbro Starter Wand Wizard 1-60R (G1538)",
        image: "images/products/hasbro_G1538.png",
        parts: ['wizardrod', '1-60', 'rush']
    },
    {
        productName: "Hasbro Starter Shinobi Shadow 1-80MN (G1539)",
        image: "images/products/hasbro_G1539.png",
        parts: ['shinobishadow', '1-80', 'metalneedle']
    },
    {
        productName: "Hasbro Starter Crimson Garuda 4-70TP (G1673)",
        image: "images/products/hasbro_G1673.png",
        parts: ['crimsongaruda', '4-70', 'transpoint']
    },
    {
        productName: "Hasbro Starter Silver Wolf 3-80FB (G1674)",
        image: "images/products/hasbro_G1674.png",
        parts: ['silverwolf', '3-80', 'freeball']
    },
    {
        productName: "Hasbro Starter Shelter Drake 7-80GP (G1675)",
        image: "images/products/hasbro_G1675.png",
        parts: ['shelterdrake', '7-80', 'gearpoint']
    },
    {
        productName: "Hasbro Starter Golem Rock 1-60UN (G1676)",
        image: "images/products/hasbro_G1676.png",
        parts: ['golemrock', '1-60', 'underneedle']
    },
    {
        productName: "Hasbro Starter Dran Buster 5-70DB (G1751)",
        image: "images/products/hasbro_G1751.png",
        parts: ['dranbuster', '5-70', 'diskball']
    },
    {
        productName: "Hasbro Starter Hells Hammer 3-70H (G1752)",
        image: "images/products/hasbro_G1752.png",
        parts: ['hellshammer', '3-70', 'hexa']
    },
    // --- X-Over Starters ---
    {
        productName: "Hasbro X-Over Dranzer Spiral 3-80T (F9584)",
        image: "images/products/hasbro_F9584.png",
        parts: ['dranzerspiral', '3-80', 'taper']
    },
    {
        productName: "Hasbro X-Over Driger Slash 4-80P (G1843)",
        image: "images/products/hasbro_G1843.png",
        parts: ['drigerslash', '4-80', 'point']
    },
    // --- Boosters ---
    {
        productName: "Hasbro Booster Steel Samurai 4-80T (G0188)",
        image: "images/products/hasbro_G0188.png",
        parts: ['samuraisteel', '4-80', 'taper']
    },
    {
        productName: "Hasbro Booster Horn Rhino 3-80S (G0192)",
        image: "images/products/hasbro_G0192.png",
        parts: ['rhinohorn', '3-80', 'spike']
    },
    {
        productName: "Hasbro Booster Keel Shark 3-60LF (G0194)",
        image: "images/products/hasbro_G0194.png",
        parts: ['sharkedge', '3-60', 'lowflat']
    },
    {
        productName: "Hasbro Booster Talon Ptera 3-80B (G0195)",
        image: "images/products/hasbro_G0195.png",
        parts: ['pteraswing', '3-80', 'ball']
    },
    {
        productName: "Hasbro Booster Sting Unicorn 5-60GP (G0283)",
        image: "images/products/hasbro_G0283.png",
        parts: ['unicornsting', '5-60', 'gearpoint']
    },
    {
        productName: "Hasbro Booster Roar Tyranno 9-60GF (G0284)",
        image: "images/products/hasbro_G0284.png",
        parts: ['tyrannoroar', '9-60', 'gearflat']
    },
    {
        productName: "Hasbro Booster Scythe Incendio 3-80B (G0285)",
        image: "images/products/hasbro_G0285.png",
        parts: ['hellsscythe', '3-80', 'ball']
    },
    {
        productName: "Hasbro Booster Savage Bear 3-60S (G0286)",
        image: "images/products/hasbro_G0286.png",
        parts: ['bearscratch', '3-60', 'spike']
    },
    {
        productName: "Hasbro Booster Cowl Sphinx 9-80GN (G1530)",
        image: "images/products/hasbro_G1530.png",
        parts: ['sphinx-cowl', '9-80', 'gearneedle']
    },
    {
        productName: "Hasbro Booster Arrow Wizard 4-80GB (G1531)",
        image: "images/products/hasbro_G1531.png",
        parts: ['wizardarrow', '4-80', 'gearball']
    },
    {
        productName: "Hasbro Booster Obsidian Shell 4-60D (G1533)",
        image: "images/products/hasbro_G1533.png",
        parts: ['blackshell', '4-60', 'dot']
    },
    {
        productName: "Hasbro Booster Keel Shark 1-60Q (G1534)",
        image: "images/products/hasbro_G1534.png",
        parts: ['sharkedge', '1-60', 'quake']
    },
    {
        productName: "Hasbro Booster Tide Whale 5-80E (G1669)",
        image: "images/products/hasbro_G1669.png",
        parts: ['whalewave', '5-80', 'elevate']
    },
    {
        productName: "Hasbro Booster Dagger Dran 4-70Q (G1670)",
        image: "images/products/hasbro_G1670.png",
        parts: ['drandagger', '4-70', 'quake']
    },
    {
        productName: "Hasbro Booster Lance Knight 3-60LF (G1671)",
        image: "images/products/hasbro_G1671.png",
        parts: ['knightlance', '3-60', 'lowflat']
    },
    {
        productName: "Hasbro Booster Yell Kong 3-60GB (G1754)",
        image: "images/products/hasbro_G1754.png",
        parts: ['yellkong', '3-60', 'gearball']
    },
    {
        productName: "Hasbro Booster Arrow Wizard 4-80O (G1755)",
        image: "images/products/hasbro_G1755.png",
        parts: ['wizardarrow', '4-80', 'orb']
    },
    {
        productName: "Hasbro Booster Soar Phoenix 5-80H (G1756)",
        image: "images/products/hasbro_G1756.png",
        parts: ['phoenixwing', '5-80', 'hexa']
    },
    // --- Dual Packs ---
    {
        productName: "Knife Shinobi & Keel Shark (G0190)",
        image: "images/products/hasbro_G0190.png",
        parts: ['shinobiknife', '4-80', 'highneedle', 'sharkedge', '3-60', 'lowflat']
    },
    {
        productName: "Chain Incendio & Arrow Wizard (G0196)",
        image: "images/products/hasbro_G0196.png",
        parts: ['hellschain', '5-60', 'hightaper', 'wizardarrow', '4-60', 'needle']
    },
    {
        productName: "Tail Viper & Sword Dran (G0197)",
        image: "images/products/hasbro_G0197.png",
        parts: ['vipertail', '5-60', 'flat', 'dransword', '3-80', 'ball']
    },
    {
        productName: "Yell Kong & Helm Knight (G0198)",
        image: "images/products/hasbro_G0198.png",
        parts: ['yellkong', '3-60', 'gearball', 'knightshield', '4-80', 'taper']
    },
    {
        productName: "Bite Croc & Sting Unicorn (G0199)",
        image: "images/products/hasbro_G0199.png",
        parts: ['croccrunch', '3-60', 'lowflat', 'unicornsting', '4-60', 'point']
    },
    {
        productName: "Gale Wyvern & Tail Viper (G0282)",
        image: "images/products/hasbro_G0282.png",
        parts: ['wyverngale', '3-60', 'taper', 'vipertail', '4-60', 'flat']
    },
    {
        productName: "Beat Tyranno & Knife Shinobi (G1542)",
        image: "images/products/hasbro_G1542.png",
        parts: ['tyrannobeat', '3-60', 'spike', 'shinobiknife', '4-80', 'highneedle']
    },
    {
        productName: "Gale Wyvern & Sword Dran (G1543)",
        image: "images/products/hasbro_G1543.png",
        parts: ['wyverngale', '5-80', 'gearball', 'dransword', '4-80', 'diskball']
    },
    {
        productName: "Cowl Sphinx & Crest Leon (G1685)",
        image: "images/products/hasbro_G1685.png",
        parts: ['sphinx-cowl', '4-80', 'hightaper', 'leoncrest', '7-60', 'gearneedle']
    },
    {
        productName: "Pearl Tiger & Gill Shark (G1686)",
        image: "images/products/hasbro_G1686.png",
        parts: ['weisstiger', '3-60', 'unite', 'gillshark', '5-60', 'freeball']
    },
    {
        productName: "Circle Ghost & Chain Incendio (G1687)",
        image: "images/products/hasbro_G1687.png",
        parts: ['ghostcircle', '4-60', 'hexa', 'hellschain', '9-80', 'orb']
    },
    {
        productName: "Tackle Goat & Sword Dran (G1688)",
        image: "images/products/hasbro_G1688.png",
        parts: ['tacklegoat', '2-70', 'needle', 'dransword', '1-60', 'flat']
    },
    // --- Battle Sets ---
    {
        productName: "Xtreme Battle Set (F9588)",
        image: "images/products/hasbro_F9588.png",
        parts: ['mammothtusk', '3-60', 'taper']
    },
    {
        productName: "Drop Attack Battle Set (G0842)",
        image: "images/products/hasbro_G0842.png",
        parts: ['drandagger', '4-70', 'quake', 'hellschain', '5-60', 'hightaper']
    },
    {
        productName: "25th Anniversary Set (G1844)",
        image: "images/products/hasbro_G1844.png",
        parts: ['dranzerspiral', '3-80', 'taper', 'drigerslash', '4-80', 'point', 'dracielshield', '7-60', 'dot', 'dragoonsform', '4-60', 'rubberaccel']
    },
    // --- Multipacks (Collab) ---
    {
        productName: "Star Wars: Darth Vader (BXS-01)",
        image: "images/products/bxs_darth_vader.png",
        parts: ['darthvader', '4-60', 'point']
    },
    {
        productName: "Star Wars: General Grievous (BXS-02)",
        image: "images/products/bxs_general_grievous.png",
        parts: ['generalgrievous', '3-80', 'highneedle']
    },
    {
        productName: "Star Wars: Moff Gideon (BXS-02)",
        image: "images/products/bxs_moff_gideon.png",
        parts: ['moffgideon', '3-80', 'needle']
    },
    {
        productName: "Marvel: Spider-Man (BXS-03)",
        image: "images/products/bxs_spider_man.png",
        parts: ['spider-man', '3-60', 'flat']
    },
    {
        productName: "Marvel: Venom (BXS-03)",
        image: "images/products/bxs_venom.png",
        parts: ['venom', '3-80', 'needle']
    },
    {
        productName: "Marvel: Thanos (BXS-04)",
        image: "images/products/bxs_thanos.png",
        parts: ['thanos', '4-60', 'point']
    },
    {
        productName: "Transformers: Optimus Primal (BXS-05)",
        image: "images/products/bxs_optimus_primal.png",
        parts: ['optimusprimal', '3-60', 'flat']
    },
    {
        productName: "Transformers: Optimus Prime (BXS-06)",
        image: "images/products/bxs_optimus_prime.png",
        parts: ['optimusprime', '4-60', 'point']
    },
    {
        productName: "Jurassic Park: T. Rex (G1898)",
        image: "images/products/hasbro_G1898.png",
        parts: ['t.rex', '3-60', 'spike']
    },
    {
        productName: "Jurassic Park: Mosasaurus (G1898)",
        image: "images/products/hasbro_G1898_2.png",
        parts: ['mosasaurus', '4-80', 'ball']
    },
    {
        productName: "Jurassic Park: Spinosaurus (G1899)",
        image: "images/products/hasbro_G1899.png",
        parts: ['spinosaurus', '5-60', 'flat']
    },
    {
        productName: "Jurassic Park: Quetzalcoatlus (G1899)",
        image: "images/products/hasbro_G1899_2.png",
        parts: ['quetzalcoatlus', '4-55', 'dot']
    }
];


// --- BASE DE DADOS DAS VARIANTES (Mantida) ---
const ALL_VARIANTS = {
    'aerpegasus': [ { name: "Stock", image: "images/blades/AeroPegasus.png" } ],
    'bearscratch': [ { name: "Stock", image: "images/blades/BearScratch.png" } ],
    'blackshell': [ { name: "Stock", image: "images/blades/BlackShell.png" }, { name: "ver. 2", image: "images/variantes/BlackShell_9-80B.jpeg" } ],
    'cobaltdragoon': [ { name: "Stock", image: "images/blades/CobaltDragoon.png" } ],
    'cobaltdrake': [ { name: "Stock", image: "images/blades/CobaltDrake.png" }, { name: "ver. 2", image: "images/variantes/CobaltDrake_9-60R.png" } ],
    'crimsongaruda': [ { name: "Stock", image: "images/blades/CrimsonGaruda.png" } ],
    'croccrunch': [ { name: "Stock", image: "images/blades/CrocCrunch.png" } ],
    'darthvader': [ { name: "Stock", image: "images/blades/DarthVader.png" } ],
    'dracielshield': [ { name: "Stock", image: "images/blades/DracielShield.png" } ],
    'dragoonsform': [ { name: "Stock", image: "images/blades/DragoonStorm.png" } ],
    'dranbuster': [ { name: "Stock", image: "images/blades/DranBuster.png" }, { name: "ver. 2", image: "images/variantes/DranBuster_3-70N.png" } ],
    'drandagger': [ { name: "Stock", image: "images/blades/DranDagger.png" }, { name: "ver. 2", image: "images/variantes/DranDagger_4-60R.png" }, { name: "ver. 3", image: "images/variantes/DranDagger_4-70P.png" }, { name: "ver. 4", image: "images/variantes/DranDagger_9-60LF.png" } ],
    'dransword': [ { name: "Stock", image: "images/blades/DranSword.png" }, { name: "ver. 2", image: "images/variantes/DranSword_3-80B.png" }, { name: "ver. 3", image: "images/variantes/DranSword_4-80DB.png" }, { name: "ver. 4", image: "images/variantes/2.png" }, { name: "ver. 5", image: "images/variantes/3.png" }, { name: "ver. 6", image: "images/variantes/latest.png" } ],
    'dranzerspiral': [ { name: "Stock", image: "images/blades/DranzerSpiral.png" } ],
    'drigerslash': [ { name: "Stock", image: "images/blades/DrigerSlash.png" } ],
    'generalgrievous': [ { name: "Stock", image: "images/blades/GeneralGrievous.png" } ],
    'ghostcircle': [ { name: "Stock", image: "images/blades/GhostCircle.png" }, { name: "ver. 2", image: "images/variantes/GhostCircle_4-60H.png" } ],
    'gillshark': [ { name: "Stock", image: "images/blades/GillShark.png" } ],
    'hellschain': [ { name: "Stock", image: "images/blades/HellsChain.png" }, { name: "ver. 2", image: "images/variantes/HellsChain_9-80O.png" } ],
    'hellshammer': [ { name: "Stock", image: "images/blades/HellsHammer.png" } ],
    'hellsscythe': [ { name: "Stock", image: "images/blades/HellsScythe.png" }, { name: "ver. 2", image: "images/variantes/HellsScythe_3-80F.png" }, { name: "ver. 3", image: "images/variantes/HellsScythe_4-60T.png" }, { name: "ver. 4", image: "images/variantes/HellsScythe_4-80LF.png" } ],
    'hoverwyvern': [ { name: "Stock", image: "images/blades/HoverWyvern.png" } ],
    'impactdrake': [ { name: "Stock", image: "images/blades/ImpactDrake.png" }, { name: "ver. 2", image: "images/variantes/ImpactDrake_9-60LR.png" } ],
    'knightlance': [ { name: "Stock", image: "images/blades/KnightLance.png" }, { name: "ver. 2", image: "images/variantes/KnightLance_4-60GB.png" }, { name: "ver. 3", image: "images/variantes/KnightLance_4-80HN.png" } ],
    'knightmail': [ { name: "Stock", image: "images/blades/KnightMail.png" } ],
    'knightshield': [ { name: "Stock", image: "images/blades/KnightShield.png" }, { name: "ver. 2", image: "images/variantes/KnightShield_4-60LF.png" }, { name: "ver. 3", image: "images/variantes/KnightShield_4-80T.png" }, { name: "ver. 4", image: "images/variantes/KnightShield_5-80T.png" } ],
    'leonclaw': [ { name: "Stock", image: "images/blades/LeonClaw.png" }, { name: "ver. 2", image: "images/variantes/LeonClaw_3-80HN.png" }, { name: "ver. 3", image: "images/variantes/LeonClaw_5-60P.png" } ],
    'leoncrest': [ { name: "Stock", image: "images/blades/LeonCrest.png" }, { name: "ver. 2", image: "images/variantes/LeonCrest_9-80K.png" } ],
    'lightningl-drago': [ { name: "Stock", image: "images/blades/LightningL-Drago.png" }, { name: "ver. 2", image: "images/variantes/Lightning_L-Drago_1-60F.png" } ],
    'mammothtusk': [ { name: "Stock", image: "images/blades/MammothTusk.png" } ],
    'moffgideon': [ { name: "Stock", image: "images/blades/MoffGideon.png" } ],
    'mosasaurus': [ { name: "Stock", image: "images/blades/Mosasaurus.png" } ],
    'optimusprimal': [ { name: "Stock", image: "images/blades/OptimusPrimal.png" } ],
    'optimusprime': [ { name: "Stock", image: "images/blades/OptimusPrime.png" } ],
    'phoenixfeather': [ { name: "Stock", image: "images/blades/PhoenixFeather.png" }, { name: "ver. 2", image: "images/variantes/PhoenixFeather_3-60F.png" }, { name: "ver. 3", image: "images/variantes/PhoenixFeather_4-60LF.png" } ],
    'phoenixrudder': [ { name: "Stock", image: "images/blades/PhoenixRudder.png" }, { name: "ver. 2", image: "images/variantes/PhoenixRudder_9-70G.png" } ],
    'phoenixwing': [ { name: "Stock", image: "images/blades/PhoenixWing.png" }, { name: "ver. 2", image: "images/variantes/PhoenixWing_9-60GF.png" }, { name: "ver. 3", image: "images/variantes/PhoenixWing_9-80DB.png" } ],
    'quetzalcoatlus': [ { name: "Stock", image: "images/blades/Quetzalcoatlus.png" } ],
    'rhinohorn': [ { name: "Stock", image: "images/blades/RhinoHorn.png" }, { name: "ver. 2", image: "images/variantes/RhinoHorn_5-80Q.png" } ],
    'rockleone': [ { name: "Stock", image: "images/blades/RockLeone.png" } ],
    'samuraicalibur': [ { name: "Stock", image: "images/blades/SamuraiCalibur.png" } ],
    'samuraisaber': [ { name: "Stock", image: "images/blades/SamuraiSaber.png" } ],
    'scorpiospear': [ { name: "Stock", image: "images/blades/ScorpioSpear.png" } ],
    'sharkedge': [ { name: "Stock", image: "images/blades/SharkEdge.png" }, { name: "ver. 2", image: "images/variantes/SharkEdge_3-60LF.png" }, { name: "ver. 3", image: "images/variantes/SharkEdge_3-80F.png" }, { name: "ver. 4", image: "images/variantes/SharkEdge_4-80N.png" }, { name: "ver. 5", image: "images/variantes/SharkEdge_5-60GF.png" } ],
    'sharkscale': [ { name: "Stock", image: "images/blades/SharkScale.png" } ],
    'shelterdrake': [ { name: "Stock", image: "images/blades/ShelterDrake.png" }, { name: "ver. 2", image: "images/variantes/ShelterDrake_5-70O.png" }, { name: "ver. 3", image: "images/variantes/ShelterDrake_7-80GP.png" } ],
    'shinobiknife': [ { name: "Stock", image: "images/blades/ShinobiKnife.png" } ],
    'shinobishadow': [ { name: "Stock", image: "images/blades/ShinobiShadow.png" }, { name: "ver. 2", image: "images/variantes/ShinobiShadow_3-70GP.png" }, { name: "ver. 3", image: "images/variantes/ShinobiShadow_3-80F.png" }, { name: "ver. 4", image: "images/variantes/ShinobiShadow_9-60LF.png" } ],
    'silverwolf': [ { name: "Stock", image: "images/blades/SilverWolf.png" } ],
    'sphinx-cowl': [ { name: "Stock", image: "images/blades/SphinxCowl.png" }, { name: "ver. 2", image: "images/variantes/SphinxCowl_4-80HT.png" }, { name: "ver. 3", image: "images/variantes/SphinxCowl_5-60O.png" }, { name: "ver. 4", image: "images/variantes/SphinxCowl_9-80GN.png" } ],
    'spider-man': [ { name: "Stock", image: "images/blades/Spider-Man.png" } ],
    'spinosaurus': [ { name: "Stock", image: "images/blades/Spinosaurus.png" } ],
    'stormpegasis': [ { name: "Stock", image: "images/blades/StormPegasis.png" } ],
    't.rex': [ { name: "Stock", image: "images/blades/T.Rex.png" } ],
    'tacklegoat': [ { name: "Stock", image: "images/blades/TackleGoat.png" } ],
    'thanos': [ { name: "Stock", image: "images/blades/Thanos.png" } ],
    'tricerapress': [ { name: "Stock", image: "images/blades/TriceraPress.png" } ],
    'tyrannobeat': [ { name: "Stock", image: "images/blades/TyrannoBeat.png" }, { name: "ver. 2", image: "images/variantes/TyrannoBeat_4-70Q.png" } ],
    'tyrannoroar': [ { name: "Stock", image: "images/blades/TyrannoRoar.png" } ],
    'unicornsting': [ { name: "Stock", image: "images/blades/UnicornSting.png" }, { name: "ver. 2", image: "images/variantes/UnicornSting_5-60GP.png" } ],
    'venom': [ { name: "Stock", image: "images/blades/Venom.png" } ],
    'victoryvalkyrie': [ { name: "Stock", image: "images/blades/VictoryValkyrie.png" } ],
    'vipertail': [ { name: "Stock", image: "images/blades/ViperTail.png" }, { name: "ver. 2", image: "images/variantes/ViperTail_4-60F.png" }, { name: "ver. 3", image: "images/variantes/ViperTail_5-60F.png" }, { name: "ver. 4", image: "images/variantes/ViperTail_5-70D.png" }, { name: "ver. 5", image: "images/variantes/ViperTail_5-80O.png" } ],
    'weisstiger': [ { name: "Stock", image: "images/blades/WeissTiger.png" } ],
    'whalewave': [ { name: "Stock", image: "images/blades/WhaleWave.png" }, { name: "ver. 2", image: "images/variantes/WhaleWave_4-70HN.png" }, { name: "ver. 3", image: "images/variantes/WhaleWave_5-80E.png" }, { name: "ver. 4", image: "images/variantes/WhaleWave_7-60K.png" } ],
    'wizardarrow': [ { name: "Stock", image: "images/blades/WizardArrow.png" }, { name: "ver. 2", image: "images/variantes/WizardArrow_4-60N.png" }, { name: "ver. 4", image: "images/variantes/WizardArrow_4-80GB.png" }, { name: "ver. 3", image: "images/variantes/WizardArrow_4-80N.png" }, { name: "ver. 5", image: "images/variantes/4.png" } ],
    'wizardrod': [ { name: "Stock", image: "images/blades/WizardRod.png" }, { name: "ver. 2", image: "images/variantes/WizardRod_5-70DB.png" } ],
    'wyverngale': [ { name: "Stock", image: "images/blades/WyvernGale.png" }, { name: "ver. 2", image: "images/variantes/WyvernGale_2-60S.png" }, { name: "ver. 3", image: "images/variantes/WyvernGale_3-60T.png" }, { name: "ver. 4", image: "images/variantes/WyvernGale_5-80GB.png" } ],
    'xenoxcalibur': [ { name: "Stock", image: "images/blades/XenoXcalibur.png" } ],
    'yellkong': [ { name: "Stock", image: "images/blades/YellKong.png" } ]
};

// --- BASE DE DADOS DAS PEÇAS (com tier) ---
// ** Tiers baseados nos scores anteriores **
const ALL_PARTS = [
    // Blades
    { id: 'aerpegasus', name: 'Aero Pegasus', type: 'blade', bey_type: 'stamina', image: 'images/blades/AeroPegasus.png', tier: 'S', variantsId: 'aerpegasus'},
    { id: 'cobaltdragoon', name: 'Cobalt Dragoon', type: 'blade', bey_type: 'attack', image: 'images/blades/CobaltDragoon.png', tier: 'S', variantsId: 'cobaltdragoon'},
    { id: 'dranbuster', name: 'DranBuster', type: 'blade', bey_type: 'attack', image: 'images/blades/DranBuster.png', tier: 'A', variantsId: 'dranbuster'},
    { id: 'drandagger', name: 'DranDagger', type: 'blade', bey_type: 'attack', image: 'images/blades/DranDagger.png', tier: 'C', variantsId: 'drandagger'},
    { id: 'dransword', name: 'DranSword', type: 'blade', bey_type: 'attack', image: 'images/blades/DranSword.png', tier: 'B', variantsId: 'dransword'},
    { id: 'hellschain', name: 'HellsChain', type: 'blade', bey_type: 'defense', image: 'images/blades/HellsChain.png', tier: 'B', variantsId: 'hellschain'},
    { id: 'hellsscythe', name: 'HellsScythe', type: 'blade', bey_type: 'balance', image: 'images/blades/HellsScythe.png', tier: 'B', variantsId: 'hellsscythe'},
    { id: 'hoverwyvern', name: 'Hover Wyvern', type: 'blade', bey_type: 'stamina', image: 'images/blades/HoverWyvern.png', tier: 'A', variantsId: 'hoverwyvern'},
    { id: 'knightmail', name: 'KnightMail', type: 'blade', bey_type: 'defense', image: 'images/blades/KnightMail.png', tier: 'A', variantsId: 'knightmail'},
    { id: 'knightshield', name: 'KnightShield', type: 'blade', bey_type: 'defense', image: 'images/blades/KnightShield.png', tier: 'B', variantsId: 'knightshield'},
    { id: 'leonclaw', name: 'LeonClaw', type: 'blade', bey_type: 'defense', image: 'images/blades/LeonClaw.png', tier: 'C', variantsId: 'leonclaw'},
    { id: 'phoenixwing', name: 'Phoenix Wing', type: 'blade', bey_type: 'stamina', image: 'images/blades/PhoenixWing.png', tier: 'S', variantsId: 'phoenixwing'},
    { id: 'sharkscale', name: 'SharkScale', type: 'blade', bey_type: 'attack', image: 'images/blades/SharkScale.png', tier: 'S', variantsId: 'sharkscale'},
    { id: 'silverwolf', name: 'SilverWolf', type: 'blade', bey_type: 'balance', image: 'images/blades/SilverWolf.png', tier: 'S', variantsId: 'silverwolf'},
    { id: 'tyrannobeat', name: 'TyrannoBeat', type: 'blade', bey_type: 'attack', image: 'images/blades/TyrannoBeat.png', tier: 'A', variantsId: 'tyrannobeat'},
    { id: 'unicornsting', name: 'Unicorn Sting', type: 'blade', bey_type: 'balance', image: 'images/blades/UnicornSting.png', tier: 'B', variantsId: 'unicornsting'},
    { id: 'wizardarrow', name: 'WizardArrow', type: 'blade', bey_type: 'stamina', image: 'images/blades/WizardArrow.png', tier: 'C', variantsId: 'wizardarrow'},
    { id: 'wizardrod', name: 'WizardRod', type: 'blade', bey_type: 'stamina', image: 'images/blades/WizardRod.png', tier: 'S', variantsId: 'wizardrod'},
    { id: 'arc', name: 'Arc', type: 'blade', bey_type: 'stamina', image: 'images/blades/Arc.png', tier: 'C' },
    { id: 'bearscratch', name: 'BearScratch', type: 'blade', bey_type: 'attack', image: 'images/blades/BearScratch.png', tier: 'C', variantsId: 'bearscratch'},
    { id: 'blackshell', name: 'BlackShell', type: 'blade', bey_type: 'defense', image: 'images/blades/BlackShell.png', tier: 'C', variantsId: 'blackshell'},
    { id: 'blast', name: 'Blast', type: 'blade', bey_type: 'attack', image: 'images/blades/Blast.png', tier: 'A' },
    { id: 'bolt', name: 'Bolt', type: 'blade', bey_type: 'balance', image: 'images/blades/Bolt.png', tier: 'C' },
    { id: 'brave', name: 'Brave', type: 'blade', bey_type: 'attack', image: 'images/blades/Brave.png', tier: 'C' },
    { id: 'brush', name: 'Brush', type: 'blade', bey_type: 'stamina', image: 'images/blades/Brush.png', tier: 'C' },
    { id: 'cobaltdrake', name: 'CobaltDrake', type: 'blade', bey_type: 'defense', image: 'images/blades/CobaltDrake.png', tier: 'C', variantsId: 'cobaltdrake'},
    { id: 'crimsongaruda', name: 'Crimson Garuda', type: 'blade', bey_type: 'stamina', image: 'images/blades/CrimsonGaruda.png', tier: 'C', variantsId: 'crimsongaruda'},
    { id: 'croccrunch', name: 'CrocCrunch', type: 'blade', bey_type: 'attack', image: 'images/blades/CrocCrunch.png', tier: 'C', variantsId: 'croccrunch'},
    { id: 'dark', name: 'Dark', type: 'blade', bey_type: 'defense', image: 'images/blades/Dark.png', tier: 'C' },
    { id: 'darthvader', name: 'DarthVader', type: 'blade', bey_type: 'balance', image: 'images/blades/DarthVader.png', tier: 'C', variantsId: 'darthvader'},
    { id: 'dracielshield', name: 'DracielShield', type: 'blade', bey_type: 'defense', image: 'images/blades/DracielShield.png', tier: 'D', variantsId: 'dracielshield'},
    { id: 'dragoonsform', name: 'Dragoon Storm', type: 'blade', bey_type: 'attack', image: 'images/blades/DragoonStorm.png', tier: 'D', variantsId: 'dragoonsform'},
    { id: 'dranzerspiral', name: 'Dranzer Spiral', type: 'blade', bey_type: 'balance', image: 'images/blades/DranzerSpiral.png', tier: 'C', variantsId: 'dranzerspiral'},
    { id: 'drigerslash', name: 'DrigerSlash', type: 'blade', bey_type: 'balance', image: 'images/blades/DrigerSlash.png', tier: 'D', variantsId: 'drigerslash'},
    { id: 'eclipse', name: 'Eclipse', type: 'blade', bey_type: 'defense', image: 'images/blades/Eclipse.png', tier: 'C' },
    { id: 'flame', name: 'Flame', type: 'blade', bey_type: 'balance', image: 'images/blades/Flame.png', tier: 'D' },
    { id: 'generalgrievous', name: 'General Grievous', type: 'blade', bey_type: 'defense', image: 'images/blades/GeneralGrievous.png', tier: 'D', variantsId: 'generalgrievous'},
    { id: 'ghostcircle', name: 'GhostCircle', type: 'blade', bey_type: 'stamina', image: 'images/blades/GhostCircle.png', tier: 'C', variantsId: 'ghostcircle'},
    { id: 'gillshark', name: 'GillShark', type: 'blade', bey_type: 'attack', image: 'images/blades/GillShark.png', tier: 'C', variantsId: 'gillshark'},
    { id: 'golemrock', name: 'GolemRock', type: 'blade', bey_type: 'defense', image: 'images/blades/GolemRock.png', tier: 'D' },
    { id: 'hellshammer', name: 'Hells Hammer', type: 'blade', bey_type: 'attack', image: 'images/blades/HellsHammer.png', tier: 'C', variantsId: 'hellshammer'},
    { id: 'hornet', name: 'Hornet', type: 'blade', bey_type: 'attack', image: 'images/blades/Hornet.png', tier: 'D' },
    { id: 'impactdrake', name: 'ImpactDrake', type: 'blade', bey_type: 'attack', image: 'images/blades/ImpactDrake.png', tier: 'B', variantsId: 'impactdrake'},
    { id: 'knightlance', name: 'KnightLance', type: 'blade', bey_type: 'stamina', image: 'images/blades/KnightLance.png', tier: 'C', variantsId: 'knightlance'},
    { id: 'kraken', name: 'Kraken', type: 'blade', bey_type: 'stamina', image: 'images/blades/Kraken.png', tier: 'D' },
    { id: 'leoncrest', name: 'LeonCrest', type: 'blade', bey_type: 'defense', image: 'images/blades/LeonCrest.png', tier: 'C', variantsId: 'leoncrest'},
    { id: 'lightningl-drago', name: 'Lightning L-Drago', type: 'blade', bey_type: 'attack', image: 'images/blades/LightningL-Drago.png', tier: 'C', variantsId: 'lightningl-drago'},
    { id: 'mammothtusk', name: 'Mammoth Tusk', type: 'blade', bey_type: 'balance', image: 'images/blades/MammothTusk.png', tier: 'D', variantsId: 'mammothtusk'},
    { id: 'moffgideon', name: 'MoffGideon', type: 'blade', bey_type: 'defense', image: 'images/blades/MoffGideon.png', tier: 'D', variantsId: 'moffgideon'},
    { id: 'mosasaurus', name: 'Mosasaurus', type: 'blade', bey_type: 'attack', image: 'images/blades/Mosasaurus.png', tier: 'D', variantsId: 'mosasaurus'},
    { id: 'optimusprimal', name: 'Optimus Primal', type: 'blade', bey_type: 'attack', image: 'images/blades/OptimusPrimal.png', tier: 'C', variantsId: 'optimusprimal'},
    { id: 'optimusprime', name: 'Optimus Prime', type: 'blade', bey_type: 'balance', image: 'images/blades/OptimusPrime.png', tier: 'D', variantsId: 'optimusprime'},
    { id: 'phoenixfeather', name: 'Phoenix Feather', type: 'blade', bey_type: 'stamina', image: 'images/blades/PhoenixFeather.png', tier: 'D', variantsId: 'phoenixfeather'},
    { id: 'phoenixrudder', name: 'Phoenix Rudder', type: 'blade', bey_type: 'defense', image: 'images/blades/PhoenixRudder.png', tier: 'C', variantsId: 'phoenixrudder'},
    { id: 'pteraswing', name: 'PteraSwing', type: 'blade', bey_type: 'defense', image: 'images/blades/PteraSwing.png', tier: 'D' },
    { id: 'quetzalcoatlus', name: 'Quetzal coatlus', type: 'blade', bey_type: 'defense', image: 'images/blades/Quetzalcoatlus.png', tier: 'D', variantsId: 'quetzalcoatlus'},
    { id: 'reaper', name: 'Reaper', type: 'blade', bey_type: 'attack', image: 'images/blades/Reaper.png', tier: 'C' },
    { id: 'rhinohorn', name: 'RhinoHorn', type: 'blade', bey_type: 'defense', image: 'images/blades/RhinoHorn.png', tier: 'D', variantsId: 'rhinohorn'},
    { id: 'rockleone', name: 'RockLeone', type: 'blade', bey_type: 'defense', image: 'images/blades/RockLeone.png', tier: 'D', variantsId: 'rockleone'},
    { id: 'samuraicalibur', name: 'Samurai Calibur', type: 'blade', bey_type: 'balance', image: 'images/blades/SamuraiCalibur.png', tier: 'C', variantsId: 'samuraicalibur'},
    { id: 'samuraisaber', name: 'Samurai Saber', type: 'blade', bey_type: 'attack', image: 'images/blades/SamuraiSaber.png', tier: 'B', variantsId: 'samuraisaber'},
    { id: 'samuraisteel', name: 'Samurai Steel', type: 'blade', bey_type: 'balance', image: 'images/blades/SamuraiSteel.png', tier: 'D' },
    { id: 'scorpiospear', name: 'Scorpio Spear', type: 'blade', bey_type: 'attack', image: 'images/blades/ScorpioSpear.png', tier: 'B', variantsId: 'scorpiospear'},
    { id: 'sharkedge', name: 'SharkEdge', type: 'blade', bey_type: 'attack', image: 'images/blades/SharkEdge.png', tier: 'B', variantsId: 'sharkedge'},
    { id: 'shelterdrake', name: 'ShelterDrake', type: 'blade', bey_type: 'defense', image: 'images/blades/ShelterDrake.png', tier: 'C', variantsId: 'shelterdrake'},
    { id: 'shinobiknife', name: 'ShinobiKnife', type: 'blade', bey_type: 'defense', image: 'images/blades/ShinobiKnife.png', tier: 'D', variantsId: 'shinobiknife'},
    { id: 'shinobishadow', name: 'Shinobi Shadow', type: 'blade', bey_type: 'stamina', image: 'images/blades/ShinobiShadow.png', tier: 'D', variantsId: 'shinobishadow'},
    { id: 'spider-man', name: 'Spider-Man', type: 'blade', bey_type: 'attack', image: 'images/blades/Spider-Man.png', tier: 'D', variantsId: 'spider-man'},
    { id: 'sphinx-cowl', name: 'SphinxCowl', type: 'blade', bey_type: 'defense', image: 'images/blades/SphinxCowl.png', tier: 'D', variantsId: 'sphinx-cowl'},
    { id: 'spinosaurus', name: 'Spinosaurus', type: 'blade', bey_type: 'attack', image: 'images/blades/Spinosaurus.png', tier: 'D', variantsId: 'spinosaurus'},
    { id: 'stormpegasis', name: 'Storm Pegasis', type: 'blade', bey_type: 'attack', image: 'images/blades/StormPegasis.png', tier: 'D', variantsId: 'stormpegasis'},
    { id: 't.rex', name: 'T.Rex', type: 'blade', bey_type: 'attack', image: 'images/blades/T.Rex.png', tier: 'D', variantsId: 't.rex'},
    { id: 'tacklegoat', name: 'TackleGoat', type: 'blade', bey_type: 'defense', image: 'images/blades/TackleGoat.png', tier: 'D', variantsId: 'tacklegoat'},
    { id: 'thanos', name: 'Thanos', type: 'blade', bey_type: 'balance', image: 'images/blades/Thanos.png', tier: 'D', variantsId: 'thanos'},
    { id: 'tricerapress', name: 'TriceraPress', type: 'blade', bey_type: 'defense', image: 'images/blades/TriceraPress.png', tier: 'C', variantsId: 'tricerapress'},
    { id: 'tyrannoroar', name: 'TyrannoRoar', type: 'blade', bey_type: 'attack', image: 'images/blades/TyrannoRoar.png', tier: 'B', variantsId: 'tyrannoroar'},
    { id: 'venom', name: 'Venom', type: 'blade', bey_type: 'defense', image: 'images/blades/Venom.png', tier: 'C', variantsId: 'venom'},
    { id: 'victoryvalkyrie', name: 'Victory Valkyrie', type: 'blade', bey_type: 'attack', image: 'images/blades/VictoryValkyrie.png', tier: 'D', variantsId: 'victoryvalkyrie'},
    { id: 'vipertail', name: 'ViperTail', type: 'blade', bey_type: 'attack', image: 'images/blades/ViperTail.png', tier: 'C', variantsId: 'vipertail'},
    { id: 'weisstiger', name: 'WeissTiger', type: 'blade', bey_type: 'stamina', image: 'images/blades/WeissTiger.png', tier: 'C', variantsId: 'weisstiger'},
    { id: 'whalewave', name: 'WhaleWave', type: 'blade', bey_type: 'defense', image: 'images/blades/WhaleWave.png', tier: 'B', variantsId: 'whalewave'},
    { id: 'wyverngale', name: 'WyvernGale', type: 'blade', bey_type: 'stamina', image: 'images/blades/WyvernGale.png', tier: 'D', variantsId: 'wyverngale'},
    { id: 'xenoxcalibur', name: 'Xeno Xcalibur', type: 'blade', bey_type: 'attack', image: 'images/blades/XenoXcalibur.png', tier: 'D', variantsId: 'xenoxcalibur'},
    { id: 'yellkong', name: 'YellKong', type: 'blade', bey_type: 'defense', image: 'images/blades/YellKong.png', tier: 'D', variantsId: 'yellkong'},

    // Ratchets
    { id: '0-70', name: '0-70', type: 'ratchet', image: 'images/ratchets/0-70.png', tier: 'B' },
    { id: '0-80', name: '0-80', type: 'ratchet', image: 'images/ratchets/0-80.png', tier: 'B' },
    { id: '1-60', name: '1-60', type: 'ratchet', image: 'images/ratchets/1-60.png', tier: 'S' },
    { id: '1-70', name: '1-70', type: 'ratchet', image: 'images/ratchets/1-70.png', tier: 'A' },
    { id: '1-80', name: '1-80', type: 'ratchet', image: 'images/ratchets/1-80.png', tier: 'A' },
    { id: '2-60', name: '2-60', type: 'ratchet', image: 'images/ratchets/2-60.png', tier: 'B' },
    { id: '2-70', name: '2-70', type: 'ratchet', image: 'images/ratchets/2-70.png', tier: 'C' },
    { id: '2-80', name: '2-80', type: 'ratchet', image: 'images/ratchets/2-80.png', tier: 'D' },
    { id: '3-60', name: '3-60', type: 'ratchet', image: 'images/ratchets/3-60.png', tier: 'S' },
    { id: '3-70', name: '3-70', type: 'ratchet', image: 'images/ratchets/3-70.png', tier: 'A' },
    { id: '3-80', name: '3-80', type: 'ratchet', image: 'images/ratchets/3-80.png', tier: 'A' },
    { id: '3-85', name: '3-85', type: 'ratchet', image: 'images/ratchets/3-85.png', tier: 'C' },
    { id: '4-50', name: '4-50', type: 'ratchet', image: 'images/ratchets/4-50.png', tier: 'A' },
    { id: '4-55', name: '4-55', type: 'ratchet', image: 'images/ratchets/4-55.png', tier: 'A' },
    { id: '4-60', name: '4-60', type: 'ratchet', image: 'images/ratchets/4-60.png', tier: 'A' },
    { id: '4-70', name: '4-70', type: 'ratchet', image: 'images/ratchets/4-70.png', tier: 'C' },
    { id: '4-80', name: '4-80', type: 'ratchet', image: 'images/ratchets/4-80.png', tier: 'B' },
    { id: '5-60', name: '5-60', type: 'ratchet', image: 'images/ratchets/5-60.png', tier: 'S' },
    { id: '5-70', name: '5-70', type: 'ratchet', image: 'images/ratchets/5-70.png', tier: 'A' },
    { id: '5-80', name: '5-80', type: 'ratchet', image: 'images/ratchets/5-80.png', tier: 'A' },
    { id: '6-60', name: '6-60', type: 'ratchet', image: 'images/ratchets/6-60.png', tier: 'A' },
    { id: '6-70', name: '6-70', type: 'ratchet', image: 'images/ratchets/6-70.png', tier: 'D' },
    { id: '6-80', name: '6-80', type: 'ratchet', image: 'images/ratchets/6-80.png', tier: 'C' },
    { id: '7-60', name: '7-60', type: 'ratchet', image: 'images/ratchets/7-60.png', tier: 'S' },
    { id: '7-70', name: '7-70', type: 'ratchet', image: 'images/ratchets/7-70.png', tier: 'A' },
    { id: '7-80', name: '7-80', type: 'ratchet', image: 'images/ratchets/7-80.png', tier: 'C' },
    { id: '9-60', name: '9-60', type: 'ratchet', image: 'images/ratchets/9-60.png', tier: 'S' },
    { id: '9-70', name: '9-70', type: 'ratchet', image: 'images/ratchets/9-70.png', tier: 'A' },
    { id: '9-80', name: '9-80', type: 'ratchet', image: 'images/ratchets/9-80.png', tier: 'A' },
    { id: 'm-85', name: 'M-85', type: 'ratchet', image: 'images/ratchets/M-85.png', tier: 'C' },

    // Bits
    { id: 'accel', name: 'Accel', type: 'bit', bey_type: 'attack', image: 'images/bits/Accel.png', tier: 'B' },
    { id: 'ball', name: 'Ball', type: 'bit', bey_type: 'stamina', image: 'images/bits/Ball.png', tier: 'S' },
    { id: 'boundspike', name: 'BoundSpike', type: 'bit', bey_type: 'defense', image: 'images/bits/BoundSpike.png', tier: 'B' },
    { id: 'cyclone', name: 'Cyclone', type: 'bit', bey_type: 'attack', image: 'images/bits/Cyclone.png', tier: 'B' },
    { id: 'diskball', name: 'DiskBall', type: 'bit', bey_type: 'stamina', image: 'images/bits/DiskBall.png', tier: 'C' },
    { id: 'dot', name: 'Dot', type: 'bit', bey_type: 'defense', image: 'images/bits/Dot.png', tier: 'B' },
    { id: 'elevate', name: 'Elevate', type: 'bit', bey_type: 'stamina', image: 'images/bits/Elevate.png', tier: 'S' },
    { id: 'flat', name: 'Flat', type: 'bit', bey_type: 'attack', image: 'images/bits/Flat.png', tier: 'A' },
    { id: 'freeball', name: 'FreeBall', type: 'bit', bey_type: 'stamina', image: 'images/bits/FreeBall.png', tier: 'A' },
    { id: 'gearball', name: 'GearBall', type: 'bit', bey_type: 'stamina', image: 'images/bits/GearBall.png', tier: 'B' },
    { id: 'gearflat', name: 'GearFlat', type: 'bit', bey_type: 'attack', image: 'images/bits/GearFlat.png', tier: 'B' },
    { id: 'gearneedle', name: 'GearNeedle', type: 'bit', bey_type: 'defense', image: 'images/bits/GearNeedle.png', tier: 'C' },
    { id: 'gearpoint', name: 'GearPoint', type: 'bit', bey_type: 'attack', image: 'images/bits/GearPoint.png', tier: 'B' },
    { id: 'gearrush', name: 'GearRush', type: 'bit', bey_type: 'attack', image: 'images/bits/GearRush.png', tier: 'B' },
    { id: 'glide', name: 'Glide', type: 'bit', bey_type: 'stamina', image: 'images/bits/Glide.png', tier: 'C' },
    { id: 'hexa', name: 'Hexa', type: 'bit', bey_type: 'balance', image: 'images/bits/Hexa.png', tier: 'S' },
    { id: 'highneedle', name: 'HighNeedle', type: 'bit', bey_type: 'defense', image: 'images/bits/HighNeedle.png', tier: 'B' },
    { id: 'hightaper', name: 'HighTaper', type: 'bit', bey_type: 'balance', image: 'images/bits/HighTaper.png', tier: 'B' },
    { id: 'kick', name: 'Kick', type: 'bit', bey_type: 'balance', image: 'images/bits/Kick.png', tier: 'S' },
    { id: 'level', name: 'Level', type: 'bit', bey_type: 'balance', image: 'images/bits/Level.png', tier: 'S' },
    { id: 'lowflat', name: 'LowFlat', type: 'bit', bey_type: 'attack', image: 'images/bits/LowFlat.png', tier: 'A' },
    { id: 'loworb', name: 'LowOrb', type: 'bit', bey_type: 'stamina', image: 'images/bits/LowOrb.png', tier: 'A' },
    { id: 'lowrush', name: 'LowRush', type: 'bit', bey_type: 'attack', image: 'images/bits/LowRush.png', tier: 'S' },
    { id: 'merge', name: 'Merge', type: 'bit', bey_type: 'balance', image: 'images/bits/Merge.png', tier: 'D' },
    { id: 'metalneedle', name: 'MetalNeedle', type: 'bit', bey_type: 'defense', image: 'images/bits/MetalNeedle.png', tier: 'D' },
    { id: 'needle', name: 'Needle', type: 'bit', bey_type: 'defense', image: 'images/bits/Needle.png', tier: 'B' },
    { id: 'orb', name: 'Orb', type: 'bit', bey_type: 'stamina', image: 'images/bits/Orb.png', tier: 'A' },
    { id: 'point', name: 'Point', type: 'bit', bey_type: 'attack', image: 'images/bits/Point.png', tier: 'A' },
    { id: 'quake', name: 'Quake', type: 'bit', bey_type: 'attack', image: 'images/bits/Quake.png', tier: 'C' },
    { id: 'rubberaccel', name: 'RubberAccel', type: 'bit', bey_type: 'attack', image: 'images/bits/RubberAccel.png', tier: 'A' },
    { id: 'rush', name: 'Rush', type: 'bit', bey_type: 'attack', image: 'images/bits/Rush.png', tier: 'S' },
    { id: 'spike', name: 'Spike', type: 'bit', bey_type: 'defense', image: 'images/bits/Spike.png', tier: 'C' },
    { id: 'taper', name: 'Taper', type: 'bit', bey_type: 'balance', image: 'images/bits/Taper.png', tier: 'A' },
    { id: 'transpoint', name: 'TransPoint', type: 'bit', bey_type: 'balance', image: 'images/bits/TransPoint.png', tier: 'C' },
    { id: 'underneedle', name: 'UnderNeedle', type: 'bit', bey_type: 'defense', image: 'images/bits/UnderNeedle.png', tier: 'A' },
    { id: 'unite', name: 'Unite', type: 'bit', bey_type: 'balance', image: 'images/bits/Unite.png', tier: 'A' },
    { id: 'vortex', name: 'Vortex', type: 'bit', bey_type: 'attack', image: 'images/bits/Vortex.png', tier: 'C' },
    { id: 'wedge', name: 'Wedge', type: 'bit', bey_type: 'defense', image: 'images/bits/Wedge.png', tier: 'A' },
    { id: 'zap', name: 'Zap', type: 'bit', bey_type: 'balance', image: 'images/bits/Zap.png', tier: 'B' },

    // --- Peças de Chip (TIER B como padrão) ---
    { id: 'lockchip-dran', name: 'Dran', type: 'lockchip', image: 'images/lockchips/Dran.png', tier: 'S' },
    { id: "lockchip-fox", name: "Fox", type: "lockchip", image: "images/lockchips/Fox.png", tier: "B" },
    { id: "lockchip-hells", name: "Hells", type: "lockchip", image: "images/lockchips/Hells.png", tier: "S" },
    { id: "lockchip-hornet", name: "Hornet", type: "lockchip", image: "images/lockchips/Hornet.png", tier: "C" },
    { id: "lockchip-kraken", name: "Kraken", type: "lockchip", image: "images/lockchips/Kraken.png", tier: "B" },
    { id: "lockchip-leon", name: "Leon", type: "lockchip", image: "images/lockchips/Leon.png", tier: "S" },
    { id: "lockchip-perseus", name: "Perseus", type: "lockchip", image: "images/lockchips/Perseus.png", tier: "A" },
    { id: "lockchip-rhino", name: "Rhino", type: "lockchip", image: "images/lockchips/Rhino.png", tier: "B" },
    { id: "lockchip-sol", name: "Sol", type: "lockchip", image: "images/lockchips/Sol.png", tier: "C" },
    { id: "lockchip-stag", name: "Stag", type: "lockchip", image: "images/lockchips/Stag.png", tier: "B" },
    { id: "lockchip-valkyrie", name: "Valkyrie", type: "lockchip", image: "images/lockchips/Valkyrie.png", tier: "A" },
    { id: "lockchip-wizard", name: "Wizard", type: "lockchip", image: "images/lockchips/Wizard.png", tier: "S" },

    { id: "mainblade-arc", name: "Arc", type: "mainblade", image: "images/mainblades/Arc.png", tier: "S" },
    { id: "mainblade-brave", name: "Brave", type: "mainblade", image: "images/mainblades/Brave.png", tier: "A" },
    { id: "mainblade-brush", name: "Brush", type: "mainblade", image: "images/mainblades/Brush.png", tier: "C" },
    { id: "mainblade-dark", name: "Dark", type: "mainblade", image: "images/mainblades/Dark.png", tier: "A" },
    { id: "mainblade-fang", name: "Fang", type: "mainblade", image: "images/mainblades/Fang.png", tier: "S" },
    { id: "mainblade-fort", name: "Fort", type: "mainblade", image: "images/mainblades/Fort.png", tier: "B" },
    { id: "mainblade-reaper", name: "Reaper", type: "mainblade", image: "images/mainblades/Reaper.png", tier: "S" },
    { id: "mainblade-volt", name: "Volt", type: "mainblade", image: "images/mainblades/Volt.png", tier: "A" },
    { id: "mainblade-wriggle", name: "Wriggle", type: "mainblade", image: "images/mainblades/Wriggle.png", tier: "C" },
    { id: "antler", name: "Antler", type: "mainblade", image: "images/mainblades/antler.png", tier: "B" },

    { id: "assistblade-bumper", name: "Bumper", type: "assistblade", image: "images/assistblades/Bumper.png", tier: "S" },
    { id: "assistblade-charge", name: "Charge", type: "assistblade", image: "images/assistblades/Charge.png", tier: "B" },
    { id: "assistblade-jaggy", name: "Jaggy", type: "assistblade", image: "images/assistblades/Jaggy.png", tier: "C" },
    { id: "assistblade-round", name: "Round", type: "assistblade", image: "images/assistblades/Round.png", tier: "A" },
    { id: "assistblade-slash", name: "Slash", type: "assistblade", image: "images/assistblades/Slash.png", tier: "S" },
    { id: "assistblade-turn", name: "Turn", type: "assistblade", image: "images/assistblades/Turn.png", tier: "S" },
];

 // --- Traduções (AJUSTADAS) ---
 const translations = {
    'pt-br': {
        // Abas
        tab_meta: "META",
        tab_deck_builder: "Deck Builder",
        tab_collection: "Coleção",
        tab_settings: "Configurações",
        tab_score: "Placar",
        tab_guide: "Guia de Iniciante",
        // Cabeçalhos das Abas & Conteúdo META
        meta_question: "Querer saber mais sobre o META?",
        meta_cta: "Acesse o link abaixo e esteja um passo mais próximo de se tornar um PRO!",
        meta_link_text: "Clique aqui para acessar a Ferramenta de Análise de META",
        deck_builder_header: "Montador de Decks",
        collection_header: "Minha Coleção",
        settings_header: "Importar & Exportar Dados",
        score_header: "Placar da Partida",
        guide_header: "Guia de Iniciante",
        guide_description: "Guia voltado para iniciantes que querem começar bem no competitivo do Beyblade X, mas não sabem quais produtos comprar.",
        // Aba Coleção
        collection_filter_label: "Mostrar Apenas os que Possuo",
        collection_sort_label: "Ordenar por:",
        sort_name_asc: "Nome (A-Z)",
        sort_name_desc: "Nome (Z-A)",
        sort_tier_desc: "Tier (S > D)",
        sort_tier_asc: "Tier (D > S)",
        sort_type: "Tipo (A-D-S-B)",
        blades_section_title: "Blades",
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
        clear_deck_button: "Limpar Beyblades",
        export_deck_list_button: "Exportar Deck List",
        // Aba Placar
        player_1_default: "Jogador 1",
        player_2_default: "Jogador 2",
        score_1_point: "+1 Ponto",
        score_2_points: "+2 Pontos",
        score_3_points: "+3 Pontos",
        score_reset_button: "Reiniciar Placar",
         // Aba Configurações
         settings_description: "Salve sua coleção e decks em um arquivo (.bx) para backup ou para transferir para outro dispositivo.",
         language_settings_title: "Idioma / Language",
         export_button: "Exportar Dados (.bx)",
         import_button: "Importar Dados (.bx)",
         // Modal Seletor de Peças
         part_selector_modal_title_prefix: "Selecione:",
         part_individual_header: "Peças Individuais (que você possui)",
         part_individual_none_prefix: "Nenhuma peça",
         part_individual_none_suffix: "disponível (verifique sua coleção ou peças já em uso no deck).",
         // Modal Variantes
         variant_modal_title_prefix: "Selecionar Variantes de",
          // Alertas e Prompts
         alert_cannot_delete_last_deck: "Você não pode deletar o último deck.",
         confirm_delete_deck_prefix: "Tem certeza que deseja deletar o deck \"",
         confirm_delete_deck_suffix: "\"? Esta ação não pode ser desfeita.",
         alert_deck_name_empty: "O nome não pode ser vazio.",
         prompt_export_person_name: "Digite seu nome:",
         prompt_export_person_placeholder: "Nome",
         prompt_export_tournament_name: "Digite o nome do evento:",
         prompt_export_tournament_placeholder: "Evento",
         alert_export_deck_empty: "Seu deck está vazio ou não possui Beyblades completos para exportar. Adicione pelo menos um Beyblade completo.",
         alert_export_copied: "Deck List copiada para o clipboard!",
         alert_export_copy_failed: "Falha ao copiar automaticamente. Copie o texto abaixo manualmente:\n\n",
         confirm_import_overwrite: "Importar este arquivo substituirá sua coleção e decks atuais. Deseja continuar?",
         alert_import_success: "Dados importados com sucesso!",
         alert_import_error: "Erro ao importar o arquivo:",
         alert_invalid_file_format: "Formato de arquivo inválido ou dados corrompidos.",
         alert_file_read_error: "Erro ao ler o arquivo selecionado.",
         alert_save_error: "Não foi possível salvar os dados. O armazenamento pode estar cheio ou indisponível.",
         alert_incompatible_part: "Não é possível adicionar uma peça do tipo '{partType}'a um Beyblade do tipo '{bayType}'. Selecione a primeira peça primeiro ou limpe o slot.",
         part_source_title: "Encontrado em:",
         modal_button_cancel: "Cancelar",
         modal_button_ok: "OK",
         confirm_reset_score: "Tem certeza que deseja reiniciar o placar?"
    },
    'en': {
        // Tabs
        tab_meta: "META",
        tab_deck_builder: "Deck Builder",
        tab_collection: "Collection",
        tab_settings: "Settings",
        tab_score: "Score",
        tab_guide: "Starter Guide",
         // Tab Headers & META Content
         meta_question: "Want to know more about the META?",
         meta_cta: "Access the link below and be one step closer to becoming a PRO!",
         meta_link_text: "Click here to access the META Analysis Tool",
         deck_builder_header: "Deck Builder",
         collection_header: "My Collection",
         settings_header: "Import & Export Data",
         score_header: "Match Scoreboard",
         guide_header: "Starter Guide",
         guide_description: "A guide for beginners who want a competitive start in Beyblade X but don't know which products to buy.",
         // Collection Tab
         collection_filter_label: "Show Only Owned",
         collection_sort_label: "Sort by:",
         sort_name_asc: "Name (A-Z)",
         sort_name_desc: "Name (Z-A)",
         sort_tier_desc: "Tier (S > D)",
         sort_tier_asc: "Tier (D > S)",
         sort_type: "Type (A-D-S-B)",
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
         clear_deck_button: "Clear Beyblades",
         export_deck_list_button: "Export Deck List",
         // Score Tab
         player_1_default: "Player 1",
         player_2_default: "Player 2",
         score_1_point: "+1 Point",
         score_2_points: "+2 Points",
         score_3_points: "+3 Points",
         score_reset_button: "Reset Scoreboard",
         // Settings Tab
         settings_description: "Save your collection and decks to a (.bx) file for backup or transfer to another device.",
         language_settings_title: "Idioma / Language",
         export_button: "Export Data (.bx)",
         import_button: "Import Data (.bx)",
          // Part Selector Modal
         part_selector_modal_title_prefix: "Select:",
         part_individual_header: "Individual Parts (Owned)",
         part_individual_none_prefix: "No",
         part_individual_none_suffix: "parts available (check collection or parts already in use in the deck).",
         // Variant Modal
         variant_modal_title_prefix: "Select Variants for",
         // Alerts and Prompts
         alert_cannot_delete_last_deck: "You cannot delete the last deck.",
         confirm_delete_deck_prefix: "Are you sure you want to delete the deck \"",
         confirm_delete_deck_suffix: "\"? This action cannot be undone.",
         alert_deck_name_empty: "Name cannot be empty.",
         prompt_export_person_name: "Enter your name:",
         prompt_export_person_placeholder: "Name",
         prompt_export_tournament_name: "Enter the event/tournament name:",
         prompt_export_tournament_placeholder: "Event",
         alert_export_deck_empty: "Your deck is empty or does not have complete Beyblades to export. Add at least one complete Beyblade.",
         alert_export_copied: "Deck List copied to clipboard!",
         alert_export_copy_failed: "Failed to copy automatically. Please copy the text below manually:\n\n",
         confirm_import_overwrite: "Importing this file will overwrite your current collection and decks. Continue?",
         alert_import_success: "Data imported successfully!",
         alert_import_error: "Error importing file:",
         alert_invalid_file_format: "Invalid file format or corrupted data.",
         alert_file_read_error: "Error reading the selected file.",
         alert_save_error: "Could not save data. Storage might be full or unavailable.",
         alert_incompatible_part: "Cannot add part of type '{partType}'to a Beyblade of type '{bayType}'. Select the first part first or clear the slot.",
         part_source_title: "Found in:",
         modal_button_cancel: "Cancel",
         modal_button_ok: "OK",
         confirm_reset_score: "Are you sure you want to reset the scoreboard?"
    }
};

// --- Mapeamento de Peças para Produtos (Mantido) ---
// (Este mapa ainda contém Takara Tomy, o que é bom para o pop-up "Encontrado em:")
const PART_SOURCES = {
    // Blades Standard/Unique/Crossover
    'aerpegasus': ["UX-00 Aero Pegasus 3-70A"],
    'arc': ["CX-00 Starter Wizard Arc R4-55LO", "CX-02 Booster Wizard Arc R4-55LO", "G1679 Arc Wizard R 4-55LO (Hasbro)"],
    'bearscratch': ["BX-?? Booster BearScratch 5-60F", "G0286 Savage Bear 3-60S (Hasbro)"],
    'blackshell': ["BX-?? Booster BlackShell 4-60D", "BX-?? Booster BlackShell 9-80B", "G1533 Obsidian Shell 4-60D (Hasbro)"],
    'brave': ["CX-01 Starter Dran Brave S6-60V", "CX-04 RB Vol. 4 (Dran Brave Recolor)", "G1677 Courage Dran S 6-60V (Hasbro)"],
    'cobaltdragoon': ["BX-00 Cobalt Dragoon 2-60C (Prize / Special Event)"],
    'cobaltdrake': ["BX-00 Cobalt Drake 4-60F (Prize)", "BX-?? Booster Cobalt Drake 9-60R"],
    'crimsongaruda': ["BX-?? Booster Crimson Garuda 4-70TP", "G1673 Scarlet Garuda 4-70TP (Hasbro)"],
    'croccrunch': ["BX-?? Booster CrocCrunch 2-60Q", "BX-?? Bite Croc 3-60LF", "G0199 Bite Croc (Hasbro)"],
    'dark': ["CX-03 Starter Perseus Dark B6-80W", "CX-04 RB Vol. 4 (Perseus Dark Recolor)", "G1680 Dark Perseus B 6-80W (Hasbro)"],
    'darthvader': ["BXS-01 Star Wars Multipack (Darth Vader 4-60P vs Luke Skywalker 4-80B)"],
    'dracielshield': ["BX-00 Draciel Shield 7-60D (Prize / BXG-11)", "G1844 25th Anniversary Set (Hasbro)"],
    'dragoonsform': ["BX-00 Dragoon Storm 4-60RA (Prize / BXG-01)", "G1844 25th Anniversary Set (Hasbro)"],
    'dranbuster': ["UX-01 Starter DranBuster 1-60A", "BX-00 DranBuster 3-70N (CoroCoro Promo)", "G1536 Buster Dran 1-60A (Hasbro)", "G1751 Buster Dran 5-70DB (Hasbro)"],
    'drandagger': ["UX-02 Starter DranDagger 4-70P", "BX-20 Starter DranDagger 4-60R", "BX-22 Entry Set (DranDagger 4-60R)", "UX-05 RB Vol. 1 (DranDagger 9-60LF)", "UX-05 RB Vol. 1 (DranDagger 2-80GP)", "G1670 Dagger Dran 4-70Q (Hasbro)", "G0842 Drop Attack Battle Set (Hasbro)"],
    'dransword': ["BX-01 Starter DranSword 3-60F", "BX-07 Start Dash Set", "BX-14 RB Vol. 1 (DranSword 3-80B)", "BX-17 Battle Entry Set", "BX-22 Entry Set", "BX-?? Deck Set (DranSword 4-80DB)", "BX-00 DranSword Metal Coat Blue (Prize)", "F9580 Sword Dran 3-60F (Hasbro)", "G0197 Tail Viper and Sword Dran Dual Pack (Hasbro)", "G1543 Gale Wyvern and Sword Dran Dual Pack (Hasbro)", "G1688 Tackle Goat and Sword Dran Dual Pack (Hasbro)"],
    'dranzerspiral': ["BX-00 Dranzer Spiral 3-80T (Prize / BXG-15 / Anniversary Set)", "F9584 Dranzer Spiral 3-80T (Hasbro)", "G1844 25th Anniversary Set (Hasbro)"],
    'drigerslash': ["BX-00 Driger Slash 4-80P (Prize / BXG-04)", "G1843 Driger Slash 4-80P (Hasbro)", "G1844 25th Anniversary Set (Hasbro)"],
    'generalgrievous': ["BXS-02 Star Wars Multipack (Obi-Wan Kenobi 4-60P vs General Grievous 3-80HN)"],
    'ghostcircle': ["BX-?? Booster GhostCircle 0-80GB", "BX-?? Booster GhostCircle 4-60H", "G1687 Circle Ghost (Hasbro)"],
    'gillshark': ["CX-11 Emperor Might Deck Set (SharkGill 5-60FB)", "G1686 Pearl Tiger and Gill Shark Dual Pack (Hasbro)"],
    'golemrock': ["UX-13 Booster GolemRock 1-60UN", "CX-11 Emperor Might Deck Set (GolemRock M-85HN)", "G1676 Rock Golem 1-60UN (Hasbro)"],
    'hellschain': ["BX-21 Starter HellsChain 5-60HT", "BX-?? Booster HellsChain 9-80O", "G0196 Chain Incendio (Hasbro)", "G0842 Drop Attack Battle Set (Hasbro)", "G1687 Circle Ghost and Chain Incendio Dual Pack (Hasbro)"],
    'hellshammer': ["UX-03 Starter HellsHammer 3-70H", "UX-04 Battle Entry Set U (HellsHammer Blade)", "G1752 Hammer Incendio 3-70H (Hasbro)"],
    'hellsscythe': ["BX-02 Starter HellsScythe 4-60T", "BX-08 3on3 Deck Set (HellsScythe 3-80B)", "BX-14 RB Vol. 1 (HellsScythe 4-80LF)", "BX-00 Hells Scythe 3-80F (WBBA Prize)", "F9583 Scythe Incendio 4-60T (Hasbro)", "G0285 Scythe Incendio 3-80B (Hasbro)"],
    'impactdrake': ["UX-09 Booster ImpactDrake 9-60LR", "BX-?? Booster ImpactDrake 7-80GP"],
    'knightlance': ["BX-13 Booster KnightLance 4-80HN", "BX-21 3on3 Deck Set (KnightLance 3-60LF)", "BX-24 RB Vol. 2 (KnightLance 4-60GB)", "G0184 Lance Knight 4-80HN (Hasbro)", "G1671 Lance Knight 3-60LF (Hasbro)"],
    'knightmail': ["UX-04 Battle Entry Set U (KnightMail 3-85BS)"],
    'knightshield': ["BX-04 Starter KnightShield 3-80N", "BX-06 Booster KnightShield 3-60LF", "BX-08 3on3 Deck Set (KnightShield 4-80T)", "BX-14 RB Vol. 1 (KnightShield 4-60LF)", "BX-?? Booster KnightShield 5-80T", "F9581 Helm Knight 3-80N (Hasbro)", "G0198 Yell Kong and Helm Knight Dual Pack (Hasbro)"],
    'leonclaw': ["BX-15 Starter LeonClaw 5-60P", "BX-24 RB Vol. 2 (LeonClaw 3-80HN)", "BX-00 Gold LeonClaw 5-60P (Prize / BXG-05)", "BX-?? Booster LeonClaw 0-80E", "G0193 Claw Leon 5-60P (Hasbro)"],
    'leoncrest': ["UX-06 Booster LeonCrest 7-60GN", "BX-?? Booster LeonCrest 9-80K", "G1685 Cowl Sphinx and Crest Leon Dual Pack (Hasbro)"],
    'lightningl-drago': ["BX-00 Lightning L-Drago 1-60F (Prize / BXG-08 - Both Types)"],
    'mammothtusk': ["BX-?? Xtreme Battle Set (Tusk Mammoth 3-60T - Hasbro)", "BX-?? Booster MammothTusk 2-80E", "F9588 Xtreme Battle Set (Hasbro)"],
    'moffgideon': ["BXS-02 Star Wars Multipack (The Mandalorian 3-60F vs Moff Gideon 3-80N)"],
    'mosasaurus': ["BXS-?? Mosasaurus (Hasbro)", "G1898 T. Rex and Mosasaurus Multipack Set (Hasbro)"], // G1898
    'optimusprimal': ["BXS-05 Transformers Multipack (Optimus Primal 3-60F vs Starscream 3-80N)"],
    'optimusprime': ["BXS-06 Transformers Multipack (Optimus Prime 4-60P vs Megatron 4-80B)"],
    'phoenixfeather': ["UX-10 Booster PhoenixFeather 4-60LF", "BX-00 Phoenix Feather 3-60F (Prize)", "BX-?? Booster PhoenixFeather 2-60N"],
    'phoenixrudder': ["UX-11 Booster PhoenixRudder 9-70G", "BX-?? Booster PhoenixRudder 4-70LF"],
    'phoenixwing': ["BX-23 Starter PhoenixWing 9-60GF", "BX-00 PhoenixWing 9-80DB (Prize / BXC-05)", "BX-?? Booster PhoenixWing 5-80H", "F9324 Soar Phoenix Deluxe String Launcher Set (Hasbro)", "G1756 Soar Phoenix 5-80H (Hasbro)"],
    'pteraswing': ["UX-04 Battle Entry Set U (PteraSwing Blade)", "G0195 Talon Ptera 3-80B (Hasbro)"],
    'reaper': ["CX-05 RB Vol. 5 (HellsReaper T4-70K)", "CX-05 RB Vol. 5 (RhinoReaper C4-55D)"],
    'rhinohorn': ["BX-19 Booster RhinoHorn 3-80S", "BX-?? Booster RhinoHorn 5-80Q", "G0192 Horn Rhino 3-80S (Hasbro)"],
    'rockleone': ["BX-00 Rock Leone 6-80GN (Prize / BXG-20)"],
    'samuraicalibur': ["CX-07 Booster SamuraiCalibur 6-70M"],
    'samuraisaber': ["UX-07 Starter SamuraiSaber 2-70L"],
    'samuraisteel': ["G0188 Steel Samurai 4-80T (Hasbro)"],
    'scorpiospear': ["UX-14 Starter ScorpioSpear 0-70Z"],
    'sharkedge': ["BX-14 RB Vol. 1 (SharkEdge 3-60LF)", "BX-20 3on3 Deck Set (SharkEdge 3-80F)", "BX-14 RB Vol. 1 (SharkEdge 4-80N)", "BX-00 SharkEdge 5-60GF (Prize / BXG-06)", "BX-?? Booster SharkEdge 1-60Q", "BX-00 Maguro Edge 3-60LF (Promo)", "G0194 Keel Shark 3-60LF (Hasbro)", "G0190 Knife Shinobi and Keel Shark Dual Pack (Hasbro)", "G1534 Keel Shark 1-60Q (Hasbro)"],
    'sharkscale': ["UX-15 SharkScale Deck Set (SharkScale 4-50UF)"],
    'shelterdrake': ["BX-39 RB Vol. 3 (ShelterDrake 5-70O)", "BX-39 RB Vol. 3 (ShelterDrake 7-80GP)", "BX-?? Booster ShelterDrake 3-60D", "G1675 Shelter Drake 7-80GP (Hasbro)"],
    'shinobiknife': ["BX-00 Shinobi Knife 4-60LF Metal Coat Blue (Prize)", "G0190 Knife Shinobi (Hasbro)", "G1542 Beat Tyranno and Knife Shinobi Dual Pack (Hasbro)"],
    'shinobishadow': ["UX-05 RB Vol. 1 (ShinobiShadow 9-60LF)", "UX-05 RB Vol. 1 (ShinobiShadow 3-70GP)", "UX-05 RB Vol. 1 (ShinobiShadow 1-80MN)", "BX-?? Booster ShinobiShadow 3-80F", "G1539 Shadow Shinobi 1-80MN (Hasbro)"],
    'silverwolf': ["UX-08 Starter SilverWolf 3-80FB", "G1674 Sterling Wolf 3-80FB (Hasbro)"],
    'spider-man': ["BXS-03 Marvel Multipack (Spider-Man 3-60F vs Venom 3-80N)"],
    'sphinx-cowl': ["BX-27 RB Vol. 3 (SphinxCowl 9-80GN)", "BX-27 RB Vol. 3 (SphinxCowl 4-80HT)", "BX-27 RB Vol. 3 (SphinxCowl 5-60O)", "BX-?? Booster SphinxCowl 1-80GF", "G1530 Cowl Sphinx 9-80GN (Hasbro)", "G1685 Cowl Sphinx and Crest Leon Dual Pack (Hasbro)"],
    'spinosaurus': ["BXS-?? Spinosaurus (Hasbro)", "G1899 Spinosaurus and Quetzalcoatlus Multipack Set (Hasbro)"], // G1899
    'stormpegasis': ["BX-00 Storm Pegasis 3-70RA (Prize / BXG-02)"],
    't.rex': ["BXS-?? T.Rex (Hasbro)", "G1898 T. Rex and Mosasaurus Multipack Set (Hasbro)"], // G1898
    'tacklegoat': ["BX-?? Booster TackleGoat 7-70T", "BX-?? Booster Tackle Goat 2-70N", "G1688 Tackle Goat (Hasbro)"],
    'thanos': ["BXS-04 Marvel Multipack (Iron Man 4-80B vs Thanos 4-60P)"],
    'tricerapress': ["CX-09 Booster TriceraPress M-85BS"],
    'tyrannobeat': ["BX-?? Tyranno Beat 3-60S", "BX-?? Tyranno Beat 4-70Q", "UX-04 Battle Entry Set U (TyrannoBeat Blade)", "G1542 Beat Tyranno (Hasbro)"],
    'tyrannoroar': ["UX-15 SharkScale Deck Set (TyrannoRoar 1-70L)", "BX-?? Booster Roar Tyranno 9-60GF", "G0284 Roar Tyranno 9-60GF (Hasbro)"],
    'venom': ["BXS-03 Marvel Multipack (Spider-Man 3-60F vs Venom 3-80N)"],
    'victoryvalkyrie': ["BX-00 Victory Valkyrie 2-60RA (Prize / BXG-07)"],
    'vipertail': ["BX-16 RB Vol. 1 (ViperTail 5-80O)", "BX-16 RB Vol. 1 (ViperTail 3-80HN)", "BX-16 RB Vol. 1 (ViperTail 4-60F)", "BX-24 RB Vol. 2 (ViperTail 5-60F)", "BX-?? Booster ViperTail 5-70D", "G0197 Tail Viper (Hasbro)", "G0282 Gale Wyvern and Tail Viper Dual Pack (Hasbro)"],
    'weisstiger': ["CX-06 Booster WeissTiger 3-60U", "G1686 Pearl Tiger (Hasbro)"],
    'whalewave': ["BX-?? Booster WhaleWave 5-80E", "BX-?? Booster WhaleWave 4-70HN", "BX-?? Booster WhaleWave 7-60K", "BX-?? Booster WhaleWave 3-80GB", "G1669 Tide Whale 5-80E (Hasbro)"],
    'wyverngale': ["BX-24 RB Vol. 2 (WyvernGale 5-80GB)", "BX-24 RB Vol. 2 (WyvernGale 3-60T)", "BX-?? Booster WyvernGale 0-80C", "BX-?? Booster WyvernGale 2-60S", "G0282 Gale Wyvern (Hasbro)", "G1543 Gale Wyvern and Sword Dran Dual Pack (Hasbro)"],
    'xenoxcalibur': ["BX-00 Xeno Xcalibur 3-60GF (Prize / BXG-13)"],
    'yellkong': ["BX-?? Booster Yell Kong 3-60GB", "G0198 Yell Kong (Hasbro)", "G1754 Yell Kong 3-60GB (Hasbro)"],
    // --- Ratchets ---
    '0-70': ["UX-14 Starter ScorpioSpear 0-70Z"],
    '0-80': ["BX-?? GhostCircle 0-80GB"],
    '1-60': ["UX-01 Starter DranBuster 1-60A", "UX-13 Booster GolemRock 1-60UN", "BX-00 Lightning L-Drago 1-60F", "G1536 Buster Dran 1-60A (Hasbro)", "G1676 Rock Golem 1-60UN (Hasbro)", "G1688 Tackle Goat and Sword Dran Dual Pack (Hasbro)"],
    '1-70': ["UX-15 Deck Set (TyrannoRoar 1-70L)"],
    '1-80': ["UX-05 RB Vol. 1 (ShinobiShadow 1-80MN)", "BX-?? SphinxCowl 1-80GF", "G1539 Shadow Shinobi 1-80MN (Hasbro)"],
    '2-60': ["BX-?? Antler Stag B 2-60HN", "BX-?? WyvernGale 2-60S", "BX-00 Victory Valkyrie 2-60RA", "G1684 Antler Stag B 2-60HN (Hasbro)"],
    '2-70': ["UX-07 Starter SamuraiSaber 2-70L", "BX-?? Tackle Goat 2-70N", "G1688 Tackle Goat (Hasbro)"],
    '2-80': ["UX-05 RB Vol. 1 (DranDagger 2-80GP)", "BX-?? MammothTusk 2-80E"],
    '3-60': ["BX-01 Starter DranSword 3-60F", "BX-06 Booster KnightShield 3-60LF", "BX-14 RB Vol. 1 (SharkEdge 3-60LF)", "BX-00 Xeno Xcalibur 3-60GF", "BXS-05 Optimus Primal 3-60F", "BXS-03 Spider-Man 3-60F", "F9580 Sword Dran 3-60F (Hasbro)", "G0194 Keel Shark 3-60LF (Hasbro)", "G1671 Lance Knight 3-60LF (Hasbro)", "G0199 Bite Croc (Hasbro)", "G0190 Keel Shark (Hasbro)", "G0282 Gale Wyvern (Hasbro)", "G0286 Savage Bear 3-60S (Hasbro)", "G1542 Beat Tyranno (Hasbro)", "G1754 Yell Kong 3-60GB (Hasbro)", "F9588 Xtreme Battle Set (Hasbro)", "G1898 T. Rex (Hasbro)"],
    '3-70': ["UX-03 Starter HellsHammer 3-70H", "UX-05 RB Vol. 1 (ShinobiShadow 3-70GP)", "BX-00 Storm Pegasis 3-70RA", "UX-00 AeroPegasus 3-70A", "BX-00 DranBuster 3-70N", "G1752 Hammer Incendio 3-70H (Hasbro)"],
    '3-80': ["BX-04 Starter KnightShield 3-80N", "BX-19 Booster RhinoHorn 3-80S", "BX-08 3on3 Deck Set (HellsScythe 3-80B)", "BX-14 RB Vol. 1 (DranSword 3-80B)", "BX-16 RB Vol. 1 (ViperTail 3-80HN)", "BX-24 RB Vol. 2 (LeonClaw 3-80HN)", "UX-08 Starter SilverWolf 3-80FB", "BX-00 Dranzer Spiral 3-80T", "BXS-02 General Grievous 3-80HN", "BXS-03 Venom 3-80N", "BXS-05 Starscream 3-80N", "BXS-02 Moff Gideon 3-80N", "F9581 Helm Knight 3-80N (Hasbro)", "G0192 Horn Rhino 3-80S (Hasbro)", "G0195 Talon Ptera 3-80B (Hasbro)", "G0285 Scythe Incendio 3-80B (Hasbro)", "G1674 Sterling Wolf 3-80FB (Hasbro)", "F9584 Dranzer Spiral 3-80T (Hasbro)", "G0197 Sword Dran (Hasbro)", "G1844 25th Anniversary Set (Dranzer)"],
    '3-85': ["UX-04 Battle Entry Set U (KnightMail 3-85BS)", "CX-05 RB Vol. 5 (HellsArc T3-85O)", "G1683 Wriggle Kraken S 3-85O (Hasbro)"],
    '4-50': ["UX-15 SharkScale Deck Set (SharkScale 4-50UF)"],
    '4-55': ["CX-00 Starter Wizard Arc R4-55LO", "CX-02 Booster", "CX-05 RB Vol. 5 (RhinoReaper C4-55D)", "BX-?? Quetzalcoatlus 4-55D", "G1899 Quetzalcoatlus (Hasbro)", "G1679 Arc Wizard R 4-55LO (Hasbro)"],
    '4-60': ["BX-02 Starter HellsScythe 4-60T", "BX-05 Booster WizardArrow 4-60N", "BX-16 RB Vol. 1 (ViperTail 4-60F)", "BX-20 Starter DranDagger 4-60R", "BX-00 Dragoon Storm 4-60RA", "BXS-01 Darth Vader 4-60P", "BXS-04 Thanos 4-60P", "BXS-06 Optimus Prime 4-60P", "F9583 Scythe Incendio 4-60T (Hasbro)", "G1533 Obsidian Shell 4-60D (Hasbro)", "G0196 Arrow Wizard (Hasbro)", "G0199 Sting Unicorn (Hasbro)", "G0282 Tail Viper (Hasbro)", "G1687 Circle Ghost (Hasbro)", "G1844 25th Anniversary Set (Dragoon)"],
    '4-70': ["UX-02 Starter DranDagger 4-70P", "BX-?? TyrannoBeat 4-70Q", "BX-?? CrimsonGaruda 4-70TP", "BX-?? PhoenixRudder 4-70LF", "BX-?? WhaleWave 4-70HN", "G1670 Dagger Dran 4-70Q (Hasbro)", "G1673 Scarlet Garuda 4-70TP (Hasbro)", "CX-05 RB Vol. 5 (Hells Reaper T4-70K)", "G1678 Reaper Incendio T 4-70K (Hasbro)"],
    '4-80': ["BX-03 Starter WizardArrow 4-80B", "BX-13 Booster KnightLance 4-80HN", "BX-08 3on3 Deck Set (KnightShield 4-80T)", "BX-14 RB Vol. 1 (HellsScythe 4-80LF)", "BX-14 RB Vol. 1 (SharkEdge 4-80N)", "BX-24 RB Vol. 2 (WizardArrow 4-80GB)", "BX-27 RB Vol. 3 (SphinxCowl 4-80HT)", "BX-00 Driger Slash 4-80P", "BXS-01 Luke Skywalker 4-80B", "BXS-04 Iron Man 4-80B", "BXS-06 Megatron 4-80B", "G0184 Lance Knight 4-80HN (Hasbro)", "G0188 Steel Samurai 4-80T (Hasbro)", "F9582 Arrow Wizard 4-80B (Hasbro)", "G1531 Arrow Wizard 4-80GB (Hasbro)", "G1843 Driger Slash 4-80P (Hasbro)", "G0190 Knife Shinobi (Hasbro)", "G0198 Helm Knight (Hasbro)", "G1542 Knife Shinobi (Hasbro)", "G1685 Cowl Sphinx (Hasbro)", "G1898 Mosasaurus (Hasbro)"],
    '5-60': ["BX-15 Starter LeonClaw 5-60P", "BX-26 Booster UnicornSting 5-60GP", "BX-24 RB Vol. 2 (ViperTail 5-60F)", "BX-00 SharkEdge 5-60GF (Prize / BXG-06)", "CX-11 Deck Set (SharkGill 5-60FB)", "BX-?? BearScratch 5-60F", "G0193 Claw Leon 5-60P (Hasbro)", "G0283 Sting Unicorn 5-60GP (Hasbro)", "G0197 Tail Viper (Hasbro)", "G1686 Gill Shark (Hasbro)", "G1899 Spinosaurus (Hasbro)"],
    '5-70': ["UX-00 WizardRod 5-70DB", "BX-39 RB Vol. 3 (ShelterDrake 5-70O)", "BX-?? ViperTail 5-70D", "G1537 Wand Wizard 5-70DB (Hasbro)", "G1751 Buster Dran 5-70DB (Hasbro)"],
    '5-80': ["BX-16 RB Vol. 1 (ViperTail 5-80O)", "BX-24 RB Vol. 2 (WyvernGale 5-80GB)", "BX-27 RB Vol. 3 (SphinxCowl 5-60O)", "BX-?? PhoenixWing 5-80H", "BX-?? RhinoHorn 5-80Q", "BX-?? WhaleWave 5-80E", "G1669 Tide Whale 5-80E (Hasbro)", "G1756 Soar Phoenix 5-80H (Hasbro)", "G1543 Gale Wyvern (Hasbro)"],
    '6-60': ["BX-?? OrochiCluster 6-60LF", "CX-01 Starter Dran Brave S6-60V", "CX-04 RB Vol. 4", "G1677 Courage Dran S 6-60V (Hasbro)"],
    '6-70': ["CX-07 Booster SamuraiCalibur 6-70M"],
    '6-80': ["BX-00 Rock Leone 6-80GN (Prize / BXG-20)", "CX-03 Starter Perseus Dark B6-80W", "CX-04 RB Vol. 4", "G1680 Dark Perseus B 6-80W (Hasbro)"],
    '7-60': ["UX-06 Booster LeonCrest 7-60GN", "BX-00 Draciel Shield 7-60D", "BX-?? WhaleWave 7-60K", "G1685 Crest Leon (Hasbro)", "G1844 25th Anniversary Set (Draciel)", "G1682 Fort Hornet R 7-60T (Hasbro)"],
    '7-70': ["BX-?? GoatTackle 7-70T", "BX-?? Tackle Goat 2-70N"],
    '7-80': ["BX-39 RB Vol. 3 (ShelterDrake 7-80GP)", "BX-?? ImpactDrake 7-80GP", "G1675 Shelter Drake 7-80GP (Hasbro)"],
    '9-60': ["BX-23 Starter PhoenixWing 9-60GF", "UX-09 Booster ImpactDrake 9-60LR", "UX-05 RB Vol. 1 (DranDagger 9-60LF)", "UX-05 RB Vol. 1 (ShinobiShadow 9-60LF)", "G0284 Roar Tyranno 9-60GF (Hasbro)"],
    '9-70': ["UX-11 Booster PhoenixRudder 9-70G", "CX-08 Starter FoxBrush J9-70GR", "G1681 Brush Fox J 9-70GR (Hasbro)"],
    '9-80': ["BX-?? BlackShell 9-80B", "BX-?? HellsChain 9-80O", "BX-27 RB Vol. 3 (SphinxCowl 9-80GN)", "G1530 Cowl Sphinx 9-80GN (Hasbro)", "G1687 Chain Incendio (Hasbro)"],
    'm-85': ["CX-09 Booster TriceraPress M-85BS", "CX-11 Emperor Might Deck Set (GolemRock M-85HN)"],
    // --- Bits ---
    'accel': ["UX-01 Starter DranBuster 1-60A", "UX-00 AeroPegasus 3-70A", "G1536 Buster Dran 1-60A (Hasbro)"],
    'ball': ["BX-03 Starter WizardArrow 4-80B", "BX-08 3on3 Deck Set (HellsScythe 3-80B)", "BX-14 RB Vol. 1 (DranSword 3-80B)", "BXS-01 Luke Skywalker 4-80B", "BXS-04 Iron Man 4-80B", "BXS-06 Megatron 4-80B", "F9582 Arrow Wizard 4-80B (Hasbro)", "G0195 Talon Ptera 3-80B (Hasbro)", "G0285 Scythe Incendio 3-80B (Hasbro)", "G1898 Mosasaurus (Hasbro)"],
    'boundspike': ["UX-04 Battle Entry Set U (KnightMail 3-85BS)", "CX-09 Booster TriceraPress M-85BS"],
    'cyclone': ["BX-00 Cobalt Dragoon 2-60C"],
    'diskball': ["UX-00 WizardRod 5-70DB", "BX-00 PhoenixWing 9-80DB", "G1537 Wand Wizard 5-70DB (Hasbro)", "G1751 Buster Dran 5-70DB (Hasbro)", "G1543 Sword Dran (Hasbro)"],
    'dot': ["BX-00 Draciel Shield 7-60D", "BX-?? BlackShell 4-60D", "BX-?? ShelterDrake 3-60D", "BX-?? UnicornSting 3-70D", "BX-?? ViperTail 5-70D", "G1533 Obsidian Shell 4-60D (Hasbro)", "G1844 25th Anniversary Set (Draciel)", "G1899 Quetzalcoatlus (Hasbro)"],
    'elevate': ["BX-?? MammothTusk 2-80E", "BX-?? WhaleWave 5-80E", "G1669 Tide Whale 5-80E (Hasbro)"],
    'flat': ["BX-01 Starter DranSword 3-60F", "BX-14 RB Vol. 1 (SharkEdge 3-80F)", "BX-00 Lightning L-Drago 1-60F", "BXS-05 Optimus Primal 3-60F", "BXS-03 Spider-Man 3-60F", "F9580 Sword Dran 3-60F (Hasbro)", "G0197 Tail Viper 5-60F (Hasbro)", "G0282 Tail Viper (Hasbro)", "G1899 Spinosaurus (Hasbro)"],
    'freeball': ["UX-08 Starter SilverWolf 3-80FB", "CX-11 Deck Set (SharkGill 5-60FB)", "G1674 Sterling Wolf 3-80FB (Hasbro)", "G1686 Gill Shark (Hasbro)"],
    'gearball': ["BX-24 RB Vol. 2 (WyvernGale 5-80GB)", "BX-24 RB Vol. 2 (KnightLance 4-60GB)", "BX-24 RB Vol. 2 (WizardArrow 4-80GB)", "G1531 Arrow Wizard 4-80GB (Hasbro)", "G1754 Yell Kong 3-60GB (Hasbro)", "G1543 Gale Wyvern (Hasbro)", "G0198 Yell Kong (Hasbro)"],
    'gearflat': ["BX-23 Starter PhoenixWing 9-60GF", "BX-00 SharkEdge 5-60GF", "BX-00 Xeno Xcalibur 3-60GF", "UX-15 Deck Set (HellsBrave J3-60GF)", "G0284 Roar Tyranno 9-60GF (Hasbro)"],
    'gearneedle': ["UX-06 Booster LeonCrest 7-60GN", "BX-27 RB Vol. 3 (SphinxCowl 9-80GN)", "BX-00 Rock Leone 6-80GN", "G1530 Cowl Sphinx 9-80GN (Hasbro)", "G1685 Crest Leon (Hasbro)"],
    'gearpoint': ["BX-26 Booster UnicornSting 5-60GP", "UX-05 RB Vol. 1 (DranDagger 2-80GP)", "UX-05 RB Vol. 1 (ShinobiShadow 3-70GP)", "BX-39 RB Vol. 3 (ShelterDrake 7-80GP)", "G0283 Sting Unicorn 5-60GP (Hasbro)", "G1675 Shelter Drake 7-80GP (Hasbro)"],
    'gearrush': ["CX-08 Starter FoxBrush J9-70GR", "G1681 Brush Fox J 9-70GR (Hasbro)"],
    'glide': ["UX-?? Booster PhoenixRudder 9-70G"],
    'hexa': ["UX-03 Starter HellsHammer 3-70H", "G1752 Hammer Incendio 3-70H (Hasbro)", "G1687 Circle Ghost (Hasbro)", "G1756 Soar Phoenix 5-80H (Hasbro)"],
    'highneedle': ["BX-13 Booster KnightLance 4-80HN", "BX-16 RB Vol. 1 (ViperTail 3-80HN)", "BX-24 RB Vol. 2 (LeonClaw 3-80HN)", "BXS-02 General Grievous 3-80HN", "CX-11 Deck Set (GolemRock M-85HN)", "G0184 Lance Knight 4-80HN (Hasbro)", "G0190 Knife Shinobi (Hasbro)", "G1542 Knife Shinobi (Hasbro)", "G1684 Antler Stag B 2-60HN (Hasbro)"],
    'hightaper': ["BX-21 Starter HellsChain 5-60HT", "BX-27 RB Vol. 3 (SphinxCowl 4-80HT)", "G0196 Chain Incendio (Hasbro)", "G0842 Drop Attack Battle Set (Hasbro)", "G1685 Cowl Sphinx (Hasbro)"],
    'kick': ["CX-05 RB Vol. 5 (Hells Reaper T4-70K)", "BX-?? LeonCrest 9-80K", "BX-?? WhaleWave 7-60K", "G1678 Reaper Incendio T 4-70K (Hasbro)"],
    'level': ["UX-07 Starter SamuraiSaber 2-70L", "UX-15 Deck Set (TyrannoRoar 1-70L)"],
    'lowflat': ["BX-06 Booster KnightShield 3-60LF", "BX-14 RB Vol. 1 (HellsScythe 4-80LF)", "BX-14 RB Vol. 1 (SharkEdge 3-60LF)", "UX-05 RB Vol. 1 (DranDagger 9-60LF)", "UX-05 RB Vol. 1 (ShinobiShadow 9-60LF)", "UX-10 Booster PhoenixFeather 4-60LF", "G0194 Keel Shark 3-60LF (Hasbro)", "G1671 Lance Knight 3-60LF (Hasbro)", "G0199 Bite Croc (Hasbro)"],
    'loworb': ["CX-00 Starter Wizard Arc R4-55LO", "CX-02 Booster", "G1679 Arc Wizard R 4-55LO (Hasbro)"],
    'lowrush': ["UX-09 Booster ImpactDrake 9-60LR"],
    'merge': ["CX-07 Booster SamuraiCalibur 6-70M"],
    'metalneedle': ["UX-05 RB Vol. 1 (ShinobiShadow 1-80MN)", "G1539 Shadow Shinobi 1-80MN (Hasbro)"],
    'needle': ["BX-04 Starter KnightShield 3-80N", "BX-05 Booster WizardArrow 4-60N", "BXS-03 Venom 3-80N", "BXS-05 Starscream 3-80N", "F9581 Helm Knight 3-80N (Hasbro)", "G1688 Tackle Goat (Hasbro)"],
    'orb': ["BX-16 RB Vol. 1 (ViperTail 5-80O)", "BX-27 RB Vol. 3 (SphinxCowl 5-60O)", "BX-39 RB Vol. 3 (ShelterDrake 5-70O)", "CX-05 RB Vol. 5 (HellsArc T3-85O)", "G1755 Arrow Wizard 4-80O (Hasbro)", "G1687 Chain Incendio (Hasbro)"],
    'point': ["BX-15 Starter LeonClaw 5-60P", "UX-02 Starter DranDagger 4-70P", "BX-00 Driger Slash 4-80P", "BXS-01 Darth Vader 4-60P", "BXS-04 Thanos 4-60P", "BXS-06 Optimus Prime 4-60P", "G0193 Claw Leon 5-60P (Hasbro)", "G1843 Driger Slash 4-80P (Hasbro)", "G0199 Sting Unicorn (Hasbro)"],
    'quake': ["BX-14 RB Vol. 1 (SharkEdge 1-60Q - Assuming BX-14 has this)", "BX-?? CrocCrunch 2-60Q", "BX-?? TyrannoBeat 4-70Q", "BX-?? RhinoHorn 5-80Q", "G1534 Keel Shark 1-60Q (Hasbro)", "G1670 Dagger Dran 4-70Q (Hasbro)"],
    'rush': ["BX-20 Starter DranDagger 4-60R", "BX-?? WizardRod 1-60R", "BX-?? CobaltDrake 9-60R", "G1538 Wand Wizard 1-60R (Hasbro)"],
    'spike': ["BX-19 Booster RhinoHorn 3-80S", "G0192 Horn Rhino 3-80S (Hasbro)", "G0286 Savage Bear 3-60S (Hasbro)", "G1542 Beat Tyranno (Hasbro)", "G1898 T. Rex (Hasbro)"],
    'taper': ["BX-02 Starter HellsScythe 4-60T", "BX-08 3on3 Deck Set (KnightShield 4-80T)", "BX-14 RB Vol. 1 (WizardArrow 3-60T)", "BX-24 RB Vol. 2 (WyvernGale 3-60T)", "BX-00 Dranzer Spiral 3-80T", "F9583 Scythe Incendio 4-60T (Hasbro)", "G0188 Steel Samurai 4-80T (Hasbro)", "F9584 Dranzer Spiral 3-80T (Hasbro)", "G0198 Helm Knight (Hasbro)", "G0282 Gale Wyvern (Hasbro)"],
    'transpoint': ["BX-?? CrimsonGaruda 4-70TP", "G1673 Scarlet Garuda 4-70TP (Hasbro)"],
    'unite': ["CX-06 Booster WeissTiger 3-60U", "CX-?? Starter FoxBrush J2-60U", "G1686 Pearl Tiger (Hasbro)"],
    'underneedle': ["UX-13 Booster GolemRock 1-60UN", "G1676 Rock Golem 1-60UN (Hasbro)"],
    'vortex': ["CX-01 Starter Dran Brave S6-60V", "CX-04 RB Vol. 4", "G1677 Courage Dran S 6-60V (Hasbro)"],
    'wedge': ["CX-03 Starter Perseus Dark B6-80W", "CX-04 RB Vol. 4", "G1680 Dark Perseus B 6-80W (Hasbro)"],
    'zap': ["UX-14 Starter ScorpioSpear 0-70Z"],
    'rubberaccel': ["BX-00 Dragoon Storm 4-60RA", "BX-00 Storm Pegasis 3-70RA", "BX-00 Victory Valkyrie 2-60RA", "G1844 25th Anniversary Set (Dragoon)"],

    // Lock Chips (CX System)
    'lockchip-dran': ["CX-01 Starter Dran Brave S6-60V", "CX-04 RB Vol. 4 (Dran Brave Recolor)", "G1677 Courage Dran S 6-60V (Hasbro)"],
    'lockchip-wizard': ["CX-00 Starter Wizard Arc R4-55LO", "CX-02 Booster Wizard Arc R4-55LO", "G1679 Arc Wizard R 4-55LO (Hasbro)"],
    'lockchip-perseus': ["CX-03 Starter Perseus Dark B6-80W", "CX-04 RB Vol. 4 (Perseus Dark Recolor)", "G1680 Dark Perseus B 6-80W (Hasbro)"],
    'lockchip-hells': ["CX-05 RB Vol. 5 (Hells Reaper T4-70K)", "CX-05 RB Vol. 5 (Hells Arc T3-85O)", "G1678 Reaper Incendio T 4-70K (Hasbro)"],
    'lockchip-rhino': ["CX-05 RB Vol. 5 (Rhino Reaper C4-55D)"],
    'lockchip-fox': ["CX-08 Starter FoxBrush J9-70GR", "G1681 Brush Fox J 9-70GR (Hasbro)"],
    'lockchip-hornet': ["CX-?? Fort Hornet R 7-60T", "G1682 Fort Hornet R 7-60T (Hasbro)"],
    'lockchip-kraken': ["CX-?? Wriggle Kraken S 3-85O", "G1683 Wriggle Kraken S 3-85O (Hasbro)"],
    'lockchip-leon': ["CX-?? LeonFang T4-60A"],
    'lockchip-stag': ["CX-?? Antler Stag B 2-60HN", "G1684 Antler Stag B 2-60HN (Hasbro)"],
    'lockchip-valkyrie': ["CX-?? ValkyrieVolt S4-70V"],
    'lockchip-sol': ["CX-?? Sol Eclipse E5-70E"],

    // Main Blades (CX System)
    'mainblade-brave': ["CX-01 Starter Dran Brave S6-60V", "CX-04 RB Vol. 4 (Dran Brave Recolor)", "G1677 Courage Dran S 6-60V (Hasbro)"],
    'mainblade-arc': ["CX-00 Starter Wizard Arc R4-55LO", "CX-02 Booster Wizard Arc R4-55LO", "CX-05 RB Vol. 5 (Hells Arc T3-85O)", "G1679 Arc Wizard R 4-55LO (Hasbro)"],
    'mainblade-dark': ["CX-03 Starter Perseus Dark B6-80W", "CX-04 RB Vol. 4 (Perseus Dark Recolor)", "G1680 Dark Perseus B 6-80W (Hasbro)"],
    'mainblade-reaper': ["CX-05 RB Vol. 5 (Hells Reaper T4-70K)", "CX-05 RB Vol. 5 (Rhino Reaper C4-55D)", "G1678 Reaper Incendio T 4-70K (Hasbro)"],
    'mainblade-brush': ["CX-08 Starter FoxBrush J9-70GR", "G1681 Brush Fox J 9-70GR (Hasbro)"],
    'mainblade-fang': ["CX-?? LeonFang T4-60A"],
    'mainblade-fort': ["CX-?? Fort Hornet R 7-60T", "G1682 Fort Hornet R 7-60T (Hasbro)"],
    'mainblade-volt': ["CX-?? ValkyrieVolt S4-70V"],
    'mainblade-wriggle': ["CX-?? Wriggle Kraken S 3-85O", "G1683 Wriggle Kraken S 3-85O (Hasbro)"],
    'antler': ["CX-?? Antler Stag B 2-60HN", "G1684 Antler Stag B 2-60HN (Hasbro)"],

    // Assist Blades (CX System)
    'assistblade-bumper': ["CX-03 Starter Perseus Dark B6-80W", "CX-04 RB Vol. 4 (Perseus Dark Recolor)", "G1680 Dark Perseus B 6-80W (Hasbro)", "G1684 Antler Stag B 2-60HN (Hasbro)"],
    'assistblade-charge': ["CX-05 RB Vol. 5 (Rhino Reaper C4-55D)"],
    'assistblade-jaggy': ["CX-08 Starter FoxBrush J9-70GR", "G1681 Brush Fox J 9-70GR (Hasbro)"],
    'assistblade-round': ["CX-00 Starter Wizard Arc R4-55LO", "CX-02 Booster Wizard Arc R4-55LO", "G1679 Arc Wizard R 4-55LO (Hasbro)"],
    'assistblade-slash': ["CX-01 Starter Dran Brave S6-60V", "CX-04 RB Vol. 4 (Dran Brave Recolor)", "G1677 Courage Dran S 6-60V (Hasbro)"],
    'assistblade-turn': ["CX-05 RB Vol. 5 (Hells Reaper T4-70K)", "CX-05 RB Vol. 5 (Hells Arc T3-85O)", "G1678 Reaper Incendio T 4-70K (Hasbro)", "G1682 Fort Hornet R 7-60T (Hasbro)"]
};
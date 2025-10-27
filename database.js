// --- [MODIFICADO] DADOS DO GUIA DE INICIANTE AGRUPADOS POR MARCA ---
const STARTER_GUIDE_PRODUCTS = {
    hasbro: [
        // --- Produtos Hasbro ---
        {
            productName: "Hasbro: Starter Dran Sword 3-60F (F9580)",
            image: "images/products/hasbro_F9580.webp",
            parts: ['dransword', '3-60', 'flat']
        },
        {
            productName: "Hasbro: Starter Hells Scythe 4-60T (F9583)",
            image: "images/products/hasbro_F9583.webp",
            parts: ['hellsscythe', '4-60', 'taper']
        },
        {
            productName: "Hasbro: Starter Knight Shield 3-80N (F9581)",
            image: "images/products/hasbro_F9581.webp",
            parts: ['knightshield', '3-80', 'needle']
        },
        {
            productName: "Hasbro: Starter Wizard Arrow 4-80B (F9582)",
            image: "images/products/hasbro_F9582.webp",
            parts: ['wizardarrow', '4-80', 'ball']
        },
        {
            productName: "Hasbro: Starter Knight Lance 4-80HN (G0184)",
            image: "images/products/hasbro_G0184.webp",
            parts: ['knightlance', '4-80', 'highneedle']
        },
        {
            productName: "Hasbro: Starter Leon Claw 5-60P (G0193)",
            image: "images/products/hasbro_G0193.webp",
            parts: ['leonclaw', '5-60', 'point']
        },
        {
            productName: "Hasbro: Starter Dran Buster 1-60A (G1536)",
            image: "images/products/hasbro_G1536.webp",
            parts: ['dranbuster', '1-60', 'accel']
        },
        {
            productName: "Hasbro: Starter Wand Wizard 5-70DB (G1537)",
            image: "images/products/hasbro_G1537.webp",
            parts: ['wizardrod', '5-70', 'diskball']
        },
        {
            productName: "Hasbro: Starter Wand Wizard 1-60R (G1538)",
            image: "images/products/hasbro_G1538.webp",
            parts: ['wizardrod', '1-60', 'rush']
        },
        {
            productName: "Hasbro: Starter Shinobi Shadow 1-80MN (G1539)",
            image: "images/products/hasbro_G1539.webp",
            parts: ['shinobishadow', '1-80', 'metalneedle']
        },
        {
            productName: "Hasbro: Starter Crimson Garuda 4-70TP (G1673)",
            image: "images/products/hasbro_G1673.webp",
            parts: ['crimsongaruda', '4-70', 'transpoint']
        },
        {
            productName: "Hasbro: Starter Silver Wolf 3-80FB (G1674)",
            image: "images/products/hasbro_G1674.webp",
            parts: ['silverwolf', '3-80', 'freeball']
        },
        {
            productName: "Hasbro: Starter Shelter Drake 7-80GP (G1675)",
            image: "images/products/hasbro_G1675.webp",
            parts: ['shelterdrake', '7-80', 'gearpoint']
        },
        {
            productName: "Hasbro: Starter Golem Rock 1-60UN (G1676)",
            image: "images/products/hasbro_G1676.webp",
            parts: ['golemrock', '1-60', 'underneedle']
        },
        {
            productName: "Hasbro: Starter Dran Buster 5-70DB (G1751)",
            image: "images/products/hasbro_G1751.webp",
            parts: ['dranbuster', '5-70', 'diskball']
        },
        {
            productName: "Hasbro: Starter Hells Hammer 3-70H (G1752)",
            image: "images/products/hasbro_G1752.webp",
            parts: ['hellshammer', '3-70', 'hexa']
        },
         {
            productName: "Hasbro: Booster Steel Samurai 4-80T (G0188)",
            image: "images/products/hasbro_G0188.webp",
            parts: ['samuraisteel', '4-80', 'taper']
        },
        {
            productName: "Hasbro: Booster Horn Rhino 3-80S (G0192)",
            image: "images/products/hasbro_G0192.webp",
            parts: ['rhinohorn', '3-80', 'spike']
        },
        {
            productName: "Hasbro: Booster Keel Shark 3-60LF (G0194)",
            image: "images/products/hasbro_G0194.webp",
            parts: ['sharkedge', '3-60', 'lowflat']
        },
        {
            productName: "Hasbro: Booster Talon Ptera 3-80B (G0195)",
            image: "images/products/hasbro_G0195.webp",
            parts: ['pteraswing', '3-80', 'ball']
        },
        {
            productName: "Hasbro: Booster Sting Unicorn 5-60GP (G0283)",
            image: "images/products/hasbro_G0283.webp",
            parts: ['unicornsting', '5-60', 'gearpoint']
        },
        {
            productName: "Hasbro: Booster Roar Tyranno 9-60GF (G0284)",
            image: "images/products/hasbro_G0284.webp",
            parts: ['tyrannoroar', '9-60', 'gearflat']
        },
        {
            productName: "Hasbro: Booster Scythe Incendio 3-80B (G0285)",
            image: "images/products/hasbro_G0285.webp",
            parts: ['hellsscythe', '3-80', 'ball']
        },
        {
            productName: "Hasbro: Booster Savage Bear 3-60S (G0286)",
            image: "images/products/hasbro_G0286.webp",
            parts: ['bearscratch', '3-60', 'spike']
        },
        {
            productName: "Hasbro: Booster Cowl Sphinx 9-80GN (G1530)",
            image: "images/products/hasbro_G1530.webp",
            parts: ['sphinx-cowl', '9-80', 'gearneedle']
        },
        {
            productName: "Hasbro: Booster Arrow Wizard 4-80GB (G1531)",
            image: "images/products/hasbro_G1531.webp",
            parts: ['wizardarrow', '4-80', 'gearball']
        },
        {
            productName: "Hasbro: Booster Obsidian Shell 4-60D (G1533)",
            image: "images/products/hasbro_G1533.webp",
            parts: ['blackshell', '4-60', 'dot']
        },
        {
            productName: "Hasbro: Booster Keel Shark 1-60Q (G1534)",
            image: "images/products/hasbro_G1534.webp",
            parts: ['sharkedge', '1-60', 'quake']
        },
        {
            productName: "Hasbro: Booster Tide Whale 5-80E (G1669)",
            image: "images/products/hasbro_G1669.webp",
            parts: ['whalewave', '5-80', 'elevate']
        },
        {
            productName: "Hasbro: Booster Dagger Dran 4-70Q (G1670)",
            image: "images/products/hasbro_G1670.webp",
            parts: ['drandagger', '4-70', 'quake']
        },
        {
            productName: "Hasbro: Booster Lance Knight 3-60LF (G1671)",
            image: "images/products/hasbro_G1671.webp",
            parts: ['knightlance', '3-60', 'lowflat']
        },
        {
            productName: "Hasbro: Booster Yell Kong 3-60GB (G1754)",
            image: "images/products/hasbro_G1754.webp",
            parts: ['yellkong', '3-60', 'gearball']
        },
        {
            productName: "Hasbro: Booster Arrow Wizard 4-80O (G1755)",
            image: "images/products/hasbro_G1755.webp",
            parts: ['wizardarrow', '4-80', 'orb']
        },
        {
            productName: "Hasbro: Booster Soar Phoenix 5-80H (G1756)",
            image: "images/products/hasbro_G1756.webp",
            parts: ['phoenixwing', '5-80', 'hexa']
        },
        // --- Hasbro Custom Line ---
        {
            productName: "Hasbro: Custom Line Courage Dran S 6-60V (G1677)",
            image: "images/products/hasbro_G1677.webp",
            parts: ['lockchip-dran', 'mainblade-brave', 'assistblade-slash', '6-60', 'vortex']
        },
        {
            productName: "Hasbro: Custom Line Reaper Incendio T 4-70K (G1678)",
            image: "images/products/hasbro_G1678.webp",
            parts: ['lockchip-hells', 'mainblade-reaper', 'assistblade-turn', '4-70', 'kick']
        },
        {
            productName: "Hasbro: Custom Line Arc Wizard R 4-55LO (G1679)",
            image: "images/products/hasbro_G1679.webp",
            parts: ['lockchip-wizard', 'mainblade-arc', 'assistblade-round', '4-55', 'loworb']
        },
        {
            productName: "Hasbro: Custom Line Dark Perseus B 6-80W (G1680)",
            image: "images/products/hasbro_G1680.webp",
            parts: ['lockchip-perseus', 'mainblade-dark', 'assistblade-bumper', '6-80', 'wedge']
        },
        {
            productName: "Hasbro: Custom Line Brush Fox J 9-70GR (G1681)",
            image: "images/products/hasbro_G1681.webp",
            parts: ['lockchip-fox', 'mainblade-brush', 'assistblade-jaggy', '9-70', 'gearrush']
        },
        {
            productName: "Hasbro: Custom Line Fort Hornet R 7-60T (G1682)",
            image: "images/products/hasbro_G1682.webp",
            parts: ['lockchip-hornet', 'mainblade-fort', 'assistblade-turn', '7-60', 'taper']
        },
        {
            productName: "Hasbro: Custom Line Wriggle Kraken S 3-85O (G1683)",
            image: "images/products/hasbro_G1683.webp",
            parts: ['lockchip-kraken', 'mainblade-wriggle', 'assistblade-turn', '3-85', 'orb']
        },
        {
            productName: "Hasbro: Custom Line Antler Stag B 2-60HN (G1684)",
            image: "images/products/hasbro_G1684.webp",
            parts: ['lockchip-stag', 'antler', 'assistblade-bumper', '2-60', 'highneedle']
        },
        // --- Hasbro X-Over Starters ---
        {
            productName: "Hasbro: X-Over Dranzer Spiral 3-80T (F9584)",
            image: "images/products/hasbro_F9584.webp",
            parts: ['dranzerspiral', '3-80', 'taper']
        },
        {
            productName: "Hasbro: X-Over Driger Slash 4-80P (G1843)",
            image: "images/products/hasbro_G1843.webp",
            parts: ['drigerslash', '4-80', 'point']
        },
        // --- Hasbro Dual Packs ---
        {
            productName: "Hasbro: Dual Pack Knife Shinobi & Keel Shark (G0190)",
            image: "images/products/hasbro_G0190.webp",
            parts: ['shinobiknife', '4-80', 'highneedle', 'sharkedge', '3-60', 'lowflat']
        },
        {
            productName: "Hasbro: Dual Pack Chain Incendio & Arrow Wizard (G0196)",
            image: "images/products/hasbro_G0196.webp",
            parts: ['hellschain', '5-60', 'hightaper', 'wizardarrow', '4-60', 'needle']
        },
        {
            productName: "Hasbro: Dual Pack Tail Viper & Sword Dran (G0197)",
            image: "images/products/hasbro_G0197.webp",
            parts: ['vipertail', '5-60', 'flat', 'dransword', '3-80', 'ball']
        },
        {
            productName: "Hasbro: Dual Pack Yell Kong & Helm Knight (G0198)",
            image: "images/products/hasbro_G0198.webp",
            parts: ['yellkong', '3-60', 'gearball', 'knightshield', '4-80', 'taper']
        },
        {
            productName: "Hasbro: Dual Pack Bite Croc & Sting Unicorn (G0199)",
            image: "images/products/hasbro_G0199.webp",
            parts: ['croccrunch', '3-60', 'lowflat', 'unicornsting', '4-60', 'point']
        },
        {
            productName: "Hasbro: Dual Pack Gale Wyvern & Tail Viper (G0282)",
            image: "images/products/hasbro_G0282.webp",
            parts: ['wyverngale', '3-60', 'taper', 'vipertail', '4-60', 'flat']
        },
        {
            productName: "Hasbro: Dual Pack Beat Tyranno & Knife Shinobi (G1542)",
            image: "images/products/hasbro_G1542.webp",
            parts: ['tyrannobeat', '3-60', 'spike', 'shinobiknife', '4-80', 'highneedle']
        },
        {
            productName: "Hasbro: Dual Pack Gale Wyvern & Sword Dran (G1543)",
            image: "images/products/hasbro_G1543.webp",
            parts: ['wyverngale', '5-80', 'gearball', 'dransword', '4-80', 'diskball']
        },
        {
            productName: "Hasbro: Dual Pack Cowl Sphinx & Crest Leon (G1685)",
            image: "images/products/hasbro_G1685.webp",
            parts: ['sphinx-cowl', '4-80', 'hightaper', 'leoncrest', '7-60', 'gearneedle']
        },
        {
            productName: "Hasbro: Dual Pack Pearl Tiger & Gill Shark (G1686)",
            image: "images/products/hasbro_G1686.webp",
            parts: ['weisstiger', '3-60', 'unite', 'sharkgill', '5-60', 'freeball']
        },
        {
            productName: "Hasbro: Dual Pack Circle Ghost & Chain Incendio (G1687)",
            image: "images/products/hasbro_G1687.webp",
            parts: ['ghostcircle', '4-60', 'hexa', 'hellschain', '9-80', 'orb']
        },
        {
            productName: "Hasbro: Dual Pack Tackle Goat & Sword Dran (G1688)",
            image: "images/products/hasbro_G1688.webp",
            parts: ['tacklegoat', '2-70', 'needle', 'dransword', '1-60', 'flat']
        },
        // --- Hasbro Battle Sets ---
        {
            productName: "Hasbro: Xtreme Battle Set (F9588)",
            image: "images/products/hasbro_F9588.webp",
            parts: ['drandagger', '4-60', 'rush', 'mammothtusk', '3-60', 'taper']
        },
        {
            productName: "Hasbro: Drop Attack Battle Set (G0842)",
            image: "images/products/hasbro_G0842.webp",
            parts: ['hoverwyvern', '3-85', 'needle', 'impactdrake', '9-60', 'lowrush']
        },
        {
            productName: "Hasbro: 25th Anniversary Set (G1844)",
            image: "images/products/hasbro_G1844.webp",
            parts: ['dranzerspiral', '3-80', 'taper', 'drigerslash', '4-80', 'point', 'dracielshield', '7-60', 'dot', 'dragoonsform', '4-60', 'rubberaccel']
        },
        // --- Hasbro Multipacks (Collab) ---
        {
            productName: "Hasbro: Star Wars Multipack (Darth Vader vs Luke Skywalker) (BXS-01)",
            image: "images/products/bxs_darth_vader.webp", // Placeholder
            parts: ['darthvader', '4-60', 'point', /* Luke */ '4-80', 'ball']
        },
        {
            productName: "Hasbro: Star Wars Multipack (General Grievous vs Obi-Wan / Moff Gideon vs Mandalorian) (BXS-02)",
            image: "images/products/bxs_general_grievous.webp", // Placeholder
            parts: ['generalgrievous', '3-80', 'highneedle', /* Obi-Wan */ '4-60', 'point', 'moffgideon', '3-80', 'needle', /* Mando */ '3-60', 'flat']
        },
        {
            productName: "Hasbro: Marvel Multipack (Spider-Man vs Venom) (BXS-03)",
            image: "images/products/bxs_spider_man.webp", // Placeholder
            parts: ['spider-man', '3-60', 'flat', 'venom', '3-80', 'needle']
        },
        {
            productName: "Hasbro: Marvel Multipack (Thanos vs Iron Man) (BXS-04)",
            image: "images/products/bxs_thanos.webp", // Placeholder
            parts: ['thanos', '4-60', 'point', /* Iron Man */ '4-80', 'ball']
        },
        {
            productName: "Hasbro: Transformers Multipack (Optimus Primal vs Starscream) (BXS-05)",
            image: "images/products/bxs_optimus_primal.webp", // Placeholder
            parts: ['optimusprimal', '3-60', 'flat', /* Starscream */ '3-80', 'needle']
        },
        {
            productName: "Hasbro: Transformers Multipack (Optimus Prime vs Megatron) (BXS-06)",
            image: "images/products/bxs_optimus_prime.webp", // Placeholder
            parts: ['optimusprime', '4-60', 'point', /* Megatron */ '4-80', 'ball']
        },
        {
            productName: "Hasbro: Jurassic Park Multipack (T. Rex vs Mosasaurus) (G1898)",
            image: "images/products/hasbro_G1898.webp",
            parts: ['t.rex', '3-60', 'spike', 'mosasaurus', '4-80', 'ball']
        },
        {
            productName: "Hasbro: Jurassic Park Multipack (Spinosaurus vs Quetzalcoatlus) (G1899)",
            image: "images/products/hasbro_G1899.webp",
            parts: ['spinosaurus', '5-60', 'flat', 'quetzalcoatlus', '4-55', 'dot']
        },
    ],
    takaraTomy: [
        // --- Produtos Takara Tomy ---
        {
            productName: "Takara Tomy: BX-01 Starter DranSword 3-60F",
            image: "images/products/takara_BX01.webp",
            parts: ['dransword', '3-60', 'flat']
        },
        {
            productName: "Takara Tomy: BX-02 Starter HellsScythe 4-60T",
            image: "images/products/takara_BX02.webp",
            parts: ['hellsscythe', '4-60', 'taper']
        },
        {
            productName: "Takara Tomy: BX-03 Starter WizardArrow 4-80B",
            image: "images/products/takara_BX03.webp",
            parts: ['wizardarrow', '4-80', 'ball']
        },
        {
            productName: "Takara Tomy: BX-04 Starter KnightShield 3-80N",
            image: "images/products/takara_BX04.webp",
            parts: ['knightshield', '3-80', 'needle']
        },
        {
            productName: "Takara Tomy: BX-05 Booster WizardArrow 4-80B",
            image: "images/products/takara_BX05.webp",
            parts: ['wizardarrow', '4-80', 'ball']
        },
        {
            productName: "Takara Tomy: BX-06 Booster KnightShield 3-80N",
            image: "images/products/takara_BX06.webp",
            parts: ['knightshield', '3-80', 'needle']
        },
        {
            productName: "Takara Tomy: BX-13 Booster KnightLance 4-80HN",
            image: "images/products/takara_BX13.webp",
            parts: ['knightlance', '4-80', 'highneedle']
        },
        {
            productName: "Takara Tomy: BX-15 Starter LeonClaw 5-60P",
            image: "images/products/takara_BX15.webp",
            parts: ['leonclaw', '5-60', 'point']
        },
        {
            productName: "Takara Tomy: BX-19 Booster RhinoHorn 3-80S",
            image: "images/products/takara_BX19.webp",
            parts: ['rhinohorn', '3-80', 'spike']
        },
        {
            productName: "Takara Tomy: BX-22 Entry Package DranSword 3-60F",
            image: "images/products/takara_BX22.webp",
            parts: ['dransword', '3-60', 'flat']
        },
        {
            productName: "Takara Tomy: BX-23 Starter PhoenixWing 9-60GF",
            image: "images/products/takara_BX23.webp",
            parts: ['phoenixwing', '9-60', 'gearflat']
        },
        {
            productName: "Takara Tomy: BX-26 Booster UnicornSting 5-60GP",
            image: "images/products/takara_BX26.webp",
            parts: ['unicornsting', '5-60', 'gearpoint']
        },
        {
            productName: "Takara Tomy: BX-33 Booster WeissTiger 3-60U",
            image: "images/products/takara_BX33.webp",
            parts: ['weisstiger', '3-60', 'unite']
        },
        {
            productName: "Takara Tomy: BX-34 Starter CobaltDragoon 2-60C",
            image: "images/products/takara_BX34.webp",
            parts: ['cobaltdragoon', '2-60', 'cyclone']
        },
        {
            productName: "Takara Tomy: BX-38 Booster CrimsonGaruda 4-70TP",
            image: "images/products/takara_BX38.webp",
            parts: ['crimsongaruda', '4-70', 'transpoint']
        },
        {
            productName: "Takara Tomy: BX-44 Booster TriceraPress M-85BS",
            image: "images/products/takara_BX44.webp",
            parts: ['tricerapress', 'm-85', 'boundspike']
        },
        {
            productName: "Takara Tomy: BX-45 Booster SamuraiCalibur 6-70M",
            image: "images/products/takara_BX45.webp",
            parts: ['samuraicalibur', '6-70', 'merge']
        },
        {
            productName: "Takara Tomy: UX-01 Starter DranBuster 1-60A",
            image: "images/products/takara_UX01.webp",
            parts: ['dranbuster', '1-60', 'accel']
        },
        {
            productName: "Takara Tomy: UX-02 Starter HellsHammer 3-70H",
            image: "images/products/takara_UX02.webp",
            parts: ['hellshammer', '3-70', 'hexa']
        },
        {
            productName: "Takara Tomy: UX-03 Booster WizardRod 5-70DB",
            image: "images/products/takara_UX03.webp",
            parts: ['wizardrod', '5-70', 'diskball']
        },
        {
            productName: "Takara Tomy: UX-06 Booster LeonCrest 7-60GN",
            image: "images/products/takara_UX06.webp",
            parts: ['leoncrest', '7-60', 'gearneedle']
        },
        {
            productName: "Takara Tomy: UX-08 Starter SilverWolf 3-80FB",
            image: "images/products/takara_UX08.webp",
            parts: ['silverwolf', '3-80', 'freeball']
        },
        {
            productName: "Takara Tomy: UX-09 Starter SamuraiSaber 2-70L",
            image: "images/products/takara_UX09.webp",
            parts: ['samuraisaber', '2-70', 'level']
        },
        {
            productName: "Takara Tomy: UX-11 Starter ImpactDrake 9-60LR",
            image: "images/products/takara_UX11.webp",
            parts: ['impactdrake', '9-60', 'lowrush']
        },
        {
            productName: "Takara Tomy: UX-13 Booster GolemRock 1-60UN",
            image: "images/products/takara_UX13.webp",
            parts: ['golemrock', '1-60', 'underneedle']
        },
        {
            productName: "Takara Tomy: UX-14 Starter ScorpioSpear 0-70Z",
            image: "images/products/takara_UX14.webp",
            parts: ['scorpiospear', '0-70', 'zap']
        },
        {
            productName: "Takara Tomy: UX-15 SharkScale Deck Set",
            image: "images/products/takara_UX15.webp",
            parts: ['sharkscale', '4-50', 'underflat', 'tyrannoroar', '1-70', 'level', 'lockchip-hells', 'mainblade-brave', 'assistblade-jaggy', '3-60', 'gearflat']
        },
        {
            productName: "Takara Tomy: UX-16 Random Booster ClockMirage 9-65B",
            image: "images/products/takara_UX16.webp",
            parts: ['clockmirage', '9-65', 'bearing']
        },
        {
            productName: "Takara Tomy: CX-01 Starter DranBrave S6-60V",
            image: "images/products/takara_CX01.webp",
            parts: ['lockchip-dran', 'mainblade-brave', 'assistblade-slash', '6-60', 'vortex']
        },
        {
            productName: "Takara Tomy: CX-02 Starter WizardArc R4-55LO",
            image: "images/products/takara_CX02.webp",
            parts: ['lockchip-wizard', 'mainblade-arc', 'assistblade-round', '4-55', 'loworb']
        },
        {
            productName: "Takara Tomy: CX-03 Booster PerseusDark B6-80W",
            image: "images/products/takara_CX03.webp",
            parts: ['lockchip-perseus', 'mainblade-dark', 'assistblade-bumper', '6-80', 'wedge']
        },
        {
            productName: "Takara Tomy: CX-07 Starter PegasusBlast ATr",
            image: "images/products/takara_CX07.webp",
            parts: ['lockchip-pegasus', 'mainblade-blast', 'assistblade-assault', 'acceltrans']
        },
        {
            productName: "Takara Tomy: CX-08 Random Booster CerberusFlame W5-80WB",
            image: "images/products/takara_CX08.webp",
            parts: ['lockchip-cerberus', 'mainblade-flame', 'assistblade-wide', 'w5-80', 'weightball']
        },
        {
            productName: "Takara Tomy: CX-09 Starter SolEclipse D5-70TK",
            image: "images/products/takara_CX09.webp",
            parts: ['lockchip-sol', 'mainblade-eclipse', 'assistblade-dual', '5-70', 'transkick']
        },
        {
            productName: "Takara Tomy: CX-10 Starter WolfHunt F0-60DB",
            image: "images/products/takara_CX10.webp",
            parts: ['lockchip-wolf', 'mainblade-hunt', 'assistblade-free', '0-60', 'diskball']
        },
        {
            productName: "Takara Tomy: CX-11 Deck Set EmperorMight",
            image: "images/products/takara_CX11.webp",
            parts: ['lockchip-emperor', 'mainblade-might', 'assistblade-hop', 'hop', 'golemrock', 'm-85', 'highneedle', 'sharkgill', '5-60', 'freeball']
        },
        // --- Produtos Takara Tomy (Especiais/Limitados) ---
        {
            productName: "Takara Tomy: DranSword 3-60F (CoroCoro Spirit)",
            image: "images/products/takara_BX01_limited.webp",
            parts: ['dransword', '3-60', 'flat']
        },
        {
            productName: "Takara Tomy: HellsScythe 4-60T (CoroCoro Spirit)",
            image: "images/products/takara_BX02_limited.webp",
            parts: ['hellsscythe', '4-60', 'taper']
        },
        {
            productName: "Takara Tomy: BX-00 Booster DranzerSpiral 3-80T",
            image: "images/products/takara_BX00_dranzerspiral.webp",
            parts: ['dranzerspiral', '3-80', 'taper']
        },
        {
            productName: "Takara Tomy: BX-00 CobaltDrake 4-60F (Metal Coat: Blue)",
            image: "images/products/takara_BX00_cobaltdrake_mcblue.webp",
            parts: ['cobaltdrake', '4-60', 'flat']
        },
        {
            productName: "Takara Tomy: BX-00 HellsScythe 4-60T (Metal Coat: Gold)",
            image: "images/products/takara_BX00_hellsscythe_mcgold.webp",
            parts: ['hellsscythe', '4-60', 'taper']
        },
        {
            productName: "Takara Tomy: BX-00 DranSword 3-60F (Metal Coat: Bronze)",
            image: "images/products/takara_BX00_dransword_mcbronze.webp",
            parts: ['dransword', '3-60', 'flat']
        },
        {
            productName: "Takara Tomy: BX-00 DranSword 3-60F (Metal Coat: Silver)",
            image: "images/products/takara_BX00_dransword_mcsilver.webp",
            parts: ['dransword', '3-60', 'flat']
        },
        {
            productName: "Takara Tomy: BX-00 DranSword 3-60F (Metal Coat: Gold)",
            image: "images/products/takara_BX00_dransword_mcgold.webp",
            parts: ['dransword', '3-60', 'flat']
        },
        {
            productName: "Takara Tomy: PhoenixWing 9-60GF (Toys R Us Pre-sale)",
            image: "images/products/takara_BX23_presale.webp",
            parts: ['phoenixwing', '9-60', 'gearflat']
        },
        {
            productName: "Takara Tomy: BX-00 HellsScythe 3-80F (SP X Bey)",
            image: "images/products/takara_BX00_hellsscythe_spx.webp",
            parts: ['hellsscythe', '3-80', 'flat']
        },
        {
            productName: "Takara Tomy: BX-00 DranSword 3-60F (Sushiro Ver.)",
            image: "images/products/takara_BX00_dransword_sushiro.webp",
            parts: ['dransword', '3-60', 'flat']
        },
        {
            productName: "Takara Tomy: BX-00 LeonClaw 5-60P (Metal Coat: Gold)",
            image: "images/products/takara_BX00_leonclaw_mcgold.webp",
            parts: ['leonclaw', '5-60', 'point']
        },
        {
            productName: "Takara Tomy: BX-00 SharkEdge 5-60GF (Metal Coat: Blue)",
            image: "images/products/takara_BX00_sharkedge_mcblue.webp",
            parts: ['sharkedge', '5-60', 'gearflat']
        },
        {
            productName: "Takara Tomy: BX-00 Booster DrigerSlash 4-80P",
            image: "images/products/takara_BX00_drigerslash.webp",
            parts: ['drigerslash', '4-80', 'point']
        },
        {
            productName: "Takara Tomy: BX-00 HellsChain 5-60HT (Metal Coat: Black)",
            image: "images/products/takara_BX00_hellschain_mcblack.webp",
            parts: ['hellschain', '5-60', 'hightaper']
        },
        {
            productName: "Takara Tomy: UX-00 DranBuster 1-60A (Metal Coat: Red)",
            image: "images/products/takara_UX00_dranbuster_mcred.webp",
            parts: ['dranbuster', '1-60', 'accel']
        },
        {
            productName: "Takara Tomy: UX-00 Booster AeroPegasus 3-70A",
            image: "images/products/takara_UX00_aeropegasus.webp",
            parts: ['aerpegasus', '3-70', 'accel']
        },
        {
            productName: "Takara Tomy: BX-00 DranDagger 2-80GP (Metal Coat: Black Giants)",
            image: "images/products/takara_BX00_drandagger_mcblackgiants.webp",
            parts: ['drandagger', '2-80', 'gearpoint']
        },
        {
            productName: "Takara Tomy: BX-00 CobaltDragoon 2-60C (Metal Coat: Black)",
            image: "images/products/takara_BX00_cobaltdragoon_mcblack.webp",
            parts: ['cobaltdragoon', '2-60', 'cyclone']
        },
        {
            productName: "Takara Tomy: BX-00 PhoenixWing 9-80DB (Bladers Select Bey)",
            image: "images/products/takara_BX00_phoenixwing_bladersselect.webp",
            parts: ['phoenixwing', '9-80', 'diskball']
        },
        {
            productName: "Takara Tomy: BX-00 ShinobiKnife 4-60LF (Metal Coat: Blue)",
            image: "images/products/takara_BX00_shinobiknife_mcblue.webp",
            parts: ['shinobiknife', '4-60', 'lowflat']
        },
        {
            productName: "Takara Tomy: BX-00 CobaltDrake 4-60F (Clear Ver.)",
            image: "images/products/takara_BX00_cobaltdrake_clear.webp",
            parts: ['cobaltdrake', '4-60', 'flat']
        },
        {
            productName: "Takara Tomy: BX-00 Booster DracielShield 7-60D",
            image: "images/products/takara_BX00_dracielshield.webp",
            parts: ['dracielshield', '7-60', 'dot']
        },
        {
            productName: "Takara Tomy: BX-00 MammothTusk 2-80E (Metal Coat: Black)",
            image: "images/products/takara_BX00_mammothtusk_mcblack.webp",
            parts: ['mammothtusk', '2-80', 'elevate']
        },
        {
            productName: "Takara Tomy: CX-00 ValkyrieVolt S4-70V (Metal Coat: Gold)",
            image: "images/products/takara_CX00_valkyrievolt_mcgold.webp",
            parts: ['lockchip-valkyrie', 'mainblade-volt', 'assistblade-slash', '4-70', 'vortex']
        },
        {
            productName: "Takara Tomy: UX-00 KnightMail 3-85BS (Metal Coat: Navy)",
            image: "images/products/takara_UX00_knightmail_mcnavy.webp",
            parts: ['knightmail', '3-85', 'boundspike']
        },
        {
            productName: "Takara Tomy: BX-00 Booster Rock Leone 6-80GN",
            image: "images/products/takara_BX00_rockleone.webp",
            parts: ['rockleone', '6-80', 'gearneedle']
        },
        {
            productName: "Takara Tomy: CX-00 WizardArc R4-55LO (Metal Coat: Black)",
            image: "images/products/takara_CX00_wizardarc_mcblack.webp",
            parts: ['lockchip-wizard', 'mainblade-arc', 'assistblade-round', '4-55', 'loworb']
        },
        {
            productName: "Takara Tomy: CX-00 LeonFang T4-60A (Red Ver.)",
            image: "images/products/takara_CX00_leonfang_red.webp",
            parts: ['lockchip-leon', 'mainblade-fang', 'assistblade-turn', '4-60', 'accel']
        },
    ]
};


// --- BASE DE DADOS DAS VARIANTES (ATUALIZADA) ---
const ALL_VARIANTS = {
    'aerpegasus': [ { name: "Stock", image: "images/blades/AeroPegasus.webp" } ],
    'bearscratch': [ { name: "Stock", image: "images/blades/BearScratch.webp" } ],
    'blackshell': [ { name: "Stock", image: "images/blades/BlackShell.webp" }, { name: "ver. 2", image: "images/variantes/BlackShell_9-80B.jpeg" }, { name: "ver. 3", image: "images/variantes/BlackShell_7-70WB.webp" } ], // Adicionada ver. 3 (CX-08)
    'clockmirage': [ { name: "Stock", image: "images/blades/ClockMirage.webp" }, { name: "Recolor 1", image: "images/variantes/ClockMirage_recolor1.webp"}, { name: "Recolor 2", image: "images/variantes/ClockMirage_recolor2.webp"} ], // [ADICIONADO] Placeholder para recolors UX-16
    'cobaltdragoon': [ { name: "Stock", image: "images/blades/CobaltDragoon.webp" }, { name: "ver. 2", image: "images/variantes/CobaltDragoon_4-55WB.webp" } ], // Adicionada ver. 2 (CX-08)
    'cobaltdrake': [ { name: "Stock", image: "images/blades/CobaltDrake.webp" }, { name: "ver. 2", image: "images/variantes/CobaltDrake_9-60R.webp" } ],
    'crimsongaruda': [ { name: "Stock", image: "images/blades/CrimsonGaruda.webp" } ],
    'croccrunch': [ { name: "Stock", image: "images/blades/CrocCrunch.webp" } ],
    'darthvader': [ { name: "Stock", image: "images/blades/DarthVader.webp" } ],
    'dracielshield': [ { name: "Stock", image: "images/blades/DracielShield.webp" } ],
    'dragoonsform': [ { name: "Stock", image: "images/blades/DragoonStorm.webp" } ],
    'dranbuster': [ { name: "Stock", image: "images/blades/DranBuster.webp" }, { name: "ver. 2", image: "images/variantes/DranBuster_3-70N.webp" }, { name: "ver. 3", image: "images/variantes/DranBuster_5-80MN.webp" } ], // Adicionada ver. 3 (CX-08)
    'drandagger': [ { name: "Stock", image: "images/blades/DranDagger.webp" }, { name: "ver. 2", image: "images/variantes/DranDagger_4-60R.webp" }, { name: "ver. 3", image: "images/variantes/DranDagger_4-70P.webp" }, { name: "ver. 4", image: "images/variantes/DranDagger_9-60LF.webp" }, { name: "ver. 5", image: "images/variantes/DranDagger_2-80GP.webp"} ], // Adicionada ver. 5
    'dransword': [ { name: "Stock", image: "images/blades/DranSword.webp" }, { name: "ver. 2", image: "images/variantes/DranSword_3-80B.webp" }, { name: "ver. 3", image: "images/variantes/DranSword_4-80DB.webp" }, { name: "ver. 4", image: "images/variantes/2.webp" }, { name: "ver. 5", image: "images/variantes/3.webp" }, { name: "ver. 6", image: "images/variantes/latest.webp" } ],
    'dranzerspiral': [ { name: "Stock", image: "images/blades/DranzerSpiral.webp" } ],
    'drigerslash': [ { name: "Stock", image: "images/blades/DrigerSlash.webp" } ],
    'generalgrievous': [ { name: "Stock", image: "images/blades/GeneralGrievous.webp" } ],
    'ghostcircle': [ { name: "Stock", image: "images/blades/GhostCircle.webp" }, { name: "ver. 2", image: "images/variantes/GhostCircle_4-60H.webp" } ],
    'gillshark': [ { name: "Stock", image: "images/blades/GillShark.webp" } ], // Renomeado de 'sharkgill' para consistência
    'golemrock': [ { name: "Stock", image: "images/blades/GolemRock.webp" } ], // Adicionando entrada, mesmo sem variantes por agora
    'hellschain': [ { name: "Stock", image: "images/blades/HellsChain.webp" }, { name: "ver. 2", image: "images/variantes/HellsChain_9-80O.webp" } ],
    'hellshammer': [ { name: "Stock", image: "images/blades/HellsHammer.webp" } ],
    'hellsscythe': [ { name: "Stock", image: "images/blades/HellsScythe.webp" }, { name: "ver. 2", image: "images/variantes/HellsScythe_3-80F.webp" }, { name: "ver. 3", image: "images/variantes/HellsScythe_4-60T.webp" }, { name: "ver. 4", image: "images/variantes/HellsScythe_4-80LF.webp" } ],
    'hoverwyvern': [ { name: "Stock", image: "images/blades/HoverWyvern.webp" } ],
    'impactdrake': [ { name: "Stock", image: "images/blades/ImpactDrake.webp" }, { name: "ver. 2", image: "images/variantes/ImpactDrake_9-60LR.webp" } ],
    'knightlance': [ { name: "Stock", image: "images/blades/KnightLance.webp" }, { name: "ver. 2", image: "images/variantes/KnightLance_4-60GB.webp" }, { name: "ver. 3", image: "images/variantes/KnightLance_4-80HN.webp" } ],
    'knightmail': [ { name: "Stock", image: "images/blades/KnightMail.webp" } ],
    'knightshield': [ { name: "Stock", image: "images/blades/KnightShield.webp" }, { name: "ver. 2", image: "images/variantes/KnightShield_4-60LF.webp" }, { name: "ver. 3", image: "images/variantes/KnightShield_4-80T.webp" }, { name: "ver. 4", image: "images/variantes/KnightShield_5-80T.webp" } ],
    'leonclaw': [ { name: "Stock", image: "images/blades/LeonClaw.webp" }, { name: "ver. 2", image: "images/variantes/LeonClaw_3-80HN.webp" }, { name: "ver. 3", image: "images/variantes/LeonClaw_5-60P.webp" } ],
    'leoncrest': [ { name: "Stock", image: "images/blades/LeonCrest.webp" }, { name: "ver. 2", image: "images/variantes/LeonCrest_9-80K.webp" } ],
    'lightningl-drago': [ { name: "Stock", image: "images/blades/LightningL-Drago.webp" }, { name: "ver. 2", image: "images/variantes/Lightning_L-Drago_1-60F.webp" } ],
    'mammothtusk': [ { name: "Stock", image: "images/blades/MammothTusk.webp" } ],
    'moffgideon': [ { name: "Stock", image: "images/blades/MoffGideon.webp" } ],
    'mosasaurus': [ { name: "Stock", image: "images/blades/Mosasaurus.webp" } ],
    'optimusprimal': [ { name: "Stock", image: "images/blades/OptimusPrimal.webp" } ],
    'optimusprime': [ { name: "Stock", image: "images/blades/OptimusPrime.webp" } ],
    'phoenixfeather': [ { name: "Stock", image: "images/blades/PhoenixFeather.webp" }, { name: "ver. 2", image: "images/variantes/PhoenixFeather_3-60F.webp" }, { name: "ver. 3", image: "images/variantes/PhoenixFeather_4-60LF.webp" } ],
    'phoenixrudder': [ { name: "Stock", image: "images/blades/PhoenixRudder.webp" }, { name: "ver. 2", image: "images/variantes/PhoenixRudder_9-70G.webp" }, { name: "ver. 3", image: "images/variantes/PhoenixRudder_4-70LF.webp"} ], // Adicionada ver. 3 (CX-05)
    'phoenixwing': [ { name: "Stock", image: "images/blades/PhoenixWing.webp" }, { name: "ver. 2", image: "images/variantes/PhoenixWing_9-60GF.webp" }, { name: "ver. 3", image: "images/variantes/PhoenixWing_9-80DB.webp" } ],
    'quetzalcoatlus': [ { name: "Stock", image: "images/blades/Quetzalcoatlus.webp" } ],
    'rhinohorn': [ { name: "Stock", image: "images/blades/RhinoHorn.webp" }, { name: "ver. 2", image: "images/variantes/RhinoHorn_5-80Q.webp" } ],
    'rockleone': [ { name: "Stock", image: "images/blades/RockLeone.webp" } ],
    'samuraicalibur': [ { name: "Stock", image: "images/blades/SamuraiCalibur.webp" } ],
    'samuraisaber': [ { name: "Stock", image: "images/blades/SamuraiSaber.webp" } ],
    'scorpiospear': [ { name: "Stock", image: "images/blades/ScorpioSpear.webp" } ],
    'sharkedge': [ { name: "Stock", image: "images/blades/SharkEdge.webp" }, { name: "ver. 2", image: "images/variantes/SharkEdge_3-60LF.webp" }, { name: "ver. 3", image: "images/variantes/SharkEdge_3-80F.webp" }, { name: "ver. 4", image: "images/variantes/SharkEdge_4-80N.webp" }, { name: "ver. 5", image: "images/variantes/SharkEdge_5-60GF.webp" } ],
    'sharkscale': [ { name: "Stock", image: "images/blades/SharkScale.webp" } ], // Adicionando entrada
    'shelterdrake': [ { name: "Stock", image: "images/blades/ShelterDrake.webp" }, { name: "ver. 2", image: "images/variantes/ShelterDrake_5-70O.webp" }, { name: "ver. 3", image: "images/variantes/ShelterDrake_7-80GP.webp" } ],
    'shinobiknife': [ { name: "Stock", image: "images/blades/ShinobiKnife.webp" } ],
    'shinobishadow': [ { name: "Stock", image: "images/blades/ShinobiShadow.webp" }, { name: "ver. 2", image: "images/variantes/ShinobiShadow_3-70GP.webp" }, { name: "ver. 3", image: "images/variantes/ShinobiShadow_3-80F.webp" }, { name: "ver. 4", image: "images/variantes/ShinobiShadow_9-60LF.webp" } ],
    'silverwolf': [ { name: "Stock", image: "images/blades/SilverWolf.webp" } ],
    'sphinx-cowl': [ { name: "Stock", image: "images/blades/SphinxCowl.webp" }, { name: "ver. 2", image: "images/variantes/SphinxCowl_4-80HT.webp" }, { name: "ver. 3", image: "images/variantes/SphinxCowl_5-60O.webp" }, { name: "ver. 4", image: "images/variantes/SphinxCowl_9-80GN.webp" } ],
    'spider-man': [ { name: "Stock", image: "images/blades/Spider-Man.webp" } ],
    'spinosaurus': [ { name: "Stock", image: "images/blades/Spinosaurus.webp" } ],
    'stormpegasis': [ { name: "Stock", image: "images/blades/StormPegasis.webp" } ],
    't.rex': [ { name: "Stock", image: "images/blades/T.Rex.webp" } ],
    'tacklegoat': [ { name: "Stock", image: "images/blades/TackleGoat.webp" } ],
    'thanos': [ { name: "Stock", image: "images/blades/Thanos.webp" } ],
    'tricerapress': [ { name: "Stock", image: "images/blades/TriceraPress.webp" } ],
    'tyrannobeat': [ { name: "Stock", image: "images/blades/TyrannoBeat.webp" }, { name: "ver. 2", image: "images/variantes/TyrannoBeat_4-70Q.webp" } ],
    'tyrannoroar': [ { name: "Stock", image: "images/blades/TyrannoRoar.webp" } ], // Adicionando entrada
    'unicornsting': [ { name: "Stock", image: "images/blades/UnicornSting.webp" }, { name: "ver. 2", image: "images/variantes/UnicornSting_5-60GP.webp" } ],
    'venom': [ { name: "Stock", image: "images/blades/Venom.webp" } ],
    'victoryvalkyrie': [ { name: "Stock", image: "images/blades/VictoryValkyrie.webp" } ],
    'vipertail': [ { name: "Stock", image: "images/blades/ViperTail.webp" }, { name: "ver. 2", image: "images/variantes/ViperTail_4-60F.webp" }, { name: "ver. 3", image: "images/variantes/ViperTail_5-60F.webp" }, { name: "ver. 4", image: "images/variantes/ViperTail_5-70D.webp" }, { name: "ver. 5", image: "images/variantes/ViperTail_5-80O.webp" } ],
    'weisstiger': [ { name: "Stock", image: "images/blades/WeissTiger.webp" } ],
    'whalewave': [ { name: "Stock", image: "images/blades/WhaleWave.webp" }, { name: "ver. 2", image: "images/variantes/WhaleWave_4-70HN.webp" }, { name: "ver. 3", image: "images/variantes/WhaleWave_5-80E.webp" }, { name: "ver. 4", image: "images/variantes/WhaleWave_7-60K.webp" }, { name: "ver. 5", image: "images/variantes/WhaleWave_7-60KC.webp"} ], // Adicionada ver. 5 (CX-05)
    'wizardarrow': [ { name: "Stock", image: "images/blades/WizardArrow.webp" }, { name: "ver. 2", image: "images/variantes/WizardArrow_4-60N.webp" }, { name: "ver. 4", image: "images/variantes/WizardArrow_4-80GB.webp" }, { name: "ver. 3", image: "images/variantes/WizardArrow_4-80N.webp" }, { name: "ver. 5", image: "images/variantes/4.webp" } ],
    'wizardrod': [ { name: "Stock", image: "images/blades/WizardRod.webp" }, { name: "ver. 2", image: "images/variantes/WizardRod_5-70DB.webp" } ],
    'wyverngale': [ { name: "Stock", image: "images/blades/WyvernGale.webp" }, { name: "ver. 2", image: "images/variantes/WyvernGale_2-60S.webp" }, { name: "ver. 3", image: "images/variantes/WyvernGale_3-60T.webp" }, { name: "ver. 4", image: "images/variantes/WyvernGale_5-80GB.webp" } ],
    'xenoxcalibur': [ { name: "Stock", image: "images/blades/XenoXcalibur.webp" } ],
    'yellkong': [ { name: "Stock", image: "images/blades/YellKong.webp" } ]
};

// --- [MODIFICADO] BASE DE DADOS DAS PEÇAS (com Tiers atualizados) ---
const ALL_PARTS = [
    // Blades
    { id: 'aerpegasus', name: 'Aero Pegasus', type: 'blade', bey_type: 'stamina', image: 'images/blades/AeroPegasus.webp', tier: 'S', variantsId: 'aerpegasus', attack: 70, defense: 10, stamina: 20 },
    { id: 'arc', name: 'Arc', type: 'blade', bey_type: 'stamina', image: 'images/blades/Arc.webp', tier: 'C' },
    { id: 'bearscratch', name: 'BearScratch', type: 'blade', bey_type: 'attack', image: 'images/blades/BearScratch.webp', tier: 'C', variantsId: 'bearscratch', attack: 50, defense: 20, stamina: 30 },
    { id: 'blackshell', name: 'BlackShell', type: 'blade', bey_type: 'defense', image: 'images/blades/BlackShell.webp', tier: 'C', variantsId: 'blackshell', attack: 10, defense: 65, stamina: 25 },
    { id: 'blast', name: 'Blast', type: 'blade', bey_type: 'attack', image: 'images/blades/Blast.webp', tier: 'A' },
    { id: 'bolt', name: 'Bolt', type: 'blade', bey_type: 'balance', image: 'images/blades/Bolt.webp', tier: 'C' },
    { id: 'brave', name: 'Brave', type: 'blade', bey_type: 'attack', image: 'images/blades/Brave.webp', tier: 'A' }, // Tier atualizado
    { id: 'brush', name: 'Brush', type: 'blade', bey_type: 'stamina', image: 'images/blades/Brush.webp', tier: 'C' },
    { id: 'clockmirage', name: 'ClockMirage', type: 'blade', bey_type: 'stamina', image: 'images/blades/ClockMirage.webp', tier: 'C', variantsId: 'clockmirage', attack: 0, defense: 0, stamina: 0 }, // Tier placeholder
    { id: 'cobaltdragoon', name: 'Cobalt Dragoon', type: 'blade', bey_type: 'attack', image: 'images/blades/CobaltDragoon.webp', tier: 'S', variantsId: 'cobaltdragoon', attack: 60, defense: 15, stamina: 25 },
    { id: 'cobaltdrake', name: 'CobaltDrake', type: 'blade', bey_type: 'defense', image: 'images/blades/CobaltDrake.webp', tier: 'C', variantsId: 'cobaltdrake', attack: 70, defense: 35, stamina: 25 },
    { id: 'crimsongaruda', name: 'Crimson Garuda', type: 'blade', bey_type: 'stamina', image: 'images/blades/CrimsonGaruda.webp', tier: 'C', variantsId: 'crimsongaruda', attack: 20, defense: 10, stamina: 70 },
    { id: 'croccrunch', name: 'CrocCrunch', type: 'blade', bey_type: 'attack', image: 'images/blades/CrocCrunch.webp', tier: 'C', variantsId: 'croccrunch', attack: 55, defense: 20, stamina: 25 },
    { id: 'dark', name: 'Dark', type: 'blade', bey_type: 'defense', image: 'images/blades/Dark.webp', tier: 'A' }, // Tier atualizado
    { id: 'darthvader', name: 'DarthVader', type: 'blade', bey_type: 'balance', image: 'images/blades/DarthVader.webp', tier: 'C', variantsId: 'darthvader' },
    { id: 'dracielshield', name: 'DracielShield', type: 'blade', bey_type: 'defense', image: 'images/blades/DracielShield.webp', tier: 'D', variantsId: 'dracielshield', attack: 10, defense: 70, stamina: 20 },
    { id: 'dragoonsform', name: 'Dragoon Storm', type: 'blade', bey_type: 'attack', image: 'images/blades/DragoonStorm.webp', tier: 'D', variantsId: 'dragoonsform', attack: 65, defense: 10, stamina: 25 },
    { id: 'dranbuster', name: 'DranBuster', type: 'blade', bey_type: 'attack', image: 'images/blades/DranBuster.webp', tier: 'A', variantsId: 'dranbuster', attack: 70, defense: 20, stamina: 10 },
    { id: 'drandagger', name: 'DranDagger', type: 'blade', bey_type: 'attack', image: 'images/blades/DranDagger.webp', tier: 'C', variantsId: 'drandagger', attack: 50, defense: 25, stamina: 25 },
    { id: 'dransword', name: 'DranSword', type: 'blade', bey_type: 'attack', image: 'images/blades/DranSword.webp', tier: 'B', variantsId: 'dransword', attack: 55, defense: 25, stamina: 20 },
    { id: 'dranzerspiral', name: 'Dranzer Spiral', type: 'blade', bey_type: 'balance', image: 'images/blades/DranzerSpiral.webp', tier: 'C', variantsId: 'dranzerspiral', attack: 35, defense: 30, stamina: 35 },
    { id: 'drigerslash', name: 'DrigerSlash', type: 'blade', bey_type: 'balance', image: 'images/blades/DrigerSlash.webp', tier: 'D', variantsId: 'drigerslash', attack: 40, defense: 35, stamina: 25 },
    { id: 'eclipse', name: 'Eclipse', type: 'blade', bey_type: 'defense', image: 'images/blades/Eclipse.webp', tier: 'C' }, // Tier placeholder
    { id: 'flame', name: 'Flame', type: 'blade', bey_type: 'balance', image: 'images/blades/Flame.webp', tier: 'C' }, // Tier placeholder
    { id: 'generalgrievous', name: 'General Grievous', type: 'blade', bey_type: 'defense', image: 'images/blades/GeneralGrievous.webp', tier: 'D', variantsId: 'generalgrievous' },
    { id: 'ghostcircle', name: 'GhostCircle', type: 'blade', bey_type: 'stamina', image: 'images/blades/GhostCircle.webp', tier: 'C', variantsId: 'ghostcircle', attack: 10, defense: 35, stamina: 55 },
    { id: 'sharkgill', name: 'SharkGill', type: 'blade', bey_type: 'stamina', image: 'images/blades/SharkGill.webp', tier: 'C', variantsId: 'sharkgill', attack: 0, defense: 0, stamina: 0 }, // ID corrigido
    { id: 'golemrock', name: 'GolemRock', type: 'blade', bey_type: 'defense', image: 'images/blades/GolemRock.webp', tier: 'D', variantsId: 'golemrock', attack: 15, defense: 70, stamina: 15 },
    { id: 'hellschain', name: 'HellsChain', type: 'blade', bey_type: 'defense', image: 'images/blades/HellsChain.webp', tier: 'B', variantsId: 'hellschain', attack: 35, defense: 40, stamina: 25 },
    { id: 'hellshammer', name: 'Hells Hammer', type: 'blade', bey_type: 'attack', image: 'images/blades/HellsHammer.webp', tier: 'C', variantsId: 'hellshammer', attack: 50, defense: 25, stamina: 25 },
    { id: 'hellsscythe', name: 'HellsScythe', type: 'blade', bey_type: 'balance', image: 'images/blades/HellsScythe.webp', tier: 'B', variantsId: 'hellsscythe', attack: 30, defense: 30, stamina: 35 },
    { id: 'hornet', name: 'Hornet', type: 'blade', bey_type: 'attack', image: 'images/blades/Hornet.webp', tier: 'D' },
    { id: 'hoverwyvern', name: 'Hover Wyvern', type: 'blade', bey_type: 'stamina', image: 'images/blades/HoverWyvern.webp', tier: 'A', variantsId: 'hoverwyvern', attack: 15, defense: 25, stamina: 60 },
    { id: 'hunt', name: 'Hunt', type: 'blade', bey_type: 'stamina', image: 'images/blades/Hunt.webp', tier: 'C' }, // Tier placeholder
    { id: 'impactdrake', name: 'ImpactDrake', type: 'blade', bey_type: 'attack', image: 'images/blades/ImpactDrake.webp', tier: 'B', variantsId: 'impactdrake', attack: 60, defense: 25, stamina: 15 },
    { id: 'knightlance', name: 'KnightLance', type: 'blade', bey_type: 'defense', image: 'images/blades/KnightLance.webp', tier: 'C', variantsId: 'knightlance', attack: 25, defense: 60, stamina: 15 }, // Bey type corrigido
    { id: 'knightmail', name: 'KnightMail', type: 'blade', bey_type: 'defense', image: 'images/blades/KnightMail.webp', tier: 'A', variantsId: 'knightmail', attack: 10, defense: 75, stamina: 15 },
    { id: 'knightshield', name: 'KnightShield', type: 'blade', bey_type: 'defense', image: 'images/blades/KnightShield.webp', tier: 'B', variantsId: 'knightshield', attack: 20, defense: 55, stamina: 25 },
    { id: 'kraken', name: 'Kraken', type: 'blade', bey_type: 'stamina', image: 'images/blades/Kraken.webp', tier: 'D' },
    { id: 'leonclaw', name: 'LeonClaw', type: 'blade', bey_type: 'defense', image: 'images/blades/LeonClaw.webp', tier: 'C', variantsId: 'leonclaw', attack: 40, defense: 24, stamina: 20 },
    { id: 'leoncrest', name: 'LeonCrest', type: 'blade', bey_type: 'defense', image: 'images/blades/LeonCrest.webp', tier: 'C', variantsId: 'leoncrest', attack: 15, defense: 70, stamina: 15 },
    { id: 'lightningl-drago', name: 'Lightning L-Drago', type: 'blade', bey_type: 'attack', image: 'images/blades/LightningL-Drago.webp', tier: 'C', variantsId: 'lightningl-drago', attack: 55, defense: 25, stamina: 20 },
    { id: 'mammothtusk', name: 'Mammoth Tusk', type: 'blade', bey_type: 'balance', image: 'images/blades/MammothTusk.webp', tier: 'D', variantsId: 'mammothtusk', attack: 40, defense: 40, stamina: 20 },
    { id: 'might', name: 'Might', type: 'blade', bey_type: 'balance', image: 'images/blades/Might.webp', tier: 'C' }, // Tier placeholder
    { id: 'moffgideon', name: 'MoffGideon', type: 'blade', bey_type: 'defense', image: 'images/blades/MoffGideon.webp', tier: 'D', variantsId: 'moffgideon' },
    { id: 'mosasaurus', name: 'Mosasaurus', type: 'blade', bey_type: 'attack', image: 'images/blades/Mosasaurus.webp', tier: 'D', variantsId: 'mosasaurus' },
    { id: 'optimusprimal', name: 'Optimus Primal', type: 'blade', bey_type: 'attack', image: 'images/blades/OptimusPrimal.webp', tier: 'C', variantsId: 'optimusprimal' },
    { id: 'optimusprime', name: 'Optimus Prime', type: 'blade', bey_type: 'balance', image: 'images/blades/OptimusPrime.webp', tier: 'D', variantsId: 'optimusprime' },
    { id: 'phoenixfeather', name: 'Phoenix Feather', type: 'blade', bey_type: 'stamina', image: 'images/blades/PhoenixFeather.webp', tier: 'D', variantsId: 'phoenixfeather', attack: 50, defense: 20, stamina: 30 },
    { id: 'phoenixrudder', name: 'Phoenix Rudder', type: 'blade', bey_type: 'defense', image: 'images/blades/PhoenixRudder.webp', tier: 'C', variantsId: 'phoenixrudder', attack: 10, defense: 35, stamina: 55 },
    { id: 'phoenixwing', name: 'Phoenix Wing', type: 'blade', bey_type: 'stamina', image: 'images/blades/PhoenixWing.webp', tier: 'S', variantsId: 'phoenixwing', attack: 65, defense: 30, stamina: 20 },
    { id: 'pteraswing', name: 'PteraSwing', type: 'blade', bey_type: 'defense', image: 'images/blades/PteraSwing.webp', tier: 'D', attack: 15, defense: 60, stamina: 25 },
    { id: 'quetzalcoatlus', name: 'Quetzal coatlus', type: 'blade', bey_type: 'defense', image: 'images/blades/Quetzalcoatlus.webp', tier: 'D', variantsId: 'quetzalcoatlus' },
    { id: 'reaper', name: 'Reaper', type: 'blade', bey_type: 'attack', image: 'images/blades/Reaper.webp', tier: 'S' }, // Tier atualizado
    { id: 'rhinohorn', name: 'RhinoHorn', type: 'blade', bey_type: 'defense', image: 'images/blades/RhinoHorn.webp', tier: 'D', variantsId: 'rhinohorn', attack: 20, defense: 50, stamina: 30 },
    { id: 'rockleone', name: 'RockLeone', type: 'blade', bey_type: 'defense', image: 'images/blades/RockLeone.webp', tier: 'D', variantsId: 'rockleone' },
    { id: 'samuraicalibur', name: 'Samurai Calibur', type: 'blade', bey_type: 'balance', image: 'images/blades/SamuraiCalibur.webp', tier: 'C', variantsId: 'samuraicalibur' },
    { id: 'samuraisaber', name: 'Samurai Saber', type: 'blade', bey_type: 'attack', image: 'images/blades/SamuraiSaber.webp', tier: 'B', variantsId: 'samuraisaber', attack: 70, defense: 15, stamina: 15 },
    { id: 'samuraisteel', name: 'Samurai Steel', type: 'blade', bey_type: 'balance', image: 'images/blades/SamuraiSteel.webp', tier: 'D' },
    { id: 'scorpiospear', name: 'Scorpio Spear', type: 'blade', bey_type: 'attack', image: 'images/blades/ScorpioSpear.webp', tier: 'B', variantsId: 'scorpiospear', attack: 65, defense: 20, stamina: 15 },
    { id: 'sharkedge', name: 'SharkEdge', type: 'blade', bey_type: 'attack', image: 'images/blades/SharkEdge.webp', tier: 'B', variantsId: 'sharkedge', attack: 60, defense: 25, stamina: 15 },
    { id: 'sharkscale', name: 'SharkScale', type: 'blade', bey_type: 'attack', image: 'images/blades/SharkScale.webp', tier: 'S', variantsId: 'sharkscale', attack: 75, defense: 15, stamina: 10 },
    { id: 'shelterdrake', name: 'ShelterDrake', type: 'blade', bey_type: 'defense', image: 'images/blades/ShelterDrake.webp', tier: 'C', variantsId: 'shelterdrake', attack: 20, defense: 60, stamina: 20 },
    { id: 'shinobiknife', name: 'ShinobiKnife', type: 'blade', bey_type: 'defense', image: 'images/blades/ShinobiKnife.webp', tier: 'D', variantsId: 'shinobiknife' },
    { id: 'shinobishadow', name: 'Shinobi Shadow', type: 'blade', bey_type: 'defense', image: 'images/blades/ShinobiShadow.webp', tier: 'D', variantsId: 'shinobishadow', attack: 10, defense: 70, stamina: 20 }, // Bey type corrigido
    { id: 'silverwolf', name: 'SilverWolf', type: 'blade', bey_type: 'balance', image: 'images/blades/SilverWolf.webp', tier: 'S', variantsId: 'silverwolf', attack: 15, defense: 30, stamina: 65 },
    { id: 'spider-man', name: 'Spider-Man', type: 'blade', bey_type: 'attack', image: 'images/blades/Spider-Man.webp', tier: 'D', variantsId: 'spider-man' },
    { id: 'sphinx-cowl', name: 'SphinxCowl', type: 'blade', bey_type: 'defense', image: 'images/blades/SphinxCowl.webp', tier: 'D', variantsId: 'sphinx-cowl', attack: 35, defense: 55, stamina: 10 },
    { id: 'spinosaurus', name: 'Spinosaurus', type: 'blade', bey_type: 'attack', image: 'images/blades/Spinosaurus.webp', tier: 'D', variantsId: 'spinosaurus' },
    { id: 'stormpegasis', name: 'Storm Pegasis', type: 'blade', bey_type: 'attack', image: 'images/blades/StormPegasis.webp', tier: 'D', variantsId: 'stormpegasis' },
    { id: 't.rex', name: 'T.Rex', type: 'blade', bey_type: 'attack', image: 'images/blades/T.Rex.webp', tier: 'D', variantsId: 't.rex' },
    { id: 'tacklegoat', name: 'TackleGoat', type: 'blade', bey_type: 'defense', image: 'images/blades/TackleGoat.webp', tier: 'D', variantsId: 'tacklegoat', attack: 30, defense: 50, stamina: 20 },
    { id: 'thanos', name: 'Thanos', type: 'blade', bey_type: 'balance', image: 'images/blades/Thanos.webp', tier: 'D', variantsId: 'thanos' },
    { id: 'tricerapress', name: 'TriceraPress', type: 'blade', bey_type: 'defense', image: 'images/blades/TriceraPress.webp', tier: 'C', variantsId: 'tricerapress' },
    { id: 'tyrannobeat', name: 'TyrannoBeat', type: 'blade', bey_type: 'attack', image: 'images/blades/TyrannoBeat.webp', tier: 'A', variantsId: 'tyrannobeat', attack: 65, defense: 30, stamina: 5 },
    { id: 'tyrannoroar', name: 'TyrannoRoar', type: 'blade', bey_type: 'attack', image: 'images/blades/TyrannoRoar.webp', tier: 'B', variantsId: 'tyrannoroar', attack: 60, defense: 20, stamina: 20 },
    { id: 'unicornsting', name: 'Unicorn Sting', type: 'blade', bey_type: 'balance', image: 'images/blades/UnicornSting.webp', tier: 'B', variantsId: 'unicornsting', attack: 35, defense: 35, stamina: 30 },
    { id: 'venom', name: 'Venom', type: 'blade', bey_type: 'defense', image: 'images/blades/Venom.webp', tier: 'C', variantsId: 'venom' },
    { id: 'victoryvalkyrie', name: 'Victory Valkyrie', type: 'blade', bey_type: 'attack', image: 'images/blades/VictoryValkyrie.webp', tier: 'D', variantsId: 'victoryvalkyrie' },
    { id: 'vipertail', name: 'ViperTail', type: 'blade', bey_type: 'stamina', image: 'images/blades/ViperTail.webp', tier: 'C', variantsId: 'vipertail', attack: 30, defense: 20, stamina: 50 }, // Bey type corrigido
    { id: 'weisstiger', name: 'WeissTiger', type: 'blade', bey_type: 'balance', image: 'images/blades/WeissTiger.webp', tier: 'C', variantsId: 'weisstiger', attack: 45, defense: 30, stamina: 25 }, // Bey type corrigido
    { id: 'whalewave', name: 'WhaleWave', type: 'blade', bey_type: 'balance', image: 'images/blades/WhaleWave.webp', tier: 'B', variantsId: 'whalewave', attack: 45, defense: 35, stamina: 20 }, // Bey type corrigido
    { id: 'wizardarrow', name: 'WizardArrow', type: 'blade', bey_type: 'stamina', image: 'images/blades/WizardArrow.webp', tier: 'C', variantsId: 'wizardarrow', attack: 15, defense: 30, stamina: 55 },
    { id: 'wizardrod', name: 'WizardRod', type: 'blade', bey_type: 'stamina', image: 'images/blades/WizardRod.webp', tier: 'S', variantsId: 'wizardrod', attack: 15, defense: 25, stamina: 60 },
    { id: 'wyverngale', name: 'WyvernGale', type: 'blade', bey_type: 'stamina', image: 'images/blades/WyvernGale.webp', tier: 'D', variantsId: 'wyverngale', attack: 10, defense: 40, stamina: 50 },
    { id: 'xenoxcalibur', name: 'Xeno Xcalibur', type: 'blade', bey_type: 'attack', image: 'images/blades/XenoXcalibur.webp', tier: 'D', variantsId: 'xenoxcalibur' },
    { id: 'yellkong', name: 'YellKong', type: 'blade', bey_type: 'defense', image: 'images/blades/YellKong.webp', tier: 'D', variantsId: 'yellkong', attack: 30, defense: 50, stamina: 20 },

    // Ratchets
    { id: '0-60', name: '0-60', type: 'ratchet', image: 'images/ratchets/0-60.webp', tier: 'B', attack: 0, defense: 0, stamina: 0, height: 60 },
    { id: '0-70', name: '0-70', type: 'ratchet', image: 'images/ratchets/0-70.webp', tier: 'B', attack: 14, defense: 10, stamina: 6, height: 70 },
    { id: '0-80', name: '0-80', type: 'ratchet', image: 'images/ratchets/0-80.webp', tier: 'B', attack: 14, defense: 9, stamina: 7, height: 80 },
    { id: '1-60', name: '1-60', type: 'ratchet', image: 'images/ratchets/1-60.webp', tier: 'S', attack: 17, defense: 9, stamina: 4, height: 60 },
    { id: '1-70', name: '1-70', type: 'ratchet', image: 'images/ratchets/1-70.webp', tier: 'A', attack: 17, defense: 8, stamina: 5, height: 70 },
    { id: '1-80', name: '1-80', type: 'ratchet', image: 'images/ratchets/1-80.webp', tier: 'A', attack: 17, defense: 4, stamina: 9, height: 80 },
    { id: '2-60', name: '2-60', type: 'ratchet', image: 'images/ratchets/2-60.webp', tier: 'B', attack: 16, defense: 8, stamina: 6, height: 60 },
    { id: '2-70', name: '2-70', type: 'ratchet', image: 'images/ratchets/2-70.webp', tier: 'C', attack: 16, defense: 7, stamina: 7, height: 70 },
    { id: '2-80', name: '2-80', type: 'ratchet', image: 'images/ratchets/2-80.webp', tier: 'D', attack: 10, defense: 11, stamina: 9, height: 80 },
    { id: '3-60', name: '3-60', type: 'ratchet', image: 'images/ratchets/3-60.webp', tier: 'S', attack: 15, defense: 9, stamina: 6, height: 60 },
    { id: '3-70', name: '3-70', type: 'ratchet', image: 'images/ratchets/3-70.webp', tier: 'A', attack: 15, defense: 8, stamina: 7, height: 70 },
    { id: '3-80', name: '3-80', type: 'ratchet', image: 'images/ratchets/3-80.webp', tier: 'A', attack: 15, defense: 7, stamina: 8, height: 80 },
    { id: '3-85', name: '3-85', type: 'ratchet', image: 'images/ratchets/3-85.webp', tier: 'C', attack: 15, defense: 6, stamina: 9, height: 85 },
    { id: '4-50', name: '4-50', type: 'ratchet', image: 'images/ratchets/4-50.webp', tier: 'A', attack: 11, defense: 13, stamina: 1, height: 50 },
    { id: '4-55', name: '4-55', type: 'ratchet', image: 'images/ratchets/4-55.webp', tier: 'A', attack: 11, defense: 13, stamina: 2, height: 55 },
    { id: '4-60', name: '4-60', type: 'ratchet', image: 'images/ratchets/4-60.webp', tier: 'A', attack: 11, defense: 13, stamina: 6, height: 60 },
    { id: '4-70', name: '4-70', type: 'ratchet', image: 'images/ratchets/4-70.webp', tier: 'C', attack: 11, defense: 12, stamina: 7, height: 70 },
    { id: '4-80', name: '4-80', type: 'ratchet', image: 'images/ratchets/4-80.webp', tier: 'B', attack: 11, defense: 11, stamina: 8, height: 80 },
    { id: '5-60', name: '5-60', type: 'ratchet', image: 'images/ratchets/5-60.webp', tier: 'S', attack: 12, defense: 9, stamina: 9, height: 60 },
    { id: '5-70', name: '5-70', type: 'ratchet', image: 'images/ratchets/5-70.webp', tier: 'A', attack: 12, defense: 8, stamina: 10, height: 70 },
    { id: '5-80', name: '5-80', type: 'ratchet', image: 'images/ratchets/5-80.webp', tier: 'A', attack: 12, defense: 8, stamina: 10, height: 80 },
    { id: '6-60', name: '6-60', type: 'ratchet', image: 'images/ratchets/6-60.webp', tier: 'A', attack: 10, defense: 12, stamina: 8, height: 60 },
    { id: '6-70', name: '6-70', type: 'ratchet', image: 'images/ratchets/6-70.webp', tier: 'D', attack: 10, defense: 11, stamina: 9, height: 70 },
    { id: '6-80', name: '6-80', type: 'ratchet', image: 'images/ratchets/6-80.webp', tier: 'C', attack: 10, defense: 10, stamina: 10, height: 80 },
    { id: '7-60', name: '7-60', type: 'ratchet', image: 'images/ratchets/7-60.webp', tier: 'S', attack: 8, defense: 14, stamina: 8, height: 60 },
    { id: '7-70', name: '7-70', type: 'ratchet', image: 'images/ratchets/7-70.webp', tier: 'A', attack: 8, defense: 13, stamina: 9, height: 70 },
    { id: '7-80', name: '7-80', type: 'ratchet', image: 'images/ratchets/7-80.webp', tier: 'C', attack: 8, defense: 12, stamina: 10, height: 80 },
    { id: '9-60', name: '9-60', type: 'ratchet', image: 'images/ratchets/9-60.webp', tier: 'S', attack: 13, defense: 10, stamina: 7, height: 60 },
    { id: '9-65', name: '9-65', type: 'ratchet', image: 'images/ratchets/9-65.webp', tier: 'C', attack: 0, defense: 0, stamina: 0, height: 65 }, // Tier placeholder
    { id: '9-70', name: '9-70', type: 'ratchet', image: 'images/ratchets/9-70.webp', tier: 'A', attack: 13, defense: 10, stamina: 7, height: 70 },
    { id: '9-80', name: '9-80', type: 'ratchet', image: 'images/ratchets/9-80.webp', tier: 'A', attack: 13, defense: 10, stamina: 7, height: 80 },
    { id: 'm-85', name: 'M-85', type: 'ratchet', image: 'images/ratchets/M-85.webp', tier: 'C', attack: 14, defense: 14, stamina: 2, height: 85 },
    { id: 'm3-85', name: 'M3-85', type: 'ratchet', image: 'images/ratchets/M3-85.webp', tier: 'C', attack: 0, defense: 0, stamina: 0, height: 85 }, // Tier placeholder
    { id: 'w1-60', name: 'W1-60', type: 'ratchet', image: 'images/ratchets/W1-60.webp', tier: 'C', attack: 0, defense: 0, stamina: 0, height: 60 }, // Tier placeholder
    { id: 'w5-80', name: 'W5-80', type: 'ratchet', image: 'images/ratchets/W5-80.webp', tier: 'C', attack: 0, defense: 0, stamina: 0, height: 80 }, // Tier placeholder
	// Ratchets (Continuação)
    { id: 'w5-80', name: 'W5-80', type: 'ratchet', image: 'images/ratchets/W5-80.webp', tier: 'C', attack: 0, defense: 0, stamina: 0, height: 80 }, // Tier placeholder

    // Bits
    { id: 'accel', name: 'Accel', type: 'bit', bey_type: 'attack', image: 'images/bits/Accel.webp', tier: 'B', attack: 40, defense: 10, stamina: 10, dash: 10, burst_resistance: 80 },
    { id: 'acceltrans', name: 'AccelTrans', type: 'bit', bey_type: 'attack', image: 'images/bits/AccelTrans.webp', tier: 'B', attack: 0, defense: 0, stamina: 0, dash: 0, burst_resistance: 0 }, // Tier atualizado
    { id: 'ball', name: 'Ball', type: 'bit', bey_type: 'stamina', image: 'images/bits/Ball.webp', tier: 'S', attack: 15, defense: 25, stamina: 50, dash: 10, burst_resistance: 30 },
    { id: 'bearing', name: 'Bearing', type: 'bit', bey_type: 'stamina', image: 'images/bits/Bearing.webp', tier: 'A', attack: 0, defense: 0, stamina: 0, dash: 0, burst_resistance: 0 }, // Tier atualizado (Especulativo)
    { id: 'boundspike', name: 'BoundSpike', type: 'bit', bey_type: 'defense', image: 'images/bits/BoundSpike.webp', tier: 'B', attack: 10, defense: 50, stamina: 30, dash: 10, burst_resistance: 30 },
    { id: 'cyclone', name: 'Cyclone', type: 'bit', bey_type: 'attack', image: 'images/bits/Cyclone.webp', tier: 'B', attack: 40, defense: 5, stamina: 10, dash: 45, burst_resistance: 80 },
    { id: 'diskball', name: 'DiskBall', type: 'bit', bey_type: 'stamina', image: 'images/bits/DiskBall.webp', tier: 'C', attack: 15, defense: 20, stamina: 55, dash: 10, burst_resistance: 30 },
    { id: 'dot', name: 'Dot', type: 'bit', bey_type: 'defense', image: 'images/bits/Dot.webp', tier: 'B', attack: 10, defense: 55, stamina: 25, dash: 10, burst_resistance: 30 },
    { id: 'elevate', name: 'Elevate', type: 'bit', bey_type: 'balance', image: 'images/bits/Elevate.webp', tier: 'S', attack: 30, defense: 15, stamina: 20, dash: 35, burst_resistance: 30 }, // Bey type corrigido
    { id: 'flat', name: 'Flat', type: 'bit', bey_type: 'attack', image: 'images/bits/Flat.webp', tier: 'A', attack: 40, defense: 15, stamina: 10, dash: 35, burst_resistance: 80 },
    { id: 'freeball', name: 'FreeBall', type: 'bit', bey_type: 'stamina', image: 'images/bits/FreeBall.webp', tier: 'A', attack: 10, defense: 25, stamina: 60, dash: 5, burst_resistance: 30 },
    { id: 'gearball', name: 'GearBall', type: 'bit', bey_type: 'stamina', image: 'images/bits/GearBall.webp', tier: 'B', attack: 20, defense: 20, stamina: 45, dash: 15, burst_resistance: 30 },
    { id: 'gearflat', name: 'GearFlat', type: 'bit', bey_type: 'attack', image: 'images/bits/GearFlat.webp', tier: 'B', attack: 50, defense: 5, stamina: 5, dash: 40, burst_resistance: 80 },
    { id: 'gearneedle', name: 'GearNeedle', type: 'bit', bey_type: 'defense', image: 'images/bits/GearNeedle.webp', tier: 'C', attack: 20, defense: 30, stamina: 10, dash: 30, burst_resistance: 30 },
    { id: 'gearpoint', name: 'GearPoint', type: 'bit', bey_type: 'balance', image: 'images/bits/GearPoint.webp', tier: 'B', attack: 30, defense: 25, stamina: 15, dash: 30, burst_resistance: 80 }, // Bey type corrigido
    { id: 'gearrush', name: 'GearRush', type: 'bit', bey_type: 'attack', image: 'images/bits/GearRush.webp', tier: 'B', attack: 45, defense: 5, stamina: 10, dash: 40, burst_resistance: 80 },
    { id: 'glide', name: 'Glide', type: 'bit', bey_type: 'stamina', image: 'images/bits/Glide.webp', tier: 'C', attack: 20, defense: 10, stamina: 55, dash: 15, burst_resistance: 30 },
    { id: 'hexa', name: 'Hexa', type: 'bit', bey_type: 'balance', image: 'images/bits/Hexa.webp', tier: 'S', attack: 30, defense: 35, stamina: 20, dash: 15, burst_resistance: 80 },
    { id: 'highneedle', name: 'HighNeedle', type: 'bit', bey_type: 'defense', image: 'images/bits/HighNeedle.webp', tier: 'B', attack: 15, defense: 55, stamina: 20, dash: 10, burst_resistance: 30 },
    { id: 'hightaper', name: 'HighTaper', type: 'bit', bey_type: 'balance', image: 'images/bits/HighTaper.webp', tier: 'B', attack: 30, defense: 25, stamina: 20, dash: 25, burst_resistance: 80 },
    { id: 'hop', name: 'HOp', type: 'bit', bey_type: 'balance', image: 'images/bits/HOp.webp', tier: 'C', attack: 0, defense: 0, stamina: 0, dash: 0, burst_resistance: 0 }, // Tier placeholder
    { id: 'kick', name: 'Kick', type: 'bit', bey_type: 'balance', image: 'images/bits/Kick.webp', tier: 'S', attack: 30, defense: 30, stamina: 20, dash: 20, burst_resistance: 80 },
    { id: 'level', name: 'Level', type: 'bit', bey_type: 'balance', image: 'images/bits/Level.webp', tier: 'S', attack: 35, defense: 35, stamina: 15, dash: 15, burst_resistance: 80 },
    { id: 'lowflat', name: 'LowFlat', type: 'bit', bey_type: 'attack', image: 'images/bits/LowFlat.webp', tier: 'A', attack: 45, defense: 5, stamina: 10, dash: 40, burst_resistance: 80 },
    { id: 'loworb', name: 'LowOrb', type: 'bit', bey_type: 'stamina', image: 'images/bits/LowOrb.webp', tier: 'A', attack: 10, defense: 35, stamina: 45, dash: 10, burst_resistance: 30 },
    { id: 'lowrush', name: 'LowRush', type: 'bit', bey_type: 'attack', image: 'images/bits/LowRush.webp', tier: 'S', attack: 45, defense: 5, stamina: 15, dash: 35, burst_resistance: 80 },
    { id: 'merge', name: 'Merge', type: 'bit', bey_type: 'balance', image: 'images/bits/Merge.webp', tier: 'D', attack: 25, defense: 25, stamina: 25, dash: 25, burst_resistance: 80 },
    { id: 'metalneedle', name: 'MetalNeedle', type: 'bit', bey_type: 'defense', image: 'images/bits/MetalNeedle.webp', tier: 'D', attack: 8, defense: 57, stamina: 30, dash: 5, burst_resistance: 30 },
    { id: 'needle', name: 'Needle', type: 'bit', bey_type: 'defense', image: 'images/bits/Needle.webp', tier: 'B', attack: 10, defense: 50, stamina: 30, dash: 10, burst_resistance: 30 },
    { id: 'orb', name: 'Orb', type: 'bit', bey_type: 'stamina', image: 'images/bits/Orb.webp', tier: 'A', attack: 10, defense: 30, stamina: 50, dash: 10, burst_resistance: 30 },
    { id: 'point', name: 'Point', type: 'bit', bey_type: 'balance', image: 'images/bits/Point.webp', tier: 'A', attack: 25, defense: 25, stamina: 25, dash: 25, burst_resistance: 80 }, // Bey type corrigido
    { id: 'quake', name: 'Quake', type: 'bit', bey_type: 'attack', image: 'images/bits/Quake.webp', tier: 'C', attack: 55, defense: 15, stamina: 5, dash: 25, burst_resistance: 80 },
    { id: 'rubberaccel', name: 'RubberAccel', type: 'bit', bey_type: 'attack', image: 'images/bits/RubberAccel.webp', tier: 'A', attack: 50, defense: 5, stamina: 5, dash: 40, burst_resistance: 80 },
    { id: 'rush', name: 'Rush', type: 'bit', bey_type: 'attack', image: 'images/bits/Rush.webp', tier: 'S', attack: 40, defense: 10, stamina: 20, dash: 30, burst_resistance: 80 },
    { id: 'spike', name: 'Spike', type: 'bit', bey_type: 'defense', image: 'images/bits/Spike.webp', tier: 'C', attack: 10, defense: 45, stamina: 35, dash: 10, burst_resistance: 30 },
    { id: 'taper', name: 'Taper', type: 'bit', bey_type: 'balance', image: 'images/bits/Taper.webp', tier: 'A', attack: 35, defense: 20, stamina: 20, dash: 25, burst_resistance: 80 },
    { id: 'transkick', name: 'TransKick', type: 'bit', bey_type: 'balance', image: 'images/bits/TransKick.webp', tier: 'C', attack: 0, defense: 0, stamina: 0, dash: 0, burst_resistance: 0 }, // Tier atualizado
    { id: 'transpoint', name: 'TransPoint', type: 'bit', bey_type: 'balance', image: 'images/bits/TransPoint.webp', tier: 'C', attack: 30, defense: 20, stamina: 20, dash: 30, burst_resistance: 80 },
    { id: 'underflat', name: 'UnderFlat', type: 'bit', bey_type: 'attack', image: 'images/bits/UnderFlat.webp', tier: 'A', attack: 0, defense: 0, stamina: 0, dash: 0, burst_resistance: 0 }, // Tier atualizado
    { id: 'underneedle', name: 'UnderNeedle', type: 'bit', bey_type: 'defense', image: 'images/bits/UnderNeedle.webp', tier: 'A', attack: 10, defense: 55, stamina: 25, dash: 10, burst_resistance: 30 },
    { id: 'unite', name: 'Unite', type: 'bit', bey_type: 'balance', image: 'images/bits/Unite.webp', tier: 'A', attack: 25, defense: 25, stamina: 30, dash: 25, burst_resistance: 80 },
    { id: 'vortex', name: 'Vortex', type: 'bit', bey_type: 'attack', image: 'images/bits/Vortex.webp', tier: 'C', attack: 40, defense: 10, stamina: 10, dash: 40, burst_resistance: 80 },
    { id: 'wedge', name: 'Wedge', type: 'bit', bey_type: 'defense', image: 'images/bits/Wedge.webp', tier: 'A', attack: 5, defense: 60, stamina: 25, dash: 10, burst_resistance: 30 },
    { id: 'weightball', name: 'WeightBall', type: 'bit', bey_type: 'stamina', image: 'images/bits/WeightBall.webp', tier: 'B', attack: 0, defense: 0, stamina: 0, dash: 0, burst_resistance: 0 }, // Tier atualizado
    { id: 'zap', name: 'Zap', type: 'bit', bey_type: 'balance', image: 'images/bits/Zap.webp', tier: 'B', attack: 30, defense: 30, stamina: 20, dash: 20, burst_resistance: 80 },

    // --- Peças de Chip (CX) ---
    { id: 'lockchip-cerberus', name: 'Cerberus', type: 'lockchip', image: 'images/lockchips/Cerberus.webp', tier: 'C' },
    { id: 'lockchip-dran', name: 'Dran', type: 'lockchip', image: 'images/lockchips/Dran.webp', tier: 'S' },
    { id: 'lockchip-emperor', name: 'Emperor', type: 'lockchip', image: 'images/lockchips/Emperor.webp', tier: 'C' },
    { id: "lockchip-fox", name: "Fox", type: "lockchip", image: "images/lockchips/Fox.webp", tier: "B" },
    { id: "lockchip-hells", name: "Hells", type: "lockchip", image: "images/lockchips/Hells.webp", tier: "S" },
    { id: "lockchip-hornet", name: "Hornet", type: "lockchip", image: "images/lockchips/Hornet.webp", tier: "C" },
    { id: "lockchip-kraken", name: "Kraken", type: "lockchip", image: "images/lockchips/Kraken.webp", tier: "B" },
    { id: "lockchip-leon", name: "Leon", type: "lockchip", image: "images/lockchips/Leon.webp", tier: "S" },
    { id: 'lockchip-pegasus', name: 'Pegasus', type: 'lockchip', image: 'images/lockchips/Pegasus.webp', tier: 'C' },
    { id: "lockchip-perseus", name: "Perseus", type: "lockchip", image: "images/lockchips/Perseus.webp", tier: "A" },
    { id: "lockchip-rhino", name: "Rhino", type: "lockchip", image: "images/lockchips/Rhino.webp", tier: "B" },
    { id: "lockchip-sol", name: "Sol", type: "lockchip", image: "images/lockchips/Sol.webp", tier: "C" },
    { id: "lockchip-stag", name: "Stag", type: "lockchip", image: "images/lockchips/Stag.webp", tier: "B" },
    { id: "lockchip-valkyrie", name: "Valkyrie", type: "lockchip", image: "images/lockchips/Valkyrie.webp", tier: "A" },
    { id: 'lockchip-whale', name: 'Whale', type: 'lockchip', image: 'images/lockchips/Whale.webp', tier: 'C' },
    { id: "lockchip-wizard", name: "Wizard", type: "lockchip", image: "images/lockchips/Wizard.webp", tier: "S" },
    { id: 'lockchip-wolf', name: 'Wolf', type: 'lockchip', image: 'images/lockchips/Wolf.webp', tier: 'C' },

    // --- Main Blades (CX) ---
    { id: "antler", name: "Antler", type: "mainblade", image: "images/mainblades/antler.webp", tier: "B" },
    { id: "mainblade-arc", name: "Arc", type: "mainblade", image: "images/mainblades/Arc.webp", tier: "S" },
    { id: 'mainblade-blast', name: 'Blast', type: 'mainblade', image: 'images/mainblades/Blast.webp', tier: 'A' },
    { id: "mainblade-brave", name: "Brave", type: "mainblade", image: "images/mainblades/Brave.webp", tier: "A" },
    { id: "mainblade-brush", name: "Brush", type: "mainblade", image: "images/mainblades/Brush.webp", tier: "C" },
    { id: "mainblade-dark", name: "Dark", type: "mainblade", image: "images/mainblades/Dark.webp", tier: "A" },
    { id: 'mainblade-eclipse', name: 'Eclipse', type: 'mainblade', image: 'images/mainblades/Eclipse.webp', tier: 'C' },
    { id: "mainblade-fang", name: "Fang", type: "mainblade", image: "images/mainblades/Fang.webp", tier: "S" },
    { id: 'mainblade-flame', name: 'Flame', type: 'mainblade', image: 'images/mainblades/Flame.webp', tier: 'C' },
    { id: "mainblade-fort", name: "Fort", type: "mainblade", image: "images/mainblades/Fort.webp", tier: "B" },
    { id: 'mainblade-hunt', name: 'Hunt', type: 'mainblade', image: 'images/mainblades/Hunt.webp', tier: 'C' },
    { id: 'mainblade-might', name: 'Might', type: 'mainblade', image: 'images/mainblades/Might.webp', tier: 'C' },
    { id: "mainblade-reaper", name: "Reaper", type: "mainblade", image: "images/mainblades/Reaper.webp", tier: "S" },
    { id: "mainblade-volt", name: "Volt", type: "mainblade", image: "images/mainblades/Volt.webp", tier: "A" },
    { id: "mainblade-wriggle", name: "Wriggle", type: "mainblade", image: "images/mainblades/Wriggle.webp", tier: "C" },

    // --- Assist Blades (CX) ---
    { id: 'assistblade-assault', name: 'Assault', type: 'assistblade', image: 'images/assistblades/Assault.webp', tier: 'B' },
    { id: "assistblade-bumper", name: "Bumper", type: "assistblade", image: "images/assistblades/Bumper.webp", tier: "S" },
    { id: "assistblade-charge", name: "Charge", type: "assistblade", image: "images/assistblades/Charge.webp", tier: "B" },
    { id: 'assistblade-dual', name: 'Dual', type: 'assistblade', image: 'images/assistblades/Dual.webp', tier: 'C' },
    { id: 'assistblade-free', name: 'Free', type: 'assistblade', image: 'images/assistblades/Free.webp', tier: 'C' },
    { id: 'assistblade-hop', name: 'Hop', type: 'assistblade', image: 'images/assistblades/Hop.webp', tier: 'C' },
    { id: "assistblade-jaggy", name: "Jaggy", type: "assistblade", image: "images/assistblades/Jaggy.webp", tier: "C" },
    { id: 'assistblade-massive', name: 'Massive', type: 'assistblade', image: 'images/assistblades/Massive.webp', tier: 'C' },
    { id: "assistblade-round", name: "Round", type: "assistblade", image: "images/assistblades/Round.webp", tier: "A" },
    { id: "assistblade-slash", name: "Slash", type: "assistblade", image: "images/assistblades/Slash.webp", tier: "S" },
    { id: "assistblade-turn", name: "Turn", type: "assistblade", image: "images/assistblades/Turn.webp", tier: "S" },
    { id: 'assistblade-wide', name: 'Wide', type: 'assistblade', image: 'images/assistblades/Wide.webp', tier: 'B' }
];

 // --- [ATUALIZADO] Traduções (Com Welcome, Trades, Placar, etc.) ---
 const translations = {
    'pt-br': {
        // Abas
        tab_welcome: "Bem Vindo(a)",
        tab_meta: "META",
        tab_deck_builder: "Deck Builder",
        tab_collection: "Coleção",
        tab_settings: "Configurações",
        tab_score: "Placar",
        tab_guide: "Guia",
        tab_trades: "Trocas",
        // Aba Welcome
        welcome_header: "Bem Vindo(a) ao BeyXTool!",
        welcome_proposal_title: "Proposta do Site",
        welcome_proposal_text_1: "O BeyXTool é uma ferramenta completa (e não oficial) criada para auxiliar jogadores de Beyblade X. A proposta é centralizar todas as informações de peças, gerenciamento de decks, coleção e recursos da comunidade em um único local, acessível e fácil de usar.",
        welcome_proposal_text_2: "Seja você um Blader competitivo montando um deck para um torneio, um colecionador querendo organizar suas peças, ou alguém procurando trocar peças, esta ferramenta foi feita para você.",
        welcome_how_to_title: "Como Usar",
        welcome_how_to_meta: "Acesse planilhas e vídeos da comunidade (como do Anti Wizard Wizard Club) sobre os combos e peças mais fortes do formato atual.",
        welcome_how_to_deck: "Monte seus decks (padrão ou CX), veja os status combinados e exporte sua lista para torneios.",
        welcome_how_to_guide: "Iniciantes podem ver quais produtos (Hasbro ou Takara Tomy) comprar para obter as melhores peças competitivas.",
        welcome_how_to_collection: "Clique duas vezes em uma peça para adicioná-la à sua \"Coleção\". Use o filtro para ver apenas o que você possui. (Isso afeta o Deck Builder).",
        welcome_how_to_score: "Um placar simples para marcar pontos durante suas batalhas.",
        welcome_how_to_trades: "Clique duas vezes para marcar peças que você está \"Procurando\" (azul) ou \"Passando\" (vermelho). Use o botão \"Exportar Imagem\" para gerar um print e compartilhar.",
        welcome_how_to_settings: "Mude o idioma e, o mais importante, EXPORTE seus dados. Salve seu arquivo (.bx) regularmente como backup!",
        welcome_contact_title: "Contato",
        welcome_contact_text: "Encontrou um bug? Tem sugestões de melhoria? Quer relatar uma informação incorreta? Entre em contato pelo e-mail:",
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
        guide_spoiler_hasbro: "Produtos Hasbro",
        guide_spoiler_takara: "Produtos Takara Tomy",
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
        add_deck_button_title: "+",
        delete_deck_button_title: "-",
        deck_placeholder_primeira: "Primeira Peça",
        deck_placeholder_selecione: "Selecione",
        deck_placeholder_ratchet: "Ratchet",
        deck_placeholder_bit: "Bit",
        deck_placeholder_mainblade: "Main Blade",
        deck_placeholder_assistblade: "Assist Blade",
        clear_deck_button: "Limpar Beyblades",
        export_deck_list_button: "Exportar Deck List",
        // Stats do Gráfico
        chart_label_attack: "Ataque",
        chart_label_defense: "Defesa",
        chart_label_stamina: "Stamina",
        chart_label_dash: "Dash",
        chart_label_burst: "Burst",
        chart_label_height: "Altura",
        // Aba Placar
        player_1_default: "Jogador 1",
        player_2_default: "Jogador 2",
        score_spin_finish: "Spin Finish",
        score_burst_finish: "Burst Finish",
        score_over_finish: "Over Finish",
        score_extreme_finish: "EXTREME FINISH",
        score_toggle_layout_button: "Layout Vert./Horiz.",
        score_reset_button: "Reiniciar Placar",
         // Aba Configurações
         settings_description: "Salve sua coleção e decks em um arquivo (.bx) para backup ou para transferir para outro dispositivo.",
         language_settings_title: "Idioma / Language",
         export_button: "Exportar Dados (.bx)",
         import_button: "Importar Dados (.bx)",
         // Aba Trades
         trades_header: "Lista de Trocas",
         trades_instructions_dblclick: "Clique duas vezes em uma peça para marcar: Branco (Nada) -> Azul (Procurando) -> Vermelho (Passando) -> Branco.",
         trades_copy_button_text: "Copiar Lista (Texto)",
         trades_export_button: "Exportar Imagem",
         trades_copy_success: "Lista de trocas copiada!",
         trades_copy_fail: "Falha ao copiar lista.",
         trades_export_generating: "Gerando imagem... por favor, aguarde.",
         trades_export_error: "Erro ao gerar imagem. Tente novamente.",
         trades_list_header_want: "== PROCURANDO ==",
         trades_list_header_have: "== PASSANDO ==",
         trades_list_section_blades: "-- Blades --",
         trades_list_section_ratchets: "-- Ratchets --",
         trades_list_section_bits: "-- Bits --",
         trades_list_section_lockchips: "-- Lock Chips --",
         trades_list_section_mainblades: "-- Main Blades --",
         trades_list_section_assistblades: "-- Assist Blades --",
         trades_list_empty: "Sua lista de trocas está vazia.",
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
        tab_welcome: "Welcome",
        tab_meta: "META",
        tab_deck_builder: "Deck Builder",
        tab_collection: "Collection",
        tab_settings: "Settings",
        tab_score: "Score",
        tab_guide: "Guide",
        tab_trades: "Trades",
         // Aba Welcome (TRADUÇÕES EM INGLÊS CORRIGIDAS)
        welcome_header: "Welcome to BeyXTool!",
        welcome_proposal_title: "Site Purpose",
        welcome_proposal_text_1: "BeyXTool is a complete (and unofficial) tool created to assist Beyblade X players. The goal is to centralize all part information, deck management, collection tracking, and community resources in one accessible and easy-to-use location.",
        welcome_proposal_text_2: "Whether you're a competitive Blader building a tournament deck, a collector organizing your parts, or someone looking to trade, this tool was made for you.",
        welcome_how_to_title: "How to Use",
        welcome_how_to_meta: "Access community spreadsheets and videos (like from Anti Wizard Wizard Club) on the strongest combos and parts in the current meta.",
        welcome_how_to_deck: "Build your decks (standard or CX), see combined stats, and export your list for tournaments.",
        welcome_how_to_guide: "Beginners can see which products (Hasbro or Takara Tomy) to buy to get the best competitive parts.",
        welcome_how_to_collection: "Double-click a part to add it to your \"Collection\". Use the filter to see only what you own. (This affects the Deck Builder).",
        welcome_how_to_score: "A simple scoreboard to keep track of points during your battles.",
        welcome_how_to_trades: "Double-click to mark parts you are \"Wanting\" (blue) or \"Selling/Trading\" (red). Use the \"Export Image\" button to generate a printout to share.",
        welcome_how_to_settings: "Change the language and, most importantly, EXPORT your data. Save your file (.bx) regularly as a backup!",
        welcome_contact_title: "Contact",
        welcome_contact_text: "Found a bug? Have suggestions for improvement? Want to report incorrect info? Contact us via email:",
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
         guide_spoiler_hasbro: "Hasbro Products",
         guide_spoiler_takara: "Takara Tomy Products",
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
         add_deck_button_title: "+",
         delete_deck_button_title: "-",
         deck_placeholder_primeira: "First Part",
         deck_placeholder_selecione: "Select",
         deck_placeholder_ratchet: "Ratchet",
         deck_placeholder_bit: "Bit",
         deck_placeholder_mainblade: "Main Blade",
         deck_placeholder_assistblade: "Assist Blade",
         clear_deck_button: "Clear Beyblades",
         export_deck_list_button: "Export Deck List",
         // Chart Stats
         chart_label_attack: "Attack",
         chart_label_defense: "Defense",
         chart_label_stamina: "Stamina",
         chart_label_dash: "Dash",
         chart_label_burst: "Burst",
         chart_label_height: "Height",
         // Score Tab
         player_1_default: "Player 1",
         player_2_default: "Player 2",
         score_spin_finish: "Spin Finish",
         score_burst_finish: "Burst Finish",
         score_over_finish: "Over Finish",
         score_extreme_finish: "EXTREME FINISH",
         score_toggle_layout_button: "Toggle Layout",
         score_reset_button: "Reset Scoreboard",
         // Settings Tab
         settings_description: "Save your collection and decks to a (.bx) file for backup or transfer to another device.",
         language_settings_title: "Idioma / Language",
         export_button: "Export Data (.bx)",
         import_button: "Import Data (.bx)",
         // Trades Tab
         trades_header: "Trade List",
         trades_instructions_dblclick: "Double-click a part to mark: White (None) -> Blue (Want) -> Red (Selling/Trading) -> White.",
         trades_copy_button_text: "Copy List (Text)",
         trades_export_button: "Export Image",
         trades_copy_success: "Trade list copied!",
         trades_copy_fail: "Failed to copy list.",
         trades_export_generating: "Generating image... please wait.",
         trades_export_error: "Error generating image. Please try again.",
         trades_list_header_want: "== WANT ==",
         trades_list_header_have: "== SELLING/TRADING ==",
         trades_list_section_blades: "-- Blades --",
         trades_list_section_ratchets: "-- Ratchets --",
         trades_list_section_bits: "-- Bits --",
         trades_list_section_lockchips: "-- Lock Chips --",
         trades_list_section_mainblades: "-- Main Blades --",
         trades_list_section_assistblades: "-- Assist Blades --",
         trades_list_empty: "Your trade list is empty.",
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
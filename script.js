document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DADOS DAS PEÇAS E COMBOS ---
    const ALL_PARTS = [
        // Blades (Variações)
        { id: 'aerpegasus', name: 'AeroPegasus', type: 'blade', image: 'images/blades/AeroPegasus.png', score: 26.2 },
        { id: 'cobaltdragoon', name: 'CobaltDragoon', type: 'blade', image: 'images/blades/CobaltDragoon.png', score: 279 },
        { id: 'dranbuster', name: 'DranBuster', type: 'blade', image: 'images/blades/DranBuster.png', score: 16.5 },
        { id: 'drandagger', name: 'DranDagger', type: 'blade', image: 'images/blades/DranDagger.png', score: 4.5 },
        { id: 'dransword', name: 'DranSword', type: 'blade', image: 'images/blades/DranSword.png', score: 6, variants: ['Stock', 'Red', 'Blue', 'Gold'] },
        { id: 'hellschain', name: 'HellsChain', type: 'blade', image: 'images/blades/HellsChain.png', score: 6.5 },
        { id: 'hellsscythe', name: 'HellsScythe', type: 'blade', image: 'images/blades/HellsScythe.png', score: 6.5, variants: ['Stock', 'Black', 'Green', 'Purple'] },
        { id: 'hoverwyvern', name: 'HoverWyvern', type: 'blade', image: 'images/blades/HoverWyvern.png', score: 13.5 },
        { id: 'knightmail', name: 'KnightMail', type: 'blade', image: 'images/blades/KnightMail.png', score: 11.5 },
        { id: 'knightshield', name: 'KnightShield', type: 'blade', image: 'images/blades/KnightShield.png', score: 5 },
        { id: 'leonclaw', name: 'LeonClaw', type: 'blade', image: 'images/blades/LeonClaw.png', score: 4 },
        { id: 'phoenixwing', name: 'PhoenixWing', type: 'blade', image: 'images/blades/PhoenixWing.png', score: 71 },
        { id: 'sharkscale', name: 'SharkScale', type: 'blade', image: 'images/blades/SharkScale.png', score: 26.5 },
        { id: 'silverwolf', name: 'SilverWolf', type: 'blade', image: 'images/blades/SilverWolf.png', score: 28 },
        { id: 'tyrannobeat', name: 'TyrannoBeat', type: 'blade', image: 'images/blades/TyrannoBeat.png', score: 21 },
        { id: 'unicornsting', name: 'UnicornSting', type: 'blade', image: 'images/blades/UnicornSting.png', score: 8.5 },
        { id: 'wizardarrow', name: 'WizardArrow', type: 'blade', image: 'images/blades/WizardArrow.png', score: 3.5 },
        { id: 'wizardrod', name: 'WizardRod', type: 'blade', image: 'images/blades/WizardRod.png', score: 262.5 },
        { id: 'arc', name: 'Arc', type: 'blade', image: 'images/blades/Arc.png', score: 3.5 },
        { id: 'bearscratch', name: 'BearScratch', type: 'blade', image: 'images/blades/BearScratch.png', score: 2 },
        { id: 'blackshell', name: 'BlackShell', type: 'blade', image: 'images/blades/BlackShell.png', score: 4 },
        { id: 'blast', name: 'Blast', type: 'blade', image: 'images/blades/Blast.png', score: 10 },
        { id: 'bolt', name: 'Bolt', type: 'blade', image: 'images/blades/Bolt.png', score: 4.5 },
        { id: 'brave', name: 'Brave', type: 'blade', image: 'images/blades/Brave.png', score: 4.5 },
        { id: 'brush', name: 'Brush', type: 'blade', image: 'images/blades/Brush.png', score: 2 },
        { id: 'cobaltdrake', name: 'CobaltDrake', type: 'blade', image: 'images/blades/CobaltDrake.png', score: 3.5 },
        { id: 'crimsongaruda', name: 'CrimsonGaruda', type: 'blade', image: 'images/blades/CrimsonGaruda.png', score: 4.5 },
        { id: 'croccrunch', name: 'CrocCrunch', type: 'blade', image: 'images/blades/CrocCrunch.png', score: 2 },
        { id: 'dark', name: 'Dark', type: 'blade', image: 'images/blades/Dark.png', score: 2.5 },
        { id: 'darthvader', name: 'DarthVader', type: 'blade', image: 'images/blades/DarthVader.png', score: 2.5 },
        { id: 'dracielshield', name: 'DracielShield', type: 'blade', image: 'images/blades/DracielShield.png', score: 1.5 },
        { id: 'dragoonsform', name: 'DragoonStorm', type: 'blade', image: 'images/blades/DragoonStorm.png', score: 1 },
        { id: 'dranzerspiral', name: 'DranzerSpiral', type: 'blade', image: 'images/blades/DranzerSpiral.png', score: 2.5 },
        { id: 'drigerslash', name: 'DrigerSlash', type: 'blade', image: 'images/blades/DrigerSlash.png', score: 1.5 },
        { id: 'eclipse', name: 'Eclipse', type: 'blade', image: 'images/blades/Eclipse.png', score: 2 },
        { id: 'flame', name: 'Flame', type: 'blade', image: 'images/blades/Flame.png', score: 1.5 },
        { id: 'generalgrievous', name: 'GeneralGrievous', type: 'blade', image: 'images/blades/GeneralGrievous.png', score: 1 },
        { id: 'ghostcircle', name: 'GhostCircle', type: 'blade', image: 'images/blades/GhostCircle.png', score: 2 },
        { id: 'gillshark', name: 'GillShark', type: 'blade', image: 'images/blades/GillShark.png', score: 2 },
        { id: 'hellshammer', name: 'HellsHammer', type: 'blade', image: 'images/blades/HellsHammer.png', score: 4.5 },
        { id: 'hornet', name: 'Hornet', type: 'blade', image: 'images/blades/Hornet.png', score: 1 },
        { id: 'impactdrake', name: 'ImpactDrake', type: 'blade', image: 'images/blades/ImpactDrake.png', score: 5.5 },
        { id: 'knightlance', name: 'KnightLance', type: 'blade', image: 'images/blades/KnightLance.png', score: 3.5 },
        { id: 'kraken', name: 'Kraken', type: 'blade', image: 'images/blades/Kraken.png', score: 1 },
        { id: 'leoncrest', name: 'LeonCrest', type: 'blade', image: 'images/blades/LeonCrest.png', score: 2.5 },
        { id: 'lightningl-drago', name: 'LightningL-Drago', type: 'blade', image: 'images/blades/LightningL-Drago.png', score: 3.5 },
        { id: 'mammothtusk', name: 'MammothTusk', type: 'blade', image: 'images/blades/MammothTusk.png', score: 1.5 },
        { id: 'moffgideon', name: 'MoffGideon', type: 'blade', image: 'images/blades/MoffGideon.png', score: 1 },
        { id: 'mosasaurus', name: 'Mosasaurus', type: 'blade', image: 'images/blades/Mosasaurus.png', score: 1 },
        { id: 'optimusprimal', name: 'OptimusPrimal', type: 'blade', image: 'images/blades/OptimusPrimal.png', score: 2 },
        { id: 'optimusprime', name: 'OptimusPrime', type: 'blade', image: 'images/blades/OptimusPrime.png', score: 1 },
        { id: 'phoenixfeather', name: 'PhoenixFeather', type: 'blade', image: 'images/blades/PhoenixFeather.png', score: 1.5 },
        { id: 'phoenixrudder', name: 'PhoenixRudder', type: 'blade', image: 'images/blades/PhoenixRudder.png', score: 2 },
        { id: 'pteraswing', name: 'PteraSwing', type: 'blade', image: 'images/blades/PteraSwing.png', score: 1.5 },
        { id: 'quetzalcoatlus', name: 'Quetzalcoatlus', type: 'blade', image: 'images/blades/Quetzalcoatlus.png', score: 1 },
        { id: 'reaper', name: 'Reaper', type: 'blade', image: 'images/blades/Reaper.png', score: 2.5 },
        { id: 'rhinohorn', name: 'RhinoHorn', type: 'blade', image: 'images/blades/RhinoHorn.png', score: 1.5 },
        { id: 'rockleone', name: 'RockLeone', type: 'blade', image: 'images/blades/RockLeone.png', score: 1.5 },
        { id: 'samuraicalibur', name: 'SamuraiCalibur', type: 'blade', image: 'images/blades/SamuraiCalibur.png', score: 3 },
        { id: 'samuraisaber', name: 'SamuraiSaber', type: 'blade', image: 'images/blades/SamuraiSaber.png', score: 5 },
        { id: 'samuraisteel', name: 'SamuraiSteel', type: 'blade', image: 'images/blades/SamuraiSteel.png', score: 1 },
        { id: 'scorpiospear', name: 'ScorpioSpear', type: 'blade', image: 'images/blades/ScorpioSpear.png', score: 8 },
        { id: 'sharkedge', name: 'SharkEdge', type: 'blade', image: 'images/blades/SharkEdge.png', score: 9.5 },
        { id: 'shelterdrake', name: 'ShelterDrake', type: 'blade', image: 'images/blades/ShelterDrake.png', score: 2 },
        { id: 'shinobiknife', name: 'ShinobiKnife', type: 'blade', image: 'images/blades/ShinobiKnife.png', score: 1 },
        { id: 'shinobishadow', name: 'ShinobiShadow', type: 'blade', image: 'images/blades/ShinobiShadow.png', score: 1.5 },
        { id: 'spider-man', name: 'Spider-Man', type: 'blade', image: 'images/blades/Spider-Man.png', score: 1 },
        { id: 'sphinx-cowl', name: 'SphinxCowl', type: 'blade', image: 'images/blades/SphinxCowl.png', score: 1.5 },
        { id: 'spinosaurus', name: 'Spinosaurus', type: 'blade', image: 'images/blades/Spinosaurus.png', score: 1 },
        { id: 'stormpegasis', name: 'StormPegasis', type: 'blade', image: 'images/blades/StormPegasis.png', score: 1 },
        { id: 't.rex', name: 'T.Rex', type: 'blade', image: 'images/blades/T.Rex.png', score: 1 },
        { id: 'tacklegoat', name: 'TackleGoat', type: 'blade', image: 'images/blades/TackleGoat.png', score: 1 },
        { id: 'thanos', name: 'Thanos', type: 'blade', image: 'images/blades/Thanos.png', score: 1 },
        { id: 'tricerapress', name: 'TriceraPress', type: 'blade', image: 'images/blades/TriceraPress.png', score: 2.5 },
        { id: 'tyrannoroar', name: 'TyrannoRoar', type: 'blade', image: 'images/blades/TyrannoRoar.png', score: 5 },
        { id: 'venom', name: 'Venom', type: 'blade', image: 'images/blades/Venom.png', score: 2 },
        { id: 'victoryvalkyrie', name: 'VictoryValkyrie', type: 'blade', image: 'images/blades/VictoryValkyrie.png', score: 1 },
        { id: 'vipertail', name: 'ViperTail', type: 'blade', image: 'images/blades/ViperTail.png', score: 2.5 },
        { id: 'weisstiger', name: 'WeissTiger', type: 'blade', image: 'images/blades/WeissTiger.png', score: 2 },
        { id: 'whalewave', name: 'WhaleWave', type: 'blade', image: 'images/blades/WhaleWave.png', score: 6 },
        { id: 'wyverngale', name: 'WyvernGale', type: 'blade', image: 'images/blades/WyvernGale.png', score: 1.5 },
        { id: 'xenoxcaliburius', name: 'XenoXcaliburius', type: 'blade', image: 'images/blades/XenoXcaliburius.png', score: 1 },
        { id: 'xenoxcalibur', name: 'XenoXcalibur', type: 'blade', image: 'images/blades/XenoXcalibur.png', score: 1 },
        { id: 'yellkong', name: 'YellKong', type: 'blade', image: 'images/blades/YellKong.png', score: 1.5 },

        // Ratchets
        { id: '0-70', name: '0-70', type: 'ratchet', image: 'images/ratchets/0-70.png', score: 39 }, { id: '0-80', name: '0-80', type: 'ratchet', image: 'images/ratchets/0-80.png', score: 48.5 }, { id: '1-60', name: '1-60', type: 'ratchet', image: 'images/ratchets/1-60.png', score: 3389.15 }, { id: '1-70', name: '1-70', type: 'ratchet', image: 'images/ratchets/1-70.png', score: 409.15 }, { id: '1-80', name: '1-80', type: 'ratchet', image: 'images/ratchets/1-80.png', score: 114 }, { id: '2-60', name: '2-60', type: 'ratchet', image: 'images/ratchets/2-60.png', score: 49.25 }, { id: '2-70', name: '2-70', type: 'ratchet', image: 'images/ratchets/2-70.png', score: 13 }, { id: '2-80', name: '2-80', type: 'ratchet', image: 'images/ratchets/2-80.png', score: 5 }, { id: '3-60', name: '3-60', type: 'ratchet', image: 'images/ratchets/3-60.png', score: 2580.5 }, { id: '3-70', name: '3-70', type: 'ratchet', image: 'images/ratchets/3-70.png', score: 114.15 }, { id: '3-80', name: '3-80', type: 'ratchet', image: 'images/ratchets/3-80.png', score: 88.25 }, { id: '3-85', name: '3-85', type: 'ratchet', image: 'images/ratchets/3-85.png', score: 16 }, { id: '4-50', name: '4-50', type: 'ratchet', image: 'images/ratchets/4-50.png', score: 356 }, { id: '4-55', name: '4-55', type: 'ratchet', image: 'images/ratchets/4-55.png', score: 82.15 }, { id: '4-60', name: '4-60', type: 'ratchet', image: 'images/ratchets/4-60.png', score: 178.5 }, { id: '4-70', name: '4-70', type: 'ratchet', image: 'images/ratchets/4-70.png', score: 22.5 }, { id: '4-80', name: '4-80', type: 'ratchet', image: 'images/ratchets/4-80.png', score: 28.25 }, { id: '5-60', name: '5-60', type: 'ratchet', image: 'images/ratchets/5-60.png', score: 1760.15 }, { id: '5-70', name: '5-70', type: 'ratchet', image: 'images/ratchets/5-70.png', score: 150 }, { id: '5-80', name: '5-80', type: 'ratchet', image: 'images/ratchets/5-80.png', score: 70 }, { id: '6-60', name: '6-60', type: 'ratchet', image: 'images/ratchets/6-60.png', score: 345.25 }, { id: '6-70', name: '6-70', type: 'ratchet', image: 'images/ratchets/6-70.png', score: 5 }, { id: '6-80', name: '6-80', type: 'ratchet', image: 'images/ratchets/6-80.png', score: 22.5 }, { id: '7-60', name: '7-60', type: 'ratchet', image: 'images/ratchets/7-60.png', score: 1174 }, { id: '7-70', name: '7-70', type: 'ratchet', image: 'images/ratchets/7-70.png', score: 228.25 }, { id: '7-80', name: '7-80', type: 'ratchet', image: 'images/ratchets/7-80.png', score: 17.25 }, { id: '9-60', name: '9-60', type: 'ratchet', image: 'images/ratchets/9-60.png', score: 3327.5 }, { id: '9-70', name: '9-70', type: 'ratchet', image: 'images/ratchets/9-70.png', score: 296.5 }, { id: '9-80', name: '9-80', type: 'ratchet', image: 'images/ratchets/9-80.png', score: 94 }, { id: 'm-85', name: 'M-85', type: 'ratchet', image: 'images/ratchets/M-85.png', score: 11 },
        
        // Bits
        { id: 'accel', name: 'Accel', type: 'bit', image: 'images/bits/Accel.png', score: 39 }, { id: 'ball', name: 'Ball', type: 'bit', image: 'images/bits/Ball.png', score: 1298.25 }, { id: 'boundspike', name: 'BoundSpike', type: 'bit', image: 'images/bits/BoundSpike.png', score: 39.5 }, { id: 'cyclone', name: 'Cyclone', type: 'bit', image: 'images/bits/Cyclone.png', score: 79 }, { id: 'diskball', name: 'DiskBall', type: 'bit', image: 'images/bits/DiskBall.png', score: 17 }, { id: 'dot', name: 'Dot', type: 'bit', image: 'images/bits/Dot.png', score: 39.5 }, { id: 'elevate', name: 'Elevate', type: 'bit', image: 'images/bits/Elevate.png', score: 1299 }, { id: 'flat', name: 'Flat', type: 'bit', image: 'images/bits/Flat.png', score: 223 }, { id: 'freeball', name: 'FreeBall', type: 'bit', image: 'images/bits/FreeBall.png', score: 716 }, { id: 'gearball', name: 'GearBall', type: 'bit', image: 'images/bits/GearBall.png', score: 35 }, { id: 'gearflat', name: 'GearFlat', type: 'bit', image: 'images/bits/GearFlat.png', score: 48.15 }, { id: 'gearneedle', name: 'GearNeedle', type: 'bit', image: 'images/bits/GearNeedle.png', score: 11.5 }, { id: 'gearpoint', name: 'GearPoint', type: 'bit', image: 'images/bits/GearPoint.png', score: 54 }, { id: 'gearrush', name: 'GearRush', type: 'bit', image: 'images/bits/GearRush.png', score: 25 }, { id: 'glide', name: 'Glide', type: 'bit', image: 'images/bits/Glide.png', score: 19.5 }, { id: 'hexa', name: 'Hexa', type: 'bit', image: 'images/bits/Hexa.png', score: 1908.15 }, { id: 'highneedle', name: 'HighNeedle', type: 'bit', image: 'images/bits/HighNeedle.png', score: 39.25 }, { id: 'hightaper', name: 'HighTaper', type: 'bit', image: 'images/bits/HighTaper.png', score: 29.25 }, { id: 'kick', name: 'Kick', type: 'bit', image: 'images/bits/Kick.png', score: 1050 }, { id: 'level', name: 'Level', type: 'bit', image: 'images/bits/Level.png', score: 1007.5 }, { id: 'lowflat', name: 'LowFlat', type: 'bit', image: 'images/bits/LowFlat.png', score: 350.15 }, { id: 'loworb', name: 'LowOrb', type: 'bit', image: 'images/bits/LowOrb.png', score: 351 }, { id: 'lowrush', name: 'LowRush', type: 'bit', image: 'images/bits/LowRush.png', score: 2011.5 }, { id: 'merge', name: 'Merge', type: 'bit', image: 'images/bits/Merge.png', score: 3 }, { id: 'metalneedle', name: 'MetalNeedle', type: 'bit', image: 'images/bits/MetalNeedle.png', score: 4.15 }, { id: 'needle', name: 'Needle', type: 'bit', image: 'images/bits/Needle.png', score: 31.5 }, { id: 'orb', name: 'Orb', type: 'bit', image: 'images/bits/Orb.png', score: 126 }, { id: 'point', name: 'Point', type: 'bit', image: 'images/bits/Point.png', score: 752.15 }, { id: 'quake', name: 'Quake', type: 'bit', image: 'images/bits/Quake.png', score: 21.5 }, { id: 'rubberaccel', name: 'RubberAccel', type: 'bit', image: 'images/bits/RubberAccel.png', score: 110.15 }, { id: 'rush', name: 'Rush', type: 'bit', image: 'images/bits/Rush.png', score: 2214 }, { id: 'spike', name: 'Spike', type: 'bit', image: 'images/bits/Spike.png', score: 19 }, { id: 'taper', name: 'Taper', type: 'bit', image: 'images/bits/Taper.png', score: 336 }, { id: 'transpoint', name: 'TransPoint', type: 'bit', image: 'images/bits/TransPoint.png', score: 24.25 }, { id: 'underneedle', name: 'UnderNeedle', type: 'bit', image: 'images/bits/UnderNeedle.png', score: 162.5 }, { id: 'unite', name: 'Unite', type: 'bit', image: 'images/bits/Unite.png', score: 169.25 }, { id: 'vortex', name: 'Vortex', type: 'bit', image: 'images/bits/Vortex.png', score: 24.15 }, { id: 'wedge', name: 'Wedge', type: 'bit', image: 'images/bits/Wedge.png', score: 301.15 }, { id: 'zap', name: 'Zap', type: 'bit', image: 'images/bits/Zap.png', score: 47 },

        // --- Novas Peças (Score 0 - Apenas Coleção) ---
        { id: 'lockchip-dran', name: 'Dran', type: 'lockchip', image: 'images/lockchips/Dran.png', score: 0 },
        { id: 'lockchip-fox', name: 'Fox', type: 'lockchip', image: 'images/lockchips/Fox.png', score: 0 },
        { id: 'lockchip-hells', name: 'Hells', type: 'lockchip', image: 'images/lockchips/Hells.png', score: 0 },
        { id: 'lockchip-hornet', name: 'Hornet', type: 'lockchip', image: 'images/lockchips/Hornet.png', score: 0 },
        { id: 'lockchip-kraken', name: 'Kraken', type: 'lockchip', image: 'images/lockchips/Kraken.png', score: 0 },
        { id: 'lockchip-leon', name: 'Leon', type: 'lockchip', image: 'images/lockchips/Leon.png', score: 0 },
        { id: 'lockchip-perseus', name: 'Perseus', type: 'lockchip', image: 'images/lockchips/Perseus.png', score: 0 },
        { id: 'lockchip-rhino', name: 'Rhino', type: 'lockchip', image: 'images/lockchips/Rhino.png', score: 0 },
        { id: 'lockchip-sol', name: 'Sol', type: 'lockchip', image: 'images/lockchips/Sol.png', score: 0 },
        { id: 'lockchip-stag', name: 'Stag', type: 'lockchip', image: 'images/lockchips/Stag.png', score: 0 },
        { id: 'lockchip-valkyrie', name: 'Valkyrie', type: 'lockchip', image: 'images/lockchips/Valkyrie.png', score: 0 },
        { id: 'lockchip-wizard', name: 'Wizard', type: 'lockchip', image: 'images/lockchips/Wizard.png', score: 0 },

        { id: 'mainblade-arc', name: 'Arc', type: 'mainblade', image: 'images/mainblades/Arc.png', score: 0 },
        { id: 'mainblade-brave', name: 'Brave', type: 'mainblade', image: 'images/mainblades/Brave.png', score: 0 },
        { id: 'mainblade-brush', name: 'Brush', type: 'mainblade', image: 'images/mainblades/Brush.png', score: 0 },
        { id: 'mainblade-dark', name: 'Dark', type: 'mainblade', image: 'images/mainblades/Dark.png', score: 0 },
        { id: 'mainblade-fang', name: 'Fang', type: 'mainblade', image: 'images/mainblades/Fang.png', score: 0 },
        { id: 'mainblade-fort', name: 'Fort', type: 'mainblade', image: 'images/mainblades/Fort.png', score: 0 },
        { id: 'mainblade-reaper', name: 'Reaper', type: 'mainblade', image: 'images/mainblades/Reaper.png', score: 0 },
        { id: 'mainblade-volt', name: 'Volt', type: 'mainblade', image: 'images/mainblades/Volt.png', score: 0 },
        { id: 'mainblade-wriggle', name: 'Wriggle', type: 'mainblade', image: 'images/mainblades/Wriggle.png', score: 0 },

        { id: 'assistblade-bumper', name: 'Bumper', type: 'assistblade', image: 'images/assistblades/Bumper.png', score: 0 },
        { id: 'assistblade-charge', name: 'Charge', type: 'assistblade', image: 'images/assistblades/Charge.png', score: 0 },
        { id: 'assistblade-jaggy', name: 'Jaggy', type: 'assistblade', image: 'images/assistblades/Jaggy.png', score: 0 },
        { id: 'assistblade-round', name: 'Round', type: 'assistblade', image: 'images/assistblades/Round.png', score: 0 },
        { id: 'assistblade-slash', name: 'Slash', type: 'assistblade', image: 'images/assistblades/Slash.png', score: 0 },
        { id: 'assistblade-turn', name: 'Turn', type: 'assistblade', image: 'images/assistblades/Turn.png', score: 0 },
    ];
    
    // Lista completa de combos do meta
    const ALL_COMBOS = [
        { blade: 'CobaltDragoon', ratchet: '5-60', bit: 'Elevate', points: 721.75 }, { blade: 'WizardRod', ratchet: '1-60', bit: 'Hexa', points: 668.75 }, { blade: 'WizardRod', ratchet: '9-60', bit: 'Ball', points: 622.25 }, { blade: 'PhoenixWing', ratchet: '3-60', bit: 'Rush', points: 305.25 }, { blade: 'PhoenixWing', ratchet: '1-60', bit: 'Rush', points: 275.25 }, { blade: 'CobaltDragoon', ratchet: '9-60', bit: 'Elevate', points: 202.5 }, { blade: 'HoverWyvern', ratchet: '9-60', bit: 'Kick', points: 187 }, { blade: 'WizardRod', ratchet: '3-60', bit: 'Ball', points: 167 }, { blade: 'AeroPegasus', ratchet: '1-60', bit: 'Rush', points: 149.25 }, { blade: 'PhoenixWing', ratchet: '1-60', bit: 'LowRush', points: 132.5 }, { blade: 'PhoenixWing', ratchet: '3-60', bit: 'LowRush', points: 119.5 }, { blade: 'SharkScale', ratchet: '4-50', bit: 'LowRush', points: 119 }, { blade: 'SharkScale', ratchet: '3-60', bit: 'LowRush', points: 111 }, { blade: 'WizardRod', ratchet: '9-60', bit: 'Hexa', points: 107.25 }, { blade: 'SilverWolf', ratchet: '9-60', bit: 'FreeBall', points: 100.75 }, { blade: 'TyrannoBeat', ratchet: '1-60', bit: 'Rush', points: 99.75 }, { blade: 'WizardRod', ratchet: '9-60', bit: 'LowOrb', points: 97.5 }, { blade: 'AeroPegasus', ratchet: '1-60', bit: 'Kick', points: 95 }, { blade: 'SharkScale', ratchet: '1-70', bit: 'LowRush', points: 94 }, { blade: 'PhoenixWing', ratchet: '3-60', bit: 'Point', points: 86.75 }, { blade: 'SilverWolf', ratchet: '9-60', bit: 'Hexa', points: 86.75 }, { blade: 'WizardRod', ratchet: '9-60', bit: 'FreeBall', points: 86.25 }, { blade: 'SharkScale', ratchet: '1-60', bit: 'LowRush', points: 80 }, { blade: 'KnightMail', ratchet: '1-60', bit: 'Rush', points: 69.25 }, { blade: 'CobaltDragoon', ratchet: '1-60', bit: 'Elevate', points: 69.25 }, { blade: 'HoverWyvern', ratchet: '1-60', bit: 'Kick', points: 69 }, { blade: 'PhoenixWing', ratchet: '9-60', bit: 'Rush', points: 68.5 }, { blade: 'WizardRod', ratchet: '1-60', bit: 'Rush', points: 67.5 }, { blade: 'WizardRod', ratchet: '1-70', bit: 'Hexa', points: 64 }, { blade: 'WizardRod', ratchet: '3-60', bit: 'Hexa', points: 63.75 }, { blade: 'PhoenixWing', ratchet: '5-60', bit: 'Point', points: 63.25 }, { blade: 'AeroPegasus', ratchet: '3-60', bit: 'LowRush', points: 60.25 }, { blade: 'AeroPegasus', ratchet: '1-60', bit: 'LowRush', points: 59 }, { blade: 'CobaltDragoon', ratchet: '7-60', bit: 'Level', points: 58.5 }, { blade: 'PhoenixWing', ratchet: '7-60', bit: 'Rush', points: 58.25 }, { blade: 'HoverWyvern', ratchet: '1-60', bit: 'LowRush', points: 58 }, { blade: 'WizardRod', ratchet: '7-60', bit: 'Hexa', points: 56.5 }, { blade: 'AeroPegasus', ratchet: '7-60', bit: 'Rush', points: 55 }, { blade: 'AeroPegasus', ratchet: '1-60', bit: 'Level', points: 53.25 }, { blade: 'WizardRod', ratchet: '5-60', bit: 'Hexa', points: 51.5 }, { blade: 'DranBuster', ratchet: '1-60', bit: 'Rush', points: 51.5 }, { blade: 'SilverWolf', ratchet: '9-60', bit: 'Ball', points: 51 }, { blade: 'WizardRod', ratchet: '3-60', bit: 'FreeBall', points: 49.5 }, { blade: 'TyrannoBeat', ratchet: '3-60', bit: 'Rush', points: 49 }, { blade: 'AeroPegasus', ratchet: '3-60', bit: 'Rush', points: 49 }, { blade: 'PhoenixWing', ratchet: '1-60', bit: 'Point', points: 48 }, { blade: 'ScorpioSpear', ratchet: '9-60', bit: 'FreeBall', points: 48 }, { blade: 'AeroPegasus', ratchet: '7-60', bit: 'LowRush', points: 46.5 }, { blade: 'DranBuster', ratchet: '1-60', bit: 'LowFlat', points: 45.75 }, { blade: 'SilverWolf', ratchet: '3-60', bit: 'FreeBall', points: 45.5 },
    ];
    const TOP_10_COMBOS = ALL_COMBOS.slice(0, 10);

    // --- ESTRUTURA DE DADOS PRINCIPAL ---
    let app_data = {
        collection: { 
            blades: new Map(), // { 'dransword': Set(['Red', 'Stock']) }
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
    const variant_modal_checkboxes = document.getElementById('variant-modal-checkboxes');
    const variant_modal_save = document.getElementById('variant-modal-save');
    const variant_modal_close = document.getElementById('variant-selector-close');


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
        const initialTab = document.querySelector('.tab-link[data-tab="meta"]');
        const initialContent = document.getElementById('meta-tab');
        if (initialTab && initialContent) {
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            initialTab.classList.add('active');
            initialContent.classList.add('active');
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
        return {
            blades: new Map(Object.entries(parsedCollection.blades || {}).map(([id, variants]) => [id, new Set(variants)])),
            ratchets: new Set(parsedCollection.ratchets || []),
            bits: new Set(parsedCollection.bits || []),
            mainblades: new Set(parsedCollection.mainblades || []),
            assistblades: new Set(parsedCollection.assistblades || []),
            lockchips: new Set(parsedCollection.lockchips || [])
        };
    };

    const saveAppData = () => {
        const serializable_data = {
            collection: getSerializableCollection(),
            decks: app_data.decks,
            active_deck_index: app_data.active_deck_index
        };
        localStorage.setItem('beyblade_x_data', JSON.stringify(serializable_data));
    };

    const loadAppData = () => {
        const saved_data_str = localStorage.getItem('beyblade_x_data');
        if (saved_data_str) {
            try {
                const parsed = JSON.parse(saved_data_str);
                app_data.collection = loadCollectionFromParsed(parsed.collection || {});
                app_data.decks = parsed.decks || [];
                app_data.active_deck_index = parsed.active_deck_index || 0;
            } catch (e) {
                console.error("Erro ao carregar dados salvos:", e);
                app_data.collection = { blades: new Map(), ratchets: new Set(), bits: new Set(), mainblades: new Set(), assistblades: new Set(), lockchips: new Set() };
                app_data.decks = [];
            }
        }
        if (app_data.decks.length === 0) {
            app_data.decks.push(createNewDeck("Meu Primeiro Deck"));
            app_data.active_deck_index = 0;
        }
        if (app_data.active_deck_index >= app_data.decks.length) {
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
            const combo_card = document.createElement('div');
            combo_card.className = 'meta-combo-card';
            combo_card.innerHTML = `
                <div class="rank">#${index + 1}</div>
                <div class="parts">
                    <div class="part-display"><img src="${blade_part?.image || ''}" alt="${combo.blade}"><span>${combo.blade}</span></div>
                    <div class="part-display"><img src="${ratchet_part?.image || ''}" alt="${combo.ratchet}"><span>${combo.ratchet}</span></div>
                    <div class="part-display"><img src="${bit_part?.image || ''}" alt="${combo.bit}"><span>${combo.bit}</span></div>
                </div>
                <div class="points">${combo.points.toFixed(2)} pts</div>`;
            meta_combos_container.appendChild(combo_card);
        });
    };

    const renderParts = () => {
        blades_container.innerHTML = '';
        ratchets_container.innerHTML = '';
        bits_container.innerHTML = '';
        mainblades_container.innerHTML = '';
        assistblades_container.innerHTML = '';
        lockchips_container.innerHTML = '';

        ALL_PARTS.forEach(part => {
            let container;
            let collectionSet;
            
            switch (part.type) {
                case 'blade': container = blades_container; collectionSet = app_data.collection.blades; break;
                case 'ratchet': container = ratchets_container; collectionSet = app_data.collection.ratchets; break;
                case 'bit': container = bits_container; collectionSet = app_data.collection.bits; break;
                case 'mainblade': container = mainblades_container; collectionSet = app_data.collection.mainblades; break;
                case 'assistblade': container = assistblades_container; collectionSet = app_data.collection.assistblades; break;
                case 'lockchip': container = lockchips_container; collectionSet = app_data.collection.lockchips; break;
                default: return;
            }
            
            const part_card = document.createElement('div');
            part_card.className = 'part-card';
            part_card.dataset.partId = part.id;
            
            let isOwned = false;
            if (part.type === 'blade') {
                isOwned = collectionSet.has(part.id) && collectionSet.get(part.id).size > 0;
            } else if (collectionSet) {
                isOwned = collectionSet.has(part.id);
            }
            
            if (isOwned) {
                part_card.classList.add('owned');
            }

            const imagePath = part.image || 'images/placeholder.png';
            part_card.innerHTML = `<img src="${imagePath}" alt="${part.name}"><p>${part.name}</p><div class="part-score">${part.score.toFixed(2)}</div>`;
            part_card.addEventListener('click', () => togglePartOwnership(part));
            container.appendChild(part_card);
        });
    };
    
    const renderDeckManager = () => {
        if (!app_data.decks[app_data.active_deck_index]) {
            app_data.active_deck_index = 0; 
        }
        deck_selector.innerHTML = '';
        app_data.decks.forEach((deck, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = deck.name;
            deck_selector.appendChild(option);
        });
        deck_selector.value = app_data.active_deck_index;
        deck_name_input.value = app_data.decks[app_data.active_deck_index].name;
    };
    
    const updateDeckUI = () => {
        const currentDeck = app_data.decks[app_data.active_deck_index];
        if (!currentDeck) return;
        
        let totalDeckScore = 0;
        
        deck_slots.forEach((slot, bayIndex) => {
            const bay = currentDeck.bays[bayIndex];
            let bayScore = 0;

            const primeiraPh = slot.querySelector('[data-type="primeira"]');
            const primeiraName = slot.querySelector('[data-name-type="primeira"]');
            const ratchetPh = slot.querySelector('[data-type="ratchet"]');
            const ratchetName = slot.querySelector('[data-name-type="ratchet"]');
            const bitPh = slot.querySelector('[data-type="bit"]');
            const bitName = slot.querySelector('[data-name-type="bit"]');
            const mainBladePh = slot.querySelector('[data-type="mainblade"]');
            const mainBladeName = slot.querySelector('[data-name-type="mainblade"]');
            const assistBladePh = slot.querySelector('[data-type="assistblade"]');
            const assistBladeName = slot.querySelector('[data-name-type="assistblade"]');
            
            slot.dataset.bayType = bay.type || 'empty';

            const resetPlaceholder = (ph, nameEl, defaultText) => {
                ph.innerHTML = `<span>${defaultText}</span>`;
                nameEl.textContent = 'Selecione';
            };
            
            const setPlaceholder = (ph, nameEl, part) => {
                const partName = part.variant ? `${part.baseName} (${part.variant})` : part.name;
                const imagePath = part.image || 'images/placeholder.png';
                ph.innerHTML = `<img src="${imagePath}" alt="${partName}"><span class="part-score-deck">${part.score.toFixed(2)}</span>`;
                nameEl.textContent = partName;
            };

            if (bay.type === 'standard') {
                if (bay.part1) { setPlaceholder(primeiraPh, primeiraName, bay.part1); bayScore += bay.part1.score; } 
                else { resetPlaceholder(primeiraPh, primeiraName, 'Primeira Peça'); }
                if (bay.part2) { setPlaceholder(ratchetPh, ratchetName, bay.part2); bayScore += bay.part2.score; }
                else { resetPlaceholder(ratchetPh, ratchetName, 'Ratchet'); }
                if (bay.part3) { setPlaceholder(bitPh, bitName, bay.part3); bayScore += bay.part3.score; }
                else { resetPlaceholder(bitPh, bitName, 'Bit'); }
            } else if (bay.type === 'chip') {
                if (bay.part1) { setPlaceholder(primeiraPh, primeiraName, bay.part1); bayScore += bay.part1.score; } 
                else { resetPlaceholder(primeiraPh, primeiraName, 'Primeira Peça'); }
                if (bay.part2) { setPlaceholder(mainBladePh, mainBladeName, bay.part2); bayScore += bay.part2.score; }
                else { resetPlaceholder(mainBladePh, mainBladeName, 'Main Blade'); }
                if (bay.part3) { setPlaceholder(assistBladePh, assistBladeName, bay.part3); bayScore += bay.part3.score; }
                else { resetPlaceholder(assistBladePh, assistBladeName, 'Assist Blade'); }
            } else {
                resetPlaceholder(primeiraPh, primeiraName, 'Primeira Peça');
            }

            slot.querySelector('.bey-score span').textContent = bayScore.toFixed(2);
            totalDeckScore += bayScore;
        });
        
        deck_score_span.textContent = totalDeckScore.toFixed(2);
        renderDeckManager();
    };

    // --- FUNÇÕES DE COLEÇÃO E MODAIS ---

    const togglePartOwnership = (part) => {
        const part_card = document.querySelector(`#collection-tab [data-part-id="${part.id}"]`);

        if (part.type === 'blade') {
            if (part.variants) {
                openVariantSelector(part);
            } else {
                // Lógica para Blade SEM variante (CORRIGIDO)
                const collectionSet = app_data.collection.blades;
                if (collectionSet.has(part.id)) {
                    collectionSet.delete(part.id);
                    if(part_card) part_card.classList.remove('owned');
                } else {
                    collectionSet.set(part.id, new Set(['owned'])); // 'owned' é um marcador
                    if(part_card) part_card.classList.add('owned');
                }
                saveAppData();
            }
        } else {
            // Lógica para todas as outras peças
            const collectionSetKey = part.type + 's';
            const collection_set = app_data.collection[collectionSetKey];
            if (!collection_set) return;

            if (collection_set.has(part.id)) {
                collection_set.delete(part.id);
                if(part_card) part_card.classList.remove('owned');
            } else {
                collection_set.add(part.id);
                if(part_card) part_card.classList.add('owned');
            }
            saveAppData();
        }
    };
    
    const openVariantSelector = (part) => {
        variant_modal_part = part;
        variant_modal_title.textContent = `Selecionar Variantes de ${part.name}`;
        variant_modal_checkboxes.innerHTML = '';
        
        const ownedVariants = app_data.collection.blades.get(part.id) || new Set();
        
        part.variants.forEach(variant => {
            const isOwned = ownedVariants.has(variant);
            const checkboxWrapper = document.createElement('div');
            const checkboxId = `variant-${part.id}-${variant}`;
            checkboxWrapper.innerHTML = `
                <input type="checkbox" id="${checkboxId}" value="${variant}" ${isOwned ? 'checked' : ''}>
                <label for="${checkboxId}">${variant}</label>
            `;
            variant_modal_checkboxes.appendChild(checkboxWrapper);
        });
        
        variant_modal.style.display = 'block';
    };
    
    const saveVariantSelection = () => {
        if (!variant_modal_part) return;
        
        const ownedVariants = new Set();
        const checkboxes = variant_modal_checkboxes.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(cb => ownedVariants.add(cb.value));
        
        const part_card = document.querySelector(`#collection-tab [data-part-id="${variant_modal_part.id}"]`);

        if (ownedVariants.size > 0) {
            app_data.collection.blades.set(variant_modal_part.id, ownedVariants);
            if(part_card) part_card.classList.add('owned');
        } else {
            app_data.collection.blades.delete(variant_modal_part.id);
            if(part_card) part_card.classList.remove('owned');
        }
        
        saveAppData();
        closeVariantModal();
    };

    const closeVariantModal = () => {
        variant_modal.style.display = 'none';
        variant_modal_part = null;
    };
    
    const applyFilter = () => collection_tab.classList.toggle('filter-on', collection_filter.checked);

    const exportData = () => {
        saveAppData();
        const data_str = localStorage.getItem('beyblade_x_data') || '{}';
        const data_blob = new Blob([data_str], {type: 'application/json'});
        const url = URL.createObjectURL(data_blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'meus_dados_beyblade.bx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const importData = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
                if (parsed.collection && parsed.decks) {
                    localStorage.setItem('beyblade_x_data', JSON.stringify(parsed));
                    loadAppData();
                    renderParts();
                    updateDeckUI();
                    alert('Dados importados com sucesso!');
                } else { throw new Error('Formato de arquivo inválido.'); }
            } catch (error) { alert(`Erro ao importar o arquivo: ${error.message}`); }
        };
        reader.readAsText(file);
    };
    
    const applySuggestion = (slotId, combo) => {
        const currentDeck = app_data.decks[app_data.active_deck_index];
        const usedPartIds = new Set();
        currentDeck.bays.forEach((bay, index) => {
            if (index.toString() === slotId) return;
            if (bay.part1) usedPartIds.add(bay.part1.baseId || bay.part1.id);
            if (bay.part2) usedPartIds.add(bay.part2.id);
            if (bay.part3) usedPartIds.add(bay.part3.id);
        });

        const bladePart = ALL_PARTS.find(p => p.name === combo.blade);
        const ratchetPart = ALL_PARTS.find(p => p.name === combo.ratchet);
        const bitPart = ALL_PARTS.find(p => p.name === combo.bit);

        if (usedPartIds.has(bladePart.id) || usedPartIds.has(ratchetPart.id) || usedPartIds.has(bitPart.id)) {
            alert("Não é possível aplicar esta sugestão. Uma ou mais peças já estão em uso neste deck.");
            return;
        }

        const bay = app_data.decks[app_data.active_deck_index].bays[slotId];
        clearBay(bay);
        bay.type = 'standard';
        
        const ownedVariants = app_data.collection.blades.get(bladePart.id);
        const variant = ownedVariants.values().next().value || 'Stock';
        
        bay.part1 = { ...bladePart, baseId: bladePart.id, baseName: bladePart.name, variant: variant, name: `${bladePart.name} (${variant})` };
        bay.part2 = ratchetPart;
        bay.part3 = bitPart;
        
        updateDeckUI();
        saveAppData();
        closePartModal();
    };
    
    // (CORRIGIDO) Busca peças que o usuário possui
    const getOwnedParts = (partType) => {
        const ownedParts = [];
        const collectionSetKey = partType + 's';
        const collectionSet = app_data.collection[collectionSetKey];

        if (partType === 'blade') {
            collectionSet.forEach((variants, partId) => {
                const basePart = ALL_PARTS.find(p => p.id === partId);
                if (basePart) {
                    if (basePart.variants) {
                        // Blade COM variantes
                        variants.forEach(variant => {
                            ownedParts.push({
                                ...basePart,
                                id: `${basePart.id}-${variant}`, // ID único para a UI
                                baseId: basePart.id, // ID base para verificação de duplicados
                                baseName: basePart.name,
                                name: `${basePart.name} (${variant})`,
                                variant: variant
                            });
                        });
                    } else if (variants.has('owned')) {
                        // Blade SEM variantes (marcada com 'owned')
                        ownedParts.push({ ...basePart, baseId: basePart.id, baseName: basePart.name });
                    }
                }
            });
        } else if (collectionSet) {
            // Outros tipos de peças
            collectionSet.forEach(partId => {
                const part = ALL_PARTS.find(p => p.id === partId);
                if (part) ownedParts.push(part); // ID base já é o part.id
            });
        }
        return ownedParts;
    };


    // (CORRIGIDO) Abre o seletor de peças, filtrando peças já usadas
    const openPartSelector = (slotId, type) => {
        active_deck_slot = { slotId, type };
        modal_title.textContent = `Selecione: ${type.charAt(0).toUpperCase() + type.slice(1)}`;
        
        const currentBay = app_data.decks[app_data.active_deck_index].bays[slotId];
        const ownedParts = app_data.collection;

        // --- NOVA REGRA: Encontra peças já usadas ---
        const usedPartIds = new Set();
        const currentDeck = app_data.decks[app_data.active_deck_index];
        currentDeck.bays.forEach((bay, index) => {
            if (index.toString() === slotId) return; // Ignora o slot atual
            if (bay.part1) usedPartIds.add(bay.part1.baseId || bay.part1.id);
            if (bay.part2) usedPartIds.add(bay.part2.baseId || bay.part2.id);
            if (bay.part3) usedPartIds.add(bay.part3.baseId || bay.part3.id);
        });
        // --- FIM DA NOVA REGRA ---
        
        let availableParts = [];
        let showSuggestions = false;

        if (type === 'primeira') {
            availableParts = [ ...getOwnedParts('blade'), ...getOwnedParts('lockchip') ];
            showSuggestions = true;
        } else if (type === 'ratchet' || type === 'bit') {
            availableParts = getOwnedParts(type);
            showSuggestions = true;
        } else { // mainblade or assistblade
            availableParts = getOwnedParts(type);
            showSuggestions = false;
        }

        // --- NOVA REGRA: Filtra as peças a mostrar ---
        const partsToShow = availableParts.filter(part => !usedPartIds.has(part.baseId || part.id));
        
        // Render Suggestions
        if (showSuggestions) {
            modal_suggestions_container.innerHTML = '<h4>Sugestões do META (que você possui)</h4>';
            modal_suggestions_container.style.display = 'block';
            
            const matchingCombos = ALL_COMBOS.filter(combo => {
                const bladePart = ALL_PARTS.find(p => p.name === combo.blade);
                const ratchetPart = ALL_PARTS.find(p => p.name === combo.ratchet);
                const bitPart = ALL_PARTS.find(p => p.name === combo.bit);

                if (!bladePart || !ratchetPart || !bitPart) return false;
                
                // Check ownership
                const bladeOwned = ownedParts.blades.has(bladePart.id) && ownedParts.blades.get(bladePart.id).size > 0;
                const ratchetOwned = ownedParts.ratchets.has(ratchetPart.id);
                const bitOwned = ownedParts.bits.has(bitPart.id);
                
                if (!bladeOwned || !ratchetOwned || !bitOwned) return false;

                // --- NOVA REGRA: Check if already used in OTHER slots ---
                if (usedPartIds.has(bladePart.id) || usedPartIds.has(ratchetPart.id) || usedPartIds.has(bitPart.id)) {
                    return false;
                }

                if (currentBay.type === 'standard') {
                    if (currentBay.part1 && (currentBay.part1.baseId || currentBay.part1.id) !== bladePart.id) return false;
                    if (currentBay.part2 && currentBay.part2.id !== ratchetPart.id) return false;
                    if (currentBay.part3 && currentBay.part3.id !== bitPart.id) return false;
                } else if (currentBay.type === 'chip') {
                    return false;
                }
                
                return true;
            });

            if (matchingCombos.length > 0) {
                matchingCombos.forEach(combo => {
                    const bladePart = ALL_PARTS.find(p => p.name === combo.blade);
                    const ratchetPart = ALL_PARTS.find(p => p.name === combo.ratchet);
                    const bitPart = ALL_PARTS.find(p => p.name === combo.bit);
                    const card = document.createElement('div');
                    card.className = 'suggestion-card';
                    card.innerHTML = `
                        <div class="suggestion-part"><img src="${bladePart.image}"><span>${bladePart.name}</span></div>
                        <div class="suggestion-part"><img src="${ratchetPart.image}"><span>${ratchetPart.name}</span></div>
                        <div class="suggestion-part"><img src="${bitPart.image}"><span>${bitPart.name}</span></div>`;
                    card.addEventListener('click', () => applySuggestion(slotId, combo));
                    modal_suggestions_container.appendChild(card);
                });
            } else {
                modal_suggestions_container.innerHTML += '<p>Nenhuma sugestão encontrada com as peças que você possui (ou peças já estão em uso).</p>';
            }
        } else {
            modal_suggestions_container.innerHTML = '';
            modal_suggestions_container.style.display = 'none';
        }

        // Render Individual Parts List
        modal_parts_list_container.innerHTML = '<h4>Peças Individuais (que você possui)</h4><div class="parts-grid"></div>';
        const partsGrid = modal_parts_list_container.querySelector('.parts-grid');

        if (partsToShow.length === 0) {
             partsGrid.innerHTML = `<p>Nenhuma peça disponível (verifique sua coleção ou peças já em uso no deck).</p>`;
        } else {
            partsToShow.forEach(part => {
                const part_card = document.createElement('div');
                part_card.className = 'part-card owned';
                part_card.innerHTML = `<img src="${part.image || ''}" alt="${part.name}"><p>${part.name}</p><div class="part-score">${part.score.toFixed(2)}</div>`;
                part_card.addEventListener('click', () => selectPartForDeck(part));
                partsGrid.appendChild(part_card);
            });
        }
        part_modal.style.display = 'block';
    };

    const closePartModal = () => part_modal.style.display = 'none';
    
    const clearBay = (bay) => {
        bay.type = null;
        bay.part1 = null;
        bay.part2 = null;
        bay.part3 = null;
    };

    // (CORRIGIDO) Adiciona a peça ao slot do deck
    const selectPartForDeck = (part) => {
        const { slotId, type } = active_deck_slot;
        const bay = app_data.decks[app_data.active_deck_index].bays[slotId];
        
        // Adiciona baseId se não existir (para Blades não-variantes)
        if (part.type === 'blade' && !part.baseId) {
            part.baseId = part.id;
            part.baseName = part.name;
        }

        if (type === 'primeira') {
            clearBay(bay);
            bay.part1 = part;
            if (part.type === 'blade') {
                bay.type = 'standard';
            } else if (part.type === 'lockchip') {
                bay.type = 'chip';
            }
        } else {
            const partMap = {
                'ratchet': 'part2',
                'bit': 'part3',
                'mainblade': 'part2',
                'assistblade': 'part3'
            };
            bay[partMap[type]] = part;
        }

        updateDeckUI();
        saveAppData();
        closePartModal();
    };

    const clearDeck = () => {
        app_data.decks[app_data.active_deck_index].bays.forEach(clearBay);
        updateDeckUI();
        saveAppData();
    };
    
    const addDeck = () => {
        const newDeckName = prompt("Digite o nome do novo deck:", `Deck ${app_data.decks.length + 1}`);
        if (newDeckName) {
            app_data.decks.push(createNewDeck(newDeckName));
            app_data.active_deck_index = app_data.decks.length - 1;
            updateDeckUI();
            saveAppData();
        }
    };
    
    const deleteDeck = () => {
        if (app_data.decks.length <= 1) {
            alert("Você não pode deletar o último deck.");
            return;
        }
        if (confirm(`Tem certeza que deseja deletar o deck "${app_data.decks[app_data.active_deck_index].name}"?`)) {
            app_data.decks.splice(app_data.active_deck_index, 1);
            app_data.active_deck_index = Math.max(0, app_data.active_deck_index - 1);
            updateDeckUI();
            saveAppData();
        }
    };

    const renameDeck = () => {
        const newName = deck_name_input.value.trim();
        if (newName) {
            app_data.decks[app_data.active_deck_index].name = newName;
            renderDeckManager();
            saveAppData();
            deck_name_input.blur();
        } else {
            deck_name_input.value = app_data.decks[app_data.active_deck_index].name;
        }
    };
    
    const switchDeck = () => {
        app_data.active_deck_index = parseInt(deck_selector.value, 10);
        updateDeckUI();
        saveAppData();
    };

    const exportDeckList = () => {
        const personName = prompt("Digite seu nome:", "");
        if (personName === null) return; 

        const tournamentName = prompt("Digite o nome do evento/torneio:", "");
        if (tournamentName === null) return;

        const currentDeck = app_data.decks[app_data.active_deck_index];
        const bayStrings = currentDeck.bays.map(bay => {
            if (bay.type === 'standard' && bay.part1 && bay.part2 && bay.part3) {
                const bladeName = bay.part1.baseName || bay.part1.name;
                return `${bladeName}/${bay.part2.name}-${bay.part3.name}`;
            } else if (bay.type === 'chip' && bay.part1 && bay.part2 && bay.part3) {
                return `${bay.part1.name} (${bay.part2.name}/${bay.part3.name})`;
            }
            return null;
        }).filter(Boolean);

        if (bayStrings.length === 0) {
            alert("Seu deck está vazio. Adicione pelo menos um Beyblade completo para exportar.");
            return;
        }

        const deckListString = `=== DECK LIST ===\n\n===== NOME =====\n${personName}\n\n==== EVENTO ====\n${tournamentName}\n\n===== DECK =====\n${bayStrings.join('\n')}\n\n===============`;

        navigator.clipboard.writeText(deckListString).then(() => {
            alert("Deck List copiada para o clipboard!");
        }).catch(err => {
            console.error('Erro ao copiar para o clipboard: ', err);
            alert("Falha ao copiar. Verifique as permissões do navegador.");
        });
    };

    // --- INICIALIZAÇÃO E EVENTOS ---
    setupTabs();
    loadAppData();
    renderParts();
    renderMetaCombos();
    updateDeckUI();
    
    collection_filter.addEventListener('change', applyFilter);
    export_button.addEventListener('click', exportData);
    import_button.addEventListener('click', () => import_file_input.click());
    import_file_input.addEventListener('change', importData);
    clear_deck_button.addEventListener('click', clearDeck);
    export_deck_button.addEventListener('click', exportDeckList);
    
    deck_slots.forEach(slot => {
        slot.querySelectorAll('.part-placeholder').forEach(ph => {
            ph.addEventListener('click', () => {
                const slotId = slot.dataset.slotId;
                const type = ph.dataset.type;
                const bay = app_data.decks[app_data.active_deck_index].bays[slotId];
                
                if (type === 'primeira') {
                    openPartSelector(slotId, 'primeira');
                }
                else if (bay.type === 'standard' && (type === 'ratchet' || type === 'bit')) {
                    openPartSelector(slotId, type);
                }
                else if (bay.type === 'chip' && (type === 'mainblade' || type === 'assistblade')) {
                    openPartSelector(slotId, type);
                }
            });
        });
    });

    add_deck_button.addEventListener('click', addDeck);
    delete_deck_button.addEventListener('click', deleteDeck);
    deck_selector.addEventListener('change', switchDeck);
    deck_name_input.addEventListener('change', renameDeck);
    
    part_modal_close.addEventListener('click', closePartModal);
    variant_modal_close.addEventListener('click', closeVariantModal);
    variant_modal_save.addEventListener('click', saveVariantSelection);
    
    window.addEventListener('click', (event) => {
        if (event.target === part_modal) closePartModal();
        if (event.target === variant_modal) closeVariantModal();
    });
});
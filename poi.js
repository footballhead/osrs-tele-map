/// @file poi.js
/// @brief Creates an array called `poi` with subobjects {name, x, y, color, renderTooltip}. Requires tooltip.js

var poi = [
    {
        name: 'Ectophial',
        x: 7520,
        y: 1732,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('bc/Ectophial.png'), aWiki('Ectophial')),
                p(text('Requires completing '), aWiki('Ghosts Ahoy'))
            );
        }
    },
    {
        name: 'Explorer\'s Ring',
        x: 5708,
        y: 2409,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('14/Explorer\'s_ring_2.png'), aWiki('Explorer\'s ring')),
                p(text('Requires completing '), aWiki('medium Lumbridge & Draynor Diary'))
            );
        }
    },
    {
        name: 'Amulet of Glory (Edgeville)',
        x: 5806,
        y: 1800,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('f0/Amulet_of_glory(4).png'), aWiki('Amulet of Glory'), text(' (Edgeville)'))
            );
        }
    },
    {
        name: 'Amulet of Glory (Karamja)',
        x: 5299,
        y: 2763,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('f0/Amulet_of_glory(4).png'), aWiki('Amulet of Glory'), text(' (Karamja)'))
            );
        }
    },
    {
        name: 'Amulet of Glory (Draynor Village)',
        x: 5855,
        y: 2540,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('f0/Amulet_of_glory(4).png'), aWiki('Amulet of Glory'), text(' (Draynor Village)'))
            );
        }
    },
    {
        name: 'Amulet of Glory (Al Kharid)',
        x: 6422,
        y: 2796,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('f0/Amulet_of_glory(4).png'), aWiki('Amulet of Glory'), text(' (Al Kharid)'))
            );
        }
    },
    {
        name: 'Skills necklace (Fishing Guild)',
        x: 4365,
        y: 2108,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('06/Skills_necklace.png'), aWiki('Skills necklace'), text(' (Fishing Guild)'))
            );
        }
    },
    {
        name: 'Skills necklace (Mining Guild)',
        x: 5725,
        y: 2154,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('06/Skills_necklace.png'), aWiki('Skills necklace'), text(' (Mining Guild)')),
                p(text('(Actual destination is in the '), aWiki('Dwarven Mines'), text(')'))
            );
        }
    },
    {
        name: 'Skills necklace (Crafting Guild)',
        x: 5345,
        y: 2404,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('06/Skills_necklace.png'), aWiki('Skills necklace'), text(' (Crafting Guild)'))
            );
        }
    },
    {
        name: 'Skills necklace (Cooking Guild)',
        x: 5973,
        y: 1961,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('06/Skills_necklace.png'), aWiki('Skills necklace'), text(' (Cooking Guild)'))
            );
        }
    },
    {
        name: 'Skills necklace (Woodcutting Guild)',
        x: 1522,
        y: 1772,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('06/Skills_necklace.png'), aWiki('Skills necklace'), text(' (Woodcutting Guild)'))
            );
        }
    },
    {
        name: 'Skills necklace (Farming Guild)',
        x: 289,
        y: 1121,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('06/Skills_necklace.png'), aWiki('Skills necklace'), text(' (Farming Guild)'))
            );
        }
    },
    {
        name: 'Games necklace (Barbarian Outpost)',
        x: 4100,
        y: 1579,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('41/Games_necklace.png'), aWiki('Games necklace'), text(' (Barbarian Outpost)'))
            );
        }
    },
    {
        name: 'Games necklace (Burthrope Games Room)',
        x: 5240,
        y: 1646,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('41/Games_necklace.png'), aWiki('Games necklace'), text(' (Burthrope Games Room)'))
            );
        }
    },
    {
        name: 'Games necklace (Corporeal Beast)',
        x: 6151,
        y: 1244,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('41/Games_necklace.png'), aWiki('Games necklace'), text(' (Corporeal Beast)'))
            );
        }
    },
    {
        name: 'Games necklace (Tears of Guthix)',
        x: 6048,
        y: 2769,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('41/Games_necklace.png'), aWiki('Games necklace'), text(' (Tears of Guthix)')),
                p(text('Requires completing '), aWiki('Tears of Guthix'))
            );
        }
    },
    {
        name: 'Games necklace (Wintertodt Camp)',
        x: 1438,
        y: 454,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('41/Games_necklace.png'), aWiki('Games necklace'), text(' (Wintertodt Camp)')),
                p(text('Requires visiting '), aWiki('Zeah'), text(' once before'))
            );
        }
    },
    {
        name: 'Necklace of passage (Wizards\' Tower)',
        x: 5886,
        y: 2760,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('62/Necklace_of_passage.png'), aWiki('Necklace of passage'), text(' (Wizards\' Tower)'))
            );
        }
    },
    {
        name: 'Necklace of passage (Outpost)',
        x: 3854,
        y: 2244,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('62/Necklace_of_passage.png'), aWiki('Necklace of passage'), text(' (Outpost)'))
            );
        }
    },
    {
        name: 'Necklace of passage (Desert Eagle)',
        x: 6774,
        y: 2824,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('62/Necklace_of_passage.png'), aWiki('Necklace of passage'), text(' (Desert Eagle)'))
            );
        }
    },
    {
        name: 'Ring of dueling (Duel Arena)',
        x: 6473,
        y: 2581,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('bd/Ring_of_dueling.png'), aWiki('Ring of dueling'), text(' (Duel Arena)'))
            );
        }
    },
    {
        name: 'Ring of dueling (Castle Wars)',
        x: 3868,
        y: 3011,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('bd/Ring_of_dueling.png'), aWiki('Ring of dueling'), text(' (Castle Wars)'))
            );
        }
    },
    {
        name: 'Ring of dueling (Clan Wars)',
        x: 6695,
        y: 2772,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('bd/Ring_of_dueling.png'), aWiki('Ring of dueling'), text(' (Clan Wars)'))
            );
        }
    },
    {
        name: 'Ardougne cloak (Monastery)',
        x: 4363,
        y: 2634,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('ca/Ardougne_cloak_1.png'), aWiki('Ardougne cloak')),
                p(text('Requires completing '), aWiki('Easy Ardougne Diary'))
            );
        }
    },
    {
        name: 'Ardougne cloak (Farming patch)',
        x: 4536,
        y: 2160,
        color: 'yellow',
        renderTooltip: () => {
            return div(
                p(imgWiki('d6/Ardougne_cloak_2.png'), aWiki('Ardougne cloak')),
                p(text('Requires completing '), aWiki('Medium Ardougne Diary')),
                p(text('Limit 3 per day (5 if completed '), aWiki('Hard Ardougne Diary'), text('). Unlimited if completed '), aWiki('Elite Ardougne Diary'), text('.'))
            );
        }
    },
    {
        name: 'Lumbridge Home Teleport',
        x: 6243,
        y: 2632,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('e2/Home_Teleport.png'), aWiki('Lumbridge Home Teleport')),
                p(text('10s to cast')),
                p(text('30min cooldown'))
            );
        }
    },
    {
        name: 'Varrock Teleport',
        x: 6182,
        y: 2000,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('c5/Varrock_Teleport.png'), aWiki('Varrock Teleport')),
                reqMagic(25),
                p(runeReq('air', 3), runeReq('fire', 1), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Varrock Teleport (Toggle-location)',
        x: 6036,
        y: 1866,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('c5/Varrock_Teleport.png'), aWiki('Varrock Teleport'), text(' (Toggle-location)')),
                p(text('Requires completing '), aWiki('Medium Varrock Diary')),
                reqMagic(25),
                p(runeReq('air', 3), runeReq('fire', 1), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Lumbridge Teleport',
        x: 6212,
        y: 2634,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('f8/Lumbridge_Teleport.png'), aWiki('Lumbridge Teleport')),
                reqMagic(31),
                p(runeReq('air', 3), runeReq('earth', 1), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Falador Teleport',
        x: 5436,
        y: 2148,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('06/Falador_Teleport.png'), aWiki('Falador Teleport')),
                reqMagic(37),
                p(runeReq('air', 3), runeReq('water', 1), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Teleport to House (Rimmington)',
        x: 5400,
        y: 2614,
        color: 'white',
        renderTooltip: () => teleToHouseTemplate('Rimmington')
    },
    {
        name: 'Teleport to House (Taverley)',
        x: 5215,
        y: 1894,
        color: 'white',
        renderTooltip: () => teleToHouseTemplate('Taverley')
    },
    {
        name: 'Teleport to House (Pollnivneach)',
        x: 6561,
        y: 3287,
        color: 'white',
        renderTooltip: () => teleToHouseTemplate('Pollnivneach')
    },
    {
        name: 'Teleport to House (Yanille)',
        x: 4176,
        y: 2998,
        color: 'white',
        renderTooltip: () => teleToHouseTemplate('Yanille')
    },
    {
        name: 'Teleport to House (Brimhaven)',
        x: 4810,
        y: 2756,
        color: 'white',
        renderTooltip: () => teleToHouseTemplate('Brimhaven')
    },
    {
        name: 'Teleport to House (Hosidius)',
        x: 1768,
        y: 1736,
        color: 'white',
        renderTooltip: () => teleToHouseTemplate('Hosidius')
    },
    {
        name: 'Teleport to House (Fremennik Province)',
        x: 4553,
        y: 1394,
        color: 'white',
        renderTooltip: () => teleToHouseTemplate('Fremennik Province')
    },
    {
        name: 'Teleport to House (Prifddinas)',
        x: 3183,
        y: 2308,
        color: 'white',
        renderTooltip: () => teleToHouseTemplate('Prifddinas')
    },
    {
        name: 'Camelot Teleport',
        x: 4818,
        y: 1862,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('68/Camelot_Teleport.png'), aWiki('Camelot Teleport')),
                reqMagic(45),
                p(runeReq('air', 5), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Camelot Teleport (Toggle-location)',
        x: 4718,
        y: 1813,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('68/Camelot_Teleport.png'), aWiki('Camelot Teleport'), text(' (Toggle-location)')),
                p(text('Requires completing '), aWiki('Hard Kandarin Diary')),
                reqMagic(45),
                p(runeReq('air', 5), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Ardougne Teleport',
        x: 4528,
        y: 2366,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('05/Ardougne_Teleport.png'), aWiki('Ardougne Teleport')),
                p(text('Requires completing '), aWiki('Plague City')),
                reqMagic(51),
                p(runeReq('water', 2), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Watchtower Teleport',
        x: 4186,
        y: 2935,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('91/Watchtower_Teleport.png'), aWiki('Watchtower Teleport')),
                p(text('Requires completing '), aWiki('Watchtower')),
                reqMagic(58),
                p(runeReq('earth', 2), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Watchtower Teleport (Toggle-location)',
        x: 4273,
        y: 3017,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('91/Watchtower_Teleport.png'), aWiki('Watchtower Teleport'), text(' (Toggle-location)')),
                p(text('Requires completing '), aWiki('Hard Ardougne Diary')),
                reqMagic(58),
                p(runeReq('earth', 2), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Trollheim Teleport',
        x: 5220,
        y: 1251,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('41/Trollheim_Teleport.png'), aWiki('Trollheim Teleport')),
                p(text('Requires completing '), aWiki('Eadgar\'s Ruse')),
                reqMagic(61),
                p(runeReq('fire', 2), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Ape Atoll Teleport',
        x: 4942,
        y: 3927,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('76/Ape_Atoll_Teleport_(standard).png'), aWiki('Ape Atoll Teleport (standard)')),
                p(text('Requires part of '), aWiki('Recipe for Disaster')),
                reqMagic(74),
                p(runeReq('fire', 2), runeReq('water', 2), runeReq('law', 2), runeReq('banana', 1))
            );
        }
    },
    {
        name: 'Kourend Castle Teleport',
        x: 1431,
        y: 1268,
        color: 'aqua',
        renderTooltip: () => {
            return div(
                p(imgWiki('1b/Kourend_Castle_Teleport.png'), aWiki('Kourend Castle Teleport')),
                p(text('Requires reading '), aWiki('Transportation incantations')),
                reqMagic(69),
                p(runeReq('fire', 5), runeReq('water', 4), runeReq('law', 2), runeReq('soul', 2))
            );
        }
    },
    {
        name: 'Edgeville Home Teleport',
        x: 5822,
        y: 1832,
        color: 'purple',
        renderTooltip: () => {
            return div(
                p(imgWiki('e2/Home_Teleport.png'), aWiki('Edgeville Home Teleport')),
                reqAncientMagicks(),
                p(text('10s to cast')),
                p(text('30min cooldown'))
            );
        }
    },
    {
        name: 'Paddewwa Teleport',
        x: 5828,
        y: 1873,
        color: 'purple',
        renderTooltip: () => {
            return div(
                p(imgWiki('05/Paddewwa_Teleport.png'), aWiki('Paddewwa Teleport')),
                reqAncientMagicks(),
                reqMagic(54),
                p(runeReq('air', 1), runeReq('fire', 1), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Senntisten Teleport',
        x: 6606,
        y: 2061,
        color: 'purple',
        renderTooltip: () => {
            return div(
                p(imgWiki('94/Senntisten_Teleport.png'), aWiki('Senntisten Teleport')),
                reqAncientMagicks(),
                reqMagic(60),
                p(runeReq('law', 2), runeReq('soul', 1))
            );
        }
    },
    {
        name: 'Kharyll Teleport',
        x: 7068,
        y: 1775,
        color: 'purple',
        renderTooltip: () => {
            return div(
                p(imgWiki('b0/Kharyrll_Teleport.png'), aWiki('Kharyll Teleport')),
                reqAncientMagicks(),
                reqMagic(66),
                p(runeReq('blood', 1), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Lassar Teleport',
        x: 5564,
        y: 1859,
        color: 'purple',
        renderTooltip: () => {
            return div(
                p(imgWiki('40/Lassar_Teleport.png'), aWiki('Lassar Teleport')),
                reqAncientMagicks(),
                reqMagic(72),
                p(runeReq('water', 4), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Dareeyak Teleport',
        x: 5465,
        y: 1205,
        color: 'purple',
        renderTooltip: () => {
            return div(
                p(imgWiki('11/Dareeyak_Teleport.png'), aWiki('Dareeyak Teleport')),
                reqAncientMagicks(),
                reqMagic(78),
                p(runeReq('air', 2), runeReq('fire', 3), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Carrallangar Teleport',
        x: 6015,
        y: 1295,
        color: 'purple',
        renderTooltip: () => {
            return div(
                p(imgWiki('1e/Carrallangar_Teleport.png'), aWiki('Carrallangar Teleport')),
                reqAncientMagicks(),
                reqMagic(84),
                p(runeReq('law', 2), runeReq('soul', 2))
            );
        }
    },
    {
        name: 'Annakarl Teleport',
        x: 6413,
        y: 629,
        color: 'purple',
        renderTooltip: () => {
            return div(
                p(imgWiki('62/Annakarl_Teleport.png'), aWiki('Annakarl Teleport')),
                reqAncientMagicks(),
                reqMagic(90),
                p(runeReq('blood', 2), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Ghorrock Teleport',
        x: 5458,
        y: 670,
        color: 'purple',
        renderTooltip: () => {
            return div(
                p(imgWiki('46/Ghorrock_Teleport.png'), aWiki('Ghorrock Teleport')),
                reqAncientMagicks(),
                reqMagic(96),
                p(runeReq('water', 8), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Lunar Home Teleport',
        x: 2881,
        y: 549,
        color: 'blue',
        renderTooltip: () => {
            return div(
                p(imgWiki('e2/Home_Teleport.png'), aWiki('Lunar Home Teleport')),
                reqLunar(),
                p(text('10s to cast')),
                p(text('30min cooldown'))
            );
        }
    },
    {
        name: 'Moonclan Teleport',
        x: 2824,
        y: 545,
        color: 'blue',
        renderTooltip: () => {
            return div(
                p(imgWiki('9d/Moonclan_Teleport.png'), aWiki('Moonclan Teleport')),
                reqLunar(),
                reqMagic(69),
                p(runeReq('earth', 2), runeReq('astral', 2), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Ourania Teleport',
        x: 3931,
        y: 2535,
        color: 'blue',
        renderTooltip: () => {
            return div(
                p(imgWiki('fb/Ourania_Teleport.png'), aWiki('Ourania Teleport')),
                reqLunar(),
                p(text('Requires speaking to '), aWiki('Baba Yaga')),
                reqMagic(71),
                p(runeReq('earth', 6), runeReq('astral', 2), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Waterbirth Teleport',
        x: 4188,
        y: 1013,
        color: 'blue',
        renderTooltip: () => {
            return div(
                p(imgWiki('41/Waterbirth_Teleport.png'), aWiki('Waterbirth Teleport')),
                reqLunar(),
                reqMagic(72),
                p(runeReq('water', 1), runeReq('astral', 2), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Barbarian Teleport',
        x: 4168,
        y: 1583,
        color: 'blue',
        renderTooltip: () => {
            return div(
                p(imgWiki('c3/Barbarian_Teleport.png'), aWiki('Barbarian Teleport')),
                reqLunar(),
                reqMagic(75),
                p(runeReq('fire', 3), runeReq('astral', 2), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Khazard Teleport',
        x: 4422,
        y: 2770,
        color: 'blue',
        renderTooltip: () => {
            return div(
                p(imgWiki('0c/Khazard_Teleport.png'), aWiki('Khazard Teleport')),
                reqLunar(),
                reqMagic(78),
                p(runeReq('water', 4), runeReq('astral', 2), runeReq('law', 2))
            );
        }
    },
    {
        name: 'Fishing Guild Teleport',
        x: 4379,
        y: 2111,
        color: 'blue',
        renderTooltip: () => {
            return div(
                p(imgWiki('e8/Fishing_Guild_Teleport.png'), aWiki('Fishing Guild Teleport')),
                reqLunar(),
                reqMagic(85),
                p(runeReq('water', 10), runeReq('astral', 3), runeReq('law', 3))
            );
        }
    },
    {
        name: 'Catherby Teleport',
        x: 4963,
        y: 1978,
        color: 'blue',
        renderTooltip: () => {
            return div(
                p(imgWiki('c3/Catherby_Teleport.png'), aWiki('Catherby Teleport')),
                reqLunar(),
                reqMagic(87),
                p(runeReq('water', 10), runeReq('astral', 3), runeReq('law', 3))
            );
        }
    },
    {
        name: 'Ice Plateau Teleport',
        x: 5460,
        y: 492,
        color: 'blue',
        renderTooltip: () => {
            return div(
                p(imgWiki('25/Ice_Plateau_Teleport.png'), aWiki('Ice Plateau Teleport')),
                reqLunar(),
                reqMagic(89),
                p(runeReq('water', 8), runeReq('astral', 3), runeReq('law', 3))
            );
        }
    },
    {
        name: 'Arceuus Home Teleport',
        x: 1676,
        y: 638,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('e2/Home_Teleport.png'), aWiki('Arceuus Home Teleport')),
                reqArceuus(),
                p(text('10s to cast')),
                p(text('30min cooldown'))
            );
        }
    },
    {
        name: 'Lumbridge Graveyard Teleport',
        x: 6278,
        y: 2699,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('0e/Lumbridge_Graveyard_Teleport.png'), aWiki('Lumbridge Graveyard Teleport')),
                reqArceuus(),
                reqMagic(6),
                p(runeReq('earth', 2), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Draynor Manor Teleport',
        x: 5873,
        y: 2261,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('72/Draynor_Manor_Teleport.png'), aWiki('Draynor Manor Teleport')),
                reqArceuus(),
                reqMagic(17),
                p(runeReq('earth', 1), runeReq('water', 1), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Battlefront Teleport',
        x: 592,
        y: 1056,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('97/Battlefront_Teleport.png'), aWiki('Battlefront Teleport')),
                reqArceuus(),
                reqMagic(23),
                p(runeReq('earth', 1), runeReq('fire', 1), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Mind Altar Teleport',
        x: 5478,
        y: 1779,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('a8/Mind_Altar_Teleport.png'), aWiki('Mind Altar Teleport')),
                reqArceuus(),
                reqMagic(28),
                p(runeReq('mind', 2), runeReq('law', 1))
            );
        }
    },
    {
        name: 'Respawn Teleport (Lumbridge)',
        x: 6238,
        y: 2650,
        color: 'lawngreen',
        renderTooltip: () => respawnTeleTemplate('Lumbridge'),
    },
    {
        name: 'Respawn Teleport (Falador)',
        x: 5448,
        y: 2260,
        color: 'lawngreen',
        renderTooltip: () => respawnTeleTemplate('Falador'),
    },
    {
        name: 'Respawn Teleport (Camelot)',
        x: 4836,
        y: 1859,
        color: 'lawngreen',
        renderTooltip: () => respawnTeleTemplate('Camelot'),
    },
    {
        name: 'Respawn Teleport (Edgeville)',
        x: 5827,
        y: 1849,
        color: 'lawngreen',
        renderTooltip: () => respawnTeleTemplate('Edgeville'),
    },
    // Unsure if Ardougne counts as a valid Respawn Teleport
    {
        name: 'Respawn Teleport (Prifddinas)',
        x: 3271,
        y: 2289,
        color: 'lawngreen',
        renderTooltip: () => respawnTeleTemplate('Prifddinas'),
    },
    {
        name: 'Salve Graveyard Teleport',
        x: 6843,
        y: 1897,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('82/Salve_Graveyard_Teleport.png'), aWiki('Salve Graveyard Teleport')),
                reqArceuus(),
                p(text('Requires completing '), aWiki('Priest in Peril')),
                reqMagic(40),
                p(runeReq('law', 1), runeReq('soul', 2))
            );
        }
    },
    {
        name: 'Fenkenstrain\'s Castle Teleport',
        x: 7188,
        y: 1699,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('49/Fenkenstrain\'s_Castle_Teleport.png'), aWiki('Fenkenstrain\'s Castle Teleport')),
                reqArceuus(),
                p(text('Requires completing '), aWiki('Priest in Peril')), // This is a guess based on the others
                reqMagic(48),
                p(runeReq('earth', 1), runeReq('law', 1), runeReq('soul', 1))
            );
        }
    },
    {
        name: 'West Ardougne Teleport',
        x: 4126,
        y: 2370,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('4f/West_Ardougne_Teleport.png'), aWiki('West Ardougne Teleport')),
                reqArceuus(),
                p(text('Requires completing '), aWiki('Biohazard')),
                reqMagic(61),
                p(runeReq('law', 2), runeReq('soul', 2))
            );
        }
    },
    {
        name: 'Harmony Island Teleport',
        x: 7918,
        y: 3812,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('f3/Harmony_Island_Teleport.png'), aWiki('Harmony Island Teleport')),
                reqArceuus(),
                p(text('Requires completing '), aWiki('The Great Brain Robbery')),
                reqMagic(65),
                p(runeReq('law', 1), runeReq('nature', 1), runeReq('soul', 1))
            );
        }
    },
    {
        name: 'Cemetery Teleport',
        x: 5474,
        y: 1030,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('19/Cemetery_Teleport.png'), aWiki('Cemetery Teleport')),
                reqArceuus(),
                reqMagic(71),
                p(runeReq('blood', 1), runeReq('law', 1), runeReq('soul', 1))
            );
        }
    },
    {
        name: 'Barrows Teleport',
        x: 7240,
        y: 2364,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('e1/Barrows_Teleport.png'), aWiki('Barrows Teleport')),
                reqArceuus(),
                p(text('Requires completing '), aWiki('Priest in Peril')),
                reqMagic(83),
                p(runeReq('blood', 1), runeReq('law', 2), runeReq('soul', 2))
            );
        }
    },
    {
        name: 'Ape Atoll Teleport (Arceuus)',
        x: 4830,
        y: 4138,
        color: 'springgreen',
        renderTooltip: () => {
            return div(
                p(imgWiki('f3/Ape_Atoll_Teleport_(Arceuus).png'), aWiki('Ape Atoll Teleport (Arceuus)')),
                reqArceuus(),
                p(text('Requires completing '), aWiki('Monkey Madness I'), text(' and training from '), aWiki('Daero')),
                reqMagic(90),
                p(runeReq('blood', 2), runeReq('law', 2), runeReq('soul', 2))
            );
        }
    },
    {
        name: 'aiq',
        x: 5525,
        y: 2949,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('aiq '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'air',
        x: 4644,
        y: 2537,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('air '), aWiki('Fairy ring'))
            )
        }
    },
    // TODO: ajq
    {
        name: 'ajr',
        x: 4882,
        y: 1440,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('ajr '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'ajs',
        x: 4045,
        y: 597,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('ajs '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'akq',
        x: 3500,
        y: 1437,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('akq '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'aks',
        x: 4254,
        y: 3412,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('aks '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'alp',
        x: 4050,
        y: 1372,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('alp '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'alq',
        x: 7340,
        y: 1798,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('alq '), aWiki('Fairy ring'))
            )
        }
    },
    // TODO alr
    {
        name: 'als',
        x: 4474,
        y: 1796,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('als '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'bip',
        x: 6770,
        y: 2310,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('bip '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'biq',
        x: 6290,
        y: 3003,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('biq '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'bis',
        x: 4450,
        y: 2482,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('bis '), aWiki('Fairy ring'))
            )
        }
    },
    // TODO bjr
    {
        name: 'bjs',
        x: 2987,
        y: 3079,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('bjs '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'bkp',
        x: 3696,
        y: 3175,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('bkp '), aWiki('Fairy ring'))
            )
        }
    },
    // TODO: bkq
    {
        name: 'bkr',
        x: 6948,
        y: 1987,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('bkr '), aWiki('Fairy ring'))
            )
        }
    },
    // TODO: bks
    // TODO: blp
    {
        name: 'blr',
        x: 4762,
        y: 2231,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('blr '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'cip',
        x: 4081,
        y: 627,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('cip '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'ciq',
        x: 4124,
        y: 2899,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('ciq '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'cir',
        x: 454,
        y: 999,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('cir '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'cis',
        x: 1457,
        y: 683,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('cis '), aWiki('Fairy ring')),
                p(text('Requires paying 80 000 coins to '), aWiki('Trossa'))
            )
        }
    },
    {
        name: 'cjr',
        x: 4655,
        y: 1554,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('cjr '), aWiki('Fairy ring'))
            )
        }
    },
    // TODO: ckp
    {
        name: 'ckr',
        x: 4945,
        y: 3270,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('ckr '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'cks',
        x: 6882,
        y: 1871,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('cks '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'clp',
        x: 5791,
        y: 2661,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('clp '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'clr',
        x: 4757,
        y: 4069,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('clr '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'cls',
        x: 4589,
        y: 3037,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('cls '), aWiki('Fairy ring'))
            )
        }
    },
    // TODO: dip
    // TODO: diq (teleport to house)
    // TODO: dir
    {
        name: 'dis',
        x: 5873,
        y: 2840,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('dis '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'djp',
        x: 4517,
        y: 2594,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('djp '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'djr',
        x: 901,
        y: 1308,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('djr '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'dkp',
        x: 5241,
        y: 2949,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('dkp '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'dkr',
        x: 5923,
        y: 1799,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('dkr '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'dks',
        x: 4775,
        y: 1123,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('dks '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'dlq',
        x: 6810,
        y: 3232,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('dlq '), aWiki('Fairy ring'))
            )
        }
    },
    {
        name: 'dlr',
        x: 3182,
        y: 2983,
        color: 'red',
        renderTooltip: () => {
            return div(
                p(text('dlr '), aWiki('Fairy ring'))
            )
        }
    },
    // TODO: dls
];

/// @file poi.js
/// @brief Creates an array called POI with subobjects {name, x, y, color, renderTooltip}. Requires tooltip.js

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
];
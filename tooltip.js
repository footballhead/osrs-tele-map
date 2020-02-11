/// @file tooltip.js
/// @brief Templates for tooltip writing. Requires wikidom.js

function reqAncientMagicks() {
    return p(text('Requires '), aWiki('Ancient Magicks'), text(' spellbook'));
}

function reqLunar() {
    return p(text('Requires '), aWiki('Lunar spells'), text(' spellbook'));
}

function reqMagic(magic) {
    return p(text('Requires ' + magic + ' Magic'));
}

function runeReq(rune, amt) {
    return span(imgRune(rune), text('x' + amt + ' '));
}

function teleToHouseTemplate(loc) {
    return div(
        p(imgWiki('88/Teleport_to_House.png'), aWiki('Teleport to House')),
        p(text('Requires a house in '), a('https://oldschool.runescape.wiki/w/Player-owned_house', loc)),
        reqMagic(40),
        p(runeReq('air', 1), runeReq('earth', 1), runeReq('law', 1))
    );
}

/// @file tooltip.js
/// @brief Templates for tooltip writing. Requires wikidom.js

function reqAncientMagicks() {
    return p(text('Requires '), aWiki('Ancient Magicks'), text(' spellbook'));
}

function reqLunar() {
    return p(text('Requires '), aWiki('Lunar spells'), text(' spellbook'));
}

function reqArceuus() {
    return p(text('Requires '), aWiki('Arceuus spellbook'));
}

function reqMagic(magic) {
    return p(text('Requires ' + magic + ' Magic'));
}

function runeReq(rune, amt) {
    return span(imgRune(rune), text('x' + amt + ' '));
}

function respawnTeleTemplate(loc) {
    return div(
        p(imgWiki('b9/Respawn_Teleport.png'), aWiki('Respawn Teleport')),
        reqArceuus(),
        p(text('Requires '), a('https://oldschool.runescape.wiki/w/Spawning#Respawn_point', 'respawn point in ' + loc)),
        reqMagic(34),
        p(runeReq('law', 1), runeReq('soul', 1))
    );
}

function teleToHouseTemplate(loc) {
    return div(
        p(imgWiki('88/Teleport_to_House.png'), aWiki('Teleport to House')),
        p(text('Requires a '), a('https://oldschool.runescape.wiki/w/Player-owned_house', 'house in ' + loc)),
        reqMagic(40),
        p(runeReq('air', 1), runeReq('earth', 1), runeReq('law', 1))
    );
}

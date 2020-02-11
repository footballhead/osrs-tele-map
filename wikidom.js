/// @file wikidom.js
/// @brief Convenience wrappers around dom.js for linking to OSRS Wiki https://oldschool.runescape.wiki

/// Create a link to a specific wiki page
/// @param text The article to link to
/// @return An anchor element for a given Wiki page
/// @notes The OSRS Wiki engine will translate spaces into %20, which the wiki will redirect to _
function aWiki(text) {
    const wikiBase = 'https://oldschool.runescape.wiki/w/';
    return a(wikiBase + text, text);
}

/// Create an image referencing OSRS Wiki hosted content
/// @param src Part of the imamge URL string, specifically `XY/file.ext` (e.g. 84/Teleport_map.png)
/// @return An image element referencing the given image.
function imgWiki(src) {
    // My suspicion is that the image is stored at a location based on the hash of the file contents.
    // The first directory after wikiBase is the first hex of the hash (0-9a-f) for organization.
    // Then the subdirectory is the first and second hex of the hash.
    // Then the file name follows.
    const wikiBase = 'https://oldschool.runescape.wiki/images/';
    // TODO: alt text
    return img(wikiBase + src.slice(0, 1) + '/' + src);
}

/// Get an image for a specific rune
/// @param rune A string name of the rune (i.e. air, astral, blood, etc.)
/// @return An image for that rune
function imgRune(rune) {
    switch (rune.toLowerCase()) {
        case 'air': return imgWiki('bf/Air_rune.png');
        case 'astral': return imgWiki('5e/Astral_rune.png');
        case 'blood': return imgWiki('2a/Blood_rune.png');
        case 'earth': return imgWiki('d2/Earth_rune.png');
        case 'fire': return imgWiki('a2/Fire_rune.png');
        case 'law': return imgWiki('f6/Law_rune.png');
        case 'soul': return imgWiki('9b/Soul_rune.png');
        case 'water': return imgWiki('d1/Water_rune.png');
        case 'banana': return imgWiki('69/Banana.png');
    }
}

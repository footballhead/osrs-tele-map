/// @file dom.js
/// @brief Functions for easily manipulating/creating DOM elements.

/// Create an <a> element.
/// @param link The URL string for the link
/// @param text A string of text to use for the anchor
/// @returns A new <a> element: <a href="link">text</a>
function a(link, text) {
    var anchor = document.createElement('a');
    anchor.href = link;
    // TODO: anchor.target
    anchor.appendChild(document.createTextNode(text));
    return anchor;
}

/// Create a text node, good for spans, paragraphs, and divs.
/// @param txt The string text to use for the element
/// @returns A text element (basically the absense of a tag)
function text(txt) {
    return document.createTextNode(txt);
}

/// Create an <img> element
/// @param src The URL string to locate the image
/// @return <img src="src">
function img(src) {
    var img = document.createElement('img');
    img.src = src;
    // TODO: alt text
    return img;
}

/// Create a <span> element
/// @params ...children A bunch of DOM nodes to wrap as children in a span
/// @returns A new <span>...children</span>
function span(...children) {
    var span = document.createElement('span');
    children.forEach(child => span.appendChild(child));
    return span;
}

/// Create a <p> element
/// @params ...children A bunch of DOM nodes to wrap as children
/// @returns A new <p>...children</p>
function p(...children) {
    var p = document.createElement('p');
    children.forEach(child => p.appendChild(child));
    return p;
}

/// Create a <div> element
/// @params ...children A bunch of DOM nodes to wrap as children
/// @returns A new <div>...children</div>
function div(...children) {
    var div = document.createElement('div');
    children.forEach(child => div.appendChild(child));
    return div;
}

/* 
 * Copyright (C) 2025-present YouGo (https://github.com/youg-o)
 * This program is licensed under the GNU Affero General Public License v3.0.
 * You may redistribute it and/or modify it under the terms of the license.
 * 
 * Attribution must be given to the original author.
 * This program is distributed without any warranty; see the license for details.
 */

// Function to dynamically check if current page is search results
function isSearchResultsPage(): boolean {
    return window.location.pathname === '/results'
        || window.location.pathname === '/feed/history'
        || window.location.pathname === '/feed/subscriptions';
}


function isVideoPage(): boolean {
    return window.location.pathname === '/watch';
}

function isMobileSite(): boolean {
    return window.location.hostname === 'm.youtube.com';
}

function isYouTubeMusic(): boolean {
    return window.location.hostname === 'music.youtube.com';
}

/**
 * Checks if the current page is an embedded video player (e.g. youtube-nocookie.com/embed/...)
 */
function isEmbedVideo(): boolean {
    return window.location.pathname.startsWith('/embed/');
}

/**
 * Checks if the current context is an iframe that should be ignored by the extension
 * (e.g. live chat, background auth pages, etc.).
 * Returns true if we are in an iframe AND it is not an embedded video player.
 */
function isIrrelevantIframe(): boolean {
    // If we are in the top window, we are relevant.
    if (window === window.top) {
        return false;
    }

    // If we are in an iframe, we are only relevant if it's an embed player.
    return !isEmbedVideo();
}

export { isSearchResultsPage, isVideoPage, isMobileSite, isYouTubeMusic, isEmbedVideo, isIrrelevantIframe };
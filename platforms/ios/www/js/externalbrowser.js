
function openSystemBrowser(externalLink) {
    window.open(externalLink, '_system', 'location=yes');
}

document.addEventListener("deviceready", openSystemBrowser(), false);
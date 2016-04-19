
function openSystemBrowser(externalLink) {
    window.open(externalLink, '_system');
}

document.addEventListener("deviceready", openSystemBrowser(), false);
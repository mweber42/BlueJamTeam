chrome.runtime.onInstalled.addListener(function() {
    alert("Merci d'avoir installé / mis à jour Blue !");
});
chrome.webNavigation.onCompleted.addListener(function() {
    alert("Tu as chargé google");
}, {url: [{urlMatches: "google.fr"}]});
chrome.browserAction.setBadgeText({ text: 'ON' });
chrome.browserAction.setBadgeBackgroundColor({ color:'red' });
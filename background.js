// Downloads the file after getting a message from content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "download") {
    chrome.downloads.download({ url: request.url }, downloadId => {
      if(chrome.runtime.lastError) {
        console.error("Download Failed: ", chrome.runtime.lastError.message);
        return;
      }

      console.log(`Download started: ${downloadId}`);
    });
  }
});

// Injects the content script when the extension button is clicked
chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: injectContentScript,
  });
});

function injectContentScript() {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("content.js");
  script.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(script);
}



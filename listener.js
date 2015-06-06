function processDOM(dom) {
    console.log(dom);
};

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("Executing..");
    chrome.tabs.sendMessage(tab.id, {text: "fill_all_forms"}, processDOM);
});

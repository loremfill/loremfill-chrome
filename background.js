chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {
        text: "fill_all_forms"
    }, function() {});
});

chrome.contextMenus.create({
    id: "context_menu_lorem_fill_this_page",
    title: "Lorem Fill this page",
    contexts: ["page"]
});

chrome.contextMenus.create({
    id: "context_menu_lorem_fill_this_element",
    title: "Lorem Fill this single element",
    contexts: ["editable"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "context_menu_lorem_fill_this_page") {
        chrome.tabs.sendMessage(tab.id, {
            text: "fill_all_forms"
        }, function() {});
    }
    if (info.menuItemId === "context_menu_lorem_fill_this_element") {
        chrome.tabs.sendMessage(tab.id, {
            text: "fill_single_element"
        }, function() {});
    }
});
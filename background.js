function send_fill_all_forms(tab) {
    chrome.tabs.sendMessage(tab.id, {
        text: "fill_all_forms"
    }, function() {});
};

function send_fill_single_element(tab) {
    chrome.tabs.sendMessage(tab.id, {
        text: "fill_single_element"
    }, function() {});
};

chrome.contextMenus.create({
    id: "context_menu_lorem_fill_this_page",
    title: "Lorem Fill this page ⌘⇧1",
    contexts: ["page"]
});

chrome.contextMenus.create({
    id: "context_menu_lorem_fill_this_element",
    title: "Lorem Fill this single element",
    contexts: ["editable"]
});

chrome.browserAction.onClicked.addListener(send_fill_all_forms);

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "context_menu_lorem_fill_this_page") {
        send_fill_all_forms(tab);
    }
    if (info.menuItemId === "context_menu_lorem_fill_this_element") {
        send_fill_single_element(tab);
    }
});

chrome.commands.onCommand.addListener(function(command) {
    if (command === 'trigger_fill_all_forms') {
        chrome.tabs.getSelected(function(tab){
            send_fill_all_forms(tab);
        })
    }
});

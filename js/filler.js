var contextElement = null;
document.addEventListener("contextmenu", function(event) {
    if (event && event.target) {
        contextElement = event.target;
    }
});

chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    Store.refresh();
    S.extendPrototype();
    var elements = new Elements();
    if (msg.text && msg.text === 'fill_all_forms') {
        elements.perform();
    }
    if (msg.text && msg.text === "fill_single_element") {
        if (contextElement) {
            contextElement = $(contextElement);
            elements.process(contextElement);
        }
        if (callback) {
            callback.call(this);
        }
    }
});

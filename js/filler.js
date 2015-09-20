chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    Store.refresh();
    S.extendPrototype();
    if (msg.text && msg.text === 'fill_all_forms') {
        var elements = new Elements();
        elements.perform();
    }
    if (msg.text && msg.text === "fill_single_element") {
        if (contextElement) {
            contextElement = $(contextElement);
            var elements = new Elements();
            elements.process(contextElement);
        }
        if (callback) {
            callback.call(this);
        }
    }
});

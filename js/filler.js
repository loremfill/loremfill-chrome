var contextElement = null;
var store = null;

chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    S.extendPrototype();
    store = new Store();
    store.refresh(function() {
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
});

document.addEventListener("contextmenu", function(event) {
    if (event && event.target) {
        contextElement = event.target;
    }
});

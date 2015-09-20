var SKIP_CONTROL = '__SKIP_CONTROL__';
chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    Store.refresh();
    S.extendPrototype();
    if (msg.text && msg.text === 'fill_all_forms') {
        var inputs = jQuery(document).find("input[type='text'], input[type='password'], input[type='email'], input[type='number'], input[type='tel'], input[type='url'], textarea, select");
        inputs.each(function(j, input) {
            input = jQuery(input);
            if (input.is(":visible") && !input.is("[readonly]")) {
                var value = decide(input);
                if (value !== SKIP_CONTROL) {
                    populateValue(input, value);
                }
            }
        });
    }
    if (msg.text && msg.text === "fill_single_element") {
        if (contextElement) {
            contextElement = jQuery(contextElement);
            var value = decide(contextElement);
            if (value !== SKIP_CONTROL) {
                populateValue(contextElement, value);
            }
        }
        if (callback) {
            callback.call(this);
        }
    }
});

function populateValue(input, value) {
    input.val(value);
    var changeEvent = document.createEvent('Event');
    changeEvent.initEvent('change', true, true);
    input.get(0).dispatchEvent(changeEvent);
}

function decide(input) {
    var value;
    var strategies = [NameAttributeStrategy, ClassAttributeStrategy, LabelAttributeStrategy, PlaceholderAttributeStrategy, AngularModelStrategy, TypeAttributeStrategy];
    for(var i=0; i<strategies.length; i++) {
        var strategy = strategies[i];
        value = strategy.execute(input);
        if (value) {
            return value;
        }
    }
    return chance.sentence();
}

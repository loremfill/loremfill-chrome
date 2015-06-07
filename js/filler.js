chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    if (msg.text && msg.text === 'fill_all_forms') {
        S.extendPrototype();
        var inputs = jQuery(document).find("input[type='text'], input[type='password'], input[type='email'], input[type='number'], input[type='tel'], textarea");
        inputs.each(function(j, input) {
            input = jQuery(input)
            if (input.is(":visible") && !input.is("[readonly]")) {
                var value = decide(input);
                input.val(value);
            }
        });
    }
});

var strategies = [NameAttributeStrategy, ClassAttributeStrategy];
function decide(input) {
    var value;
    for(var i=0; i<strategies.length; i++) {
        var strategy = strategies[i];
        value = strategy.execute(input);
        if (value && value != null) {
            break;
        }
    }
    return value ? value : chance.sentence();
}


chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    if (msg.text && msg.text === 'fill_all_forms') {
        S.extendPrototype();
        var inputs = jQuery(document).find("input[type='text'], input[type='textarea'], input[type='password'], input[type='email'], input[type='number']");
        inputs.each(function(j, input) {
            input = jQuery(input)
            if (input.is(":visible")) {
                var value = decide(input);
                input.val(value);
            }
        });
    }
});

var NameAttributeStrategy = {
    decide : function(value, input) {
        if (value && value !== "") {
            return value;
        }
        var nameAttribute = input.attr('name');
        if (nameAttribute) {
            if (nameAttribute.contains("name") || nameAttribute.contains("Name")) {
                return chance.name();
            }
            if (nameAttribute.contains("email")) {
                return chance.email();
            }
            if (nameAttribute.contains("phone") || nameAttribute.contains("mobile")) {
                return chance.phone();
            }
            if (nameAttribute.contains("password")) {
                return "p@ssw0rd";
            }
        }
        return "";
    }
};

function decide(input) {
    var strategies = [NameAttributeStrategy];
    var value = "";
    strategies.every(function(strategy) {
        value = strategy.decide(value, input);
    });
    return value;
}


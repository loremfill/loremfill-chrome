var NameAttributeStrategy = {
    execute: function(input) {
        var attr = input.attr('name');
        return attr ? ValueDecider.decide(attr) : null;
    }
};

var ClassAttributeStrategy = {
    execute: function(input) {
        var attr = input.attr('class');
        return attr ? ValueDecider.decide(attr) : null;
    }
};

var TypeAttributeStrategy = {
    execute: function(input) {
        var type = input.attr('type');
        if (input[0].tagName.toUpperCase() === 'SELECT') {
            type = input[0].tagName;
        }
        if (input[0].tagName.toUpperCase() === 'TEXTAREA') {
            type = input[0].tagName;
        }
        switch (type.toLowerCase()) {
            case 'select':
                return SelectOptionDecider.decide(input);
            case 'text':
            case 'textarea':
            default:
                return null;
        }
        if (type && (type === 'text' || type === 'textarea')) {
            return null;
        }
        return type ? ValueDecider.decide(type) : null;
    }
};

var LabelAttributeStrategy = {
    execute: function(input) {
        var id = input.attr('id');
        if (id) {
            var label = $("label[for='" + id + "']").text();
            return label ? ValueDecider.decide(label) : null;
        }
        return null;
    }
};

var PlaceholderAttributeStrategy = {
    execute: function(input) {
        var type = input.attr('placeholder');
        return type ? ValueDecider.decide(type) : null;
    }
};
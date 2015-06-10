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
}

var PlaceholderAttributeStrategy = {
    execute: function(input) {
        var type = input.attr('placeholder');
        return type ? ValueDecider.decide(type) : null;
    }
}

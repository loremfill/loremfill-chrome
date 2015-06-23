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
        if (input[0].tagName.toLowerCase() === 'select') {
            type = input[0].tagName.toLowerCase();
        }
        if (input[0].tagName.toLowerCase() === 'textarea') {
            type = input[0].tagName.toLowerCase();
        }
        type = type && type.toLowerCase();
        if (type === 'select') {
            return SelectOptionDecider.decide(input);
        }
        if (type === 'text' || type === 'textarea') {
            return null;
        } else {
            return ValueDecider.decide(type);
        }
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

var AngularModelStrategy = {
    execute: function(input) {
        var ng_model = input.attr('ng-model');
        return ng_model ? ValueDecider.decide(ng_model) : null;
    }
}
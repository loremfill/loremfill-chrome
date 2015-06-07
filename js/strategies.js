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

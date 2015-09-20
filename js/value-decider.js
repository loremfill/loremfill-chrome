var ValueDecider = {
    decide: function(attr) {
        var factory = new MatcherFactory();
        return factory.get(attr.humanize().s).value();
    }
};

var SelectOptionDecider = {
    decide: function(input) {
        var options = input.find("option");
        var values = $.map(options ,function(option) {
            return option.value;
        });
        return chance.pick(values);
    }
};

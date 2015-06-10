var SelectOptionDecider = {
    decide: function(input) {
        var options = input.find("option");
        var values = $.map(options ,function(option) {
            return option.value;
        });
        return chance.pick(values);
    }
};
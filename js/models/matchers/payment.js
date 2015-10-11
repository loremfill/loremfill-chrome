var AmountMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/price/gi) || attr.match(/amount/gi));
    },
    value: function() {
        return chance.floating({
            fixed: 2,
            min: 1,
            max: 999
        });
    }
});

var CCMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/cc/gi) || attr.match(/card/gi) ||
        attr.match(/debit/gi) || attr.match(/credit/gi));
    },
    value: function() {
        return store.getRandomCC() || chance.cc({
            type: 'Visa'
        });
    }
});

var CVVMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/cvv/gi) || attr.match(/cvv2/gi));
    },
    value: function() {
        return "123";
    }
});

var NumberMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/number/gi) || attr.match(/duration/gi) || attr.match(/min/gi) || attr.match(/count/gi) || attr.match(/capacity/gi));
    },
    value: function() {
        return chance.integer({
            min: 1,
            max: 100
        });
    }
});

var YearMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && attr.match(/year/gi);
    },
    value: function() {
        return chance.year();
    }
});

var RangeMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && attr.match(/max/gi);
    },
    value: function() {
        return chance.integer({
            min: 101,
            max: 999
        });
    }
});

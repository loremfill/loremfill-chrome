var FullNameMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && attr.match(/name/gi) && !(
            FirstNameMatcher.prototype.supports(attr) ||
            LastNameMatcher.prototype.supports(attr)
        );
    },
    value: function() {
        return chance.name();
    }
});

var FirstNameMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && attr.match(/first/gi);
    },
    value: function() {
        return chance.first();
    }
});

var LastNameMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/last/gi) || attr.match(/middle/gi) ||
        attr.match(/surname/gi));
    },
    value: function() {
        return chance.last();
    }
});

var PhoneMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr === 'tel' || attr.match(/phone/gi) || attr.match(/mobile/gi) || attr.match(/contact/gi) || attr.match(/cellphone/gi));
    },
    value: function() {
        return chance.phone({formatted: false});
    }
});

var HeightMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/height/gi) || attr.match(/length/gi));
    },
    value: function() {
        return chance.integer({
            min: 4,
            max: 100
        });
    }
});

var WeightMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/weight/gi) || attr.match(/pounds/gi) || attr.match(/lbs/gi) || attr.match(/kg/gi) || attr.match(/quantity/gi));
    },
    value: function() {
        return chance.integer({
            min: 75,
            max: 200
        });
    }
});

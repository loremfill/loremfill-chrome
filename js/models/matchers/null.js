var NullMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return true;
    },

    value: function() {
        return undefined;
    }
});

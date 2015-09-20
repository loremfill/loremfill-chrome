var UserNameMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && attr.match(/user/gi) && attr.match(/name/gi);
    },
    value: function() {
        return chance.word();
    }
});

var EmailMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && attr.match(/email/gi);
    },
    value: function() {
        var allowedDomains = S(Store.domains).parseCSV(',', "'");
        var domain = chance.pick(allowedDomains);
        return chance.email({
            domain: domain
        });
    }
});

var PasswordMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && attr.match(/password/gi);
    },
    value: function() {
        return Store.password;
    }
});

var UrlMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/web/gi) || attr.match(/url/gi));
    },
    value: function() {
        return chance.domain();
    }
});

var CaptchaMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/captcha/gi) || attr.match(/challenge/gi));
    },
    value: function() {
        return "";
    }
});

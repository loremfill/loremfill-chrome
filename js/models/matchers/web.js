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
        var domain = store.getRandomDomain();
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
        return store.getPassword();
    }
});

var UrlMatcher = Backbone.Model.extend({
    supports: function(attr) {
        return attr && (attr.match(/web/gi) || attr.match(/url/gi));
    },
    value: function() {
        return "https://" + chance.domain();
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

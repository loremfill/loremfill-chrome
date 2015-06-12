var ValueDecider = {
    decide: function(attr) {
        var matchers = [NameMatcher, UserNameMatcher, EmailMatcher, CityMatcher, ZipMatcher, AddressMatcher, PhoneMatcher, UrlMatcher, PasswordMatcher, AmountMatcher, NumberMatcher, RangeMatcher, CompanyMatcher, CaptchaMatcher];
        for (var i=0; i < matchers.length; i++) {
            var matcher = matchers[i];
            var value = matcher.call(this, attr.humanize().s);
            if (value) {
                return value;
            }
        }
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

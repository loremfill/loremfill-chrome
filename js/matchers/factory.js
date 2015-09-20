var MatcherFactory = Backbone.Model.extend({
    matchers: [
        new FullNameMatcher,
        new FirstNameMatcher,
        new LastNameMatcher,
        new PhoneMatcher,
        new HeightMatcher,
        new WeightMatcher,
        new UserNameMatcher,
        new EmailMatcher,
        new PasswordMatcher,
        new UrlMatcher,
        new CaptchaMatcher,
        new AmountMatcher,
        new CCMatcher,
        new CVVMatcher,
        new CompanyMatcher,
        new CityMatcher,
        new ZipMatcher,
        new AddressMatcher,
        new NumberMatcher,
        new RangeMatcher,
        new NullMatcher
    ],

    get: function(attr) {
        for(var i=0; i<this.matchers.length; i++) {
            var matcher = this.matchers[i];
            if(matcher.supports(attr)) {
                return matcher;
            }
        }
    }
});

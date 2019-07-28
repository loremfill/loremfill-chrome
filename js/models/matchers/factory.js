class MatcherFactory {
  matchers = () => [
    new FullNameMatcher(),
    new FirstNameMatcher(),
    new LastNameMatcher(),
    new PhoneMatcher(),
    new HeightMatcher(),
    new WeightMatcher(),
    new UserNameMatcher(),
    new EmailMatcher(),
    new PasswordMatcher(),
    new UrlMatcher(),
    new CaptchaMatcher(),
    new AmountMatcher(),
    new CCMatcher(),
    new CVVMatcher(),
    new CompanyMatcher(),
    new CityMatcher(),
    new ZipMatcher(),
    new AddressMatcher(),
    new YearMatcher(),
    new NumberMatcher(),
    new RangeMatcher(),
    new NullMatcher(),
  ];

  get = attr => {
    const matchers = this.matchers();
    for (var i = 0; i < matchers.length; i++) {
      let matcher = matchers[i];
      if (matcher.supports(attr)) {
        return matcher;
      }
    }
  };
}

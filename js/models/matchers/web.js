class UserNameMatcher {
  supports = attr => {
    return attr && attr.match(/user/gi) && attr.match(/name/gi);
  };

  value = () => {
    return chance.word();
  };
}

class EmailMatcher {
  supports = attr => {
    return attr && attr.match(/email/gi);
  };

  value = () => {
    let domain = store.getRandomDomain();
    return chance.email({
      domain: domain,
    });
  };
}

class PasswordMatcher {
  supports = attr => {
    return attr && attr.match(/password/gi);
  };

  value = () => {
    return store.getPassword();
  };
}

class UrlMatcher {
  supports = attr => {
    return attr && (attr.match(/web/gi) || attr.match(/url/gi));
  };

  value = () => {
    return 'https://' + chance.domain();
  };
}

class CaptchaMatcher {
  supports = attr => {
    return attr && (attr.match(/captcha/gi) || attr.match(/challenge/gi));
  };

  value = () => {
    return '';
  };
}

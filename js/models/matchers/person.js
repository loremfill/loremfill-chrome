class FullNameMatcher {
  supports = attr => {
    return (
      attr && attr.match(/name/gi) && !(new FirstNameMatcher().supports(attr) || new LastNameMatcher().supports(attr))
    );
  };

  value = () => {
    return chance.name();
  };
}

class FirstNameMatcher {
  supports = attr => {
    return attr && attr.match(/first/gi);
  };

  value = () => {
    return chance.first();
  };
}

class LastNameMatcher {
  supports = attr => {
    return attr && (attr.match(/last/gi) || attr.match(/middle/gi) || attr.match(/surname/gi));
  };

  value = () => {
    return chance.last();
  };
}

class PhoneMatcher {
  supports = attr => {
    return (
      attr &&
      (attr === 'tel' ||
        attr.match(/phone/gi) ||
        attr.match(/mobile/gi) ||
        attr.match(/contact/gi) ||
        attr.match(/cellphone/gi))
    );
  };

  value = () => {
    return chance.phone({ formatted: false });
  };
}

class HeightMatcher {
  supports = attr => {
    return attr && (attr.match(/height/gi) || attr.match(/length/gi));
  };

  value = () => {
    return chance.integer({
      min: 4,
      max: 100,
    });
  };
}

class WeightMatcher {
  supports = attr => {
    return (
      attr &&
      (attr.match(/weight/gi) ||
        attr.match(/pounds/gi) ||
        attr.match(/lbs/gi) ||
        attr.match(/kg/gi) ||
        attr.match(/quantity/gi))
    );
  };

  value = () => {
    return chance.integer({
      min: 75,
      max: 200,
    });
  };
}

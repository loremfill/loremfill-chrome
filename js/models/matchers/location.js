class CompanyMatcher {
  supports = attr => {
    return attr && (attr.match(/company/gi) || attr.match(/business/gi) || attr.match(/organization/gi));
  };

  value = () => {
    return S(chance.word()).capitalize().s + ' Inc.';
  };
}

class CityMatcher {
  supports = attr => {
    return attr && (attr.match(/city/gi) || attr.match(/location/gi) || attr.match(/town/gi) || attr.match(/county/gi));
  };

  value = () => {
    return chance.city();
  };
}

class ZipMatcher {
  supports = attr => {
    return attr && (attr.match(/zip/gi) || attr.match(/pincode/gi) || attr.match(/zipcode/gi));
  };

  value = () => {
    return chance.zip();
  };
}

class AddressMatcher {
  supports = attr => {
    return attr && attr.match(/address/gi);
  };

  value = () => {
    return chance.address();
  };
}

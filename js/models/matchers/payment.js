class AmountMatcher {
  supports = attr => {
    return attr && (attr.match(/price/gi) || attr.match(/amount/gi));
  };

  value = () => {
    return chance.floating({
      fixed: 2,
      min: 1,
      max: 999,
    });
  };
}

class CCMatcher {
  supports = attr => {
    return attr && (attr.match(/cc/gi) || attr.match(/card/gi) || attr.match(/debit/gi) || attr.match(/credit/gi));
  };

  value = () => {
    return (
      store.getRandomCC() ||
      chance.cc({
        type: 'Visa',
      })
    );
  };
}

class CVVMatcher {
  supports = attr => {
    return attr && (attr.match(/cvv/gi) || attr.match(/cvv2/gi));
  };

  value = () => {
    return '123';
  };
}

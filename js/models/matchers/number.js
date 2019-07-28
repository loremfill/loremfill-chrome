class NumberMatcher {
  supports = attr => {
    return (
      attr &&
      (attr.match(/number/gi) ||
        attr.match(/duration/gi) ||
        attr.match(/min/gi) ||
        attr.match(/count/gi) ||
        attr.match(/capacity/gi))
    );
  };

  value = () => {
    return chance.integer({
      min: 1,
      max: 100,
    });
  };
}

class YearMatcher {
  supports = attr => {
    return attr && attr.match(/year/gi);
  };

  value = () => {
    return chance.year();
  };
}

class RangeMatcher {
  supports = attr => {
    return attr && attr.match(/max/gi);
  };

  value = () => {
    return chance.integer({
      min: 101,
      max: 999,
    });
  };
}

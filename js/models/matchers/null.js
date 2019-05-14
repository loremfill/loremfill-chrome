class NullMatcher {
  supports = attr => {
    return true;
  };

  value = () => {
    return undefined;
  };
}

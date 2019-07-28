class TextStrategy {
  strategies = () => {
    return {
      id: element => element.attr('id'),
      name: element => element.attr('name'),
      class: element => element.attr('class'),
      label: element => {
        let id = element.attr('id');
        if (id) {
          let label = $("label[for='" + id + "']").text();
          return label;
        }
      },
      placeholder: element => element.attr('placeholder'),
      angular: element => element.attr('ng-model'),
      ngReflect: element => element.attr('ng-reflect-name'),
      type: element => element.attr('type'),
    };
  };

  decide = element => {
    let factory = new MatcherFactory();
    const strategies = this.strategies();
    for (let attributeType in strategies) {
      if (strategies.hasOwnProperty(attributeType)) {
        let value = strategies[attributeType].call(this, element);
        let randomValue = factory.get(value).value();
        if (randomValue) {
          return randomValue;
        }
      }
    }
    return chance.word({length: 12});
  };
}

class SelectStrategy {
  decide = element => {
    let options = element.find('option');
    let values = $.map(options, function(option) {
      return option.value;
    });
    return chance.pick(values);
  };
}

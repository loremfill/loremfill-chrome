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
    for (let attribute_type in strategies) {
      if (strategies.hasOwnProperty(attribute_type)) {
        let value = strategies[attribute_type].call(this, element);
        let random_value = factory.get(value).value();
        if (random_value) {
          return random_value;
        }
      }
    }
    return chance.word();
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

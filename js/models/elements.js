class Elements {
  types = () => [
    'input[type="text"]',
    'input[type="password"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="tel"]',
    'input[type="url"]',
    'input[type="phone"]',
    'input',
    'textarea',
    'select',
  ];

  perform = () => {
    let elements = $(document).find(this.types().join(','));
    let self = this;
    elements.each((j, el) => {
      self.process(el);
    });
  };

  process = el => {
    let element = $(el);
    if (this.available(element)) {
      let strategy = new TextStrategy();
      if (element.get(0).tagName.toLowerCase() === 'select') {
        strategy = new SelectStrategy();
      }
      let value = strategy.decide(element);
      this.populateValue(element, value);
    }
  };

  populateValue = (element, value) => {
    let message = '[loremfill][{{time}}] {{tagName}}[{{name}}] = {{value}}';
    let now = new Date();
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    let templateValues = {
      time: time,
      tagName: element.get(0).tagName,
      name: element.attr('name'),
      value: value,
    };
    console.debug(S(message).template(templateValues).s);
    new PopulateManager().populate(element, value);
  };

  available = element => {
    return element.is(':visible') && !element.is('[readonly]') && !element.is('[disabled]');
  };
}

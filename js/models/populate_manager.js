class PopulateManager {
  populate = (element, value) => {
    if (store.get('simulant') === true) {
      new SimulantPopulator().populate(element, value);
    } else {
      new DefaultPopulator().populate(element, value);
    }
  };
}

class SimulantPopulator {
  populate = (element, value) => {
    simulant.fire(element[0], simulant('focus'));
    element.val(value);
    simulant.fire(element[0], simulant('input'));
    simulant.fire(element[0], simulant('change'));
    simulant.fire(element[0], simulant('blur'));
  };
}

class DefaultPopulator {
  populate = (element, value) => {
    element.val(value);
    this.fireEvent(element.get(0), 'change');
    this.fireEvent(element.get(0), 'blur');
  };

  fireEvent = (element, event) => {
    let changeEvent = new Event(event, {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    changeEvent.target = element;
    changeEvent.currentTarget = element;
    let canceled = !element.dispatchEvent(changeEvent);
    if (canceled) {
      console.log('Event ' + event + ' was canceled');
    }
  };
}

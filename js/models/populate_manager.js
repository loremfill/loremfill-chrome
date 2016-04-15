var PopulateManager = Backbone.Model.extend({
  populate: function(element, value) {
    if (store.get('react') === true) {
      new ReactPopulator().populate(element, value);
    } else {
      new DefaultPopulator().populate(element, value);
    }
  }
});

var ReactPopulator = Backbone.Model.extend({
  populate: function(element, value) {
    simulant.fire(element[0], simulant('focus'));
    element.val(value);
    simulant.fire(element[0], simulant('input'));
    simulant.fire(element[0], simulant('change'));
    simulant.fire(element[0], simulant('blur'));
  }
});

var DefaultPopulator = Backbone.Model.extend({
  populate: function(element, value) {
    element.val(value);
    this.fireEvent(element.get(0), 'change');
    this.fireEvent(element.get(0), 'blur');
  },

  fireEvent: function(element, event) {
      var changeEvent = new Event(event, {
          view: window,
          bubbles: true,
          cancelable: true
      });
      changeEvent.target = element;
      changeEvent.currentTarget = element;
      var canceled = !element.dispatchEvent(changeEvent);
      if (canceled) {
          console.log("Event " + event + " was canceled");
      }
  },
});

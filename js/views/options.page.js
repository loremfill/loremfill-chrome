$(document).ready(function() {
  store = new Store();
  store.refresh(() => {
    let view = new OptionsView({
      model: store,
      el: '#options-container',
    });
    view.render();
  });
});

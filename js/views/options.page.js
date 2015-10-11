$(document).ready(function() {
    store = new Store();
    store.refresh(function() {
        var view = new OptionsView({
            model: store,
            el: '#options-container'
        });
        view.render();        
    });
});
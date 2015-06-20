var Store = {
    get: function(key, defaultValue, element) {
        var query = {};
        query[key] = defaultValue;
        chrome.storage.sync.get(query, function(item) {
            element.val(item[key])
        });
    },
    
    set: function(payload, showMessage) {
        chrome.storage.sync.set(payload, function() {
            if (showMessage) {
                jQuery(".ui.success.message").removeClass('hidden');
            }
        });
    }
};

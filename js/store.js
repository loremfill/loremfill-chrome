var Defaults = {
    password: 'p@ssw0rd',
    domains: 'host.test, host.local, host.invalid, example.com'
};

var Store = {
    password: Defaults.password,
    domains: Defaults.domains,

    refresh: function(callback) {
        var self = this;
        var query = {};
        query['password'] = Defaults.password;
        query['domains'] = Defaults.domains;
        chrome.storage.sync.get(query, function(item) {
            self.password = item.password;
            self.domains = item.domains;
            if(callback) {
                callback.call(this);
            }
        });
    },
    
    set: function(payload, showMessage) {
        var self = this;
        chrome.storage.sync.set(payload, function() {
            self.refresh();
            if (showMessage) {
                jQuery(".ui.success.message").removeClass('hidden');
            }
        });
    }
};

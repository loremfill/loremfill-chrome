class Store extends Backbone.Model {
  defaults = () => {
    return {
      password: 'p@ssw0rd',
      domains: 'host.test, host.local, host.invalid, example.com',
      cc: '',
      simulant: true,
    };
  };

  reset = options => {
    this.save(this.defaults(), options);
  };

  refresh = callback => {
    let self = this;
    let query = {};
    query['password'] = this.defaults().password;
    query['domains'] = this.defaults().domains;
    query['cc'] = this.defaults().cc;
    query['simulant'] = this.defaults().simulant;
    chrome.storage.sync.get(query, function(item) {
      self.set('password', item.password);
      self.set('domains', item.domains);
      self.set('cc', item.cc);
      self.set('simulant', item.simulant);
      if (callback) {
        callback.call(this);
      }
    });
  };

  save = (payload, options) => {
    let self = this;
    chrome.storage.sync.set(payload, function() {
      self.refresh();
      if (options.success) {
        options.success.call(this);
      }
    });
  };

  getRandomCC = () => {
    let configured = this.get('cc');
    if (_.isEmpty(configured)) {
      return null;
    }
    let list = S(configured)
      .trim()
      .parseCSV(',', "'");
    return chance.pick(list);
  };

  getRandomDomain = () => {
    let configured = this.get('domains');
    if (_.isEmpty(configured)) {
      return null;
    }
    let list = S(configured)
      .trim()
      .parseCSV(',', "'");
    return chance.pick(list);
  };

  getPassword = () => {
    return this.get('password');
  };
}

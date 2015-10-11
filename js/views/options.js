var OptionsView = Backbone.View.extend({
    events: {
        'click .btn.submit': 'onSubmit',
        'click .on-reset-domains': 'onDomainsReset',
        'click .on-reset-password': 'onPasswordReset',
        'click .on-reset-cc': 'onCCReset'
    },
    
    initialize: function() {
        _.bindAll(this, 'onSuccess', 'onSubmit');
    },

    template: function() {
        return $("#options-template").html();
    },

    data: function() {
        if (this.model) {
            return this.model.toJSON();
        }
        return {};
    },

    render: function() {
        Backbone.View.prototype.render.call(this);
        var template = _.template(this.template());
        var html = template(this.data());
        this.$el.empty().append(html);
        return this;
    },

    onSubmit: function() {
        var password = this.$el.find('[name="password"]').val();
        var domains = this.$el.find('[name="domains"]').val();
        var cc = this.$el.find('[name="cc"]').val();
        var payload = {
            password: password,
            domains: domains,
            cc: cc
        };
        this.model.save(payload, {
            success: this.onSuccess
        });
    },
    
    onDomainsReset: function(e) {
        this.reset(e, 'domains');
    },
    
    onPasswordReset: function(e) {
        this.reset(e, 'password');
    },
    
    onCCReset: function(e) {
        this.reset(e, 'cc');
    },
    
    reset: function(e, attribute) {
        var value = this.model.defaults()[attribute];
        $(e.target).parent().parent().find('input').val(value);
    },
    
    onSuccess: function() {
        this.$el.find('.alert-success').removeClass('hidden');
    }
});

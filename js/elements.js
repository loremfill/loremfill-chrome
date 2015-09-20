var Elements = Backbone.Model.extend({
    types: [
        'input[type="text"]',
        'input[type="password"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="tel"]',
        'input[type="url"]',
        'textarea',
        'select'
    ],

    perform: function() {
        var elements = $(document).find(this.types.join(','));
        var self = this;
        elements.each(function(j, el) {
            self.process(el);
        });
    },

    process: function(el) {
        var element = $(el);
        if(this.available(element)) {
            var strategy = new TextStrategy();
            if(element.get(0).tagName.toLowerCase() === 'select') {
                strategy = new SelectStrategy();
            }
            var value = strategy.decide(element);
            this.populateValue(element, value);
        }
    },

    populateValue: function(element, value) {
        var message = "[loremfill][{{time}}] {{tagName}}[{{name}}] = {{value}}";
        var now = new Date();
        var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        var template_values = {
            time: time,
            tagName: element.get(0).tagName,
            name: element.attr('name'),
            value: value
        };
        console.debug(S(message).template(template_values).s);
        element.val(value);
        var changeEvent = document.createEvent('Event');
        changeEvent.initEvent('change', true, true);
        element.get(0).dispatchEvent(changeEvent);
    },

    available: function(element) {
        return element.is(':visible') && !element.is('[readonly]') && !element.is('[disabled]');
    }
});

var ValueDecider = {
    decide: function(attr) {
        var value = null;
        attr = attr.humanize().s;
        if (attr.match(/name/i)) {
            value = chance.name();
        }
        if (attr.match(/first/i)) {
            value = chance.first();
        }
        if (attr.match(/last/i) || attr.match(/second/i) || attr.match(/middle/i)) {
            value = chance.last();
        }
        if (attr.match(/user/i) && attr.match(/name/i)) {
            value = chance.word();
        }
        if (attr === 'email' || attr.match(/email/i)) {
            value = chance.email({
                domain: 'test.host'
            });
        }
        if (attr.match(/city/i) || attr.match(/location/i)) {
            value = chance.city();
        }
        if (attr.match(/zip/i)) {
            value = chance.zip();
        }
        if (attr.match(/address/i)) {
            value = chance.address();
        }
        if (attr === 'tel' || attr.match(/phone/i) || attr.match(/mobile/i)) {
            value = chance.phone();
        }
        if (attr === 'url' || attr.match(/web/i) || attr.match(/url/i)) {
            value = chance.domain();
        }
        if (attr.match(/password/i)) {
            value = "p@ssw0rd";
        }
        if (attr.match(/price/i) || attr.match(/amount/i)) {
            value = chance.floating({
                fixed: 2,
                min: 1,
                max: 999
            })
        }
        if (attr === 'number' || attr.match(/duration/i) || attr.match(/min/i) || attr.match(/count/i) || attr.match(/capacity/i)) {
            value = chance.integer({
                min: 1,
                max: 100
            })
        }
        if (attr.match(/max/i)) {
            value = chance.integer({
                min: 101,
                max: 999
            })
        }
        return value;
    }
};

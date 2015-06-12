var NameMatcher = function(attr) {
	var value = null;
	if (attr.match(/name/gi)) {
		value = chance.name();
	}
	if (attr.match(/first/gi)) {
		value = chance.first();
	}
	if (attr.match(/last/gi) || attr.match(/middle/gi)) {
        value = chance.last();
    }
    return value;
}

var UserNameMatcher = function(attr) {
	var value = null;
	if (attr.match(/user/i) && attr.match(/name/i)) {
        value = chance.word();
    }
    return value;
}

var EmailMatcher = function(attr) {
	var value = null;
	if (attr === 'email' || attr.match(/email/i)) {
		var domain = chance.pick(['host.test', 'host.local', 'host.invalid', 'example.com']);
		value = chance.email({
			domain: domain
		});	
	}
	return value;
}

var CityMatcher = function(attr) {
	var value = null;
	if (attr.match(/city/i) || attr.match(/location/i)) {
	    value = chance.city();
	}
	return value;
}

var ZipMatcher = function(attr) {
	var value = null;
	if (attr.match(/zip/i)) {
        value = chance.zip();
    }
    return value;
}

var AddressMatcher = function(attr) {
	var value = null;
	if (attr.match(/address/i)) {
        value = chance.address();
    }
    return value;
}

var PhoneMatcher = function(attr) {
	var value = null;
	if (attr === 'tel' || attr.match(/phone/i) || attr.match(/mobile/i)) {
        value = chance.phone();
    }
    return value;
}

var UrlMatcher = function(attr) {
	var value = null;
	if (attr === 'url' || attr.match(/web/i) || attr.match(/url/i)) {
        value = chance.domain();
    }
    return value;
}

var PasswordMatcher = function(attr) {
	var value = null;
	if (attr.match(/password/i)) {
        value = "p@ssw0rd";
    }
    return value;
}

var AmountMatcher = function(attr) {
	var value = null;
	if (attr.match(/price/i) || attr.match(/amount/i)) {
        value = chance.floating({
            fixed: 2,
            min: 1,
            max: 999
        })
    }
    return value;
}

var NumberMatcher = function(attr) {
	var value = null;
	if (attr === 'number' || attr.match(/duration/i) || attr.match(/min/i) || attr.match(/count/i) || attr.match(/capacity/i)) {
        value = chance.integer({
            min: 1,
            max: 100
        })
    }
    return value;
}

var RangeMatcher = function(attr) {
	var value = null;
	if (attr.match(/max/i)) {
        value = chance.integer({
            min: 101,
            max: 999
        })
    }
    return value;
}
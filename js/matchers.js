var NameMatcher = function(attr) {
	var value = undefined;
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
	if (attr.match(/user/gi) && attr.match(/name/gi)) {
        return chance.word();
    }
}

var EmailMatcher = function(attr) {
	if (attr === 'email' || attr.match(/email/gi)) {
		var domain = chance.pick(['host.test', 'host.local', 'host.invalid', 'example.com']);
		return chance.email({
			domain: domain
		});	
	}
}

var CityMatcher = function(attr) {
	if (attr.match(/city/gi) || attr.match(/location/gi)) {
	    return chance.city();
	}
}

var ZipMatcher = function(attr) {
	if (attr.match(/zip/gi)) {
        return chance.zip();
    }
}

var AddressMatcher = function(attr) {
	if (attr.match(/address/gi)) {
        return chance.address();
    }
}

var PhoneMatcher = function(attr) {
	if (attr === 'tel' || attr.match(/phone/gi) || attr.match(/mobile/gi)) {
        return chance.phone();
    }
}

var UrlMatcher = function(attr) {
	if (attr === 'url' || attr.match(/web/gi) || attr.match(/url/gi)) {
        return chance.domain();
    }
}

var PasswordMatcher = function(attr) {
	if (attr.match(/password/gi)) {
        return "p@ssw0rd";
    }
}

var AmountMatcher = function(attr) {
	if (attr.match(/price/gi) || attr.match(/amount/gi)) {
        return chance.floating({
            fixed: 2,
            min: 1,
            max: 999
        })
    }
}

var NumberMatcher = function(attr) {
	if (attr === 'number' || attr.match(/duration/gi) || attr.match(/min/gi) || attr.match(/count/gi) || attr.match(/capacity/gi)) {
        return chance.integer({
            min: 1,
            max: 100
        })
    }
}

var RangeMatcher = function(attr) {
	if (attr.match(/max/gi)) {
        return chance.integer({
            min: 101,
            max: 999
        })
    }
}

var CompanyMatcher = function(attr) {
	if (attr.match(/company/gi) || attr.match(/business/gi)) {
		return S(chance.word()).capitalize().s + " Inc.";
	}
}

var CaptchaMatcher = function(attr) {
	if (attr.match(/captcha/gi)) {
		return SKIP_CONTROL;
	}
}
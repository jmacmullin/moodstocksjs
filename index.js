var request = require('request');

function initializer(key, secret) {
	// Just in case
	if(!(this instanceof initializer)) return new initializer(key, secret);

	// Required config
	if(key && secret) {
		this.apiKey = key;
		this.apiSecret = secret;
	}

	return this;
}

initializer.prototype.list = function(callback) {
	request('http://api.moodstocks.com/v2/stats/refs', {
		'auth': {
			'user': this.apiKey,
			'pass': this.apiSecret,
			'sendImmediately': false
		},
	}, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var imageIDs = JSON.parse(body).ids;
			callback(imageIDs);
		}
	});
};

initializer.prototype.add = function(url, id, callback) {
	var req = request.put('http://api.moodstocks.com/v2/ref/' + id, {
		'auth': {
			'user': this.apiKey,
			'pass': this.apiSecret,
			'sendImmediately': false
		},
		'form': {
			'image_url': url
		}
	}, function(error, response, body) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, JSON.parse(body));
		}
	});
};

initializer.prototype.remove = function(id) {
	var req = request.del('http://api.moodstocks.com/v2/ref/' + id, {
		'auth': {
			'user': this.apiKey,
			'pass': this.apiSecret,
			'sendImmediately': false
		}
	}, function(error, response, body) {
		if (error) {
			console.log("Error: " + error);
		} else {
			console.log(response.statusCode);
			console.log(response.body);
		}
	});
};

initializer.prototype.addToOfflineCache = function(id) {
	var req = request.post('http://api.moodstocks.com/v2/ref/' + id + '/offline', {
		'auth': {
			'user': this.apiKey,
			'pass': this.apiSecret,
			'sendImmediately': false
		}
	}, function(error, response, body) {
		if (error) {
			console.log("Error: " + error);
		} else {
			console.log(response.statusCode);
			console.log(response.body);
		}
	});
};

initializer.prototype.removeFromOfflineCache = function(id) {
	var req = request.del('http://api.moodstocks.com/v2/ref/' + id + '/offline', {
		'auth': {
			'user': this.apiKey,
			'pass': this.apiSecret,
			'sendImmediately': false
		}
	}, function(error, response, body) {
		if (error) {
			console.log("Error: " + error);
		} else {
			console.log(response.statusCode);
			console.log(response.body);
		}
	});
};

module.exports = initializer;
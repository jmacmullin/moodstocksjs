Moodstocksjs
=========

A tiny unofficial library for interacting with [Moodstocks](https://moodstocks.com) HTTP API.

## Installation

  npm install moodstocksjs

## Usage

  var moodstocks = require('moodstocksjs');
  var client = moodstocks('apikey', 'apisecret');

    // List images
    client.list(function(imageIDs) {
  	  // do something with the ids
    });

    // Add an image
    client.add(
    	'http://somedomain.com/image.jpg', 
        'image_id', 
        function(error, data) {
        	// do something with the data
    	}
    );

    // Add an image to the offline cache
    client.addToOfflineCache('image_id');

    // Remove an image from the offline cache
    client.removeFromOfflineCache('image_id');

    // Remove an image altogether
    client.remove('image_id');
  
## Tests

  There are currently no tests.

## Warning

  This is incomplete. There is no error handling at all and for many of the functions there is no way to know if it was successful or not (other than checking to see if the image was added, removed etc).

## Release History

* 0.0.1 Initial release
* 0.0.2 Updated the NPM package
* 0.0.3 Added a callback to the 'add' function so you can find out whether the image was added.
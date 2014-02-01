"use strict";

(function(){
	var root = this;

	var previousAppcache = null;
	if (typeof root.appcache !== "undefined") {
		var previousAppcache = root.appcache;
	}

	var appcache = root.appcache = {};
	
	appcache.VERSION = "0.1.0";

	appcache.DEBUG = false;

	appcache.AUTO_RELOAD = false;

	appcache.UPDATE_CHECK_FREQENCY_MS = 3600 * 1000; //One Hour

	appcache.init = function() {
		
	}();
}).call(this);


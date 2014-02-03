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

	appcache.startUpdaterCheck = function() {
		if (window.applicationCache) {
			applicationCache.addEventListener("updateready", function() {
				if (confirm("An update is available. Reload now?")) {
					window.location.reload();
				}
			});
		}
	}

	function checkUpdate() {

	}

	function updateApp() {

	}

	function cached() {
		logMessage("appcache reporting cached event.");
	}

	function checking() {
		logMessage("appcache reporting checking event.");
	}

	function downloading() {
		logMessage("appcache reporting downloading event.");
	}

	function error(e) {
		logMessage("appcache reporting error event.");
	}

	function noupdate() {
		logMessage("appcache reporting noupdate event.");
	}

	function obsolete() {
		logMessage("appcache reporting obsolete event.");
	}

	function progress() {
		logMessage("appcache reporting progress event.");
	}

	function updateready() {
		logMessage("appcache reporting updateready event.");
	}

	function logMessage(msg) {
		if (appcache.DEBUG) {
			console.log(msg)
		}
	}
	
	appcache.init = function() {
		if (typeof window.applicationCache === "undefined") {
			return;
		}
		var cache = appcache.cache = window.applicationCache;
		
		cache.addEventListener("cached", handleCacheEvent, false);
		cache.addEventListener("checking", handleCacheEvent, false);
		cache.addEventListener("downloading", handleCacheEvent, false);
		cache.addEventListener("error", handleCacheError, false);
		cache.addEventListener("noupdate", handleCacheEvent, false);
		cache.addEventListener("obsolete", handleCacheEvent, false);
		cache.addEventListener("progress", handleCacheEvent, false);
		cache.addEventListener("updateready", handleCacheEvent, false);
	}();

}).call(this);


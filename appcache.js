"use strict";

(function(){
	if (!window.applicationCache) {
		console.log("Application Cache not supported in this environment.");
		return;
	}

	var cache = window.applicationCache;

	var root = this;

	var previousAppcache = null;
	if (typeof root.appcache !== "undefined") {
		var previousAppcache = root.appcache;
	}

	var appcache = root.appcache = {};
	
	appcache.version = "0.1.0";

	appcache.debug = false;

	appcache.autoReload = false;

	appcache.updateCheckFreq = 3600 * 1000 * 24; 

	appcache.promptUpdate = true;

	appcache.startUpdaterCheck = function() {
		if (checkUpdate()) {
			update();
		}
		setTimeout(appcache.checkUpdate(), appcache.updateCheckFreq);
	}

	appcach.checkUpdate = function() {
		cache.removeEventListener("updateready", appcache.update, false);
		cache.addEventListener("updateready", appcache.update, false);
		cache.update();	
	}

	function update() {
		if (appcache.promptUdate) 
			if(!confirm("An update is available. Reload now?")) {
				return;
			}
		}
		window.location.reload();
	}

	/*function cached(e) {
		logMessage("appcache reporting cached event.");
	}

	function checking(e) {
		logMessage("appcache reporting checking event.");
	}

	function downloading(e) {
		logMessage("appcache reporting downloading event.");
	}

	function error(e) {
		logMessage("appcache reporting error event.");
	}

	function noupdate(e) {
		logMessage("appcache reporting noupdate event.");
	}

	function obsolete(e) {
		logMessage("appcache reporting obsolete event.");
	}

	function progress(e) {
		logMessage("appcache reporting progress event.");
	}

	function updateready(e) {
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
		
		cache.addEventListener("cached", cached, false);
		cache.addEventListener("checking", checking, false);
		cache.addEventListener("downloading", downloading, false);
		cache.addEventListener("error", error, false);
		cache.addEventListener("noupdate", noupdate, false);
		cache.addEventListener("obsolete", obsolete, false);
		cache.addEventListener("progress", progress, false);
		cache.addEventListener("updateready", updateready, false);
	}();*/

}).call(this);


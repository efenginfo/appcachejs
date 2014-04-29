// AppcacheJS (c) 2014 Nate Trimble
// AppcacheJS may be freely distributed under the MIT license.
// For details see https://github.com/ngtrimble/appcachejs

"use strict";

(function(){
	if (!window.applicationCache) {
		console.log("Application cache not supported in this environment.");
		return;
	}

	var root = this;

	var previousAppcache = null;
	if (typeof root.appcache !== "undefined") {
		var previousAppcache = root.appcache;
	}

	var appcache = root.appcache = {};
	
	appcache.cache = window.applicationCache;

	appcache.version = "0.2.0";

	appcache.autoReload = false;

	appcache.updateCheckFreq = 3600 * 1000 * 24; 

	appcache.promptUpdate = true;

	appcache.startUpdater = function() {
		appcache.checkUpdate();
		setInterval(appcache.checkUpdate, appcache.updateCheckFreq);
	};

	appcache.checkUpdate = function() {
		var now = new Date();
		console.log("Checking for update " + now.toLocaleDateString() + " " + now.toLocaleTimeString());
		appcache.cache.removeEventListener("updateready", appcache.update, false);
		appcache.cache.addEventListener("updateready", appcache.update, false);
		appcache.cache.update();
	};

	appcache.update = function() {
		if (appcache.promptUpdate && !confirm("An update is available. Reload now?")) {
			return;
		}
		window.location.reload();
	};

	function cached(e) {
		console.log("appcache reporting cached event: " + JSON.stringify(e));
	}

	function checking(e) {
		console.log("appcache reporting checking event: " + JSON.stringify(e));
	}

	function downloading(e) {
		console.log("appcache reporting downloading event: " + JSON.stringify(e));
	}

	function error(e) {
		console.log("appcache reporting error event: " + JSON.stringify(e));
	}

	function noupdate(e) {
		console.log("appcache reporting noupdate event: " + JSON.stringify(e));
	}

	function obsolete(e) {
		console.log("appcache reporting obsolete event: " + JSON.stringify(e));
	}

	function progress(e) {
		console.log("appcache reporting progress event: " + JSON.stringify(e));
	}

	function updateready(e) {
		console.log("appcache reporting updateready event: " + JSON.stringify(e));
	}
	
	appcache.cache.addEventListener("cached", cached, false);
	appcache.cache.addEventListener("checking", checking, false);
	appcache.cache.addEventListener("downloading", downloading, false);
	appcache.cache.addEventListener("error", error, false);
	appcache.cache.addEventListener("noupdate", noupdate, false);
	appcache.cache.addEventListener("obsolete", obsolete, false);
	appcache.cache.addEventListener("progress", progress, false);
	appcache.cache.addEventListener("updateready", updateready, false);

}).call(this);


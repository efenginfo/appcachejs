appcachejs
==========

HTML5 Application Cache Utility

Applications that use the applicationCache browser API can run into issues where users are running applications that are out of date. This is especially true when users are using mobile browsers or mobile applications that embed browsers and do not periodically close or refresh.

Appcachejs is a simple library that will periodically check for an application update and prompt the user if they would like to reload the page.

To use appcachejs just include appcache.js in your web application:

> <script src="appcache.js"></script>

Optionally, configure the frequency (in milliseconds) with for checking for updates. The default is 24 hours.

> appcache.updateCheckFreq = 10000;

Finally, start the updater which will immediately check for an update and sechedule and update to occur ever appcache.updateCheckFreq milliseconds.

> appcache.startUpdater();


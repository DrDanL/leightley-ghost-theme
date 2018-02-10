var serviceWorkerUri = '/service-worker.js';

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register(serviceWorkerUri).then(function() {

	  // Registration was successful. Now, check to see whether the service worker is controlling the page.
	  if (navigator.serviceWorker.controller) {

		console.log('Assets cached by the controlling service worker.');

	  } else {

		console.log('Please reload this page to allow the service worker to handle network operations.');

	  }
	}).catch(function(error) {

	  console.log('ERROR: ' + error);

	});

} else {

	// The current browser doesn't support service workers.
	console.log('Service workers are not supported in the current browser.');

}

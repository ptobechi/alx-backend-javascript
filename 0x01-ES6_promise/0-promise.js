// Define the function getResponseFromAPI
function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		// Simulate an API call
		const success = true; // Change this to false to simulate a failed API call

		if (success) {
			resolve("API call succeeded!");
		} else {
			reject("API call failed.");
		}
	});
}

function handleResponseFromAPI(promise) {
	return promise
		.then(response => {
			console.log('Got a response from the API');
			return {
				status: 200,
				body: 'success',
			};
		})
		.catch(error => {
			console.error('Error:', error.message);
			throw new Error(error.message);
		});
}

export default handleResponseFromAPI;

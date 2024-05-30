import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
	Promise.all([uploadPhoto(), createUser()])
		.then(([photoResponse, userResponse]) => {
			const { firstName, lastName } = userResponse.body;
			console.log(`${firstName} ${lastName}`);
		})
		.catch(error => {
			console.error('Signup system offline');
		});
}

export default handleProfileSignup;


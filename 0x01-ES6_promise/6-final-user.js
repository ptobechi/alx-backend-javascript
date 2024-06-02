import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
	const promises = [
		signUpUser(firstName, lastName),
		uploadPhoto(fileName), // Added trailing comma here
	];

	return Promise.allSettled(promises).then((results) =>
		results.map((result) => ({
			status: result.status,
			value:
			result.status === 'fulfilled'
			? result.value
			: result.reason.message,
		}))
	);
}

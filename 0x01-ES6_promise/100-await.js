import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
	try {
		const photoPromise = uploadPhoto('filename.jpg');
		const userPromise = createUser('John', 'Doe');

		const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

		return {
			photo: photoResponse,
			user: userResponse,
		};
	} catch (error) {
		return {
			photo: null,
			user: null,
		};
	}
}

export default asyncUploadUser;

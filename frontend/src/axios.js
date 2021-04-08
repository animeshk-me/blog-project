import axios from 'axios';

  const baseURL = "http://13.233.125.44/"; // for apache2
//   const baseURL = "http://13.233.125.44:8000/"; // for aws EC2 instance server(deployment)
// const baseURL = 'http://127.0.0.1:8000/';  // for local development server

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? 'JWT ' + localStorage.getItem('access_token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {
			alert('A server/network error occurred.');
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === baseURL + 'token/refresh/'
		) {
			window.location.href = '/login/';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			const refreshToken = localStorage.getItem('refresh_token');

			if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds:
				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					try {
						const response = await axiosInstance
							.post('/api/token/refresh/', { refresh: refreshToken });
						localStorage.setItem('access_token', response.data.access);
						localStorage.setItem('refresh_token', refreshToken);

						axiosInstance.defaults.headers['Authorization'] =
							'JWT ' + response.data.access;
						originalRequest.headers['Authorization'] =
							'JWT ' + response.data.access;
						return await axiosInstance(originalRequest);
					} catch (err) {
						console.log(err);
					}
				} else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/login/';
				}
			} else {
				console.log('Refresh token not available.');
				window.location.href = '/login/';
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);


export default axiosInstance;
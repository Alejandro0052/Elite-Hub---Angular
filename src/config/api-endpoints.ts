export const API_ENDPOINTS = {
	AUTH: {
		LOGIN_NUTRICIONISTAS: '/login',
		REGISTER_NUTRICIONISTAS: '/api/nutricionistas/create/',
	},
	USER: {
		PROFILE: '/user/profile',
	},
	POSTS: {
		GET_ALL: '/posts',
		GET_ONE: (id: string) => `/posts/${id}`,
		CREATE: '/posts/create',
		UPDATE: (id: string) => `/posts/update/${id}`,
		DELETE: (id: string) => `/posts/delete/${id}`,
	},
};

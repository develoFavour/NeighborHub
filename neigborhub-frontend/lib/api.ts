export const apiClient = {
	get: async (url: string) => {
		const token = localStorage.getItem("auth-token");
		return fetch(url, {
			headers: {
				Authorization: token ? `Bearer ${token}` : "",
				"Content-Type": "application/json",
			},
		});
	},

	post: async <T>(url: string, data: T) => {
		const token = localStorage.getItem("auth-token");
		return fetch(url, {
			method: "POST",
			headers: {
				Authorization: token ? `Bearer ${token}` : "",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	},

	put: async <T>(url: string, data: T) => {
		const token = localStorage.getItem("auth-token");
		return fetch(url, {
			method: "PUT",
			headers: {
				Authorization: token ? `Bearer ${token}` : "",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	},

	delete: async (url: string) => {
		const token = localStorage.getItem("auth-token");
		return fetch(url, {
			method: "DELETE",
			headers: {
				Authorization: token ? `Bearer ${token}` : "",
				"Content-Type": "application/json",
			},
		});
	},
};

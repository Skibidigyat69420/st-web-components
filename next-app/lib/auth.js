const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const getAuthToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('st_token');
        if (token) return token;
        // In development, return a dummy token to satisfy apiFetch logic
        return 'dev-dummy-token';
    }
    return null;
};

export const logout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('st_token');
        localStorage.removeItem('st_user');
        window.location.href = '/admin';
    }
};

export const apiFetch = async (endpoint, options = {}) => {
    const token = getAuthToken();
    const headers = {
        ...options.headers
    };

    if (!(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers
        });

        if (response.status === 401) {
            logout();
            throw new Error('Session expired');
        }

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || data.message || `Request failed with status ${response.status}`);
        }

        return { ok: true, data, status: response.status };
    } catch (err) {
        console.error(`apiFetch error [${endpoint}]:`, err);
        throw err;
    }
};

"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

interface User {
	id: string;
	email: string;
	name: string;
	role: "borrower" | "lender" | "admin";
	trustScore: number;
	isVerified: boolean;
}

interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<void>;
	register: (data: RegisterData) => Promise<void>;
	logout: () => void;
	loading: boolean;
}

interface RegisterData {
	name: string;
	email: string;
	password: string;
	address: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("auth-token");
		if (token) {
			// TODO: Validate token with your Go backend
			// For now, mock user data
			setUser({
				id: "1",
				email: "user@example.com",
				name: "John Doe",
				role: "borrower",
				trustScore: 4.8,
				isVerified: true,
			});
		}
		setLoading(false);
	}, []);

	const login = async (email: string, password: string) => {
		try {
			// TODO: Replace with actual API call to your Go backend
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) throw new Error("Login failed");

			const { token, user } = await response.json();
			localStorage.setItem("auth-token", token);
			setUser(user);
		} catch {
			throw new Error("Invalid credentials");
		}
	};

	const register = async (data: RegisterData) => {
		try {
			// TODO: Replace with actual API call to your Go backend
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) throw new Error("Registration failed");

			const { token, user } = await response.json();
			localStorage.setItem("auth-token", token);
			setUser(user);
		} catch {
			throw new Error("Registration failed");
		}
	};

	const logout = () => {
		localStorage.removeItem("auth-token");
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, register, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}

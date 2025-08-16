"use client";

import type React from "react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";

interface ProtectedRouteProps {
	children: React.ReactNode;
	requiredRole?: "borrower" | "lender" | "admin";
}

export function ProtectedRoute({
	children,
	requiredRole,
}: ProtectedRouteProps) {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) {
			router.push("/auth/login");
		}

		if (
			user &&
			requiredRole &&
			user.role !== requiredRole &&
			user.role !== "admin"
		) {
			router.push("/dashboard/borrower"); // Default redirect
		}
	}, [user, loading, requiredRole, router]);

	if (loading) {
		return (
			<div className="min-h-screen bg-background flex items-center justify-center">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
			</div>
		);
	}

	if (!user) {
		return null;
	}

	if (requiredRole && user.role !== requiredRole && user.role !== "admin") {
		return null;
	}

	return <>{children}</>;
}

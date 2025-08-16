import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const authHeader = request.headers.get("authorization");
	const token = authHeader?.startsWith("Bearer ")
		? authHeader.substring(7)
		: null;

	const { pathname } = request.nextUrl;

	// Protected routes that require authentication
	const protectedRoutes = ["/dashboard", "/profile", "/settings"];
	const isProtectedRoute = protectedRoutes.some((route) =>
		pathname.startsWith(route)
	);

	// Redirect to login if accessing protected route without token
	if (isProtectedRoute && !token) {
		const loginUrl = new URL("/auth/login", request.url);
		loginUrl.searchParams.set("redirect", pathname);
		return NextResponse.redirect(loginUrl);
	}

	// Redirect authenticated users away from auth pages
	if (token && pathname.startsWith("/auth/")) {
		return NextResponse.redirect(new URL("/dashboard/borrower", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/dashboard/:path*",
		"/profile/:path*",
		"/settings/:path*",
		"/auth/:path*",
	],
};

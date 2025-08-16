"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Eye,
	EyeOff,
	Mail,
	Lock,
	Users,
	Package,
	MapPin,
	Network,
} from "lucide-react";
import Link from "next/link";

export function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// TODO: Implement login logic
		setTimeout(() => setIsLoading(false), 1000);
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-20">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
						backgroundSize: "32px 32px",
					}}
				/>
			</div>

			{/* Header */}
			<header className="relative z-10 px-8 py-6">
				<div className="flex items-center space-x-3">
					<Network className="h-8 w-8 text-primary" />
					<h1 className="text-2xl font-bold text-foreground">NeighborHub</h1>
				</div>
			</header>

			{/* Main Content */}
			<div className="relative z-10 px-8 pb-12">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Side - Welcome Content */}
						<div className="space-y-8">
							<div className="space-y-4">
								<h2 className="text-5xl font-bold text-foreground leading-tight">
									Welcome
									<br />
									<span className="text-primary">back</span>
								</h2>
								<p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
									Sign in to continue sharing and connecting with your
									neighborhood community.
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
										<Users className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-foreground mb-2">
											Your Community Awaits
										</h3>
										<p className="text-muted-foreground">
											Reconnect with neighbors and continue building
											relationships.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
										<Package className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-foreground mb-2">
											Continue Sharing
										</h3>
										<p className="text-muted-foreground">
											Access your items, bookings, and community connections.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
										<MapPin className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-foreground mb-2">
											Local Impact
										</h3>
										<p className="text-muted-foreground">
											Keep making a difference in your neighborhood.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Side - Login Form */}
						<div className="w-full max-w-xl">
							<div className="bg-card/10 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-8">
								<div className="text-center mb-8">
									<h3 className="text-2xl font-bold text-foreground mb-2">
										Sign In
									</h3>
									<p className="text-muted-foreground">
										Welcome back to your community
									</p>
								</div>

								<form onSubmit={handleSubmit} className="space-y-6">
									{/* Email */}
									<div className="space-y-2">
										<Label
											htmlFor="email"
											className="text-foreground font-medium"
										>
											Email Address
										</Label>
										<div className="relative">
											<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
											<Input
												id="email"
												type="email"
												placeholder="Enter your email"
												className="pl-10 h-12 bg-input/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg"
												required
											/>
										</div>
									</div>

									{/* Password */}
									<div className="space-y-2">
										<Label
											htmlFor="password"
											className="text-foreground font-medium"
										>
											Password
										</Label>
										<div className="relative">
											<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
											<Input
												id="password"
												type={showPassword ? "text" : "password"}
												placeholder="Enter your password"
												className="pl-10 pr-12 h-12 bg-input/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg"
												required
											/>
											<Button
												type="button"
												variant="ghost"
												size="sm"
												className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted text-muted-foreground hover:text-foreground"
												onClick={() => setShowPassword(!showPassword)}
											>
												{showPassword ? (
													<EyeOff className="h-4 w-4" />
												) : (
													<Eye className="h-4 w-4" />
												)}
											</Button>
										</div>
									</div>

									{/* Remember me and Forgot password */}
									<div className="flex items-center justify-between">
										<label className="flex items-center space-x-2 text-sm">
											<input
												type="checkbox"
												className="rounded border-border bg-input/50 text-primary focus:ring-primary focus:ring-2"
											/>
											<span className="text-muted-foreground">Remember me</span>
										</label>
										<Button
											variant="link"
											className="p-0 h-auto text-primary hover:text-primary/80 text-sm"
										>
											Forgot password?
										</Button>
									</div>

									<Button
										type="submit"
										className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-primary/25 transition-all duration-200 text-base"
										disabled={isLoading}
									>
										{isLoading ? "Signing in..." : "Sign In"}
									</Button>

									{/* Sign Up Link */}
									<div className="text-center pt-4">
										<p className="text-muted-foreground">
											Don&apos;t have an account?{" "}
											<Button
												variant="link"
												className="p-0 h-auto text-primary hover:text-primary/80 font-semibold"
											>
												<Link href={"/auth/register"}>Create account</Link>
											</Button>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

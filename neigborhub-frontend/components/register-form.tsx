"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddressAutocomplete } from "@/components/address-autocomplete";
import {
	Eye,
	EyeOff,
	Mail,
	Lock,
	User,
	MapPin,
	Users,
	Package,
	Network,
} from "lucide-react";
import Link from "next/link";
interface Location {
	address: string;
	latitude: number;
	longitude: number;
}
export function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedRole, setSelectedRole] = useState<string>("");
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		location: {
			address: "",
			latitude: 0,
			longitude: 0,
		} as Location,
	});

	const handleLocationSelect = (location: Location) => {
		setFormData((prev) => ({
			...prev,
			location,
		}));
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		const registrationData = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			password: formData.password,
			role: selectedRole,
			location: formData.location,
		};

		console.log("[v0] Registration data:", registrationData);

		// TODO: Send to Go backend API
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
									Join your
									<br />
									<span className="text-primary">community</span>
								</h2>
								<p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
									Connect with neighbors, share resources, and build stronger
									communities together.
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
										<Users className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-foreground mb-2">
											Connect with Neighbors
										</h3>
										<p className="text-muted-foreground">
											Build meaningful relationships with people in your
											neighborhood.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
										<Package className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-foreground mb-2">
											Share & Borrow
										</h3>
										<p className="text-muted-foreground">
											Access tools and items you need, when you need them.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
										<MapPin className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-foreground mb-2">
											Local Community
										</h3>
										<p className="text-muted-foreground">
											Everything happens within your neighborhood for
											convenience.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Side - Registration Form */}
						<div className="w-full max-w-xl">
							<div className="bg-card/10 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-8">
								<div className="text-center mb-8">
									<h3 className="text-2xl font-bold text-foreground mb-2">
										Create Your Account
									</h3>
									<p className="text-muted-foreground">
										Get started in just a few minutes
									</p>
								</div>

								<form onSubmit={handleSubmit} className="space-y-6">
									{/* Role Selection */}
									<div className="space-y-4">
										<Label className="text-foreground font-medium">
											Choose your role:
										</Label>
										<div className="grid grid-cols-2 gap-4">
											<div
												className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
													selectedRole === "borrower"
														? "border-primary bg-primary/10 ring-2 ring-primary/20"
														: "border-border bg-card/20 hover:border-primary/50"
												}`}
												onClick={() => setSelectedRole("borrower")}
											>
												<div className="flex flex-col items-center space-y-3 text-center">
													<div
														className={`w-12 h-12 rounded-full flex items-center justify-center ${
															selectedRole === "borrower"
																? "bg-primary text-primary-foreground"
																: "bg-muted text-muted-foreground"
														}`}
													>
														<Users className="h-6 w-6" />
													</div>
													<div>
														<h4 className="font-semibold text-foreground">
															Borrower
														</h4>
														<p className="text-sm text-muted-foreground">
															Find items to rent
														</p>
													</div>
												</div>
											</div>

											<div
												className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
													selectedRole === "lender"
														? "border-primary bg-primary/10 ring-2 ring-primary/20"
														: "border-border bg-card/20 hover:border-primary/50"
												}`}
												onClick={() => setSelectedRole("lender")}
											>
												<div className="flex flex-col items-center space-y-3 text-center">
													<div
														className={`w-12 h-12 rounded-full flex items-center justify-center ${
															selectedRole === "lender"
																? "bg-primary text-primary-foreground"
																: "bg-muted text-muted-foreground"
														}`}
													>
														<Package className="h-6 w-6" />
													</div>
													<div>
														<h4 className="font-semibold text-foreground">
															Lender
														</h4>
														<p className="text-sm text-muted-foreground">
															Share & earn money
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* Name Fields */}
									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label
												htmlFor="firstName"
												className="text-foreground font-medium"
											>
												First Name
											</Label>
											<div className="relative">
												<User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
												<Input
													id="firstName"
													type="text"
													name="firstName"
													placeholder="John"
													value={formData.firstName}
													onChange={handleInputChange}
													className="pl-10 h-12 bg-input/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg"
													required
												/>
											</div>
										</div>
										<div className="space-y-2">
											<Label
												htmlFor="lastName"
												className="text-foreground font-medium"
											>
												Last Name
											</Label>
											<Input
												id="lastName"
												type="text"
												placeholder="Doe"
												name="lastName"
												value={formData.lastName}
												onChange={handleInputChange}
												className="h-12 bg-input/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg"
												required
											/>
										</div>
									</div>

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
												name="email"
												placeholder="john@example.com"
												value={formData.email}
												onChange={handleInputChange}
												className="pl-10 h-12 bg-input/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg"
												required
											/>
										</div>
									</div>

									{/* Neighborhood */}
									<div className="space-y-2">
										<Label className="text-foreground font-medium">
											Neighborhood
										</Label>
										<AddressAutocomplete
											onLocationSelect={handleLocationSelect}
											placeholder="Enter your address"
											className="w-full"
										/>
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
												name="password"
												type={showPassword ? "text" : "password"}
												placeholder="Create a strong password"
												className="pl-10 pr-12 h-12 bg-input/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg"
												required
												value={formData.password}
												onChange={handleInputChange}
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

									{/* Terms Checkbox */}
									<div className="flex items-start space-x-3 pt-2">
										<input
											type="checkbox"
											className="mt-1 rounded border-border bg-input/50 text-primary focus:ring-primary focus:ring-2"
											required
										/>
										<label className="text-sm text-muted-foreground leading-relaxed">
											I agree to the{" "}
											<Button
												variant="link"
												className="p-0 h-auto text-primary hover:text-primary/80 text-sm underline"
											>
												Terms of Service
											</Button>{" "}
											and{" "}
											<Button
												variant="link"
												className="p-0 h-auto text-primary hover:text-primary/80 text-sm underline"
											>
												Privacy Policy
											</Button>
										</label>
									</div>

									<Button
										type="submit"
										onClick={handleSubmit}
										className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-primary/25 transition-all duration-200 text-base"
										disabled={isLoading || !selectedRole}
									>
										{isLoading ? "Creating account..." : "Create Account"}
									</Button>

									{/* Sign In Link */}
									<div className="text-center pt-4">
										<p className="text-muted-foreground">
											Already have an account?{" "}
											<Button
												variant="link"
												className="p-0 h-auto text-primary hover:text-primary/80 font-semibold"
											>
												<Link href={"/auth/register"}>Sign in</Link>
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

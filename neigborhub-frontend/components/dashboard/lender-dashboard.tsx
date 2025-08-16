"use client";

// import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Package, Calendar, DollarSign, TrendingUp } from "lucide-react";

export function LenderDashboard() {
	// const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8">
				{/* Header */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
					<div>
						<h1 className="text-3xl font-bold text-foreground mb-2">
							Lender Dashboard
						</h1>
						<p className="text-muted-foreground">
							Manage your items and track earnings
						</p>
					</div>
					<Button className="mt-4 md:mt-0">
						<Plus className="w-4 h-4 mr-2" />
						Add New Item
					</Button>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Total Items</CardTitle>
							<Package className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">12</div>
							<p className="text-xs text-muted-foreground">
								+2 from last month
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Active Bookings
							</CardTitle>
							<Calendar className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">8</div>
							<p className="text-xs text-muted-foreground">Currently rented</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Monthly Earnings
							</CardTitle>
							<DollarSign className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">$324</div>
							<p className="text-xs text-muted-foreground">
								+12% from last month
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Trust Score</CardTitle>
							<TrendingUp className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">4.8</div>
							<p className="text-xs text-muted-foreground">
								Based on 24 reviews
							</p>
						</CardContent>
					</Card>
				</div>

				{/* My Items */}
				<Card>
					<CardHeader>
						<CardTitle>My Items</CardTitle>
						<CardDescription>
							Manage your shared items and their availability
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{[1, 2, 3].map((item) => (
								<div
									key={item}
									className="flex items-center justify-between p-4 border rounded-lg"
								>
									<div className="flex items-center space-x-4">
										<div className="w-16 h-16 bg-muted rounded-lg"></div>
										<div>
											<h3 className="font-semibold">Power Drill Set</h3>
											<p className="text-sm text-muted-foreground">
												Tools & Equipment
											</p>
											<div className="flex items-center space-x-2 mt-1">
												<Badge variant="secondary">Available</Badge>
												<span className="text-sm text-muted-foreground">
													$15/day
												</span>
											</div>
										</div>
									</div>
									<div className="flex space-x-2">
										<Button variant="outline" size="sm">
											Edit
										</Button>
										<Button variant="outline" size="sm">
											View
										</Button>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

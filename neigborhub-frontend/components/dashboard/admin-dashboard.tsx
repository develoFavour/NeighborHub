"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Users,
	Package,
	AlertTriangle,
	DollarSign,
	Shield,
} from "lucide-react";

export function AdminDashboard() {
	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-foreground mb-2">
						Admin Dashboard
					</h1>
					<p className="text-muted-foreground">
						Platform overview and management tools
					</p>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Total Users</CardTitle>
							<Users className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">1,234</div>
							<p className="text-xs text-muted-foreground">
								+18% from last month
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Active Items
							</CardTitle>
							<Package className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">856</div>
							<p className="text-xs text-muted-foreground">
								+12% from last month
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Platform Revenue
							</CardTitle>
							<DollarSign className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">$12,450</div>
							<p className="text-xs text-muted-foreground">
								+25% from last month
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Management Sections */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Recent Reports */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center">
								<AlertTriangle className="w-5 h-5 mr-2" />
								Recent Reports
							</CardTitle>
							<CardDescription>
								User reports requiring attention
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{[1, 2, 3].map((report) => (
									<div
										key={report}
										className="flex items-center justify-between p-3 border rounded-lg"
									>
										<div>
											<p className="font-medium">Item damage reported</p>
											<p className="text-sm text-muted-foreground">
												Power drill - reported by John D.
											</p>
										</div>
										<div className="flex items-center space-x-2">
											<Badge variant="destructive">High</Badge>
											<Button size="sm" variant="outline">
												Review
											</Button>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* User Verification */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center">
								<Shield className="w-5 h-5 mr-2" />
								Pending Verifications
							</CardTitle>
							<CardDescription>Users awaiting verification</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{[1, 2, 3].map((user) => (
									<div
										key={user}
										className="flex items-center justify-between p-3 border rounded-lg"
									>
										<div>
											<p className="font-medium">Sarah Johnson</p>
											<p className="text-sm text-muted-foreground">
												Submitted ID verification
											</p>
										</div>
										<div className="flex space-x-2">
											<Button size="sm" variant="outline">
												Approve
											</Button>
											<Button size="sm" variant="destructive">
												Reject
											</Button>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

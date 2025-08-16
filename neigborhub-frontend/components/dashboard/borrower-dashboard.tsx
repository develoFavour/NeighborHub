"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Search,
	Package,
	Clock,
	Star,
	MapPin,
	Filter,
	Heart,
	MessageCircle,
	Calendar,
} from "lucide-react";
import Image from "next/image";

const recentBorrows = [
	{
		id: 1,
		item: "Power Drill",
		owner: "Tom Wilson",
		status: "active",
		dueDate: "2024-01-20",
		image: "/power-drill.png",
	},
	{
		id: 2,
		item: "Camping Tent",
		owner: "Sarah Chen",
		status: "returned",
		returnDate: "2024-01-15",
		image: "/camping-tent.png",
	},
];

const nearbyItems = [
	{
		id: 1,
		title: "Lawn Mower",
		owner: "Mike Johnson",
		distance: "0.2 miles",
		price: "$15/day",
		rating: 4.9,
		image: "/suburban-lawn-mower.png",
		available: true,
	},
	{
		id: 2,
		title: "Pressure Washer",
		owner: "Lisa Brown",
		distance: "0.4 miles",
		price: "$20/day",
		rating: 4.8,
		image: "/pressure-washer.png",
		available: true,
	},
	{
		id: 3,
		title: "Ladder (Extension)",
		owner: "David Lee",
		distance: "0.6 miles",
		price: "Free",
		rating: 5.0,
		image: "/extension-ladder.png",
		available: false,
	},
];

export function BorrowerDashboard() {
	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b border-border bg-card">
				<div className="container py-4">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl font-serif font-bold text-card-foreground">
								Welcome back, Alex!
							</h1>
							<p className="text-muted-foreground">
								Discover what your neighbors are sharing today
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<Button variant="outline" size="sm">
								<MessageCircle className="h-4 w-4 mr-2" />
								Messages
							</Button>
							<Avatar>
								<AvatarImage src="/diverse-user-avatars.png" />
								<AvatarFallback>AB</AvatarFallback>
							</Avatar>
						</div>
					</div>
				</div>
			</header>

			<div className="container py-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-3 space-y-8">
						{/* Search Bar */}
						<Card className="border-border bg-card">
							<CardContent className="p-6">
								<div className="flex space-x-4">
									<div className="flex-1 relative">
										<Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
										<Input
											placeholder="Search for tools, equipment, books..."
											className="pl-10"
										/>
									</div>
									<Button variant="outline">
										<Filter className="h-4 w-4 mr-2" />
										Filters
									</Button>
									<Button>Search</Button>
								</div>
							</CardContent>
						</Card>

						{/* Quick Stats */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<Card className="border-border bg-card">
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<Package className="h-5 w-5 text-primary" />
										<div>
											<div className="text-2xl font-serif font-bold text-card-foreground">
												12
											</div>
											<div className="text-sm text-muted-foreground">
												Items Borrowed
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
							<Card className="border-border bg-card">
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<Star className="h-5 w-5 text-secondary" />
										<div>
											<div className="text-2xl font-serif font-bold text-card-foreground">
												4.9
											</div>
											<div className="text-sm text-muted-foreground">
												Your Rating
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
							<Card className="border-border bg-card">
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<Heart className="h-5 w-5 text-accent" />
										<div>
											<div className="text-2xl font-serif font-bold text-card-foreground">
												8
											</div>
											<div className="text-sm text-muted-foreground">
												Saved Items
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Nearby Items */}
						<Card className="border-border bg-card">
							<CardHeader>
								<CardTitle className="text-card-foreground">
									Available Nearby
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{nearbyItems.map((item) => (
										<div key={item.id} className="group cursor-pointer">
											<div className="relative overflow-hidden rounded-lg mb-3">
												<Image
													src={item.image || "/placeholder.svg"}
													alt={item.title}
													className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
												/>
												{!item.available && (
													<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
														<Badge variant="secondary">Not Available</Badge>
													</div>
												)}
												<Button
													size="sm"
													variant="secondary"
													className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
												>
													<Heart className="h-4 w-4" />
												</Button>
											</div>
											<div className="space-y-2">
												<h3 className="font-medium text-card-foreground">
													{item.title}
												</h3>
												<div className="flex items-center justify-between text-sm">
													<div className="flex items-center space-x-1 text-muted-foreground">
														<MapPin className="h-3 w-3" />
														<span>{item.distance}</span>
													</div>
													<div className="flex items-center space-x-1">
														<Star className="h-3 w-3 fill-secondary text-secondary" />
														<span className="text-muted-foreground">
															{item.rating}
														</span>
													</div>
												</div>
												<div className="flex items-center justify-between">
													<span className="font-medium text-primary">
														{item.price}
													</span>
													<Button size="sm" disabled={!item.available}>
														{item.available ? "Request" : "Unavailable"}
													</Button>
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Current Borrows */}
						<Card className="border-border bg-card">
							<CardHeader>
								<CardTitle className="text-card-foreground">
									Current Borrows
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{recentBorrows.map((borrow) => (
									<div
										key={borrow.id}
										className="flex items-center space-x-3 p-3 rounded-lg bg-background"
									>
										<Image
											src={borrow.image || "/placeholder.svg"}
											alt={borrow.item}
											className="w-12 h-12 rounded-lg object-cover"
										/>
										<div className="flex-1 min-w-0">
											<div className="font-medium text-foreground truncate">
												{borrow.item}
											</div>
											<div className="text-sm text-muted-foreground">
												from {borrow.owner}
											</div>
											<div className="flex items-center space-x-2 mt-1">
												<Badge
													variant={
														borrow.status === "active" ? "default" : "secondary"
													}
												>
													{borrow.status}
												</Badge>
												{borrow.status === "active" && (
													<div className="flex items-center space-x-1 text-xs text-muted-foreground">
														<Clock className="h-3 w-3" />
														<span>Due {borrow.dueDate}</span>
													</div>
												)}
											</div>
										</div>
									</div>
								))}
							</CardContent>
						</Card>

						{/* Quick Actions */}
						<Card className="border-border bg-card">
							<CardHeader>
								<CardTitle className="text-card-foreground">
									Quick Actions
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3">
								<Button
									variant="outline"
									className="w-full justify-start bg-transparent"
								>
									<Calendar className="h-4 w-4 mr-2" />
									View Calendar
								</Button>
								<Button
									variant="outline"
									className="w-full justify-start bg-transparent"
								>
									<MessageCircle className="h-4 w-4 mr-2" />
									Messages
								</Button>
								<Button
									variant="outline"
									className="w-full justify-start bg-transparent"
								>
									<Heart className="h-4 w-4 mr-2" />
									Saved Items
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

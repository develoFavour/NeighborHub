import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
	{
		name: "Sarah Chen",
		role: "Community Member",
		avatar: "/diverse-woman-smiling.png",
		content:
			"NeighborHub helped me borrow a power drill for my weekend project. Not only did I save money, but I met my neighbor Tom who's now a good friend!",
		rating: 5,
		location: "Maple Street",
	},
	{
		name: "Marcus Johnson",
		role: "Active Lender",
		avatar: "/friendly-man.png",
		content:
			"I've earned over $200 lending out my camping gear and tools. It's amazing how much stuff we all have that others could use!",
		rating: 5,
		location: "Oak Avenue",
	},
	{
		name: "Emily Rodriguez",
		role: "New Member",
		avatar: "/happy-woman.png",
		content:
			"As a new resident, NeighborHub was the perfect way to meet my neighbors and get the items I needed without buying everything new.",
		rating: 5,
		location: "Pine Circle",
	},
];

export function CommunitySpotlight() {
	return (
		<section id="community" className="py-20 lg:py-32 bg-background">
			<div className="container">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
						Community Stories
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Real stories from real neighbors who are building stronger
						communities through sharing.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="border-border bg-card hover:shadow-lg transition-shadow duration-300"
						>
							<CardContent className="p-6">
								<div className="flex items-center space-x-1 mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="h-4 w-4 fill-secondary text-secondary"
										/>
									))}
								</div>
								<p className="text-card-foreground mb-6 leading-relaxed">
									&apos;{testimonial.content}&apos;
								</p>
								<div className="flex items-center space-x-3">
									<Avatar>
										<AvatarImage
											src={testimonial.avatar || "/placeholder.svg"}
											alt={testimonial.name}
										/>
										<AvatarFallback>
											{testimonial.name
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</AvatarFallback>
									</Avatar>
									<div>
										<div className="font-medium text-card-foreground">
											{testimonial.name}
										</div>
										<div className="text-sm text-muted-foreground">
											{testimonial.location}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

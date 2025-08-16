import { RegisterForm } from "@/components/register-form";
// import { Share2 } from "lucide-react";

export default function RegisterPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background p-4">
			<div className="w-full">
				{/* <div className="text-center mb-8">
					<Link href="/" className="inline-flex items-center space-x-2 mb-6">
						<Share2 className="h-8 w-8 text-primary" />
						<span className="text-2xl font-serif font-bold text-foreground">
							NeighborHub
						</span>
					</Link>
					<h1 className="text-3xl font-serif font-bold text-foreground mb-2">
						Join your community
					</h1>
					<p className="text-muted-foreground">
						Create an account to start sharing with your neighbors
					</p>
				</div> */}

				<RegisterForm />
			</div>
		</div>
	);
}

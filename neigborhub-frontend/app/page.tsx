import { CommunityDashboardPreview } from "@/components/community-dashboard-preview";

import { AnimatedSection } from "@/components/animated-section";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { CommunitySpotlight } from "@/components/community-spotlight";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-background relative overflow-hidden pb-0">
			<div className="relative z-10">
				<main className="max-w-[1320px] mx-auto relative">
					<HeroSection />
					{/* Dashboard Preview Wrapper */}
					<div className="absolute bottom-[-150px] md:bottom-[-330px] left-1/2 transform -translate-x-1/2 z-30">
						<AnimatedSection>
							<CommunityDashboardPreview />
						</AnimatedSection>
					</div>
				</main>
				<AnimatedSection
					className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[411px] md:mt-[400px]"
					delay={0.1}
				>
					<Features />
				</AnimatedSection>
				<AnimatedSection
					className="relative z-10 max-w-[1320px] mx-auto mt-16"
					delay={0.2}
				>
					<HowItWorks />
				</AnimatedSection>
				<AnimatedSection
					className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
					delay={0.2}
				>
					<CommunitySpotlight />
				</AnimatedSection>
				<AnimatedSection
					className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
					delay={0.2}
				>
					<CTA />
				</AnimatedSection>
				<AnimatedSection
					className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
					delay={0.2}
				>
					<Footer />
				</AnimatedSection>
			</div>
		</div>
	);
}

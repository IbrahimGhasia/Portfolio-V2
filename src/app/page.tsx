import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ModeToggle } from "@/components/ModeToggle";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";

export default function Home() {
	return (
		<div className="relative">
			<div className="absolute -top-10 right-10">
				<ModeToggle />
			</div>
			<MaxWidthWrapper>
				<HeroSection />
				<AboutSection />
				<ExperienceSection />
				<ProjectSection />
				<Footer />
			</MaxWidthWrapper>
		</div>
	);
}

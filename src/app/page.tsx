import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";

export default function Home() {
	return (
		<MaxWidthWrapper>
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectSection />
		</MaxWidthWrapper>
	);
}

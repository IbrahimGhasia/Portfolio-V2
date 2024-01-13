import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
	return (
		<MaxWidthWrapper>
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
		</MaxWidthWrapper>
	);
}

import { myInfo } from "@/constants/MyInfo";
import { FC } from "react";
import SectionTitle from "../SectionTitle";

const AboutSection: FC = () => {
	return (
		<div className="mt-10">
			<SectionTitle title="About" />
			<div className="text-sm text-[#6b6b6b]">{myInfo.about}</div>
		</div>
	);
};

export default AboutSection;

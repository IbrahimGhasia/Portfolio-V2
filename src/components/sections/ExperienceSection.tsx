import { FC } from "react";
import SectionTitle from "../SectionTitle";
import { experience } from "@/constants/Experince";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ExperienceSection: FC = () => {
	return (
		<div className="mt-10">
			<SectionTitle title="Work Experience" />
			<div className="space-y-10">
				{experience.map((exp, index) => (
					<div key={index} className="grid sm:grid-cols-4">
						<div className="text-sm text-[#6b6b6b]">
							{exp.startDate} - {exp.endDate}
						</div>
						<div className="col-span-3">
							<Link
								href={exp.link}
								target="_blank"
								className="hover:underline text-white font-extralight text-lg flex items-center"
							>
								{exp.title} <ArrowUpRight className="w-5" />
							</Link>
							<div className="text-[#6b6b6b] text-sm leading-6">
								{exp.description}
							</div>

							<div className="flex flex-wrap gap-x-3 text-white text-sm mt-3">
								{exp.skils.map((skill, index) => (
									<div key={index}>• {skill}</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExperienceSection;

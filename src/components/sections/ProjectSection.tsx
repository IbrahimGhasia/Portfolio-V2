import { FC } from "react";
import SectionTitle from "../SectionTitle";
import { project } from "@/constants/Project";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
	return (
		<div className="mt-10">
			<SectionTitle title="Side Project" />
			<div className="space-y-10">
				{project.map((pro, index) => (
					<div key={index}>
						<div className="text-gray-900 dark:text-white font-medium dark:font-extralight text-lg">
							<div className="flex gap-2 items-center">
								{pro.title}
								{pro.sourceCode && (
									<Link href={pro.sourceCode} target="_blank">
										<Github size={18} />
									</Link>
								)}
								{pro.deployedLink && (
									<Link
										href={pro.deployedLink}
										target="_blank"
									>
										<ExternalLink size={18} />
									</Link>
								)}
							</div>
						</div>
						<div className="text-[#6b6b6b] text-sm leading-6">
							{pro.description}
						</div>

						<div className="flex flex-wrap gap-3 text-sm mt-3">
							{pro.tools.map((skill, index) => (
								<div
									key={index}
									className="text-gray-700 dark:text-gray-400 cursor-pointer"
								>
									•{" "}
									<span className="hover:underline hover:underline-offset-4 hover:text-black dark:hover:text-white">
										{skill}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectSection;

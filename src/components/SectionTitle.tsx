import { FC } from "react";

interface SectionTitleProps {
	title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
	return (
		<div className="text-lg text-black dark:text-white tracking-tighter font-medium dark:font-extralight my-5 border-b-[0.5px] border-black dark:border-gray-400">
			{title}
		</div>
	);
};

export default SectionTitle;

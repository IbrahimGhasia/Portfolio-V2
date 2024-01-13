import { FC } from "react";

interface SectionTitleProps {
	title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
	return (
		<div className="text-lg text-white tracking-tighter font-extralight my-5 border-b-[0.5px] border-gray-400">
			{title}
		</div>
	);
};

export default SectionTitle;

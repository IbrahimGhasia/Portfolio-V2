import { FC } from "react";

interface SectionTitleProps {
	title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
	return (
		<div className="text-lg text-white tracking-tighter font-extralight my-5">
			{title}
		</div>
	);
};

export default SectionTitle;

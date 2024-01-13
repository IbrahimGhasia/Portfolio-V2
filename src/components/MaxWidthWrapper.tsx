import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {}

const MaxWidthWrapper = ({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<div
			className={cn(
				"mx-auto w-full max-w-screen-md px-5 sm:px-10 md:px-20",
				className
			)}
		>
			{children}
		</div>
	);
};

export default MaxWidthWrapper;

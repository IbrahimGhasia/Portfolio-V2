import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { myInfo } from "@/constants/MyInfo";
import Image from "next/image";
import { File } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
	return (
		<div className="mt-10 md:mt-20 flex flex-col md:flex-row md:items-center gap-x-6">
			<div>
				<Avatar className="w-16 h-16 md:w-28 md:h-28">
					<AvatarImage src="/Myself-2.jpeg" alt="@shadcn" />
					<AvatarFallback>IG</AvatarFallback>
				</Avatar>
			</div>
			<div className="my-4">
				<div className="">
					<div className="text-4xl text-white tracking-tighter font-thin flex items-baseline gap-2">
						{myInfo.name}{" "}
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<File
										color="rgb(59 130 246)"
										className="cursor-pointer"
									/>
								</TooltipTrigger>
								<TooltipContent sideOffset={10} side="top">
									<p className="text-black font-normal tracking-normal text-xs">
										Download Resume
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<div className="text-[#6b6b6b] text-xl font-light leading-6">
						{myInfo.description}
					</div>
				</div>
				<div className="flex flex-wrap mr-5 items-center gap-3 mt-2">
					{myInfo.socials.map((social, key) => (
						<div
							key={key}
							className="flex items-center gap-1 group cursor-pointer"
						>
							<Image
								src={social.icon}
								alt={social.name}
								width={16}
								height={16}
								className=""
							/>
							<p className={`${social.color} text-sm`}>
								{social.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

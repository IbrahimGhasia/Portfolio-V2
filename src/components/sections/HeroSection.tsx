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
import Link from "next/link";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
	return (
		<div className="flex flex-col md:flex-row md:items-center gap-x-6">
			<div className="">
				<Avatar className="w-24 h-24 md:w-32 md:h-32 hover:-translate-y-2 duration-300">
					<AvatarImage src="/doodle.jpeg" alt="@shadcn" />
					<AvatarFallback>IG</AvatarFallback>
				</Avatar>
			</div>
			<div className="my-4">
				<div className="">
					<div className="text-3xl md:text-4xl text-white tracking-tighter font-thin flex items-baseline gap-2">
						<div>{myInfo.name}</div>
						<Link href={myInfo.resume} target="_blank">
							<File
								color="rgb(59 130 246)"
								className="cursor-pointer"
							/>
						</Link>
					</div>
					<div className="text-gray-400 text-lg font-light leading-6">
						{myInfo.description}
					</div>
					<div className="text-sm text-gray-400 font-light hover:underline">
						{myInfo.email}
					</div>
				</div>
				<div className="flex flex-wrap mr-5 items-center gap-3 mt-2">
					{myInfo.socials.map((social, key) => (
						<Link href={social.link} key={key} target="_blank">
							<div className="flex items-center gap-1 group cursor-pointer">
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
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

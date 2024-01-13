import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { myInfo } from "@/constants/MyInfo";
import Image from "next/image";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
	return (
		<div className="mt-10 md:mt-20 flex flex-col md:flex-row md:items-center gap-x-6">
			<div>
				<Avatar className="w-16 h-16 md:w-28 md:h-28">
					<AvatarImage
						src="https://github.com/shadcn.png"
						alt="@shadcn"
					/>
					<AvatarFallback>IG</AvatarFallback>
				</Avatar>
			</div>
			<div className="my-4">
				<div className="">
					<h1 className="text-4xl text-white tracking-tighter font-thin">
						{myInfo.name}
					</h1>
					<p className="text-gray-400 text-xl font-light">
						{myInfo.description}
					</p>
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
							<p
								className={`text-gray-400 ${social.color} text-sm`}
							>
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

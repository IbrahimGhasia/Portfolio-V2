import { myInfo } from "@/constants/MyInfo";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
	return (
		<div className="mt-10 flex justify-between text-white">
			<div className="text-sm">© Ibrahim Ghasia</div>
			<div className="flex gap-4">
				{myInfo.socials.map((social, index) => (
					<Link key={index} href={social.link} target="_blank">
						<Image
							src={social.icon}
							className="w-4"
							alt="Social Icons"
							width={4}
							height={4}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Footer;

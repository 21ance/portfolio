import IconLink from "../common/IconLink";
import {
	BiLogoGmail,
	BiLogoGithub,
	BiLogoDiscordAlt,
	BiLogoLinkedinSquare,
} from "react-icons/bi";

const Footer = () => {
	return (
		<footer className="flex justify-between text-custom-secondary dark:text-custom-white">
			<span>Lance</span>
			<nav className="flex gap-2 ">
				<IconLink
					icon={<BiLogoGithub />}
					link="https://github.com/21ance"
				/>
				<IconLink
					icon={<BiLogoGmail />}
					link="mailto: lancelopez46@gmail.com"
				/>
				<IconLink
					icon={<BiLogoDiscordAlt />}
					link="https://discordapp.com/users/lanceeee_"
				/>
				<IconLink
					icon={<BiLogoLinkedinSquare />}
					link="https://www.linkedin.com/in/lance-angelo-lopez-b8663023a/"
				/>
			</nav>
		</footer>
	);
};

export default Footer;

import {
	BiLogoGmail,
	BiLogoGithub,
	BiLogoDiscordAlt,
	BiLogoLinkedinSquare,
} from "react-icons/bi";
import IconLink from "./IconLink";

const Socials = (props) => {
	const { isText, className = "gap-2", textClass } = props;

	return (
		<nav>
			<nav
				className={
					className + " flex text-custom-secondary dark:text-custom-dwhite"
				}
			>
				<IconLink
					icon={<BiLogoGithub />}
					link="https://github.com/21ance"
					text="GitHub: 21ance"
					isText={isText}
					textClass={textClass}
				/>
				<IconLink
					icon={<BiLogoGmail />}
					link="mailto: lancelopez46@gmail.com"
					text="Gmail: lancelopez46@gmail.com"
					isText={isText}
					textClass={textClass}
				/>
				<IconLink
					icon={<BiLogoDiscordAlt />}
					link="https://discordapp.com/users/lanceeee_"
					text="Discord: lanceeee_"
					isText={isText}
					textClass={textClass}
				/>
				<IconLink
					icon={<BiLogoLinkedinSquare />}
					link="https://www.linkedin.com/in/lance-angelo-lopez-b8663023a/"
					text="LinkedIn: Lance Angelo Lopez"
					isText={isText}
					textClass={textClass}
				/>
			</nav>
		</nav>
	);
};

export default Socials;

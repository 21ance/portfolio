import Socials from "../common/Socials";

const Footer = () => {
	return (
		<footer className="flex justify-between text-custom-secondary dark:text-custom-white">
			<span></span>
			<Socials isText={true} textClass="hidden lg:block" />
		</footer>
	);
};

export default Footer;

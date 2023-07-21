import Socials from "../common/Socials";
import { motion } from "framer-motion";
import commonVariant from "../../animation/commonVariant";

const Footer = () => {
	return (
		<motion.footer
			variants={commonVariant.fadeIn}
			initial="hidden"
			whileInView="visible"
			className="flex justify-between text-custom-secondary dark:text-custom-white"
		>
			<span></span>
			<Socials isText={true} textClass="hidden lg:block" />
		</motion.footer>
	);
};

export default Footer;

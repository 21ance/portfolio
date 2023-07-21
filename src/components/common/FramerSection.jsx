import { motion } from "framer-motion";
import commonVariant from "../../animation/commonVariant";

const FramerSection = (props) => {
	const {
		className,
		id,
		variants = commonVariant.fadeIn,
		onClick,
		children,
	} = props;

	return (
		<motion.section
			className={className}
			id={id}
			onClick={onClick}
			variants={variants}
			initial="hidden"
			whileInView="visible"
		>
			{children}
		</motion.section>
	);
};

export default FramerSection;

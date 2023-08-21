import { motion } from "framer-motion";
import heroVariants from "../../animation/heroVariant";
import Typewriter from "typewriter-effect";
import Data from "../../data/data.json";

const Hero = () => {
	const data = Data.stack;

	return (
		<section
			className="flex flex-col flex-wrap py-6 md:py-20 mt-[-76px] sm:m-0"
			id="home"
		>
			<div className="font-scode text-4xl md:text-6xl w-[13ch] sm:w-[450px] h-[85px] md:h-[135px] font-bold text-center self-center text-custom-secondary dark:text-custom-dwhite">
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.start()
							.typeString("<span>Hello, I'm Lance Lopez</span>");
					}}
					options={{
						delay: 60,
					}}
				/>
			</div>

			<motion.p
				variants={heroVariants.heroSubHeading}
				initial="hidden"
				animate="visible"
				className="max-w-[55ch] min-w-[10ch] text-justify self-center text-2xl py-6 text-custom-sub dark:text-custom-dsub"
			>
				I have a degree in Information Technology. Recently, I have been
				honing my skills in web development which resulted in this
				portfolio website. I am currently looking for a front-end developer
				job.
			</motion.p>
			<motion.footer
				variants={heroVariants.heroStack}
				initial="hidden"
				animate="visible"
				className="flex gap-4 justify-center flex-wrap"
			>
				{data.map((item) => {
					return <Tech key={item.tech} src={item.src} text={item.tech} />;
				})}
			</motion.footer>
		</section>
	);
};

const Tech = (props) => {
	const { src, text } = props;

	return (
		<motion.div
			variants={heroVariants.heroStackItems}
			className="bg-custom-wdark dark:bg-custom-slight w-fit flex p-2 rounded-lg gap-1 dark:text-custom-dwhite items-center11"
		>
			<img src={src} alt={text} width="20" className="object-contain" />
			<span className="font-ssans">{text}</span>
		</motion.div>
	);
};

export default Hero;

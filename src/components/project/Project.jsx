import SectionHeading from "../common/SectionHeading";
import Data from "../../data/data.json";
import { BiLogoFigma, BiLogoGithub, BiWindowOpen } from "react-icons/bi";
import IconLink from "../common/IconLink";
import FramerSection from "../common/FramerSection";
import { motion } from "framer-motion";
import commonVariant from "../../animation/commonVariant";
import projectVariant from "../../animation/projectVariant";

const Project = () => {
	const data = Data.projects;

	function newTab(link) {
		window.open(link, "_blank");
	}

	return (
		<FramerSection id="work">
			<SectionHeading text="My latest " highlight="work" />
			<article className="text-custom-secondary grid 2xl:grid-cols-[1fr,1fr] gap-10 md:gap-6">
				{data.map((item) => {
					return (
						<motion.article
							variants={commonVariant.fadeIn}
							initial="hidden"
							whileInView="visible"
							key={item.project}
							className="p-2 py-4 sm:p-6  grid grid-cols-[1fr,auto] gap-6 self-start duration-300 hover:scale-[1.01] transform hover:bg-custom-wdark dark:hover:bg-custom-slight rounded-lg cursor-pointer dark:text-custom-white first:bg-custom-wdark dark:first:bg-custom-slight first:cursor-default first:hover:scale-100"
							onClick={() => {
								if (item.links.live !== undefined) newTab(item.links.live);
							}}
						>
							<motion.h3
								variants={commonVariant.fadeUp}
								className="font-scode text-2xl md:text-4xl font-bold col-[1/-1] mb-[-0.5rem]"
							>
								{item.project}
							</motion.h3>
							<img
								src={item.src}
								alt={item.project + " screenshot"}
								className="w-full object-cover col-[1/-1] rounded-lg border-2 border-custom-wdark bg-custom-wdark dark:border-custom-slight"
							/>
							<motion.div
								variants={projectVariant.projStack}
								viewport={{ once: true }}
								initial="hidden"
								whileInView="visible"
								className="flex gap-2 sm:gap-3 flex-wrap"
							>
								{item.stack.map((stack) => {
									return (
										<motion.span
											variants={projectVariant.projStackItems}
											key={stack}
											className="font-ssans text-xs px-2 py-1 bg-custom-wdark dark:bg-custom-slight rounded h-fit "
										>
											{stack}
										</motion.span>
									);
								})}
							</motion.div>
							<nav className="flex gap-2 sm:gap-3 justify-end">
								{item.links.figma && (
									<IconLink
										link={item.links.figma}
										icon={<BiLogoFigma />}
									/>
								)}
								<IconLink
									link={item.links.github}
									icon={<BiLogoGithub />}
								/>
								{item.links.live && (
									<IconLink
										link={item.links.live}
										icon={<BiWindowOpen />}
									/>
								)}
							</nav>
							<p className="font-ssans col-[1/-1] my-[-12px] text-justify">
								{item.desc}
							</p>
						</motion.article>
					);
				})}
			</article>
		</FramerSection>
	);
};

export default Project;

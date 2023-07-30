import { useState } from "react";
import Data from "../../data/data.json";
import SectionHeading from "../common/SectionHeading";
import FramerSection from "../common/FramerSection";
import { motion } from "framer-motion";
import commonVariant from "../../animation/commonVariant";

const Experience = () => {
	const data = Data.experience;
	const [activeExp, setActiveExp] = useState(data[0].company);

	return (
		<FramerSection id="about">
			<SectionHeading text="About" highlight=" me" />
			<article className="flex gap-6 sm:gap-10 flex-col sm:flex-row lg:gap-16">
				<nav className="flex-1 flex sm:flex-col gap-2">
					{data.map((item) => {
						return (
							<ExpItem
								key={item.company}
								icon={item.src}
								title={item.company}
								sub={item.title}
								activeExp={activeExp}
								setActiveExp={setActiveExp}
							/>
						);
					})}
				</nav>
				{data.map((item) => {
					if (item.company === activeExp) {
						return (
							<ExpDetails
								key={item.company}
								title={item.title}
								company={item.company}
								companyLink={item.companyLink}
								date={item.date}
								desc={item.desc}
							/>
						);
					}
				})}
			</article>
		</FramerSection>
	);
};

const ExpItem = (props) => {
	const { icon, title, sub, activeExp, setActiveExp } = props;

	return (
		<div
			className={
				"font-ssans grid w-fit sm:w-full sm:grid-cols-[auto,1fr] gap-x-4 p-5 cursor-pointer duration-200 hover:bg-custom-wdark rounded-lg hover:dark:bg-custom-slight " +
				(activeExp === title &&
					"bg-custom-wdark rounded-lg dark:bg-custom-slight")
			}
			onClick={() => setActiveExp(title)}
		>
			<img src={icon} alt={title} width="50px" className="row-[1/3]" />
			<h3 className="hidden sm:block text-lg text-custom-secondary dark:text-custom-dwhite">
				{title}
			</h3>
			<span className="hidden sm:block text-xs dark:text-custom-wdark dark:text-opacity-40">
				{sub}
			</span>
		</div>
	);
};

const ExpDetails = (props) => {
	const { title, company, companyLink, date, desc } = props;

	return (
		<motion.div
			variants={commonVariant.fadeRight}
			initial="hidden"
			whileInView="visible"
			className="flex-1 flex flex-col gap-7 font-ssans dark:text-custom-dwhite"
		>
			<header>
				<span className="text-lg block">
					{title}{" "}
					<a
						href={companyLink}
						aria-label={"link to " + companyLink}
						target="_blank"
						rel="noreferrer"
						className="text-custom-primary duration-200 hover:text-custom-primary/70"
					>
						@{company}
					</a>
				</span>
				<span className="text-gray-500">{date}</span>
			</header>
			{desc.map((d) => {
				return (
					<p key={d}>
						<span className="text-custom-primary font-bold">{"> "}</span>
						{d}
					</p>
				);
			})}
		</motion.div>
	);
};

export default Experience;

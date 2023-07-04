import { useState } from "react";
import ExperienceData from "./experience.json";
import LogoUST from "../../images/logo/ust.png";
import LogoSpiral from "../../images/logo/spiralworks.png";
import SectionHeading from "../common/SectionHeading";

const Experience = () => {
	const [activeExp, setActiveExp] = useState("Spiralworks");

	const data = ExperienceData.experience;

	return (
		<section>
			<SectionHeading text="My experience" />
			<article className="flex gap-6 sm:gap-10 flex-col sm:flex-row lg:gap-16">
				<nav className="flex-1 flex sm:flex-col gap-2">
					<ExpItem
						icon={LogoSpiral}
						title="Spiralworks"
						sub="Junior Test Automation Developer"
						activeExp={activeExp}
						setActiveExp={setActiveExp}
					/>
					<ExpItem
						icon={LogoUST}
						title="University of Santo Tomas"
						sub="Information Technology Student"
						activeExp={activeExp}
						setActiveExp={setActiveExp}
					/>
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
		</section>
	);
};

const ExpItem = (props) => {
	const { icon, title, sub, activeExp, setActiveExp } = props;

	return (
		<div
			className={
				"font-ssans grid w-fit sm:w-full sm:grid-cols-[auto,1fr] gap-x-4 p-5 cursor-pointer hover:bg-custom-wdark rounded-lg hover:dark:bg-custom-slight " +
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
		<div className="flex-1 flex flex-col gap-7 font-ssans dark:text-custom-dwhite">
			<header>
				<h4 className="text-lg">
					{title}{" "}
					<a
						href={companyLink}
						target="_blank"
						rel="noreferrer"
						className="text-custom-primary"
					>
						@{company}
					</a>
				</h4>
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
		</div>
	);
};

export default Experience;

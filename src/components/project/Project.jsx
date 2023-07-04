import SectionHeading from "../common/SectionHeading";
import ProjectData from "./projects.json";
import { BiLogoFigma, BiLogoGithub, BiWindowOpen } from "react-icons/bi";
import IconLink from "../common/IconLink";

const Project = () => {
	const data = ProjectData.projects;

	return (
		<section>
			<SectionHeading text="My latest " highlight="work" />
			<article className="text-custom-secondary flex gap-10 flex-wrap justify-center">
				{data.map((item) => {
					return (
						<article
							key={item.project}
							className="p-2 sm:p-6 pt-0 grid grid-cols-[1fr,1fr] gap-6 self-start hover:bg-custom-wdark rounded-lg cursor-pointer"
						>
							<h3 className="font-scode text-2xl sm:text-4xl font-bold col-[1/-1]">
								{item.project}
							</h3>
							<img
								src={item.src}
								alt={item.project + " screenshot"}
								className="2xl:h-[350px] min-[1900px]:h-[430px] object-cover col-[1/-1] rounded-lg border-2 border-custom-wdark bg-custom-wdark"
							/>
							<div className="flex gap-2 sm:gap-3">
								{item.stack.map((stack) => {
									return (
										<span
											key={stack}
											className="font-ssans text-xs px-2 py-1 bg-custom-wdark rounded h-fit"
										>
											{stack}
										</span>
									);
								})}
							</div>
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
								<IconLink link={item.links.live} icon={<BiWindowOpen />} />
							</nav>
							<p className="font-ssans col-[1/-1] my-[-12px] max-w-[60ch] text-justify">
								{item.desc}
							</p>
						</article>
					);
				})}
			</article>
		</section>
	);
};

export default Project;
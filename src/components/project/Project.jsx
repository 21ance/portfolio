import SectionHeading from "../common/SectionHeading";
import Data from "../../data/data.json";
import { BiLogoFigma, BiLogoGithub, BiWindowOpen } from "react-icons/bi";
import IconLink from "../common/IconLink";

const Project = () => {
	const data = Data.projects;

	function newTab(link) {
		window.open(link, "_blank");
	}

	return (
		<section id="work">
			<SectionHeading text="My latest " highlight="work" />
			<article className="text-custom-secondary flex gap-10 flex-wrap justify-center">
				{data.map((item) => {
					return (
						<article
							key={item.project}
							className="p-2 py-4 sm:p-6 pt-0 grid grid-cols-[1fr,auto] gap-6 self-start sm:hover:bg-custom-wdark dark:sm:hover:bg-custom-slight rounded-lg cursor-pointer dark:text-custom-white first:bg-custom-wdark dark:first:bg-custom-slight first:cursor-default"
							onClick={() => {
								if (item.links.live !== undefined) newTab(item.links.live);
							}}
						>
							<h3 className="font-scode text-2xl md:text-4xl font-bold col-[1/-1]">
								{item.project}
							</h3>
							<img
								src={item.src}
								alt={item.project + " screenshot"}
								className="2xl:h-[350px] min-[1900px]:h-[430px] object-cover col-[1/-1] rounded-lg border-2 border-custom-wdark bg-custom-wdark dark:border-custom-slight"
							/>
							<div className="flex gap-2 sm:gap-3 flex-wrap">
								{item.stack.map((stack) => {
									return (
										<span
											key={stack}
											className="font-ssans text-xs px-2 py-1 bg-custom-wdark dark:bg-custom-slight rounded h-fit "
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
								{item.links.live && (
									<IconLink
										link={item.links.live}
										icon={<BiWindowOpen />}
									/>
								)}
							</nav>
							<p className="font-ssans col-[1/-1] my-[-12px] max-w-[75ch] text-justify">
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

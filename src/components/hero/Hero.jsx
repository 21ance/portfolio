const Hero = () => {
	return (
		<section className="flex flex-col flex-wrap py-6 md:py-20">
			<h1 className="font-scode text-4xl md:text-6xl font-bold w-11ch text-center self-center text-custom-secondary dark:text-custom-dwhite">
				Hello {"I'm"} Lance Lopez
			</h1>
			<p className="w-55ch text-justify self-center text-2xl py-6 text-custom-sub dark:text-custom-dsub">
				I have a degree in Information Technology. Recently, I have been
				honing my skills in front-end development which resulted in this
				portfolio website. I am currently looking for a front-end developer
				job.
			</p>
			<footer className="flex gap-4 justify-center flex-wrap">
				<Tech
					src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
					text="HTML"
				/>
				<Tech
					src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
					text="CSS"
				/>
				<Tech
					src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png"
					text="Sass"
				/>
				<Tech
					src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
					text="Tailwind"
				/>
				<Tech
					src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
					text="JavaScript"
				/>
				<Tech
					src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
					text="ReactJS"
				/>
			</footer>
		</section>
	);
};

const Tech = (props) => {
	const { src, text } = props;

	return (
		<div className="bg-custom-wdark dark:bg-custom-slight w-fit flex p-2 rounded-lg gap-1 dark:text-custom-dwhite">
			<img src={src} alt={text} width="20" className="object-contain" />
			<span className="font-ssans">{text}</span>
		</div>
	);
};

export default Hero;

const SectionHeading = (props) => {
	const { text, highlight } = props;
	return (
		<h2 className="text-3xl	md:text-5xl font-scode font-bold text-custom-secondary dark:text-custom-dwhite pb-5 md:pb-10">
			{text}
			{highlight && (
				<span className="text-custom-primary">{highlight}</span>
			)}
		</h2>
	);
};

export default SectionHeading;

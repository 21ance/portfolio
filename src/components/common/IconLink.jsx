const IconLink = (props) => {
	const {
		icon,
		link,
		aClass = "text-2xl",
		text,
		textClass,
		isText = false,
		onclick,
	} = props;

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={
				aClass +
				" flex justify-center items-center text-custom-black dark:text-custom-dwhite duration-200 hover:text-custom-primary dark:hover:text-custom-primary"
			}
			onClick={(e) => {
				onclick;
				e.stopPropagation();
			}}
		>
			{icon}
			{isText && <span className={"text-base " + textClass}>{text}</span>}
		</a>
	);
};

export default IconLink;

const IconLink = (props) => {
	const {
		icon,
		link,
		aClass = "text-2xl",
		text,
		textClass,
		isText = false,
	} = props;

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={aClass + " flex justify-center items-center"}
		>
			{icon}
			{isText && <span className={"text-base " + textClass}>{text}</span>}
		</a>
	);
};

export default IconLink;

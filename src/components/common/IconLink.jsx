const IconLink = (props) => {
	const { icon, link, size = "text-2xl" } = props;

	return (
		<a href={link} target="_blank" rel="noreferrer" className={size}>
			{icon}
		</a>
	);
};

export default IconLink;

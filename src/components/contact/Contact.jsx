const Contact = (props) => {
	const { isModal, setIsModal } = props;

	return (
		<section
			className="self-center cursor-pointer text-custom-secondary dark:text-custom-white bg-custom-wdark hover:bg-custom-wdark/50 dark:bg-custom-slight hover:dark:bg-custom-slight/50 rounded-lg w-full py-8 px-2 font-scode text-center font-bold text-3xl	md:text-5xl flex flex-col"
			onClick={() => setIsModal(!isModal)}
		>
			<span>Ready to start</span>
			<span>your next project?</span>
			<span className="text-custom-primary">Get in touch with me!</span>
		</section>
	);
};

export default Contact;

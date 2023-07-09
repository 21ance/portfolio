const Contact = (props) => {
	const { isModal, setIsModal } = props;

	return (
		<section
			className="self-center cursor-pointer text-custom-secondary dark:text-custom-white bg-custom-wdark dark:bg-custom-slight rounded-lg w-full py-8 font-scode text-center font-bold text-6xl flex flex-col"
			onClick={() => setIsModal(!isModal)}
		>
			<span>Ready to start</span>
			<span>your next project?</span>
			<span className="text-custom-primary">Get in touch with me!</span>
		</section>
	);
};

export default Contact;

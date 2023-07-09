import SectionHeading from "../common/SectionHeading";

const FormModal = (props) => {
	const { isModal, setIsModal } = props;
	console.log(isModal);

	return (
		<div
			id="modal"
			className={
				(isModal === false ? "hidden" : "fixed") +
				" bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full mx-[-1rem] md:mx-[-2.5rem] xl:mx-[-7rem] flex items-center justify-center"
			}
		>
			<form
				target="_blank"
				action="https://formsubmit.co/ca0a24088e2ac7384d873f5b9282ebf6"
				method="POST"
				className="bg-custom-white dark:bg-custom-secondary p-8 rounded-lg"
			>
				<header className="relative">
					<SectionHeading text="Contact" highlight=" me" />
				</header>
				<div className="flex flex-col gap-4 text-custom-secondary dark:text-custom-dwhite">
					<input
						type="text"
						placeholder="Name"
						className="bg-transparent p-1 border-b-2 border-custom-secondary/40 dark:border-custom-white/40 placeholder:text-custom-secondary/70 dark:placeholder:text-custom-white/70"
					/>
					<input
						type="text"
						placeholder="Email"
						className="bg-transparent p-1 border-b-2 border-custom-secondary/40 dark:border-custom-white/40 placeholder:text-custom-secondary/70 dark:placeholder:text-custom-white/70"
					/>
					<textarea
						rows="3"
						className="resize-none bg-transparent p-1 border-b-2 border-custom-secondary/40 dark:border-custom-white/40 placeholder:text-custom-secondary/70 dark:placeholder:text-custom-white/70"
						placeholder="Your message"
					></textarea>
				</div>
				<footer>
					<FormButton
						onClick={() => setIsModal(false)}
						color="bg-custom-primary text-custom-white lg:hover:bg-blue-500"
						text="Send message"
					/>
				</footer>
			</form>
		</div>
	);
};

const FormButton = (props) => {
	const { onClick, color, text, type = "button" } = props;

	return (
		<button
			type={type}
			// onClick={() => setIsModal(false)}
			onClick={onClick}
			className={color + " px-5 py-2 mt-8 font-inter rounded-md"}
		>
			{text}
		</button>
	);
};

export default FormModal;

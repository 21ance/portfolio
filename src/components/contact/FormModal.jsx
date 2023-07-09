import SectionHeading from "../common/SectionHeading";
import Socials from "../common/Socials";
import { AiOutlineCloseCircle } from "react-icons/ai";

const FormModal = (props) => {
	const { isModal, setIsModal } = props;

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
				className="bg-custom-white dark:bg-custom-secondary text-custom-secondary dark:text-custom-dwhite p-8 rounded-lg grid grid-cols-[2fr_1fr] sm:grid-cols-2 gap-y-4"
			>
				<header className="relative">
					<SectionHeading text="Contact" highlight=" me" />
				</header>
				<button
					type="button"
					className="self-start justify-self-end w-fit text-2xl"
					onClick={() => setIsModal(false)}
				>
					<AiOutlineCloseCircle />
				</button>
				<div className="flex flex-col gap-4 col-[1/-1] sm:col-[1/2]">
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
				<Socials
					className="sm:flex-col items-start gap-4 sm:px-4"
					isText="true"
					textClass="hidden sm:block"
				/>
				<footer className="col-[1/-1]">
					<FormButton
						onClick={() => setIsModal(false)}
						color="bg-custom-primary text-custom-white lg:hover:bg-blue-500"
						text="Send message"
						type="submit"
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
			onClick={onClick}
			className={color + " px-5 py-2 mt-8 font-inter rounded-md"}
		>
			{text}
		</button>
	);
};

export default FormModal;

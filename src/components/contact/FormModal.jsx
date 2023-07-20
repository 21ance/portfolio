import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Socials from "../common/Socials";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import modalVariant from "../animation/modalVariant";

const FormModal = (props) => {
	const { isModal, setIsModal } = props;

	const [isError, setIsError] = useState(false);
	const [formValue, setFormValue] = useState({
		Name: "",
		Email: "",
		Message: "",
	});

	return (
		<AnimatePresence>
			{isModal && (
				<motion.div
					variants={modalVariant.background}
					initial="hidden"
					whileInView="visible"
					exit="hidden"
					id="modal"
					className="fixed bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full mx-[-1rem] md:mx-[-2.5rem] xl:mx-[-7rem] flex items-center justify-center"
					onClick={() => {
						setIsError(false);
						setIsModal(false);
					}}
				>
					<motion.form
						variants={modalVariant.modal}
						target="_blank"
						action="https://formsubmit.co/ca0a24088e2ac7384d873f5b9282ebf6"
						method="POST"
						className="bg-custom-white dark:bg-custom-secondary text-custom-secondary dark:text-custom-dwhite p-8 rounded-lg grid grid-cols-[2fr_1fr] sm:grid-cols-2 gap-y-4"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<header className="relative">
							<SectionHeading text="Contact" highlight=" me" />
						</header>
						<button
							type="button"
							className="self-start justify-self-end w-fit text-2xl hover:scale-110"
							onClick={() => setIsModal(false)}
						>
							<AiOutlineCloseCircle />
						</button>
						<div className="flex flex-col gap-4 col-[1/-1] sm:col-[1/2]">
							<FormInput
								name="Name"
								value={formValue.Name}
								onChange={(e) => {
									setIsError(false);
									setFormValue({
										...formValue,
										Name: e.target.value,
									});
								}}
							/>
							<FormInput
								name="Email"
								value={formValue.Email}
								onChange={(e) => {
									setIsError(false);
									setFormValue({
										...formValue,
										Email: e.target.value,
									});
								}}
							/>
							<textarea
								rows="3"
								name="Message"
								className="resize-none bg-transparent p-1 border-b-2 border-custom-secondary/40 dark:border-custom-white/40 placeholder:text-custom-secondary/70 dark:placeholder:text-custom-white/70"
								placeholder="Your message"
								value={formValue.Message}
								onChange={(e) => {
									setIsError(false);
									setFormValue({
										...formValue,
										Message: e.target.value,
									});
								}}
							></textarea>
							{isError && (
								<p className="text-xs text-red-500 my-[-0.5rem] pl-1">
									Please answer all fields before sending a message*
								</p>
							)}
						</div>
						<Socials
							className="sm:flex-col items-start gap-4 sm:px-4"
							isText="true"
							textClass="hidden sm:block"
						/>
						<footer className="col-[1/-1]">
							<FormButton
								onClick={(e) => {
									if (
										formValue.Name === "" ||
										formValue.Email === "" ||
										formValue.Message === ""
									) {
										setIsError(true);
										e.preventDefault();
									} else {
										setIsError(false);
										setIsModal(false);
										setFormValue({
											Name: "",
											Email: "",
											Message: "",
										});
									}
								}}
								className="bg-custom-primary text-custom-white sm:hover:bg-blue-500"
								text="Send message"
								type="submit"
							/>
						</footer>
					</motion.form>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const FormInput = (props) => {
	const { name, value, onChange } = props;

	return (
		<input
			type="text"
			name={name}
			placeholder={name}
			className="bg-transparent p-1 border-b-2 border-custom-secondary/40 dark:border-custom-white/40 placeholder:text-custom-secondary/70 dark:placeholder:text-custom-white/70"
			value={value}
			onChange={onChange}
		/>
	);
};

const FormButton = (props) => {
	const { onClick, className, text, type = "button" } = props;

	return (
		<button
			type={type}
			onClick={onClick}
			className={className + " px-5 py-2 mt-8 font-inter rounded-md"}
		>
			{text}
		</button>
	);
};

export default FormModal;

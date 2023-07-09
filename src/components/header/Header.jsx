import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

const Header = (props) => {
	const { setIsModal } = props;

	const [lightMode, setLightMode] = useState(() => {
		if (JSON.parse(localStorage.getItem("lightmode") !== null)) {
			return JSON.parse(localStorage.getItem("lightmode"));
		}
		return true;
	});

	function checkMode() {
		localStorage.setItem("lightmode", JSON.stringify(lightMode));
		lightMode == false
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	}

	function switchMode() {
		checkMode();
		setLightMode(!lightMode);
	}

	useEffect(() => {
		checkMode();
	});

	return (
		<header className="flex justify-between py-4 items-center ">
			<span className="text-custom-secondary dark:text-custom-white">
				Lance
			</span>
			<nav className="flex gap-6 items-center justify-center">
				<NavItem href="#" content="Home" />
				<NavItem href="#" content="About" />
				<NavItem href="#" content="Work" />
				<a
					className="text-custom-black dark:text-custom-dwhite lg:hover:text-custom-primary dark:lg:hover:text-custom-primary"
					href="https://github.com/21ance"
					target="_blank"
					rel="noreferrer"
				>
					<BsGithub />
				</a>
				<button
					onClick={() => switchMode()}
					className="dark:text-custom-white lg:hover:text-custom-primary dark:lg:hover:text-custom-primary"
				>
					{lightMode === true ? <MdOutlineLightMode /> : <MdLightMode />}
				</button>
				<button
					className="hidden sm:block px-5 py-2 font-inter rounded-lg bg-custom-primary text-custom-white lg:hover:bg-blue-500"
					onClick={() => setIsModal(true)}
				>
					Contact me {"->"}
				</button>
			</nav>
		</header>
	);
};

const NavItem = (props) => {
	const { href, content } = props;

	return (
		<a
			href={href}
			className="hidden sm:block lg:hover:text-custom-primary dark:lg:hover:text-custom-primary text-custom-black dark:text-custom-dwhite"
		>
			{content}
		</a>
	);
};

export default Header;

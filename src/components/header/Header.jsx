import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

const Header = () => {
	const [lightMode, setLightMode] = useState(true);

	function modeToggle() {
		setLightMode(!lightMode);
		lightMode == true
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	}

	return (
		<header className="flex justify-between py-4 px-4 md:px-6 items-center ">
			<span className="text-custom-secondary dark:text-custom-white">
				Lance
			</span>
			<nav className="flex gap-6 items-center justify-center">
				<NavItem href="#" content="Home" />
				<NavItem href="#" content="About" />
				<NavItem href="#" content="Work" />
				<a
					className="text-custom-black dark:text-custom-dwhite hover:text-custom-primary dark:hover:text-custom-primary"
					href="https://github.com/21ance"
					target="_blank"
					rel="noreferrer"
				>
					<BsGithub />
				</a>
				<button
					onClick={() => modeToggle()}
					className="dark:text-custom-white hover:text-custom-primary dark:hover:text-custom-primary"
				>
					{lightMode === true ? <MdOutlineLightMode /> : <MdLightMode />}
				</button>
				<button className="hidden sm:block px-5 py-2 font-inter rounded bg-custom-primary text-custom-white hover:bg-blue-500">
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
			className="hidden sm:block hover:text-custom-primary dark:hover:text-custom-primary text-custom-black dark:text-custom-dwhite"
		>
			{content}
		</a>
	);
};

export default Header;

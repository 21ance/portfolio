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
		<header className="flex  justify-between py-4 px-6 items-center ">
			<span className="text-custom-black dark:text-custom-white">
				Lance
			</span>
			<nav className="flex gap-6 items-center justify-center">
				<NavItem href="#" content="Home" />
				<NavItem href="#" content="About" />
				<NavItem href="#" content="Work" />
				<NavItem
					href="https://github.com/21ance"
					content={<BsGithub />}
					target="_blank"
				/>
				<button
					onClick={() => modeToggle()}
					className="dark:text-custom-white"
				>
					{lightMode === true ? <MdOutlineLightMode /> : <MdLightMode />}
				</button>
				<button className="px-5 py-2 font-inter rounded bg-custom-primary text-custom-white hover:bg-blue-500">
					Contact me {"->"}
				</button>
			</nav>
		</header>
	);
};

const NavItem = (props) => {
	const { href, content, target = "_self" } = props;

	return (
		<a
			href={href}
			className="hover:text-custom-primary text-custom-black dark:text-custom-white"
			target={target}
		>
			{content}
		</a>
	);
};

export default Header;

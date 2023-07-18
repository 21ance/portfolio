import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import {
	MdOutlineLightMode,
	MdLightMode,
	MdMenu,
	MdMenuOpen,
} from "react-icons/md";
import IconLink from "../common/IconLink";

const Header = (props) => {
	const { setIsModal } = props;

	const [mobileNav, setMobileNav] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [lightMode, setLightMode] = useState(() => {
		if (JSON.parse(localStorage.getItem("lightmode") !== null)) {
			return JSON.parse(localStorage.getItem("lightmode"));
		}
		return false;
	});

	function handleScroll() {
		const currentScrollPos = window.scrollY;
		if (currentScrollPos > prevScrollPos) {
			setVisible(false);
		} else {
			setVisible(true);
		}
		setPrevScrollPos(currentScrollPos);
	}

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

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<header
			className={
				(visible ? "sticky top-0 " : "") +
				"flex justify-between sm:justify-end py-4 items-center bg-custom-white dark:bg-custom-secondary relative min-h-[56px]"
			}
		>
			<button
				className="dark:text-custom-white sm:hidden text-custom-secondary"
				type="button"
				onClick={() => setMobileNav(!mobileNav)}
			>
				{mobileNav ? <MdMenuOpen /> : <MdMenu />}
			</button>

			<nav className="flex gap-6 items-center justify-center">
				<NavItem href="#home" content="Home" mobileNav={mobileNav} />
				<NavItem href="#about" content="About" mobileNav={mobileNav} />
				<NavItem href="#work" content="Work" mobileNav={mobileNav} />
				<IconLink
					icon={<BsGithub />}
					link="https://github.com/21ance"
					aClass="text-base"
				/>
				<button
					onClick={() => switchMode()}
					className="dark:text-custom-white lg:hover:text-custom-primary dark:lg:hover:text-custom-primary"
					type="button"
				>
					{lightMode ? <MdOutlineLightMode /> : <MdLightMode />}
				</button>
				<button
					className="hidden sm:block px-5 py-2 font-inter rounded-lg bg-custom-primary text-custom-white lg:hover:bg-blue-500"
					onClick={() => setIsModal(true)}
					type="button"
				>
					Contact me {"->"}
				</button>
			</nav>
		</header>
	);
};

const NavItem = (props) => {
	const { href, content, mobileNav } = props;

	return (
		<a
			href={href}
			className={
				"lg:hover:text-custom-primary sm:block dark:lg:hover:text-custom-primary text-custom-black dark:text-custom-dwhite " +
				(mobileNav ? "block" : "hidden")
			}
		>
			{content}
		</a>
	);
};

export default Header;

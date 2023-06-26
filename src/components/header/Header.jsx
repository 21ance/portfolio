import { BsGithub } from "react-icons/bs";

const Header = () => {
	return (
		<header className="flex  justify-between py-4 px-6 items-center ">
			<span>Lance</span>
			<nav className="flex gap-6 items-center">
				<NavItem href="#" content="Home" />
				<NavItem href="#" content="About" />
				<NavItem href="#" content="Work" />
				<NavItem href="#" content={<BsGithub />} />
				<button className="px-5 py-2 font-inter bg-custom-primary text-custom-white rounded">
					Contact me {"->"}
				</button>
			</nav>
		</header>
	);
};

const NavItem = (props) => {
	const { href, content } = props;

	return (
		<a href={href} className="hover:text-custom-primary">
			{content}
		</a>
	);
};

export default Header;

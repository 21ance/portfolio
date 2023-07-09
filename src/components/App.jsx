import Header from "./header/Header";
import Hero from "./hero/Hero";
import Experience from "./experience/Experience";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import FormModal from "./contact/FormModal";
import Footer from "./footer/Footer";
import { useState } from "react";

function App() {
	const [isModal, setIsModal] = useState(false);

	return (
		<>
			<Header setIsModal={setIsModal} />
			<Hero />
			<Experience />
			<Project />
			<Contact setIsModal={setIsModal} />
			<Footer />
			<FormModal isModal={isModal} setIsModal={setIsModal} />
		</>
	);
}

export default App;

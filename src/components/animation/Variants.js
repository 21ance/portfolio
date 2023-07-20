const variants = {
	fadeIn: {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	},

	modal: {
		hidden: { y: "-100vh", opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	},
};

export default variants;

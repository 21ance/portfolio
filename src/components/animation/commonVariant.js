const commonVariant = {
	fadeIn: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.7,
			},
		},
	},

	fadeRight: {
		hidden: {
			opacity: 0,
			x: "50px",
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	},

	fadeUp: {
		hidden: {
			opacity: 0,
			y: "50px",
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	},
};

export default commonVariant;

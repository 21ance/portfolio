const heroVariants = {
	heroSubHeading: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 2,
				delay: 1.6,
			},
		},
	},

	heroStack: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 2,
			},
		},
	},

	heroStackItems: {
		hidden: {
			opacity: 0,
			y: -20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	},
};

export default heroVariants;

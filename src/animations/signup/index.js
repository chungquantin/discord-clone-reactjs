import React from "react";

export default class SignUpAnimation extends React.Component {
	state = {
		Inner: {
			open: {
				opacity: 1,
				marginTop: "0px",
			},
			exit: {
				opacity: 0,
				marginTop: "-100px",
			},
			initial: {
				opacity: 0,
				marginTop: "-100px",
			},
			transition: {
				duration: 0.1,
			},
		},
	};
	render() {
		return this.props.render(this.state);
	}
}

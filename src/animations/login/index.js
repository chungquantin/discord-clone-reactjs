import React from "react";

export default class LoginAnimation extends React.Component {
	state = {
		inner: {
			width: "900px",
			height: "1000px",
		},
	};
	render() {
		return this.props.render(this.state);
	}
}

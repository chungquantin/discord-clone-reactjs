import React from "react";
import { Form } from "../components";

export default (SelectComponent) => {
	return (min, max, format, placeholder) => {
		const options = [];
		for (let i = min; i <= max; i++) {
			options.push(
				<Form.Option key={`${format}-${i}`} value={i} text={`${format} ${i}`} />
			);
		}
		const hocComponent = ({ children, ...props }) => (
			<SelectComponent {...props}>
				<Form.Option value={null} text={placeholder} disabled selected />
				{children}
				{options}
			</SelectComponent>
		);

		return hocComponent;
	};
};

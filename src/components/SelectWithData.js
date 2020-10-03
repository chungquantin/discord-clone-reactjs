import { Form } from ".";

import React from "react";

export default function SelectWithData({ min, max, format, children }) {
	const options = [];
	for (let i = min; i <= max; i++) {
		options.push(<Form.Option value={i} text={`${format} ${i}`} />);
	}
	return (
		<Form.Select>
			{children}
			{options}
		</Form.Select>
	);
}

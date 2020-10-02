import React from "react";
import * as Style from "./styles/Form";

function Form({ children, ...restProps }) {
	return (
		<Style.Container {...restProps}>
			<Style.Inner>{children}</Style.Inner>
		</Style.Container>
	);
}

Form.Button = function FormButton({ children, ...restProps }) {
	return <Style.Button {...restProps}>{children}</Style.Button>;
};

Form.Link = function FormLink({ to, children, ...restProps }) {
	return (
		<Style.Link to={to} {...restProps}>
			{children}
		</Style.Link>
	);
};

Form.Label = function FormLabel({ children, ...restProps }) {
	return <Style.Label {...restProps}>{children}</Style.Label>;
};

Form.Inner = function FormInner({ children, ...restProps }) {
	return <Style.Inner {...restProps}>{children}</Style.Inner>;
};
Form.Select = function FormSelect({ placeholder, children, ...restProps }) {
	return (
		<Style.Select placeholder={placeholder} {...restProps}>
			{children}
		</Style.Select>
	);
};

Form.Option = function FormOption({ value, children, ...restProps }) {
	return <Style.Option value={value} {...restProps} />;
};

Form.Header = function FormHeader({ children, ...restProps }) {
	return <Style.Header {...restProps}>{children}</Style.Header>;
};

Form.Body = function FormBody({ children, ...restProps }) {
	return <Style.Body {...restProps}>{children}</Style.Body>;
};

Form.Image = function FormImage({ src, children, ...restProps }) {
	return <Style.Image src={src} {...restProps} />;
};

Form.Base = function FormBase({ children, ...restProps }) {
	return <Style.Base {...restProps}>{children}</Style.Base>;
};

export default Form;

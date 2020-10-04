import React from "react";
import * as Style from "./styles/Form";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Form({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

Form.Inner = function FormInner({
	width,
	minHeight,
	bgColor,
	children,
	...restProps
}) {
	return (
		<Style.Inner
			width={width}
			bgColor={bgColor}
			minHeight={minHeight}
			{...restProps}
		>
			{children}
		</Style.Inner>
	);
};

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
Form.Select = function FormSelect({ children, ...restProps }) {
	return (
		<div style={{ position: "relative" }}>
			<Style.Icon icon={faChevronDown} />
			<Style.Select {...restProps}>{children}</Style.Select>
		</div>
	);
};

Form.Option = function FormOption({ value, text, children, ...restProps }) {
	return (
		<Style.Option value={value} {...restProps}>
			{text}
		</Style.Option>
	);
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

Form.Wrapper = function FormWrapper({ children, ...restProps }) {
	return <Style.Wrapper {...restProps}>{children}</Style.Wrapper>;
};

Form.Input = function FormInput({ ...restProps }) {
	return <Style.Input {...restProps} />;
};

Form.Text = function FormText({ children, ...restProps }) {
	return <Style.Text>{children}</Style.Text>;
};

Form.Error = function FormText({ children, ...restProps }) {
	return <Style.ErrorText>{children}</Style.ErrorText>;
};

export default Form;

import * as Yup from "yup";

const validRuleSet = {
	email: Yup.string()
		.required("Ô này là trường bắt buộc")
		.email("Địa chỉ email không hợp lệ")
		.min(4, "Địa chỉ email phải dài hơn 4 kí tự"),
	password: Yup.string()
		.required("Ô này là trường bắt buộc")
		.min(4, "Mật khẩu phải dài hơn 4 kí tự"),
	username: Yup.string()
		.required("Ô này là trường bắt buộc")
		.matches(/^[a-zA-Z\-]+$/, "Tên đăng nhập không được chứa ký tự đặc biệt")
		.min(4, "Tên đăng nhập phải dài hơn 4 kí tự"),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Xác nhận mật khẩu không tương thích"
	),
	birthday: Yup.object({
		day: Yup.number(),
		month: Yup.number(),
		year: Yup.number(),
	}),
};

export { validRuleSet };

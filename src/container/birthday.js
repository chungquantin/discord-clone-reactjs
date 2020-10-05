import React, { useState } from "react";
// -- Components --
import { Form, FlexBox } from "../components";
import withOptions from "../higher-order-components/withOptions";
// -- Constants --
const __current_year__ = parseInt(new Date().getFullYear());

function FormContainer() {
	const [day, setDay] = useState(null);
	const DaySelectWithOptions = withOptions(Form.Select)(1, 31, "");
	const [month, setMonth] = useState(null);
	const MonthSelectWithOptions = withOptions(Form.Select)(1, 12, "Tháng");
	const [year, setYear] = useState(null);
	const YearSelectWithOptions = withOptions(Form.Select)(
		1900,
		__current_year__,
		""
	);
	let isEmpty = false;
	if (day === null || month === null || year === null) {
		isEmpty = true;
	} else {
		isEmpty = false;
	}
	const handleBirthdaySubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Form style={{ opacity: "0.85" }}>
			<Form.Inner minHeight={"464px"} width={"685px"} bgColor={"white"}>
				<FlexBox direction={"column"}>
					<Form.Image src={"/assets/images/misc/birthday_sidebar.svg"} />
				</FlexBox>
				<FlexBox
					direction={"column"}
					style={{ padding: "0px 16px", paddingTop: "60px" }}
				>
					<Form.Image
						style={{ marginBottom: "10px" }}
						src="/assets/images/logo/logo.svg"
					/>
					<Form.Header>Chào mừng bạn đến với Discord!</Form.Header>
					<Form.Body>
						Chúng tôi rất vui khi có bạn ở đây! Trước khi bắt đầu, vui lòng nhập
						ngày sinh của bạn.
						<Form.Link
							to={"https://support.discord.com/hc/vi/articles/360040724612"}
						>
							&nbsp;Tại sao tôi phải cung cấp ngày sinh?
						</Form.Link>
					</Form.Body>
					<Form.Label>Ngày sinh</Form.Label>
					<Form.Base onSubmit={handleBirthdaySubmit}>
						<FlexBox direction="row">
							<DaySelectWithOptions onChange={(e) => setDay(e.target.value)}>
								<Form.Option
									value={null}
									text={day ? day : "Ngày"}
									disabled
									selected
								/>
							</DaySelectWithOptions>
							<MonthSelectWithOptions
								onChange={(e) => setMonth(e.target.value)}
							>
								<Form.Option
									value={null}
									text={month ? `Tháng ${month}` : "Tháng"}
									disabled
									selected
								/>
							</MonthSelectWithOptions>
							<YearSelectWithOptions onChange={(e) => setYear(e.target.value)}>
								<Form.Option
									value={null}
									text={year ? year : "Năm"}
									disabled
									selected
								/>
							</YearSelectWithOptions>
						</FlexBox>
						<Form.Button type="submit" disabled={isEmpty}>
							Tiếp theo
						</Form.Button>
					</Form.Base>
				</FlexBox>
			</Form.Inner>
		</Form>
	);
}

export default FormContainer;

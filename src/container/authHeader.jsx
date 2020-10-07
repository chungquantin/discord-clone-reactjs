import React, { Fragment } from "react";
import { Header, FlexBox } from "../components";
import * as ASSETS from "../constants/assets";
import useBreakPoint from "../hooks/useBreakPoint";
const __current_hour__ = new Date().getHours();

function AuthHeaderContainer({ children, ...restProps }) {
	const breakPoint = useBreakPoint();

	return (
		<Header {...restProps}>
			{breakPoint > 580 && (
				<Fragment>
					<Header.Background
						src={
							__current_hour__ > 18 && __current_hour__ < 24
								? ASSETS.NIGHT_BG
								: ASSETS.DAY_BG
						}
					/>
					<div
						style={{
							position: "absolute",
							zIndex: -3,
							height: "100vh",
							overflow: "hidden",
						}}
					>
						<img
							src={ASSETS.WOBBLY_THEME}
							style={{ height: "860px" }}
							alt="Wobbly theme dark"
						/>
					</div>
				</Fragment>
			)}
			<Header.Frame>
				<FlexBox direction={breakPoint > 800 ? "column" : "row"}>
					<Header.Logo src={ASSETS.FULL_LOGO} />
				</FlexBox>
			</Header.Frame>
			{children}
		</Header>
	);
}

export default AuthHeaderContainer;

import React from "react";
import { Header, FlexBox } from "../components";
import * as ASSETS from "../constants/assets";

const __current_hour__ = new Date().getHours();

function AuthHeaderContainer({ children }) {
	return (
		<Header>
			<Header.Background
				src={
					__current_hour__ > 12 && __current_hour__ < 6
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
			<Header.Frame>
				<FlexBox direction="column">
					<Header.Logo src={ASSETS.FULL_LOGO} />
				</FlexBox>
			</Header.Frame>
			{children}
		</Header>
	);
}

export default AuthHeaderContainer;

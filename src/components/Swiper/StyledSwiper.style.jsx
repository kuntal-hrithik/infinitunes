import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperComponent = styled(Swiper)`
	border-radius: 10px;
	height: ${({ isbanner }) => (isbanner ? "400px" : "350px")};
	width: ${({ isbanner }) => (isbanner ? "100%" : "90%")};
`;

export const StyledSlider = styled(SwiperSlide)`
	display: flex;
	width: 100%;
	font-size: 18px;

	div {
		height: ${({ isbanner }) => (isbanner ? "400px" : "350px")};
		width: ${({ isbanner }) => (isbanner ? "400px" : "300px")};

		img {
			border-radius: 10px;
			height: ${({ isbanner }) => (isbanner ? "340px" : "300px")};
			width: ${({ isbanner }) => (isbanner ? "340px" : "300px")};
			transition: all 150ms ease-in;
		}

		button {
			position: absolute;
			top: ${({ isbanner }) => (isbanner ? "150px" : "125px")};
			left: ${({ isbanner }) => (isbanner ? "150px" : "125px")};
			border-radius: 10px;
			background: transparent;
			border: none;
			z-index: 100;
			opacity: 0;
			transition: all 150ms ease-in;

			&:hover {
				scale: 1.2;
				cursor: pointer;
			}
		}

		&:hover img {
			opacity: 0.6;
			border: 3px solid #74f2ce;
			box-shadow: 7px 7px 10px #74f2ce;
		}

		&:hover button {
			opacity: 1;
		}

		h4 {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: white;
			font-size: large;
			text-align: center;
			font-family: Roboto, sans-serif;

			&:hover {
				text-shadow: 2px 2px 10px #74f2ce;
			}
		}

		h5 {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: grey;
			font-size: smaller;
			text-align: center;
			font-family: Roboto, sans-serif;
		}

		@media (max-width: 1230px) {
			height: ${(props) => (props.isbanner ? "300px" : "300px")};
			width: ${(props) => (props.isbanner ? "300px" : "280px")};

			container {
				img {
					height: ${(props) => (props.isbanner ? "300px" : "280px")};
					width: ${(props) => (props.isbanner ? "300px" : "280px")};
				}
			}
		}
		@media (max-width: 1100px) {
			height: ${(props) => (props.isbanner ? "250px" : "250px")};
			width: ${(props) => (props.isbanner ? "250px" : "220px")};
			
			container {
				img {
					height: ${(props) => (props.isbanner ? "250px" : "220px")};
					width: ${(props) => (props.isbanner ? "250px" : "220px")};
				}
			}
		}
	}
`;

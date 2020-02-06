import React from 'react';
import styled, {keyframes} from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {slideOutLeft} from 'react-animations'

const slideLeft = keyframes`${slideOutLeft}`;



const HomeStyled = styled.div`
	// padding: 14.1% 0;
	padding: 4% 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	// background: rgb(255,255,255);
	// background: radial-gradient(circle, rgba(255,255,255,1) 36%, rgba(155,81,224,1) 100%);
	// background-size:cover;
`;


const CardDiv = styled.div`
  border: 1px #e7e7e7 solid;
  border-radius: 20px;
  padding: 30% 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 100px auto;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
	transition: opacity 0.2s ease, box-shadow 0.2s ease;
	animation: 1.5s ${slideLeft}
`;

const DescriptionStyled = styled.div`
	margin:5%;
	padding:0 10%;

`;

const EditButtonDisplayFlex = styled.div`
	margin-right: 27%;
	@media (max-width: 1000px) {
		margin-right:40%;
	};
	@media (max-width: 500px) {
		margin-right: 65%;
		};
	
`;

const DashboardCenter = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	text-align:center;
`;

const EditScreenText = styled.h4`
	color: #2F8A90;
`;

const StyledHeading = styled.h1`
	color: #2f8a90;
	font-size: 2em;
	text-align: center;
`;

const StyledDashboardHeading = styled.h1`
	color:#9B51E0;
	font-size:2.5rem;
	text-align:center;
	font-family: 'Josefin Sans', sans-serif;

`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Input = styled.input`
	width: 250px;
	margin: 1vh 0;
	border: 1px solid #9B51E0;
	height: 30px;
	border-radius: 15px;
	text-indent: 3%;
	&::placeholder {
		text-align:center;
		color: #2F8A90;
	}
`;

const LinkStyled = styled(Link)`
	margin-left: 10px;
	cursor: pointer;
	text-decoration: none;
`;

const Links = styled.div`
	font-size: 1.2em;
	text-align: center;
	display: flex;
	width: 60%;
	margin-left: 20%;
	align-items: center;
	justify-content: center;
`;

const ButtonStyled = styled.button`
	// background-color: #9b51e0;
	// color: white;
	// margin-top: 5vh;
	// padding: 20px 30px;
	// border-radius: 35px;
	// // border:2px solid #2F8A90;
	// border:none;
	// cursor: pointer;
	background-color: #9b51e0;
	color: white;
	margin-top: 1vh;
	padding: 10px 50px;
	border-radius: 35px;
	// border:2px solid #2F8A90;
	border:none;
	cursor: pointer;
`;

const ButtonStyledSignUp = styled.button`
	background-color: #9b51e0;
	color: white;
	margin-top: 1vh;
	padding: 10px 50px;
	border-radius: 35px;
	// border:2px solid #2F8A90;
	border:none;
	cursor: pointer;
`;

const DashboardButton = styled.button`
	background-color: #9b51e0;
	color: white;
	margin-top: 1vh;
	padding: 10px 50px;
	border-radius: 35px;
	width:200px;
	heigth:100px;
	border:none;
	cursor: pointer;
`;

const DeleteButton = styled.button`
	background-color: red;
	color: white;
	margin-top: 1vh;
	padding: 10px 50px;
	border-radius: 35px;
	width:200px;
	heigth:100px;
	border:none;
	cursor: pointer;
`;

const TextArea = styled.textarea`
	width: 250px;
	margin: 1vh 0;
	border-radius: 15px;
	height: 75px;
	border: 1px solid #9B51E0;
	text-indent: 3%;
	&::placeholder {
		text-align:center;
		font-family: -apple-system, 
		BlinkMacSystemFont, 'Segoe UI', 
		'Roboto', 'Oxygen', 'Ubuntu', 
		'Cantarell', 'Fira Sans', 'Droid Sans', 
		'Helvetica Neue', sans-serif;
		line-height:6;
		font-size:0.75rem;
		color: #2F8A90;
	}
`
const Highlighted = styled.span`
	color: #9B51E0;
	padding-bottom:1px;
	border-bottom: 1px solid #9B51E0;
	margin-bottom:4px;
`;

const HoverText = styled.span`
	&:Hover { 
		color: #9400D3;
	}
`;

const PurpleText = styled.p`
	color:#9400D3;
	display:flex;
	justify-content:flex-start;
	width:30%;
	&.addJobText {
		font-size: 20px;
		// align-items: left;
		
	}
`;

const PurpleTextLogin = styled.p`
	color:#9400D3;
	&.addJobText {
		font-size: 20px;
		// align-items: left;
		
	}
`;

const EditDisplayFlex = styled.div`
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	margin:2% 0;
	width:30%;
	font-color:#2F8A90;
	@media (max-width: 1000px) {
		width:50%;
	};
	@media (max-width: 500px) {
	padding: 2% 0;
	width:75%;
	};
	
`

export {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	TextArea,
	ButtonStyled,
	ButtonStyledSignUp,
	PurpleText,
	Highlighted,
	HoverText,
	EditDisplayFlex,
	DescriptionStyled,
	StyledDashboardHeading,
	DashboardButton,
	DashboardCenter,
	EditButtonDisplayFlex,
	EditScreenText,
	DeleteButton,
	PurpleTextLogin,
	CardDiv
};
	

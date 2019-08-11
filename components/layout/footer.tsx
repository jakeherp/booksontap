import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
	background: #273456;
	padding: 5rem 0;
	margin-top: 3rem;
	text-align: center;
	color: #fff;

	a {
		color: inherit;
	}
`

const FooterComponent = () => {
	return (
		<Footer>
			&copy; 2019 <a href="https://herper.io/">Jacob Herper</a> – A coding
			challenge by{" "}
			<a href="https://github.com/CapitalOnTap/books-challenge-ui">
				Capital On Tap
			</a>
		</Footer>
	)
}

export default FooterComponent

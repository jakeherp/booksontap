import React from "react"
import Link from "next/link"
import styled from "styled-components"

const Header = styled.header`
	background: #273456;
	padding: 1rem 3%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	h1 {
		text-transform: uppercase;
		color: #fff;
		font-weight: 100;
		margin: 0;
		letter-spacing: 3px;
		cursor: pointer;
		span {
			font-weight: 700;
			color: #f2c14a;
		}
	}
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		a {
			color: #fff;
		}
	}
`

const HeaderComponent = () => {
	return (
		<Header>
			<Link href="/">
				<h1>
					Books<span>OnTap</span>
				</h1>
			</Link>
			<nav>
				<a href="#">
					<strong>Cart</strong> (0 items)
				</a>
			</nav>
		</Header>
	)
}

export default HeaderComponent

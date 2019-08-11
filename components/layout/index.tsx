import React from "react"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

const Styles = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    a {
        color: initial;
        text-decoration: none;
        transition: 0.3s;
        &:hover {
            opacity: 0.6;
        }
    }
`

const Layout = ({ children }: any) => {
	return (
		<React.Fragment>
			<Styles />
			<Header />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	)
}

export default Layout

import React from "react"
import styled from "styled-components"

const Container = styled.div`
	width: 1140px;
	max-width: 94%;
	margin: 0 auto;
`

const ContainerComponent = ({ children }: any) => {
	return <Container>{children}</Container>
}

export default ContainerComponent

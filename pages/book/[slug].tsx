import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import styled from "styled-components"

import Layout from "../../components/layout"
import Container from "../../components/layout/container"

const Wrapper = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	img {
		width: 50%;
		min-width: 300px;
		flex-grow: 1;
	}
`

const Content = styled.div`
	box-sizing: border-box;
	padding-left: 1rem;
	width: 50%;
	flex-grow: 1;

	h1,
	h2 {
		margin: 0;
	}

	h2 {
		font-weight: normal;
		font-size: 1rem;
	}

	p {
		line-height: 1.5;
	}

	small {
		display: block;
		margin: 1rem 0;
	}

	button {
		width: auto;
		display: inline-block;
		font-size: 16px;
		font-weight: bold;
		color: #273457;
		background-color: #f2c14a;
		padding: 14px 15px;
		text-transform: uppercase;
		border-radius: 4px;
		-webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
		box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
		transition: 0.3rem;
		margin-right: 1rem;
		&:hover {
			background-color: #273456;
			color: #f2c14a;
		}
	}
`

const SoldOut = styled.strong`
	color: crimson;
	display: block;
	margin: 3rem 0;
`

const Book = () => {
	const { query } = useRouter()

	const [book, setBook] = useState<any>([])

	const getBook = () => {
		return axios.get(
			`https://booksontap.azurewebsites.net/api/Books/${query.slug}`,
		)
	}

	console.log(query)

	useEffect(() => {
		getBook().then(res => {
			setBook(res.data.results)
		})
	}, [])

	return (
		<Layout>
			{book.length !== 0 ? (
				<Container>
					<Wrapper>
						<img src={book.thumbnail} alt={book.title} />
						<Content>
							<h1>{book.title}</h1>
							<h2>
								by {book.author.firstName}{" "}
								{book.author.lastName}
							</h2>
							<p>{book.description}</p>
							<small>ISBN: {book.isbn}</small>
							{book.stockAmount >= 1 ? (
								<React.Fragment>
									<button>Buy now</button> ({book.stockAmount}{" "}
									in stock)
								</React.Fragment>
							) : (
								<SoldOut>Out of stock</SoldOut>
							)}
						</Content>
					</Wrapper>
				</Container>
			) : (
				`Loading ...`
			)}
		</Layout>
	)
}

export default Book

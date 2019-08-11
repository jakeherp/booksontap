import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import Link from "next/link"

import Layout from "../components/layout"
import Container from "../components/layout/container"

const Books = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	list-style: none;
	padding: 0;

	li {
		width: 30%;
		min-width: 300px;
		margin: 1rem;
		flex-grow: 1;
	}
	img {
		display: block;
		max-width: 100%;
	}
`

const Price = styled.span`
	font-size: 1.25rem;
`

const BookLink = ({ slug, children }: IProps) => (
	<Link href="/book/[slug]" as={`/book/${slug}`}>
		<a>{children}</a>
	</Link>
)

interface IProps {
	slug: string
	children?: any
	content: string
}

interface IBooks {
	results: [
		{
			id: string
			title: string
			author: {
				id: string
				firstName: string
				lastName: string
			}
			price: number
			description: string
			stockAmount: number
			thumbnail: string
			isbn: string
		}
	]
}

const indexPage = () => {
	const [books, setBooks] = useState<any>([])

	const getBooks = () => {
		return axios.get(`https://booksontap.azurewebsites.net/api/Books`)
	}

	useEffect(() => {
		getBooks().then(res => {
			setBooks(res.data)
		})
	}, [])

	const toLocalCurrency = (amount, country = "en-GB", currency = "GBP") => {
		return new Intl.NumberFormat(country, {
			style: "currency",
			currency: currency,
		}).format(amount)
	}

	return (
		<Layout>
			<Container>
				<Books>
					{books.length !== 0 ? (
						books.results.map(book => (
							<li key={book.id}>
								<BookLink slug={book.id} content={book}>
									<img
										src={book.thumbnail}
										alt={book.title}
									/>
									<Price>{toLocalCurrency(book.price)}</Price>
									<h2>{book.title}</h2>
									<p>{`by ${book.author.firstName} ${
										book.author.lastName
									}`}</p>
								</BookLink>
							</li>
						))
					) : (
						<li>Loading ...</li>
					)}
				</Books>
			</Container>
		</Layout>
	)
}

export default indexPage

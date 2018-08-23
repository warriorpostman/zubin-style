import React from 'react'
import Link from 'gatsby-link'
import styled  from 'styled-components';

const PageHeader = styled.h1`
  // font-weight: bold;
  color: green;
`

const IndexPage = () => (
  <div>
    <PageHeader>Hi people</PageHeader>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

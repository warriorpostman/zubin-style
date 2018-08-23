import React from 'react'
import Link from 'gatsby-link'
import styled  from 'styled-components';
import Highlight from 'react-highlight';


const PageHeader = styled.h1`
  color: green;
`

const SpecialPageHeader = styled(PageHeader)`
  text-decoration: underline;
`;

const backTick = '`';

const IndexPage = () => (
  <div>
    <h1>Introduction: A Regular H1</h1>
    <p>You don't have to use Sass... You don't even have to use Bootstrap!</p>
    <p>Do you even need CSS files? This project exists to demonstrate the features
      of <a href="https://www.styled-components.com/"><code>styled-components</code></a>
    </p>
    <PageHeader>First: A Top-level Page Heading</PageHeader>
    <p>^^^ it's a green heading. More specifically it's an H1. It's declared like this:</p>
    <pre>{`
      const PageHeader = styled.h1\`
        color: green; 
      \`;
        `}
    </pre>


    <SpecialPageHeader>Second: A more special case of that heading</SpecialPageHeader>
    <p>^^^ See the difference? It's simple, just do this:
    </p>
    <pre>{`
      const SpecialPageHeader = styled(PageHeader)\`
        text-decoration: underline;
        \`;
        `}
    </pre>
    <p>NOTE: Currently the library allows you to declare it as PageHeader.extend` etc`, but that will 
      be deprecated in the future. The above syntax also works if the target component is a not a 
      styled-component.
    </p>

    <Link to="/style-with-logic/">
      Execute logic to determine style
    </Link>
  </div>
)

export default IndexPage

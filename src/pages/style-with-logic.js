import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components';

const LogicalHeader = styled.h1`
  ${props => props.mode === 'HELLO' && css` 
    color: red;
  `}
  ${props => props.mode === "GOODBYE" && css` 
    color: blue; 
  `}
`;

const backTick = '`';

const StyleWithLogic = () => (
  <div>
    <LogicalHeader mode="GOODBYE">A Logical GoodbYe</LogicalHeader>
    <LogicalHeader mode="HELLO">A Logical Hello</LogicalHeader>
    <p>
      ^^^ These are headings that execute some logic to determine style. It's simple, just do this:
    </p>

    <pre>{
      `
      TODO: Use primary/secondary instead of "mode"... make it practical ;)
      \$\{props => props.mode === "HELLO" && css\` 
        color: red;
        \`
      }
      \$\{props => props.mode === "GOODBYE" && css\` 
        color: blue;
        \`
      }
      `
      }
    </pre>


    <p>NOTE: Currently the library allows you to declare it as PageHeader.extend` etc`, but that will 
      be deprecated in the future. The above syntax also works if the target component is a not a 
      styled-component.
    </p>
    <h1>DJ Logic</h1>
    <p>You can execute lgoic within a styled-compoinent.</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default StyleWithLogic

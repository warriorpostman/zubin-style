import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from 'styled-components';
import { rainbow as theStyle} from 'react-syntax-highlighter/styles/hljs';

const StyledGrid = styled.div`
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(10, 10%);
  }
`;

const StyledColumn = styled.div`
  grid-column-start: 2;
  grid-column-end: 8;
  @media screen and (max-width: 480px) {
    grid-column-start: 0;
    grid-column-end: 10;
  }
`;

const CodeBlock = ({ codeString }) => (
  <StyledGrid>
    <StyledColumn>
      <SyntaxHighlighter 
        className="javascript" 
        style={{...theStyle, width: '100%'}}
      >
        {codeString}
    </SyntaxHighlighter>
    </StyledColumn>
  </StyledGrid>
);

export default CodeBlock;

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { brownPaper as theStyle} from 'react-syntax-highlighter/styles/hljs';

const CodeBlock = ({ codeString }) => (
  <SyntaxHighlighter 
    className="javascript" 
    style={theStyle}
  >
    {codeString}
  </SyntaxHighlighter>
);

export default CodeBlock;

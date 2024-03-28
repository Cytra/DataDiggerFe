import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; // or any other style you prefer

const CodeBlock = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
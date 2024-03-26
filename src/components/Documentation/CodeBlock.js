// CodeBlock.js
import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/vs.css';

// Register the languages you want to use
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));

const CodeBlock = ({ language, code }) => {
  useEffect(() => {
    // Highlight all pre elements
    hljs.highlightAll();
  }, []);

  return (
<pre>
      <code className={language}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
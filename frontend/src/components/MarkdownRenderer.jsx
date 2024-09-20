import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './styles/MarkdownRenderer.css';

function MarkdownRenderer({ message, type }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    let plainText = extractPlainText(message);
    
    setDisplayText("");

    if (type === "bot") {
      const delay = 20;
      const intervalId = setInterval(() => {
        if (index < plainText.length) {
          setDisplayText((prevText) => prevText + plainText[index]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, delay);

      return () => clearInterval(intervalId);
    } else {
      setDisplayText(message);
    }
  }, [message, type]);

  const extractPlainText = (markdown) => {
    return markdown.replace(/(\*\*|__|\*|_|~~|`|>|#|\[|\]|\(|\))/g, "");
  };

  return (
    <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
      {message.slice(0, displayText.length)}
    </ReactMarkdown>
  );
}

export default MarkdownRenderer;

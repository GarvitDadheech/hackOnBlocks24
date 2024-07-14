import React from 'react';
import { useState } from 'react';
import './Page4.css';
const Page4 = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
      const codeSnippet = "npx novu@latest dev";
      navigator.clipboard.writeText(codeSnippet).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset text after 2 seconds
      });
    };
    return (
      <div className="main-content">
        <div className='container'>
        <div className="heading">
            <h1>Get Started Now</h1>
            <p>Integrate and allow users to pay in crypto</p>
        </div>
        <div className='code-holder'>
            <div className="code-container">
              <div className="code-snippet">npx novu@latest dev</div>
              <button className="copy-button" onClick={copyToClipboard}>
                {copied ? "COPIED!" : "COPY"}
              </button>
            </div>
            <button className="code-button">READ DOCS</button>
        </div>
        </div>
      </div>
    );
}
export default Page4;
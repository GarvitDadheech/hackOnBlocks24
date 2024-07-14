import React from 'react';
import './Page2.css';
import { useState } from 'react';
function App() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const codeSnippet = "npx novu@latest dev";
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset text after 2 seconds
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Send your first notification in minutes</h1>
        <div className="command-box">
          <code>npx novu@latest dev</code>
          <button className="copy-button" onClick={copyToClipboard}>
                {copied ? "COPIED!" : "COPY"}
          </button>
        </div>
        <button className="demo-button">SEE A DEMO</button>
      </header>
      <section className="features">
        <h1>Integrates easily, delivers powerful notifications</h1>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Powerful workflows</h3>
            <p>Code-first workflows that can be run inside your own IT boundary.</p>
          </div>
          <div className="feature-item">
            <h3>Inbox</h3>
            <p>Easily integrate and deploy notifications right into your application via components.</p>
          </div>
          <div className="feature-item">
            <h3>End user preferences</h3>
            <p>Enable end users to set contact preferences like language, timezone, and channels.</p>
          </div>
        </div>
        <div className="features-grid">
            <div className="feature-item">
              <h3>No-code editor</h3>
              <p>Product teams can manage workflow configurations without the risk of breaking notification flows.</p>
            </div>
            <div className="feature-item">
              <h3>Multi-channel, multi-framework</h3>
              <p>Access any channel provider, and use any content framework, all with one API.</p>
            </div>
            <div className="feature-item">
              <h3>API-first, and open-source backed</h3>
              <p>Native developer experience that’s backed by a huge community.</p>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import './Main.css';

const Main = () => {

  const copyToClipboard = () => {
    const codeSnippet = "npx novu@latest dev";
    navigator.clipboard.writeText(codeSnippet).then(() => {
      alert('Copied to clipboard!');
    });
  };
  return (
    <main className="main-container">
        <div className='Para-info'>
            <h1 className="title">The Notification Framework for Developers and Product Teams</h1>
            <p className="subtitle">Fully extensible open source notifications infrastructure framework that empowers developers to provide an easy-to-use notifications platform to product teams.</p>
        <div className='code-holder'>
            <div className="code-container">
              <div className="code-snippet">npx novu@latest dev</div>
              <button className="copy-button" onClick={copyToClipboard}>COPY</button>
            </div>
            <button className="code-button">READ DOCS</button>
        </div>
    </div>
    </main>
  );
};

export default Main;

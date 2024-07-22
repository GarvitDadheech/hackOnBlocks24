import React from "react";
import { useState } from "react";
import "./Main.css";
import code from "../../../code.svg";
const Main = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const codeSnippet = "npm i payment-gateway-crypto";
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset text after 2 seconds
    });
  };
  return (
    <main className="main-container">
      <div className="Para-info">
        <h1 className="title">
          Enable seamless crypto transactions with a single line of code
        </h1>
        <p className="subtitle">
          Fully extensible open source crypto payment framework
          that empowers developers to accept crypto payments with single line of code.
        </p>
        <div className="code-holder">
          <div className="code-container">
            <div className="code-snippet">npm i payment-gateway-crypto</div>
            <button className="copy-button" onClick={copyToClipboard}>
              {copied ? "COPIED!" : "COPY"}
            </button>
          </div>
          <a href="https://www.npmjs.com/package/payment-gateway-crypto" target="blank">
            <button className="code-button">READ DOCS</button>
          </a>
        </div>
      </div>
      <div className="code-img-container">
      <img src={code} alt="code" className="code-img" />
      <div class="shiny-overlay"></div>
      </div>
    </main>
  );
};

export default Main;

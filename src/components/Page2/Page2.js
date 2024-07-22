import React from "react";
import "./Page2.css";
import { FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const codeSnippet = "npm i payment-gateway-crypto";
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset text after 2 seconds
    });
  };

  const copyToCode = () => {
    const codeSnippet = `import { handlePayment } from 'payment-gateway-crypto';

const amount = 0.001; // Example amount in Ether
const address = '0x1F85a21033Da743136C1808D635e8679221418d1'; //Receiver's wallet address
const network = 'POLzk'; //'POLzk' for Polygon zkEVM and 'BASE' for Base Sepolia network
handlePayment(amount, address, network).then(() => {
    console.log('Payment successful');
}).catch(error => {
    console.error('Payment failed', error);
});`;
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset text after 2 seconds
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enable Crypto Payments On Your Website</h1>
        <div className="command-box">
          <code>npm i payment-gateway-crypto</code>
          <button className="copy-button" onClick={copyToClipboard}>
            {copied ? "COPIED!" : "COPY"}
          </button>
        </div>
        <button className="demo-button">SEE A DEMO</button>
      </header>
      <section className="features">
        <h1>Integrates easily, delivers seamless transactions</h1>
        <pre>
            <code className="code">
{`
import { handlePayment } from 'payment-gateway-crypto';

const amount = 0.001; // Example amount in Ether
const address = '0x1F85a21033Da743136C1808D635e8679221418d1'; //Receiver's wallet address
const network = 'POLzk'; //'POLzk' for Polygon zkEVM and 'BASE' for Base Sepolia network

handlePayment(amount, address, network).then((res) => {
    console.log(res);
}).catch(error => {
    console.error('Payment failed', error);
});
`}
            {
              <button className="copy-code" onClick={copyToCode}>
                 {copied ? <FaCheck /> : <FaCopy />}
              </button>
            }
            </code>
        </pre>
      </section>
    </div>
  );
}

export default App;

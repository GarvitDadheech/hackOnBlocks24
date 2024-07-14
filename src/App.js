import logo from './logo.svg';
import './App.css';
import Header from './components/LandingPage/Header/Header';
import Main from './components/LandingPage/Main/Main';
import Footer from './components/Footer/Footer';
import Page2 from './components/SecurePage2/Page2'
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Page2/>
    </div>
  );
}

export default App;

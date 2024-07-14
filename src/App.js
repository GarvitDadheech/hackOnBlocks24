import logo from './logo.svg';
import './App.css';
import Header from './components/LandingPage/Header/Header';
import Main from './components/LandingPage/Main/Main';
import Footer from './components/Footer/Footer';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Footer/>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
import Section from './components/section';
import styled from 'styled-components';
import { BroserRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Hello</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <h6>Bye</h6>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header></Header>
        <Section />
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

const StyledHeader = Header`
  font-size: 20px;
  color: gray;
`;

const StyledFooter = Footer`
  font-size: 16px;
  color: gray;
`;

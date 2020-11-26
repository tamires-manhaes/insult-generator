import './App.css';
import { useState, useEffect, lazy } from 'react';
import axios from 'axios';
import config from './api';

const Header = () => {
  return (
    <header className="header">
      <h1>Insult Generator</h1>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Feito com 💙 por <br/>
        <a href="https://tamires-manhaes.github.io" rel="noreferrer" target="_blank">Tamires Manhães</a>
      </span>
    </footer>
  )
}

const Container = ({ children }) => {
  return (
    <div className="container">
        <Header />
        <div className="wrapper">
          { children }
        </div>
        <Footer />
    </div>
  )
}

const Button = ({ title, action }) => {
  return(
    <button onClick={action} className="buttonAction">
      <span>{title}</span>
    </button>
  )
}

const InsultCard = ({ insult }) => {
  return (
    <div className="insultCard">
      <span>{ insult }</span>
    </div>
  )
}

const Loading = () => {
  return (
    <div className="loader"></div>
  )
}

function App() {
  const [insult, setInsult] = useState();
  const [loading, setLoading] = useState(false);

  async function action(){
    setLoading(true);
    await axios.get(config.baseUrl, {
      headers: config.headers
    }).
    then(response => { setLoading(true); setInsult(response.data);});
    setLoading(false);
  }

  return (
    <Container>
      {loading === true && insult !== null ? (
        <Loading />
      ) : ( 
        <></>
      )}

      {insult !== null && insult !== undefined ? (
        <>
          <InsultCard insult={insult.insult}/>
          <Button title="Click again" action={action}/>
        </>
      ): (<><Button title="Click to generate insult" action={action}/></>)}
        
    </Container>
  );
}

export default App;

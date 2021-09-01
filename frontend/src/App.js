import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const axios = require('axios');

function App() {
  const [myState, setMyState] = useState('')

  const signal = () => {
    // let url = process.env.REACT_APP_URL + '/test';
    let url = 'http://localhost:3001/test';
    // console.log(process.env.REACT_APP_URL);
    axios.get(url)
    .then((res)=>{
      setMyState(res.data);
    })
    .catch(()=> {
      console.log('err', url);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => signal()}>click here</button>
        <p>
          response : {myState}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import './App.css';

import React, { useEffect } from 'react';
import Main from './components/Main'

function App() {
  return (
    useEffect(() => {
      document.title = `Tony's Pizza`;
    }, []),

    <div className="App" style={{backgroundColor: "white"}}>
      <Main />
    </div>
  );
}

export default App;

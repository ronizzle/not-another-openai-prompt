import React from 'react';
import './App.css';
import Header from "./components/commons/Header";
import Prompt from "./components/commons/Prompt";
import Results from "./components/commons/Results";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Prompt></Prompt>
      <Results></Results>
    </div>
  );
}

export default App;

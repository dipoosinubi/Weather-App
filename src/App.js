import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Titles/>
        <Form />
      </div>
    );
  }
}

export default App;

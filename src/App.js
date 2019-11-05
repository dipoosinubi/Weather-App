import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';


const API_KEY = "87a0c01d35b2a8bf04a72265c54d3a06";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Atlanta,usa&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form  getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;

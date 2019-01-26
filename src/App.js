import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import BarChart from './BarChart'
import AxisOn0 from './axis-on';
import HorizontalBarChart from './HorizontalBarChart';
import LinemarkChart from './linemark-chart';
import SimpleRadialChart from './donut-chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Uber Visualization Charts - react-vis examples</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <BarChart />
        <HorizontalBarChart />
        <AxisOn0 />
        <LinemarkChart />
        <SimpleRadialChart />
      </div>
    );
  }
}

export default App;

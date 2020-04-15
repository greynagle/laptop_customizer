import React, { Component } from 'react';
import './App.css';
import MainForm from './MainForm/MainForm'
import MainSummary from './MainSummary/MainSummary'
import FEATURES from './Features'

class App extends Component {
  constructor(){
    super()
    this.state={
      selected:(
        Object.keys(FEATURES).reduce((acc,cur) => {
          return {...acc, [cur]:FEATURES[cur][0]}
        }, {} )
      )
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    // the main return, compiling all the features generated above
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            features={FEATURES} 
            selected={this.state.selected} 
            handleUpdate={this.updateFeature}
          />
          <MainSummary
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;

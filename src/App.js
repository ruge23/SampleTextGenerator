import React, { Component } from 'react';
import './App.css';
import './components/Output';
import axios from 'axios';
import Output from './components/Output';
import Select from './components/Controls/Select';
import Text from './components/Controls/Text';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras : 4,
      format : '',
      text : ''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras='+this.state.paras+'&format='+this.state.format)
      .then((response) => {
        this.setState({text : response.data}, () => {
          console.log(this.state);
      });
    })
    .catch((err) => {
      console.log(err)
    })
  }

  showHtml(x){
    this.setState({
      format: x
    }, this.getSampleText);
  }


  changeParas(number){
    this.setState({
      paras: number
    }, this.getSampleText);
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">ReactJS Sample Text Generator</h1>
        <hr />
        <form className="Form-inline">
          <div className="form-group">
            <label>Format: </label>
            <Select 
              value={this.state.fromat}
              onChange={this.showHtml.bind(this)} 
            />

          </div>
          <div className="form-group">
            <label>Paragraphs: </label>
            <Text 
              value={this.state.paras}
              onChange={this.changeParas.bind(this)} 
            />

          </div>
        </form>
        <Output 
          value = {this.state.text}
        />
      </div>
    );
  }
}

export default App;

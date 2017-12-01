import React from 'react';
import Stars from './Stars';
import Control from './Control';
import View from './View';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

class Mainpart extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {y: []};
    this.valueofbuttonmp = this.valueofbuttonmp.bind(this); 
    this.rv = this.rv.bind(this); 
  }
  
  valueofbuttonmp(value){
    this.setState({y: this.state.y.concat([value])})
    
  }

  rv(value){
      const y = this.state.y;
      let ind = y.indexOf(value);
      console.log(ind);
      delete y[ind];
      this.setState({y: y})
  }

  render(){
  console.log(this.state.y);
  return(
  <div>
  <Stars random={this.props.random}/>
  <Control random={this.props.random} rerender={this.props.rerender} view={this.state.y}/>
  <View view={this.state.y} rv={this.rv}/>
  <Buttons valueofbuttonmp={this.valueofbuttonmp}/>
  </div>
  );
}
}

Mainpart.propTypes = {
  random: PropTypes.number
};

export default Mainpart;

// https://extwiii-react-play-nine.herokuapp.com/
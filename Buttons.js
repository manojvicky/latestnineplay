import React from 'react';
class Buttons extends React.Component{
  constructor(props){
    super(props)
    this.state = {x: []};
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked(event){
  this.setState({x: this.state.x.concat([event.target.value])})
  return this.props.valueofbuttonmp(event.target.value);
  }

render(){
  const buttonnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
  const buttons = buttonnumbers.map((buttonnumber)=><input key={buttonnumber} className="circlebutton" type="button" name={buttonnumber} onClick={this.handleClicked} value={buttonnumber} disabled={(this.state.x[0] == buttonnumber)
  ||(this.state.x[1] == buttonnumber) ||(this.state.x[2] == buttonnumber) ||(this.state.x[3] == buttonnumber)
  ||(this.state.x[4] == buttonnumber) ||(this.state.x[5] == buttonnumber) ||(this.state.x[6] == buttonnumber)
  ||(this.state.x[7] == buttonnumber) ||(this.state.x[8] == buttonnumber) ?true:false}/>)
return(
    <div className="lastbutton">
      {buttons}
  </div>);
};
  
}

export default Buttons;
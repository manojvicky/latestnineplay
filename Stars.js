import React from 'react';
import Repeat from './Repeat';

class Stars extends React.Component{
  render(){
    return(
    <div className="adjust">
    <Repeat random={this.props.random}/>
    </div>
    );
  }
}

export default Stars;
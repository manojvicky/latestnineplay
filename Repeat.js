import React from 'react';

function Repeat(props){
  var repeat = [];
 for(var i=1; i<=props.random;i++){
    repeat.push(<li key={i}>&#9733;</li>);  
  }
  return(<ul>{repeat}</ul>);
}

export default Repeat;
import React from 'react';
class Control extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
  }
  
  handleClick(){
    let xx = 0;
    const view = this.props.view;
    let sum = 0;
    let tsum = 0;
   for(let i=0; i < view.length; i++) {
   sum = sum + view[i];
   while(sum>0){
     let z =sum%10;
     sum = Math.floor(sum/10);
     tsum = tsum+z;
   }
  }
  // if(tsum==this.props.random){
  //   console.log("correct");
  //   return this.props.rerender();
  // }
console.log("Sum"+tsum);
return this.props.rerender();
}
  render(){
    let disable = this.props.view;
   console.log(disable.length);
    const clickbutton = <button onClick={this.handleClick}  type="button" disabled={(disable.length==0)?true:false}>Click</button>
    return(
    <div className="adjust">
    {clickbutton}
    <button>Refresh</button>
    </div>
    );
  }
}

export default Control;
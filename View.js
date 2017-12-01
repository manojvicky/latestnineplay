import React from 'react';
class View extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const viewbutton1 = this.props.view;
    const views = viewbutton1.map((viewbutton,index)=><input key={viewbutton} className="circlebutton" type="button" value={viewbutton} onClick={()=>this.props.rv(viewbutton)}/>);
    
    return(
    <div className="adjust">
    {views}
    </div>
    );
  }
}
export default View;
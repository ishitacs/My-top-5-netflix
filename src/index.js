import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
import Sdata from './Sdata';  

function ncard(val){
  return(
<Card imgsrc= {val.imgsrc}
  title={val.title}
  sname= {val.sname}
  link={val.link}
  />
  );
}
ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 5 Netflix series </h1>
  
  {Sdata.map(ncard)}

  {/*Fat arrow func {Sdata.map((val) => 
  {return(<Card imgsrc= {val.imgsrc}
  title={val.title}
  sname= {val.sname}
  link={val.link}
  />);
  })} */ }
  </>
, document.getElementById("root")
)
 

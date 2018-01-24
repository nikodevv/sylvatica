import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Cell(props){
  return (<a className="cell">test value</a>)
}

function Row(props){
  return (<div><Cell/></div>)
}

function SpreadSheet(props){
  return (
      <Row />
    )
}

ReactDOM.render(
  <SpreadSheet/>,
  document.getElementById('root')
);

//Used for development purposes
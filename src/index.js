import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const data_dict = [1,2,3,4]

function Cell(props){
  return (<a className="cell">test value</a>)
}

class Row extends React.Component{
  renderRows(data_dict){
    let cells = []
    for (var i = 0; i < data_dict.length; i=i+1){
      cells.push(<Cell key={i}/>)
    }
    return (<div>{cells}</div>)
  }

  render(){
    return (this.renderRows(data_dict))
  }
}

function SpreadSheet(props){
  return (
      <Row />
    )
}

ReactDOM.render(
  <SpreadSheet data_dict={data_dict}/>,
  document.getElementById('root')
);

//Used for development purposes


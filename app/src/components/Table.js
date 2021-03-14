import { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numCols: 1,
      selectedColor: "red"
    }
  }

 /* function addRow(){
    let rows = document.getElementsByTagName('tr');
    if(rows.length == 0){
      let row = document.createElement("tr");
      let col = document.createElement("td");
      row.appendChild(col);
      grid.appendChild(row);
      numCols++
      numRows++
    } else {
      let row = document.createElement("tr");
      for(let i = 0; i < numCols; i++){
        let cell = document.createElement("td");
        row.appendChild(cell);
      }
      grid.appendChild(row);
      numRows++;
      //console.log(numRows);
    }
}*/
  addRow = () => {
    this.setState(state => {
        return {numRows: state.numRows + 1}
    });
  }

  addColumn = () => {
    this.setState(state => {
        return {numCols: state.numCols + 1}
    });
  }
//remove row
  removeRow = () =>{
    this.setState(state => {
        return {numRows: state.numRows - 1}
    }); 
  }

  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(<TableRow numCols={this.state.numCols} handleApplyColor={this.handleApplyColor} />);
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <select onChange={this.handleColorChange}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;
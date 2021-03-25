import { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: 1,
      numCols: 1,
      selectedColor: "#9B5DE5"
    }
  }

  // Add row to the grid
  addRow = () => { 
    this.setState(state => {
        return {numRows: state.numRows + 1}
    });
    console.log('new row ',this.state.numRows);
  }

  // Add column to the grid
  addColumn = () => {
    this.setState(state => {
        return {numCols: state.numCols + 1}
    });
    if(this.state.numRows === 0){
      this.addRow();
    }
    console.log('new col ',this.state.numCols);
  }

  // Remove row from the grid
  removeRow = () =>{
    if (this.state.numRows > 1) {
      this.setState(state => {
        return {numRows: state.numRows - 1}
      });
    }
    console.log('row', this.state.numRows);
    console.log('col', this.state.numCols);
  }

  // Remove column from the grid
  removeColumn = () =>{
    if(this.state.numCols > 1) {
      this.setState(state => {
        return {numCols: state.numCols - 1}
      });
    }
    console.log('row', this.state.numRows);
    console.log('col', this.state.numCols);
  }

  // Fill all uncolored cells with the currently selected color
  fillUncolored = () =>{
    let cells = document.getElementsByTagName("td")
    for(let i = 0; i < cells.length; i++){
      if(!cells[i].style.backgroundColor || cells[i].style.backgroundColor === "white"){
        cells[i].style.backgroundColor = this.state.selectedColor;
      }
    }
  }

  // Fill all cells with the currently selected color
  fillAll = () =>{
    // code here
  }

  // Clear all cells to white
  clearAll = () =>{
    let cells = document.getElementsByTagName("td")

    // Iterate through each cell and change backgroundColor to white
    for(let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "white";
    }
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
        <button onClick={this.removeColumn}>Remove Column</button>
        <button onClick={this.fillUncolored}>Fill All Uncolored</button>
        <button onClick={this.fillAll}>Fill All</button>
        <button onClick={this.clearAll}>Clear All</button>
        <select onChange={this.handleColorChange}>
          <option value="#9B5DE5">Amethyst</option>
          <option value="#F15BB5">Magenta Crayola</option>
          <option value="#FEE440">Minion Yellow</option>
          <option value="#00BBF9">Capri</option>
          <option value="#00F5D4">Sea Green Crayola</option>
        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;
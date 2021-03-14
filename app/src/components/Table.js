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

//DOESNT WORK IF ROWS = 0, IT INCREMENTS IT VALUE BUT DOESNT SEE UNTIL WE CLICK ADD COL
  addRow = () => {
    this.setState(state => {
        return {numRows: state.numRows + 1}
    });
  }

  //DOESNT WORK IF COL = 0, IT INCREMENTS IT VALUE BUT DOESNT SHOW UNTIL WE CLICK ADD ROW
  addColumn = () => {
    this.setState(state => {
        return {numCols: state.numCols + 1}
    });
  }
//remove row WORKS?
  removeRow = () =>{
      let currentRow = this.state.numRows;
      let currentCol = this.state.numCols;
      currentRow  = currentRow - 1; 
      if(currentRow === 0){
          currentCol = 0;
          this.setState({numCols: currentCol});
      }
    this.setState(state => {
        return {numRows: state.numRows - 1}
    });
    console.log('row', currentRow);
    console.log('col', currentCol);
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
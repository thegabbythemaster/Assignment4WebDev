import { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor(props) {
    super(props);
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
    console.log('new row ',this.state.numRows);
  }

  //DOESNT WORK IF COL = 0, IT INCREMENTS IT VALUE BUT DOESNT SHOW UNTIL WE CLICK ADD ROW
  addColumn = () => {
    this.setState(state => {
        return {numCols: state.numCols + 1}
    });
    if(this.state.numRows === 0){
      this.addRow();
    }
    console.log('new col ',this.state.numCols);
  }

  removeRow = () =>{
      if (this.state.numRows > 1) {
        this.setState(state => {
          return {numRows: state.numRows - 1}
        });
      }
    console.log('row', this.state.numRows);
    console.log('col', this.state.numCols);
  }


//remove column
  removeColumn = () =>{
    //if(this.state.numCols === 1){
    //  this.setState(state =>{
    //    return{
    //      numRows: 0,
    //      numCols: 0
    //    }
    //  });
    //} else 
    if(this.state.numCols > 1) {
      this.setState(state => {
        return {numCols: state.numCols - 1}
      });
    }
  console.log('row', this.state.numRows);
  console.log('col', this.state.numCols);
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
        <select onChange={this.handleColorChange}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
          <option value="#9BF6FF">baby blue</option>
        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;
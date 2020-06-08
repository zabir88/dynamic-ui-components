import React, {Component} from 'react';
import './Table.css';

class Table extends Component {

  selectAllHandler = (event) => {
    let all = document.getElementsByClassName("check-input");
    let rows = document.getElementsByClassName("select-rows")
    for(let i = 0; i < all.length; i++) {
      if(event.target.checked) {
        all[i].checked = true;
        rows[i].style.backgroundColor = '#eee';
      };
      if(!event.target.checked) {
        all[i].checked = false;
        rows[i].style.backgroundColor = null;
      };
    };
  }

  selectEachHandler = (event) => {
    let grandParentEl = event.target.parentNode.parentNode;
    if(event.target.checked) {
      grandParentEl.style.backgroundColor = '#eee';
    } else {
      grandParentEl.style.backgroundColor = null;
    };
  }

  render () {
    let display;
  
    if(this.props.data === undefined || this.props.data === null) {
      display = null;
    }
    else {
      // head elements
      let headEl = [];
      if(this.props.checkbox === true) {
        headEl.push (
          <th key = {-1}>
            <input 
              type = 'checkbox' 
              style = {{'cursor' : 'pointer'}} 
              value = {this.props.data.body.map(i => i.value)}
              onChange = {this.selectAllHandler.bind(this)}
              onClick = {this.props.selectAllRow}
            />
          </th>
        )
      };
      for (let i in this.props.data.head) {
        headEl.push(
          <th key = {i}>
            {this.props.data.head[i]} 
          </th>
        )
      };
    
      /// body elements
      let bodyEl = [];    
      for(let eachData in this.props.data.body) {
        bodyEl.push (
          <tr key = {eachData} className = 'select-rows' style = {{cursor: this.props.clickable ? 'pointer' : 'auto'}} >
            { this.props.checkbox ? 
              <td>
                <input 
                  type = 'checkbox' 
                  className = 'check-input' 
                  style = {{'cursor' : 'pointer'}} 
                  value = {this.props.data.body[eachData].value} 
                  onChange = {this.selectEachHandler.bind(this)} 
                  onClick = {this.props.selectEachRow} 
                />
              </td> 
              : null
            }
            { this.props.data.body[eachData].value.map((m,n) => (
                <td key = {n} onClick = {this.props.clickable ? this.props.goTo.bind(this, this.props.data.body[eachData].route) : null} > {m} </td> 
              ))
            }
          </tr>
        );       
      };
      
      let scrollableTableClasses = 'table-responsive';
      let tableBorderClasses = 'table table-hover';
      if(this.props.border && this.props.scrollable) {
        scrollableTableClasses = 'table-responsive scrollTableWrapper scrollbar';
        tableBorderClasses = 'table table-hover table-bordered';
      } 
      else if(this.props.border && !this.props.scrollable) {
        scrollableTableClasses = 'table-responsive';
        tableBorderClasses = 'table table-hover table-bordered';
      } 
      else if(!this.props.border && this.props.scrollable) {
        scrollableTableClasses = 'table-responsive scrollTableWrapper scrollbar border';
        tableBorderClasses = 'table table-hover';  
      } 
      else if(!this.props.border && !this.props.scrollable) {
        scrollableTableClasses = 'table-responsive';
        tableBorderClasses = 'table table-hover border';
      };

      display = ( 
        <div className={scrollableTableClasses} style={this.props.scrollable ? {'height': this.props.scrollHeight} : null}>
          <table className={tableBorderClasses}>
            <thead className={this.props.headColor === undefined || this.props.headColor === null ? `thead-light` : `thead-${this.props.headColor}`}>
              <tr>
                {headEl}
              </tr>
            </thead>
            <tbody>
              {bodyEl}
            </tbody>
          </table>
        </div>
      );
    }
    return display
  }
}

export default Table;
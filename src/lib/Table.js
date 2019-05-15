import React, {Component} from 'react';

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
        headEl.push(
          <th key = {-1}>
            <input 
              type = 'checkbox' 
              style = {{'cursor' : 'pointer'}} 
              value = {this.props.data.body.map(i => i.value) }
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

      //body elements
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
      
      display = ( 
        <div className='table-responsive'>
          <table className={this.props.border === undefined || this.props.border === false ? 'table table-hover' : 'table table-hoverborder-left border-right border-bottom' }>
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
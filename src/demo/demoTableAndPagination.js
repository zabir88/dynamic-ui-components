import React, { Component } from 'react';
import {Table, Pagination} from '../lib';

class demoTableAndPagination extends Component { 
  
  state = {
    tableData: {
      head: ['Company', 'Founded'],
      body: [ 
        {value: ['Google LLC', '1998'], route: 'https://en.wikipedia.org/wiki/Google'},
        {value: ['Amazon Inc','1994'], route: 'https://en.wikipedia.org/wiki/Amazon_(company)'},
        {value: ['Facebook Inc', '2004'], route: 'https://en.wikipedia.org/wiki/Facebook'},
        {value: ['Microsoft Corporation', '1975'], route: 'https://en.wikipedia.org/wiki/Microsoft'},
        {value: ['IBM', '1911'], route: 'https://en.wikipedia.org/wiki/IBM'}
      ]     
    },
    pagination: {
      perPage: 5,
      total: 20,
      currentPage: 1,
      links: {
        1: { 
          id: 1,
          active: true
        },
        2: {
          id: 2,
          active: false
        },
        3: {
          id: 3,
          active: false
        },
        4: {
          id: 4,
          active: false
        }
      }
    }
  }

  goToHandler = (param, event) => {
    // navigate to a different url;
    window.location = String(param);
  }

  selectAllRowHandler = (event) => {
    console.log(event.target.value);
  }

  selectEachRowHandler = (event) => {
    console.log(event.target.value);
  }

  pageChangeHandler = (event) => {
    const updatedPagination = {...this.state.pagination};
    const updatedPaginationValueArray = Object.keys(updatedPagination.links);
    let currentLinkId = this.state.pagination.currentPage;
    let nextPage = null;
    if (event.target.id === 'back') { 
      if (currentLinkId > 1) {
        nextPage = currentLinkId-1;
      };
    } 
    else if (event.target.id === 'next') {
      if (currentLinkId < updatedPaginationValueArray[updatedPaginationValueArray.length - 1]) {
        nextPage = currentLinkId+1;
      };
    }
    else {
      nextPage = Number(event.target.id);
    };
    // make the api call {
      updatedPagination.links[currentLinkId].active = false;
      updatedPagination.links[nextPage].active = true;
      updatedPagination.currentPage  = nextPage;
      this.setState({pagination: updatedPagination});
    //}
  }
  
  render() {
    return (
      <div className='container' style={{paddingTop: '40px'}}>
        <h2>Table with pagination</h2>
        <br/>
        <Table 
          data = {this.state.tableData} 
          clickable = {true} 
          checkbox = {true} 
          border = {true} 
          headColor = {'light'}
          selectAllRow = {this.selectAllRowHandler.bind(this)}
          selectEachRow = {this.selectEachRowHandler.bind(this)}
          goTo = {this.goToHandler.bind(this)}
          scrollable = {true}
          scrollHeight = {'200px'}
         /> 
       
        <br/>
        <Pagination 
          links = {this.state.pagination.links} 
          pageChange = {this.pageChangeHandler.bind(this)} 
          position = {'right'}  
          perPage = {this.state.pagination.perPage} 
          currentPage = {this.state.pagination.currentPage} 
          total = {this.state.pagination.total}
        />
      </div>
    );
  }
}

export default demoTableAndPagination;
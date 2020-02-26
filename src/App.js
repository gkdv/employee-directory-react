import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// import MyComponent from './components/apiCall'
// import SearchBar from './components/SearchBar'
import EmployeeTable from './components/EmployeeTable';
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
    EmployeeList: [
      {
        id: 1,
        name: 'garrett',
        email: 'garrett@gmail.com',
        phone: 7382930495
      },
      {
        id: 2,
        name: 'sara',
        email: 'sara@gmail.com',
        phone: 2381910411
      },
      {
        id: 3,
        name: 'kim',
        email: 'kim@gmail.com',
        phone: 4482936425
      },
    ]
  }
  render() {
    return (
      <>
        <Header />
        {/* <SearchBar /> */}
        <EmployeeTable employees={this.state.EmployeeList} />
      </>
    );

  }
}

export default App;

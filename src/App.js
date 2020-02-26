import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Header';
import SearchBar from './components/SearchBar'
import EmployeeTable from './components/EmployeeTable';



function App() {
  return (
    <>
      <Title name='Hotel' />
      <br/>
      <SearchBar />
      <EmployeeTable />

    </>
  );
}

export default App;


// {/* <div className="App">
// <header className="App-header">
  

// </header>
// </div> */}
import React from 'react';
import FormInput from './components/FormInput'
import List from './components/List'
import { DataProvider } from './components/DataProvider'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <FormInput />
        <List />
      </div>
    </DataProvider>
  );
}

export default App;

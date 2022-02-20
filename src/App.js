import React from 'react'
import './App.css';
import InsertItem from './components/InsertItem/InsertItem';
import ShowItem from './components/ShowItem/ShowItem';
import { StateProvider } from './contexts/StateContext';

function App() {
  
  return (
    <div className="App"> 
    <StateProvider >
      <InsertItem/>
    <ShowItem/>
      </StateProvider>
    </div>
  );
}
 
export default App;

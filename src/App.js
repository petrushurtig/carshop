import React from 'react';
import './App.css';
import Carlist from './components/Carlist.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6">
           
          </Typography>
          CarShop
        </Toolbar>
      </AppBar>
      <Carlist />
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import SideMenu from '../components/SideMenu';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';


const useStyles = makeStyles({
  appMain: {
   
    width: '100%',
  }
})

function App() {
  const classes = useStyles();
  return (
    <>
   <div className={classes.appMain}>
       
     <Header  />
         

     <SideMenu />
   
        
   </div>
   <BottomNav />

   <CssBaseline />
    </>
  );
}

export default App;

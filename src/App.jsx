import React from 'react';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import MainContainer from './Components/MainContainer/MainContainer';

function App() {

  return (
    <>
      <div className='flex flex-row p-0 m-0'>

        <SideBar></SideBar>
        <MainContainer></MainContainer>

      </div>

    </>
  )
}

export default App

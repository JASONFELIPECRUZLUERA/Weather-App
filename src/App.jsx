import React from 'react';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import MainContainer from './Components/MainContainer/MainContainer';
import { WeatherProvider } from './Components/WeatherContext';


function App() {

  return (
    <>
      <WeatherProvider>
        <div className='flex flex-col md:flex-row p-0 m-0 min-h-screen'>
          <SideBar />
          <MainContainer />
        </div>
      </WeatherProvider>

    </>
  )
}

export default App

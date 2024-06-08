import React from 'react';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import MainContainer from './Components/MainContainer/MainContainer';
import { WeatherProvider } from './Components/WeatherContext';


function App() {

  return (
    <>
      <WeatherProvider> {/* Envolver App con el proveedor de contexto */}
        <div className='flex flex-row p-0 m-0'>
          <SideBar />
          <MainContainer />
        </div>
      </WeatherProvider>

    </>
  )
}

export default App

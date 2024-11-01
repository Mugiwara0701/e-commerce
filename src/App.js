import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import { createContext, useEffect, useState } from 'react';

const MyContext = createContext();

function App() {
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const getState = async () => {
      try {
        const response = await fetch('/cities.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setStateList(data.cities);
      } catch (error) {
        console.error('Error loading city data:', error);
      }
    };
    getState();
  }, []);
  
  const values = {
    stateList
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };

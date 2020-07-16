import React, {useState, useEffect} from "react";
import { API_KEY, BASE_URL } from './container/container'
import axios from 'axios'
import "./App.css";
import MainPage from "./mainPage/mainPage";

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios
      .get(`${BASE_URL}${API_KEY}&date=2007-01-01`)
      .then( res => {
        console.log(res);
            setData (res.data);
            
        })
        .catch(error => {
          console.log('Error is', error);
        })
  
  }, []);

  return (
    <div className="App">
      <MainPage data = {data} />
    </div>

    
  );
}

export default App;

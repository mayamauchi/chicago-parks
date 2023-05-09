import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";

function App() {
  const [parkData, setParkData] = useState([]);

  useEffect(() => {
    async function getParkData() {
      const response = await fetch("https://data.cityofchicago.org/resource/eix4-gf83.json")
      const result = await response.json()
      const parks = result.data
      setParkData(parks)
    }
    getParkData()
  }, [])
  return (
    <>
       <Navbar/>
    </>
  )
}

export default App

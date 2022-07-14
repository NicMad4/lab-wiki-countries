// src/App.js
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import {Routes,Route} from "react-router-dom"
import CountryDetails from "./components/CountryDetails";

function App() {
  return <div className="App">
    <Navbar/>
    <CountriesList/>

    <Routes>      
      <Route path="/:id" element={ <CountryDetails  /> } />
    </Routes>
  </div>;
}
export default App;
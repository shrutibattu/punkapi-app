import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
function App() {
  const [beerData, setBeerData] = useState([]);
  const [searchText, setSearchText] = useState("buzz");
  const [maltFilter, setMaltFilter] = useState("Caramalt");

  const getAllBeer = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setBeerData(jsonResponse);
      });
  };
  useEffect(() => {
    getAllBeer();
  }, []);

  //--------------------------------------------------------------
  useEffect(() => {
    fetch(
      "https://api.punkapi.com/v2/beers?beer_name=" +
        searchText +
        "&malt=" +
        maltFilter
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setBeerData(jsonResponse);
      });
  }, [searchText, maltFilter]);

  const handleBlur = (event) => {
    const userInput = event.target.value;
    setSearchText(userInput);
  };

  return (
    <div className="App">
      <NavBar />
      <SearchBar
        handleSearch={setSearchText}
        handleMaltFilter={setMaltFilter}
      />
      <Card list={beerData} />
    </div>
  );
}

export default App;

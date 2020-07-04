import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/ui/Header";
import CharacterGrid from "./component/characters/CharacterGrid";
import Search from "./component/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters/?name=${query}`
      );
      console.log("useEffect", result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search query={query} setQuery={setQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;

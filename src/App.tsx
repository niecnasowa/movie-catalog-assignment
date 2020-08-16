import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, ShowDetails, ShowList } from "./components";
import "./styles.css";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [shows, setShows] = useState([]);
  const [openShowId, setOpenShowId] = useState(0);

  useEffect(() => {
    if (searchText) {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(({ data }) => setShows(data))
        .catch(console.log);
    }
  }, [searchText]);

  const shouldShowShowDetails = !!openShowId;

  return (
    <div>
      {!shouldShowShowDetails && (
        <>
          <Search onSearch={(text) => setSearchText(text)} />
          <ShowList onOpenShow={setOpenShowId} shows={shows} />
        </>
      )}
      {shouldShowShowDetails && (
        <ShowDetails id={openShowId} onClose={() => setOpenShowId(0)} />
      )}
    </div>
  );
};

export default App;

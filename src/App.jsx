import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TopSpots from "./TopSpots";
import TopSpot from "./TopSpot";

function App() {
  const [topSpots, setTopSpots] = useState([]);

  useEffect(() => {
    axios
      .get("https://ccc.helloworldbox.com/items/top_spots")
      .then((response) => {
        console.log(response.data);
        setTopSpots(response.data.data);
      });
  }, []);

  return (
    <div className="container">
      <h1>San Diego Top Spots</h1>
      <p>A list of the top 30 places to see in San Diego, California</p>

      <TopSpots spots={topSpots} />
    </div>
  );
}

export default App;

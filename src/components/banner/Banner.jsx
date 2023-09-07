import React, { useEffect, useState } from "react";
import { API_KEY, imageURL } from "../../constants/constants";
import axios from "../../axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    try {
      async function fetchData() {
        try {
          const response = await axios.get(
            `trending/all/week?api_key=${API_KEY}&language=en-US`
          );
          setMovie(response.data.results[0]);
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
      fetchData();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, []);

  return (
    <>
      <div style={{backgroundImage:`url(${imageURL+movie?.backdrop_path})`}} className="banner">
        <div className="content">
          <h1 className="title">{movie?.title}</h1>
          <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">{movie?.overview}
          </h1>
        </div>
        <div className="fade-bottom"></div>
      </div>
    </>
  );
}

export default Banner;

import React, { useEffect, useState } from "react";
import {API_KEY, imageURL } from "../../constants/constants";
import axios from "../../axios";
import Youtube from "react-youtube";
import "./RowPost.css";

function RowPost(props) {
  const [movie, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    try {
      async function rowPost() {
        try {
          const response = await axios.get(props.url);
          setMovies(response.data.results);
        } catch (err) {
          console.log(err);
        }
      }
      rowPost();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  function handleMovie(id) {
    console.log(id);
    async function trailerFetch() {
      try {
        const response = await axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
        } else {
            alert('Trailer not available')
        }
      } catch (err) {
        console.log(err);
      }
    }

    trailerFetch();
  }

  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj, index) => (
            <img
              key={index + 1}
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? "small-poster" : "poster"}
              src={`${imageURL + obj.backdrop_path}`}
              alt="poster"
            />
          ))}
        </div>
        { urlId && <Youtube videoId={urlId.key} opts={opts} />}
      </div>
    </>
  );
}

export default RowPost;

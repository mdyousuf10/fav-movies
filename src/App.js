import logo from './logo.svg';

import { useState } from "react";

import './App.css';

const movieDB = {
  action: [
    { name: "John Wick", rating: "4/5" },
    { name: "Taken", rating: "3.5/5" }
  ],
  fiction: [
    {
      name: "Interstellar",
      rating: "5/5"
    },
    {
      name: "Inception",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "The Wolf of Wall Street",
      rating: "3.5/5"
    },
    {
      name: "The Founder",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div style={{ margin: "10px 10px 10px 10px" }} className="App">
      <h1>
        {" "}
        📚 Mov<span style={{ color: "pink" }}>ies</span>{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Mpvies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "pink",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import "../ComponentStyle/Home.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../ComponentStyle/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  const [tvMovies, setTvMovies] = useState([]);
  const [peopleMovies, setPeooleMovies] = useState([]);
  const [isLoding , setIsLoding] = useState('false')
  async function getTrendingMovies(mediaType, callback) {
    let { data } = await Axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
      );
      callback(data.results.slice(0, 10));
      setIsLoding('true')
    }
    useEffect(() => {
      getTrendingMovies("movie", setTrendingMovies);
      getTrendingMovies("tv", setTvMovies);
      getTrendingMovies("person", setPeooleMovies);
  }, []);

 
  
  return (
    <>
      {( isLoding === 'true' ) ? (
        <>
          <div className="row">
            <div className="col-md-4 mb-sm-2 mt-sm-4  d-flex align-items-center ">
              <div>
                <h2 className="header-title">trending movies to watch now</h2>
                <p className="text-title">most watched movies by day</p>
              </div>
            </div>
            {TrendingMovies.map((movie, i) => (
              <div key={i} className="col-md-2  pt-sm-4">
                <div className="moive position-relative ">
                  <div className="bg-info position-absolute top-0 end-0 rounded-start p-1 " >{ (movie.vote_average) }</div>
                  <Link to={`/MovieDetaiels/${movie.id}`}>
                    <img
                      className="w-100"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                      }
                    />
                    <h3 className="h6 my-2 pb-4 pb-sm-2 pt-sm-2">{movie.title}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-items-center ">
              <div>
                <h2 className="header-title">trending tv to watch now</h2>
                <p className="text-title">most watched movies by day</p>
              </div>
            </div>
            {tvMovies.map((movie, i) => (
              <div key={i} className="col-md-2 pt-sm-4">
                <div className="moive position-relative ">
                  <div className="bg-info position-absolute top-0 end-0 rounded-start p-1 " >{ (movie.vote_average) }</div>
                  <Link to={`/MovieDetaiels/${movie.id}`}>
                    <img
                      className="w-100"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                      }
                    />
                    <h3 className="h6 my-2 pb-4 pb-sm-2 pt-sm-2 ">{movie.name}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-items-center ">
              <div>
                <h2 className="header-title">trending person to watch now</h2>
                <p className="text-title">most watched movies by day</p>
              </div>
            </div>
            {TrendingMovies.map((movie, i) => (
              <div key={i} className="col-md-2 pt-sm-4">
                <div className="moive position-relative ">
                  <div className="bg-info position-absolute top-0 end-0 rounded-start p-1 " >{ (movie.vote_average) }</div>
                  <Link to={`/MovieDetaiels/${movie.id}`}>
                    <img
                      className="w-100"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                      }
                    />
                    <h3 className="h6 my-2 pb-4 pb-sm-2 pt-sm-2">{movie.title}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </>
      ) : (
        <div className=" vh-100 d-flex justify-content-center align-items-center  ">
            <i className="fas fa-spinner fa-spin" ></i>
        </div>
      )
      }
    </>
  );
}

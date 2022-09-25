import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { data, get } from "jquery";
import { useEffect } from "react";
import { useState } from "react";
import '../ComponentStyle/MovieDetailes.css'

// https://api.themoviedb.org/3/find/%7Bexternal_id%7D?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&external_source=imdb_id

export default function MovieDetaiels() {
  let params = useParams();
  let [movieDetaiels, setMovieDetaiels] = useState(null);
  async function getMovieDetailes(idMovie) {
    let { data } = await Axios.get(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`
    );
    setMovieDetaiels(data);
  }
  useEffect(() => {
    getMovieDetailes(params.id);
  }, []);
  return (
    <>
      {movieDetaiels ? (
        <div className="row  pt-5 " >
          <div className="col-md-3 text-center  " >
            <img
              className="w-100"
              src={"https://image.tmdb.org/t/p/w500/" + movieDetaiels.poster_path}
            />
          </div>
            <div className="col-md-7" >
              <h3 className="h4  my-3">{movieDetaiels.title}</h3>
              <p className="details-of-movie" >{movieDetaiels.overview}</p>
              <div className="pb-4" >
                <h5 className="vote" >Vote : {movieDetaiels.vote_average}</h5>
                <h5 className="vote" >vote count : {movieDetaiels.vote_count}</h5>
                <h5 className="vote" >release date : {movieDetaiels.release_date}</h5>   
              </div>
              <button className="btn btn-danger me-3 " > watch </button>
              <button className="btn btn-danger" > download </button>
            </div>
        </div>
      ) : (
        <div className=" vh-100 d-flex justify-content-center align-items-center  ">
            <i className="fas fa-spinner fa-spin" ></i>
        </div>
      )}
    </>
  );
}

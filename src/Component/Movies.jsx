import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../ComponentStyle/Movies.css";
import $ from 'jquery'

export default function Movies() {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  const [isLoding , setIsLoding] = useState('false')

  async function getTrendingMovies(pageNumper) {
    let { data } = await Axios.get(
      `
    https://api.themoviedb.org/3/discover/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumper}`
    );

    setTrendingMovies(data.results);
    setIsLoding('true')
  }
  let num = new Array(13).fill(13).map((element, i) => i + 1);
  useEffect(() => {
    getTrendingMovies(1);
  }, []);
  function addClass(bage){
    $('.pagination li a').on("click", function(e){
      $(e.target).parent().siblings('active' , function(){
        console.log(e.target)
        $('.pagination li a').removeClass('active')
      })
    
    })
  }
  
  return (
    <>
      {( isLoding === 'true' ) ? (
        <>
        <div className="row justify-content-center ">
          {TrendingMovies.map((movie, i) => (
            <div key={i} className="col-md-2 pt-sm-4">
              <div className="moive text-center position-relative ">
              <div className="bg-info position-absolute top-0 end-0 rounded-start p-1 " >{ (movie.vote_average) }</div>
                <Link to={`/MovieDetaiels/${movie.id}`}>
                  <img
                    className="w-100"
                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  />
                  <h3 className="h6 my-2 pb-4 pb-sm-2 pt-sm-2">{movie.title}</h3>
                </Link>
              </div>
            </div>
          ))}
          <nav
            className="d-flex justify-content-center"
            aria-label="Page navigation example"
          >
            <ul className="pagination  ">
              {num.map((bage, i) => (
                <li key={i} className="page-item  ">
                  <a
                    
                    onClick= {() =>` ${getTrendingMovies(bage)} ${addClass(bage)}`}
                    className="page-link bg-transparent "
                  >
                    {bage}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        </>
      ) : (
        <div className=" vh-100 d-flex justify-content-center align-items-center  ">
            <i className="fas fa-spinner fa-spin" ></i>
        </div>
      )}
    </>
  );
}

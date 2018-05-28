// import React from 'react';

import * as actionTypes from './movietypes';

export const fetchMovie = (searchMovie)=>(dispatch)=> {

    let url = "http://www.omdbapi.com/?t="+ searchMovie+"&apikey=aabca0d";
    fetch(url,{ method:"GET" })
    .then(results=>{
        return results.json();    
    }).then(data=>{
        console.log("...Search Movie Data..",data);
        dispatch({ type: actionTypes.Add_SEARCH_MOVIE, movieObj: data })
    })

}

export const addToWatchList = (movieObj)=>(dispatch)=> {

        console.log("...movieObject...",movieObj);
        var list = localStorage.getItem('watchList');
        if(list ==null || list=== undefined || list === ' ' ){
            var movieData = { 
                  Title: movieObj.Title,
                  Ratings : movieObj.Ratings,
                  Plot: movieObj.Plot,
                  Poster: movieObj.Poster ? movieObj.Poster : " ",
                  watched : false  
            }
           let watchList = [movieData];
           localStorage.setItem('watchList',JSON.stringify(watchList)); 
        }else{
            var movieObj = JSON.parse(list);
            // Check for Duplicacy and if found then not insert else insert

        }
    }
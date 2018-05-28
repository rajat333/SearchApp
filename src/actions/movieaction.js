// import React from 'react';

import * as actionTypes from './movietypes';

export const fetchMovie = (searchMovie)=>(dispatch)=> {
     
    console.log(".in movieaction....fetchmovie....");
    let url = "http://www.omdbapi.com/?t="+ searchMovie+"&apikey=aabca0d";
    fetch(url,{ method:"GET" })
    .then(results=>{
        return results.json();    
    }).then(data=>{
        console.log("...Search Movie Data..",data);
        var listOfStoredMovies = JSON.parse(localStorage.getItem('watchList'));
        if(listOfStoredMovies !== null && listOfStoredMovies !== undefined ){
            var found = listOfStoredMovies.some(function (el) {
                return el.Title === data.Title;
            });
       }else{
           found = false;
       } 
        var watched = false;
        if(found)  watched= true;
    
        dispatch({ type: actionTypes.Add_SEARCH_MOVIE, movieObj: data , watched: watched, })
    })

}

export const addToWatchList = (data)=>(dispatch)=> {
        var movieObj = data;    
        // console.log("...movieObject.....addToWatchList..",movieObj,data);
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
        //    console.log("......setting...item....");
           localStorage.setItem('watchList',JSON.stringify(watchList)); 
           dispatch({ type: actionTypes.ADD_TO_WATCHLIST, movieObj: movieObj, watched: true });
           
        }else{
            var listOfStoredMovies = JSON.parse(list);

            // console.log(".....in...else....",listOfStoredMovies,typeof(listOfStoredMovies));
            var found = listOfStoredMovies.some(function (el) {
                return el.Title === data.Title;
            });
            if(found){
                //cannot push to localstorage
                console.log("........Cannot..psuh..to..localstorage..");
            }else{
                //push to localstorage
                listOfStoredMovies.push(data);
                localStorage.setItem('watchList',JSON.stringify(listOfStoredMovies));
                console.log("....pushing...to..localstorage...");
                dispatch({ type: actionTypes.ADD_TO_WATCHLIST, movieObj: data, watched: true });
            }
            // Check for Duplicacy and if found then not insert else insert

        }
    }
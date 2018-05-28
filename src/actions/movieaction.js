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
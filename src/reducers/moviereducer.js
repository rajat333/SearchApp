
import * as actionTypes from '../actions/movietypes';
const initialState = {
     movies:[],
     searchedMovie : {},
     error: '',
     watched: ''
}
const reducer = (state=initialState, action) =>{
      switch(action.type){
            case actionTypes.Add_SEARCH_MOVIE :
                   
                   return{
                       ...state,
                       movies : [],
                       error:'',
                       searchedMovie: action.movieObj,
                       watched: action.watched,
                   }
            case actionTypes.REMOVE_MOVIE_FROM_STORAGE :
            // console.log(".....in reducer Remove Movie..",action);
            return{
                ...state,
                movies : action.movieArray,
                error: '',
                watched: false
            }     
            
            case actionTypes.ADD_TO_WATCHLIST:
                console.log("......reducer..add..to..watchlist...",action.movieObj);
                return{
                    ...state,
                    movies : state.movies.concat(action.movieObj),
                    error: '',
                    searchedMovie: action.movieObj,
                    watched: action.watched,
                }
            case actionTypes.FETCH_LIST_OF_MOVIES:
                 return{
                      ...state,
                      movies: action.movieArray,
                      searchedMovie: '',
                      watched: true,

                 } 
                             
            default: 
                 return state;   
        }
}

export default reducer;

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
            case actionTypes.REMOVE_CLICK_MOVIE :
            // console.log(".....in reducer Remove Movie..",action);
            return{
                ...state,
                movies : state.movies.filter( (eachObj,index)=> index!== action.index ),
                error: ''
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
                             
            default: 
                 return state;   
        }
}

export default reducer;
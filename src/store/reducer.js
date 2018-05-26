
import * as actionTypes from './action';
const initialState = {
     movies:[],
     searchedMovie : {},
     error: '',
     watched: ''
}
const reducer = (state=initialState, action) =>{
      switch(action.type){
            case actionTypes.Add_SEARCH_MOVIE :
                //    console.log(".....in reducer Addsearchmovie..",action.movieObj);
                   var found = state.movies.some(function (el) {
                    return el.Title === action.movieObj.Title;
                  });
                   return{
                       ...state,
                       movies : found ? state.movies : state.movies.concat(action.movieObj),
                       error:'',
                       searchedMovie: action.movieObj,
                       watched: found
                   }
            case actionTypes.REMOVE_CLICK_MOVIE :
            // console.log(".....in reducer Remove Movie..",action);
            return{
                ...state,
                movies : state.movies.filter( (eachObj,index)=> index!== action.index ),
                error: ''
            }       
            default: 
                 return state;   
        }
}

export default reducer;
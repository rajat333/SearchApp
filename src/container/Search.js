import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action';
//For passingdata to other comp
import DisplaySeachMovie from '../component/DisplaySearchMovie/DisplaySearchMovie';
import DisplayWatchList from '../component/DisplayWatchedMovie/DisplayWatchedMovie';
import Footer from '../component/Footer/Footer';

class Search extends Component{

    constructor(){
        super();
        this.state = {
           searchMovie: ''
        }
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
      }
    
       onInputChangeHandler(event){
         console.log("...OninputchangeHandler....");
          var value = event.target.value;
          this.setState({
            searchMovie: value,
          })
       }
    
       onSubmitHandler(){
            console.log("..SSubmit Movie Name..",this.state.searchMovie);
            let movieNameToSearch = this.state.searchMovie;
            let url="http://www.omdbapi.com/?t="+ movieNameToSearch+"&apikey=aabca0d";
            fetch(url,{ method:"GET" })
            .then(results=>{
                console.log("....results....",results);
                return results.json();    
            }).then(data=>{
                console.log("...Search Movie Data..",data);
                this.props.onAddMovie(data);
            })

       }
    
   
    render(){
        return(
            <div className="Search">
            <header className="App-header">
          <h1 className="App-title">Movieflix</h1>
          <div className="form-group search-bar"> 
            <input type="text" name="searchMovie"  style={{ color:"black", }}
                   value={this.state.searchMovie} 
                   onChange ={ this.onInputChangeHandler }
                   /> &nbsp;&nbsp;
            <button className="btn btn-success" onClick={ this.onSubmitHandler } >Search</button>       
          </div>
        </header>
           <div className="body-content" style={ { height:"600px" } } >
           <div>
            <DisplaySeachMovie iswatched={this.props.watched } movieSearch={this.props.searchedMovie} />
            </div>
            <DisplayWatchList  
                  list={ this.props.movieList } />  
            </div>
            <Footer />  
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
   console.log("....state..person...",state);
   return{ 
      movieList : state.movies,
      searchedMovie: state.searchedMovie,
      error: state.error,
      watched: state.watched
    };   
}
const mapDispatchToProps = dispatch =>{
    return {
        // different func for performing actions
        onAddMovie:(movieObj)=>  dispatch({ type: actionTypes.Add_SEARCH_MOVIE, movieObj: movieObj }),
        onRemoveMovie:(movieTitle)=>  dispatch({ type: actionTypes.REMOVE_CLICK_MOVIE, movieTitle:movieTitle }),
    
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);


// <AddPerson personadded={ this.props.onAddPerson } />
// { this.props.prs.map( person=>(

//  <Person key={person.id} 
//         name={person.name}
//         age={ person.age} />   
// )) }
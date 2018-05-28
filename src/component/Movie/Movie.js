import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/movietypes';
//For passingdata to other comp
// import DisplaySeachMovie from '../DisplaySearchMovie/DisplaySearchMovie';
import DisplayWatchList from '../DisplayWatchedMovie/DisplayWatchedMovie';
import Footer from '../Footer/Footer';

import { fetchMovie } from "../../actions/movieaction";
import { addToWatchList } from '../../actions/movieaction';

import './Movie.css';

class Movie extends Component{

    constructor(){
        super();
        this.state = {
           searchMovie: ''
        }
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
      }
    
       onInputChangeHandler(event){
        //  console.log("...OninputchangeHandler....");
          var value = event.target.value;
          this.setState({
            searchMovie: value,
          })
       }

       componentWillMount(){
           console.log("....in...component..will..mount....");
       }

       componentDidMount(){
        console.log("....in...component..DID..mount....");
    }
    
       onSubmitHandler(){
            let movieNameToSearch = this.state.searchMovie;
            this.setState({ 
                searchedMovie: '',
           })
            this.props.fetchMovie(movieNameToSearch);
          
       }

       addToWatchList(movieToBeAdded){
            console.log("...Addtowatchlist....",movieToBeAdded);   
            this.props.addToList(movieToBeAdded);
        }
    
       deleteMovieHandler= (index)=>{
            console.log("....in...delete..Handler....",index);
            this.props.onRemoveMovie(index);
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
            <button className="btn btn-success" disabled={ !this.state.searchMovie } onClick={ this.onSubmitHandler } >Search</button>       
          </div>
        </header>
           <div className="body-content" style={ { height:"600px" } } >
           {/* Search Movie Displayed Here */}
           {/* <div>
            <DisplaySeachMovie iswatched={this.props.watched } key={ this.props.searchedMovie['Title'] } movieSearch={this.props.searchedMovie} />
            </div> */}

            { this.props.searchedMovie ?  
                 (<div key={this.props.searchedMovie['Title'] } className="DisplaySearchMovie">
                    <p>In display Search Movie</p>
                    <div style={ { float:"left", margin:"0px 0px 0px 100px",height: "200px",top:"0px" } }>
                    <img src={ this.props.searchedMovie['Poster'] ? this.props.searchedMovie['Poster'] : '' } 
                            alt="PosterImage"  style={ { cursor:"pointer", height:"200px", }}
                            onClick={ ()=>this.addToWatchList(this.props.searchedMovie) } 
                            /> 
                    </div>    
                    <div className="data-part" style={ { display:"table", margin:"0px 0px 0px 30px", padding:"0px 0px 0px 40px" } } >
                    <h1>{ this.props.searchedMovie['Title'] }</h1>
                    <span style={ { display:"block", } }>{ this.props.searchedMovie['Released'] }</span>
                
                        {/* { <b className="rating" >{ this.props.searchedMovie.Ratings.0.Value }</b> } */}
                        {/* <b className="rating" >{ this.props.searchedMovie.Ratings[1].Value }</b> */}
                    
                    <br />
                    <span>Rotten Tomatoes</span>&nbsp;
                    <span>IMDB</span>&nbsp;&nbsp;
                    { this.props.iswatched ? (<button className='btn btn-primary'>Watched</button>) : " " }
                    </div>   
                    </div> 
                    ) : " "  }
            <hr />
            <div style={ {    padding:"0 0 20px 0", } }>
             <span style={ { float:"left",backgroundColor:"black",color:"white" } }><b>Watched</b></span> 
             <span style={ { float:"right",backgroundColor:"black",color:"white" } }><a><b>View All</b></a></span> 
             </div>
             {
                 this.props.movieList.map( (eachElement,index)=>{
                    return <DisplayWatchList key={ index }
                       click={ ()=> this.deleteMovieHandler(index) }
                       index={ index }
                       imgLink = { eachElement.Poster }
                    />
                 })
             }
            </div>
            <Footer />  
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
   console.log("....state..person...",state);
   return{ 
      movieList : state.movie.movies,
      searchedMovie: state.movie.searchedMovie,
    //   error: state.error,
      watched: state.movie.watched
    };   
}
const mapDispatchToProps = dispatch =>{
    return {
        // different func for performing action
        fetchMovie : (searchedMovie)=> dispatch( fetchMovie(searchedMovie) ),
        onAddMovie:(movieObj)=>  dispatch({ type: actionTypes.Add_SEARCH_MOVIE, movieObj: movieObj }),
        onRemoveMovie:(index)=>  dispatch({ type: actionTypes.REMOVE_CLICK_MOVIE, index: index, }),
        addToList:(data)=> dispatch( addToWatchList(data) ),
    
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);

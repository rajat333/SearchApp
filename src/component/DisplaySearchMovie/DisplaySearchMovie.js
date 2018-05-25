import React , {Component } from 'react';
import './DisplaySearchMovie.css';

class DisplaySearchMovie extends Component{

    // constructor(props){
    //     super(props);
    // }

    renderWatchListButton(){
        if(this.props.iswatched){
            return(
                <button className="btn btn-primary">Watched</button>
            )
        }else{
            return null;
        }
    }

    render(){
        return(
            this.props.movieSearch['Title'] ? (<div key={this.props.movieSearch['Title'] } className="DisplaySearchMovie">
            <p>In display Search Movie</p>
             <div style={ { float:"left", margin:"0px 0px 0px 100px",height: "200px",top:"0px" } }>
             <img src={ this.props.movieSearch['Poster'] } alt="PosterImage" style={ { height:"200px" ,}} /> 
             </div>    
             <div className="data-part" style={ { display:"table", margin:"0px 0px 0px 30px", padding:"0px 0px 0px 40px" } } >
              <h1>{ this.props.movieSearch['Title'] }</h1>
              <span style={ { display:"block", } }>{ this.props.movieSearch['Released'] }</span>
              { this.props.movieSearch['Ratings'].map( eachObj =>(
  
                  <b className="rating" key={eachObj.value}>{ eachObj.Value }</b>
              ))
              }
              <br />
              <span>Rotten Tomatoes</span>&nbsp;
              <span>IMDB</span>&nbsp;&nbsp;
              <span>Metacritic</span>&nbsp;&nbsp;  
              { this.props.iswatched ? (<button className='btn btn-primary'>Watched</button>) : " " }
             </div>   
            </div>
             
           ) : (<p>In DisplaySearchMovie</p>)
        );
    }
}

export default DisplaySearchMovie;
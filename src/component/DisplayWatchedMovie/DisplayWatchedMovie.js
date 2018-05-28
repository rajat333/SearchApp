import React , {Component } from 'react';
import './DisplayWatchedMovie.css';
class DisplayWatchedMovie extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
        
                <div key={ this.props.index } className="listmovies" onClick={ this.props.click }> 
                    <img src={ this.props.imageLink ? this.props.imageLink :"https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" } 
                         style={ { height:"200px", } } alt="Movie"
                         />
                </div>
                
            );
    }
}

export default DisplayWatchedMovie;

// (this.props.list.length >0) ? (<div className="DisplayWatchedMovie">
// <hr />
// <div style={ {    padding:"0 0 20px 0", } }>
//  <span style={ { float:"left",backgroundColor:"black",color:"white" } }><b>Watched</b></span> 
//  <span style={ { float:"right",backgroundColor:"black",color:"white" } }><a><b>View All</b></a></span> 
//  </div>   
//  {
//     this.props.list.map( (eachElement,index)=>(
//         <div key={ index } className="listmovies"  onClick={ this.OnDivClickHandler(index) }> 
//         <img src={ eachElement.Poster ? eachElement.Poster :"https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" } 
//              style={ { height:"200px", } } alt="Movie"
//              />
//          />
//         </div>
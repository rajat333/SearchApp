import React , {Component } from 'react';
import './DisplayWatchedMovie.css';
class DisplayWatchedMovie extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            (this.props.list.length >0) ? (<div className="DisplayWatchedMovie">
            <hr />
            <div>
             <span style={ { float:"left",backgroundColor:"black",color:"white" } }><b>Watched</b></span> 
             <span style={ { float:"right",backgroundColor:"black",color:"white" } }><b>View All</b></span> 
             </div>   
             {
                this.props.list.map( eachElement=>(
                    <div key={ eachElement.Title }>
                    <img src={ eachElement.Poster } 
                         style={ { height:"200px", } } alt="Movie"
                     />
                    </div>
                )) 
             }  
            </div>) :null
        );
    }
}

export default DisplayWatchedMovie;
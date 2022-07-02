import React from 'react'

const MovieCards = (props) => {
  return (
   
     
    <div className="cards">

    <div className="card">
                          <img src={props.data.image}/>
                        <div className="card-content">
                            <h2>{props.data.title}</h2>
                            <p>{props.data.story}</p>
                            <h4>{props.data.year}</h4>
                        </div>
                             </div>

            </div>
    

    
  )
}

export default MovieCards
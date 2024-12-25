
import React from "react";

const Player = (props) => {
    const { name, team, nationality, jerseyNumber, age, imageUrl } = props;
    
    return (
        <div>
            <div>
               <img src={imageUrl} alt={name}></img>
            </div>
            <div>
               <h1>{name}</h1>
            </div>

            <div>
               <h2>{team}</h2>
               <h3>{nationality}</h3>
               <h3>{jerseyNumber}</h3>
               <h4>{age}</h4>
            </div>

        </div>

      
    )
       
}




export default Player;
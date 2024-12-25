import React from 'react';
import Player from './Player';
import PlayersList from './PlayersList';
import players from './players';
import cartesImage1 from './images/12.jpg';
import cartesImage2 from './images/14.jpg';
import cartesImage3 from './images/19.jpg';
import cartesImage4 from './images/7.jpg';
import Images from './images';


function App() {
  return (
    <div>
      <div>
         <h1> Cartes de joueur FIFA </h1>
      </div>

      <div>

         <div>
         <Image imageUrl = {cartesImage1} /> 
         </div>

         <div>
         <Name name = {"Ali MAALOUL"} /> 
         <Team team = {"Tunisian national team"} />
         <Nationality nationality = {"Tunisian"} />
         <JerseyNumber jerseyNumber = {"12"} />
         <Age age = {"34 years"} />
         </div>

      </div>

      <div>

         <div>
         <Image imageUrl = {cartesImage2} /> 
         </div>

         <div>
         <Name name = {"Aissa LAIDOUNI"} /> 
         <Team team = {"Tunisian national team"} />
         <Nationality nationality = {"Tunisian"} />
         <JerseyNumber jerseyNumber = {"14"} />
         <Age age = {"28 years"} />
         </div>
         
      </div>

      <div>

         <div>
         <Image imageUrl = {cartesImage3} /> 
         </div>

         <div>
         <Name name = {"Seifeddine JAZIRI"} /> 
         <Team team = {"Tunisian national team"} />
         <Nationality nationality = {"Tunisian"} />
         <JerseyNumber jerseyNumber = {"19"} />
         <Age age = {"31 years"} />
         </div>
         
      </div>

      <div>

         <div>
         <Image imageUrl = {cartesImage4} /> 
         </div>

         <div>
         <Name name = {"Youssef MSAKNI"} /> 
         <Team team = {"Tunisian national team"} />
         <Nationality nationality = {"Tunisian"} />
         <JerseyNumber jerseyNumber = {"7"} />
         <Age age = {"34 years"} />
         </div>
         
      </div>
      
    </div>

  );
}





export default App;

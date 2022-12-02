import logo from './logo.svg';
import './App.css';
import "bootstrap"
import "./Countries - Flags"
import Teams from "./teams.json"
import TeamConstructor from "./teamsConst"
import Popup from 'reactjs-popup';
import React from 'react';


function App() {

  let teams = Teams;

  //Setting the state variables:

  // State variable for filtering: continent 
  const [SouthAmerica, setSouthAmerica] = useState(false)
  const [NorthAmerica, setNorthAmerica] = useState(false)
  const [Asia, setAsia] = useState(false)
  const [Africa, setAfrica] = useState(false)
  const [Europe, setEurope] = useState(false)

  // State variable for filtering: number of cups won
  const [Zero, setZero] = useState(false)
  const [One, setOne] = useState(false) 
  const [Two, setTwo] = useState(false)
  const [Five, setFive] = useState(false)

  // State Variable for sorting: alphabetically
  const [sortLetter, setSortLetter] = useState("firstLetter");

  // State Variable for aggregator: favorites
  const [favs, setFavs] = useState("country")


  // Initializing Section
  const [teamsArray, setTeamsArray] = useState(teams) // Array of all teams
  const [favsArray, setFavsArray] = useState([teams[0]]) // Array keeping track of favorite teams, defaults to Argentina
  const [favsSum, setfavsSum] = useState(0) // Aggregator value is adding the number of cups won between favorite teams
  teams.sort((a, b) => a.firstLetter > b.firstLetter); // Defaults to teams sorted in alphabetical order

  // Changing states
    // Add/Remove from Favs



    // Reset Completely



    // Change Sort
    const chSort = (array) => {
      if (sort === "A-Z") {
        return array.sort((a, b) => a.MatchNumber > b.MatchNumber);
      } else {
        array.sort((a, b) => a.MatchNumber < b.MatchNumber);
      }
    };

    // Change filter


    



  return (
    <div className="App">
        
        <div className="welcome"> Welcome !</div>
        <header className ="mainHeader"> QATAR 2022 </header>
        <div className="subtitle"> Round of 16 </div>

       
        // You can filter the teams who are in the current round of the world cup by the continent they come from and what their mother tongue is!
        // In addition to that, you can also sort these teams in alphabetical order. 
        // Also, you can add and remove teams from you favorites, where you will also be able to see their cumulative amount of cups won.
        // If in any moment you wish to reset your options, just press the reset button. 

        // PopUp window with Instructions
        <Popup trigger={<button className="info"> <img src="./Images/info.Icon.png"/></button>} position="right center">
        <div>
        <div className="descriptionMain"> In this page you will be able to: </div>
        <div className="descriptionMain"> Filter current World Cup teams by their continent and mother tongue.</div>
        <div className="descriptionMain"> Sort these teams from A-Z, or from Z-A</div>
        <div className="descriptionMain"> Add and remove from Favorites, where you will be able to see the cumulative sum of world cups won</div>
        <div className="descriptionMain"> </div>
        </div>
        </Popup>


        // Layout:
        // Big picture of Qatar, header over it sort of. "QATAR 2022" "16 Round"
        // Instructions right below (o maybe pop up window al principio?)
        // row con: sorting, filtering: continent, filtering: club y favorites option
          // Sorting: dropdown menu: "A-Z" and "Z-A" (mutually exclusive)
        // flexbox con cada "card" de cada equipo!! 
        // Also need section with favorite teams 


        <div className="Sorting"> 
        <select defaultValue={'ascending'}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
        </select>
        </div>
      
      <div className="Filter:Country"></div>

      <div className="Filter:Language"></div>

      <div className="TeamCards"></div>
    </div>
  );
}

export default App;

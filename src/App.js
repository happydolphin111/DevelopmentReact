import logo from './logo.svg';
import './App.css';
import "bootstrap"
import Teams from "./teams.json"
import TeamConstructor from "./teamsConst"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { Component } from "react";
import { useState } from "react";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";


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
    //const chSort = (array) => {
      //if (chSort === "A-Z") {
        //return array.sort((a, b) => a.MatchNumber > b.MatchNumber);
      //} else {
      //  array.sort((a, b) => a.MatchNumber < b.MatchNumber);
      //}
    //};

    // Change filter

    // Dropdown menu component
    const Option = (props) => {
      return (
        <div>
          <components.Option {...props}>
            <input
              type="checkbox"
              checked={props.isSelected}
              onChange={() => null}
            />{" "}
            <label>{props.label}</label>
          </components.Option>
        </div>
      );
    };

  


        // Layout:
        // Big picture of Qatar, header over it sort of. "QATAR 2022" "16 Round"
        // Instructions right below (o maybe pop up window al principio?)
        // row con: sorting, filtering: continent, filtering: club y favorites option
          // Sorting: dropdown menu: "A-Z" and "Z-A" (mutually exclusive)
        // flexbox con cada "card" de cada equipo!! 
        // Also need section with favorite teams 

  return (
    <div className="App">
        
        <div className="FirstHalf">
        {/* Headers */}
        <div className="TopOfPage">
        <div className="welcome"> Welcome!</div>
        <div className="subtitle"> WORLD CUP </div>
        <header className ="mainHeader"> QATAR 2022 </header>
        <div className="subtitle"> Round of 16 </div>
        </div>

        {/* Menu Bar */}
        <div className="MenuBar">
      
        <div className="Filter">
        <div className="MenuItem"> Country </div>
        
     
    
        </div>

        <div className="Filter">
        <div className="MenuItem"> Language Spoken </div>  
        </div>

        <div className="Sorting"> 
        <div className="MenuItem"> Sort </div>
        <select defaultValue={'ascending'}>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
        </select>
        </div>
      

        {/* PopUp window with Instructions */}
        <Popup trigger={<button className="info"> <img src="./Images/info.Icon.png"/></button>} position="right">
        <div className="popupInfo">
        <div className="descriptionMain1"> In this page you will be able to: </div>
        <div className="descriptionMain"> - Filter current World Cup teams by their continent and mother tongue</div>
        <div className="descriptionMain"> - Sort these teams from A-Z, or from Z-A</div>
        <div className="descriptionMain"> - Add and remove from Favorites, where you will be able to see the cumulative sum of world cups won</div>
        </div>
        </Popup>

        </div>

        </div>

      <div className="TeamCards">


      </div>
    </div>
  );
}

export default App;

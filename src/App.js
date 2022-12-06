import logo from './logo.svg';
import './App.css';
import "bootstrap"
import Teams from "./assets/teams.json"
import TeamCard from "./components/teamsConst"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { Component } from "react";
import { useState, useEffect } from "react";
//import { default as ReactSelect } from "react-select";
//import { components } from "react-select";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import info from "./assets/Images/info.Icon.png";
//import heart from "./Images/heart.jpeg";
import Select from 'react-select';
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';
import { propTypes } from 'react-bootstrap/esm/Image';


   //Images

function App() {

  let teams = [...Teams];

  //Setting the state variables:

  // State variable for filtering: continent 
  const [SouthAmerica, setSouthAmerica] = useState(false)
  const [NorthAmerica, setNorthAmerica] = useState(false)
  const [Asia, setAsia] = useState(false)
  const [Africa, setAfrica] = useState(false)
  const [Europe, setEurope] = useState(false)

  // State variable filtering: language
  const [Spanish, setSpanish] = useState(false)
  const [Portuguese, setPortuguese] = useState(false)
  const [English, setEnglish] = useState(false)
  const [French, setFrench] = useState(false)
  const [Croatian, setCroatian] = useState(false)
  const [Polish, setPolish] = useState(false)
  const [Arabic, setArabic] = useState(false)
  const [Korean, setKorean] = useState(false)
  const [Dutch, setDutch] = useState(false)
  const [Japanese, setJapanese] = useState(false)

  // State Variable for sorting: alphabetically
  const [sort, setSort] = useState("A-Z");
  //teamsArray.sort((a, b) => a.firstLetter > b.firstLetter);
  //setTeamsArray(teamsArray) // Defaults to teams sorted in alphabetical order

  // State variable for aggregator number of cups won
  const [Zero, setZero] = useState(false)
  const [One, setOne] = useState(false) 
  const [Two, setTwo] = useState(false)
  const [Five, setFive] = useState(false)


  // Initializing Section
  const [favsArray, setFavsArray] = useState([]) // Array keeping track of favorite teams
  const [favsSum, setfavsSum] = useState(0) // Aggregator value is adding the number of cups won between favorite teams

  const [teamsArray, setTeamsArray] = useState(teams) // Array of all teams

  // Changing states

  // Favorites

    // Add/Remove from Favs
    function AddToFavs(item) {
      let count = 0
      favsArray.forEach(element => {
        if (element.country === item.country) {
        count += 1;

          if (count = 0){
            setFavsArray([...favsArray, item])
          }
          else {
            setFavsArray(favsArray.splice(favsArray.indexOf(item), 1))
          }
          
        } })
        
    // Cumulative Sum of Cups
    var numberCups = 0;
        for (var i = 0; i < favsArray.length; i++) {
        numberCups += favsArray[i].cups;}
        setfavsSum(numberCups);
      };

  // Change Sort
    const Sorting = (array) => {
    if (sort === "ascending") {
      setTeamsArray(array.sort((a, b) => a.country > b.country));
    } else {
      setTeamsArray(array.sort((a, b) => a.country < b.country));
    }
    };

    const handleClick = (choice) => {
      if (choice === "ascending") {
        setSort("ascending")
      }
      else {
        setSort("descending")
      }

    }
  

    // Change filter
    // Continents
    const filterSouthAmerica = (array) => {
      if (SouthAmerica) {
        return array.filter(data => data.continent === "SouthAmerica");
      } else {
        return array;
      }
    };

    const filterNorthAmerica = (array) => {
      if (NorthAmerica) {
        return array.filter(data => data.continent === "NorthAmerica");
      } else {
        return array;
      }
    };
  
    const filterAsia = (array) => {
      if (Asia) {
        return array.filter(data => data.continent === "Asia");
      } else {
        return array;
      }
    };

    const filterAfrica = (array) => {
      if (Africa) {
        return array.filter(data => data.continent === "Africa");
      } else {
        return array;
      }
    };

    const filterEurope = (array) => {
      if (Europe) {
        return array.filter(data => data.continent === "Europe");
      } else {
        return array;
      }
    };

    // Language

    const filterSpanish = (array) => {
      if (Spanish) {
        return array.filter(data => data.language === "Spanish");
      } else {
        return array;
      }
    };

    const filterPortuguese = (array) => {
      if (Portuguese) {
        return array.filter(data => data.language === "Portuguese");
      } else {
        return array;
      }
    };

    const filterEnglish = (array) => {
      if (English) {
        return array.filter(data => data.language === "English");
      } else {
        return array;
      }
    };

    const filterFrench = (array) => {
      if (French) {
        return array.filter(data => data.language === "French");
      } else {
        return array;
      }
    };

    const filterCroatian = (array) => {
      if (Croatian) {
        return array.filter(data => data.language === "Croatian");
      } else {
        return array;
      }
    };

    const filterPolish = (array) => {
      if (Polish) {
        return array.filter(data => data.language === "Polish");
      } else {
        return array;
      }
    };

    const filterArabic = (array) => {
      if (Arabic) {
        return array.filter(data => data.language === "Arabic");
      } else {
        return array;
      }
    };

    const filterKorean = (array) => {
      if (Korean) {
        return array.filter(data => data.language === "Korean");
      } else {
        return array;
      }
    };

    const filterDutch = (array) => {
      if (Dutch) {
        return array.filter(data => data.language === "Dutch");
      } else {
        return array;
      }
    };

    const filterJapanese = (array) => {
      if (Japanese) {
        return array.filter(data => data.language === "Japanese");
      } else {
        return array;
      }
    };  

    const Dropdown = ({ open, trigger, menu }) => {
      return (
        <div className="dropdown">
          {trigger}
          {open ? (
            <ul className="menu">
              {menu.map((menuItem, index) => (
                <li key={index} className="menu-item">{menuItem}</li>
              ))}
            </ul>
          ) : null}
        </div>
      );
    };
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
          setOpen(!open);
        };

    
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
        <div className="MenuItem"> Continent </div>

        <div> 
        <FormControlLabel
                control={<Checkbox checked={SouthAmerica}
                onChange={(event) => { setSouthAmerica(event.target.checked); }}
                />}
                label="South America"
              />

        <FormControlLabel
                control={<Checkbox checked={NorthAmerica}
                  onChange={(event) => { setNorthAmerica(event.target.checked); }}
                />}
                label="North America"
              />
</div>
    <div>

        <FormControlLabel
                control={<Checkbox checked={Europe}
                  onChange={(event) => { setEurope(event.target.checked); }}
                />}
                label="Europe"
              />     

        <FormControlLabel
                control={<Checkbox checked={Africa}
                  onChange={(event) => { setAfrica(event.target.checked); }}
                />}
                label="Africa"
              />     

        <FormControlLabel
                control={<Checkbox checked={Asia}
                  onChange={(event) => { setAsia(event.target.checked); }}
                />}
                label="Asia"
              />     
              </div>

        </div>

        <div className="Filter">
        <div className="MenuItem"> Language Spoken</div> 

    <div>
  

  
      <Dropdown
        open={open}
        title="Select"
        Multi
        trigger={<button class="button2" onClick={handleOpen}> Menu</button>}
        menu={[
          <button onClick={filterSpanish(teamsArray)}>Spanish</button>,
          <button onClick={filterPortuguese(teamsArray)}>Portuguese</button>,
          <button onClick={filterEnglish(teamsArray)}>English</button>,
          <button onClick={filterCroatian(teamsArray)}>Croatian</button>,
          <button onClick={filterPolish(teamsArray)}>Polish</button>,
          <button onClick={filterArabic(teamsArray)}>Arabic</button>,
          <button onClick={filterJapanese(teamsArray)}>Japanese</button>,
          <button onClick={filterFrench}>French</button>,
          <button onClick={filterKorean}>Korean</button>,
          <button onClick={filterDutch}>Dutch</button>
        ]}
      />    
      </div>
      </div>
  

        <div className="Sorting"> 
        <div className="MenuItem"> Sort </div>
     
        <select 
              value={sort}
              onClick={handleClick}
              >
        <option value="ascending"> A-Z </option>
        <option value="descending"> Z-A </option>
  
        </select>
        </div>
      

        {/* PopUp window with Instructions */}
        <Popup trigger={<button className="info"> <img src={info} width="30vw" height="30vw" /></button>} position="right">
        <div className="popupInfo">
        <div className="descriptionMain1"> In this page you will be able to: </div>
        <div className="descriptionMain"> - Filter current World Cup teams by their continent and main language</div>
        <div className="descriptionMain"> - Sort these teams from A-Z, or from Z-A</div>
        <div className="descriptionMain"> - Add and remove from Favorites, where you will be able to see the cumulative sum of world cups won</div>
        </div>
        </Popup>
  
        </div>

        <div>  . </div>

      </div>

      <div className="FavsSection">
      
      <div className="tituloFavs"> FAVORITES </div>
      {favsArray.map((item, index) => (
          <div>
            <p>{item.country}</p>
            <p>{item.cups}</p>
          </div>

        ))}

      <div className="copas"> Cumulative Number of Cups: {favsSum}</div>

      </div>

      <div className="TeamCards">
      <div className="tituloFavs"> TEAMS </div>

    <div className="teams">
        {teamsArray.map((item, index) => (
          <TeamCard 
          country={item.country} 
          flag={item.flag} 
          language={item.language} 
          continent={item.continent} 
          cups={item.cups} 
          AddToFavs={AddToFavs} />
        ))}
        
      </div>
</div>
    </div>
    
  );

}

export default App;

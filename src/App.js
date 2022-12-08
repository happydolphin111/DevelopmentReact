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
import { teal } from '@mui/material/colors';
import { ListItem } from '@mui/material';


   //Images

function App() {

  let teams = [...Teams];

  //Setting the state variables:

  // State variable for filtering: continent 
  const [SouthAmerica, setSouthAmerica] = useState(true)
  const [NorthAmerica, setNorthAmerica] = useState(true)
  const [Asia, setAsia] = useState(true)
  const [Africa, setAfrica] = useState(true)
  const [Europe, setEurope] = useState(true)

  // State variable filtering: language
  const [Spanish, setSpanish] = useState(true)
  const [Portuguese, setPortuguese] = useState(true)
  const [English, setEnglish] = useState(true)
  const [French, setFrench] = useState(true)
  const [Croatian, setCroatian] = useState(true)
  const [Polish, setPolish] = useState(true)
  const [Arabic, setArabic] = useState(true)
  const [Korean, setKorean] = useState(true)
  const [Dutch, setDutch] = useState(true)
  const [Japanese, setJapanese] = useState(true)

  // State Variable for sorting: alphabetically
  const [sort, setSort] = useState("ascending");
  //teamsArray.sort((a, b) => a.firstLetter > b.firstLetter);
  //setTeamsArray(teamsArray) // Defaults to teams sorted in alphabetical order

  // State variable for aggregator number of cups won
  const [Zero, setZero] = useState(false)
  const [One, setOne] = useState(false) 
  const [Two, setTwo] = useState(false)
  const [Five, setFive] = useState(false)


  // Initializing Section
  const [fav, setFav] = useState(new Set()) // Array keeping track of favorite teams
  //const [fav, setFav] = useState([])

  const [favsSum, setfavsSum] = useState(0) // Aggregator value is adding the number of cups won between favorite teams

  const [initialArray, setInitialArray] = useState(teams)
  const [teamsArray, setTeamsArray] = useState(initialArray) // Array of all teams

  // Changing states

  // Favorites

    // Add/Remove from Favs (w/ Set)
  function AddToFavs(item) {
    const newFav = new Set(fav)
      if (newFav.has(item)){
        newFav.delete(item)  
        }
      else {
        newFav.add(item)  
        }
      setFav(newFav)
        
    // Cumulative Sum of Cups
    var numberCups = 0;
      fav.forEach((favsiter) => {
        numberCups += favsiter.cups})
      setfavsSum(numberCups)

      };
    

      // w/ Array
      {/*

    function AddToFavs(item) {
      const newFav = [...fav]
        if (newFav.includes(item)){
          newFav = [...newFav, item]
            }
        else {
          newFav.splice(newFav.indexOf(item), 1) 
          }
        setFav(newFav)
          
      // Cumulative Sum of Cups
      var numberCups = 0;
          for (var i = 0; i < fav.length(); i++) {
          numberCups += fav[i].cups;}
          setfavsSum(numberCups);
        };
        */}
  

  // Change Sort

    const handleClickB = (e) => {
      let sort1 = e.target.value
      setSort(sort1)

      if (sort === "descending") {
        setTeamsArray(teamsArray.sort((a, b) => a.country < b.country ? -1 : 1));
      } else {
        setTeamsArray(teamsArray.sort((a, b) => a.country > b.country ? -1 : 1));
      }
    }

  

    // Change filter
    // Continents
    const filterSouthAmerica = (e) => {
    const new_array = [...initialArray]
      if (e.target.checked === false) {
        setSouthAmerica(false)
        setTeamsArray(teamsArray.filter(data => data.continent !== "South America"))}
        else {
        setSouthAmerica(true)
        const single_data = new_array.filter(data => data.continent === "South America")
        setTeamsArray(teamsArray.concat(single_data));
        }
      };

    const filterNorthAmerica = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setNorthAmerica(false)
        setTeamsArray(teamsArray.filter(data => data.continent !== "North America"))}
        else {
          setNorthAmerica(true)
          const single_data = new_array.filter(data => data.continent === "North America")
          setTeamsArray(teamsArray.concat(single_data));
        }
      };
  
    const filterAsia = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setAsia(false)
        setTeamsArray(teamsArray.filter(data => data.continent !== "Asia"))}
        else {
          setAsia(true)
          const single_data = new_array.filter(data => data.continent === "Asia")
          setTeamsArray(teamsArray.concat(single_data));
        }
      };

    const filterAfrica = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setAfrica(false)
        setTeamsArray(teamsArray.filter(data => data.continent !== "Africa"))}
        else {
          setAfrica(true)
          const single_data = new_array.filter(data => data.continent === "Africa")
          setTeamsArray(teamsArray.concat(single_data));
        }
      };

    const filterEurope = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setEurope(false)
        setTeamsArray(teamsArray.filter(data => data.continent !== "Europe"))}
        else {
          setEurope(true)
          const single_data = new_array.filter(data => data.continent === "Europe")
          setTeamsArray(teamsArray.concat(single_data));
        }
      };

    // Language

    const filterSpanish= (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setSpanish(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "Spanish"))}
        else {
          setSpanish(true)
          const single_data = new_array.filter(data => data.language === "Spanish")
          setTeamsArray(teamsArray.concat(single_data));
        }
      };

    const filterPortuguese = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setPortuguese(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "Portuguese"))}
        else {
          setPortuguese(true)
          const single_data = new_array.filter(data => data.language === "Portuguese")
          setTeamsArray(teamsArray.concat(single_data));
        }

    };

    const filterEnglish = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setEnglish(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "English"))}
        else {
          setEnglish(true)
          const single_data = new_array.filter(data => data.language === "English")
          setTeamsArray(teamsArray.concat(single_data));
        }
    };

    const filterFrench = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setFrench(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "French"))}
        else {
          setFrench(true)
          const single_data = new_array.filter(data => data.language === "French")
          setTeamsArray(teamsArray.concat(single_data));
        }
    };


    const filterCroatian = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setCroatian(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "Croatian"))}
        else {
          setCroatian(true)
          const single_data = new_array.filter(data => data.language === "Croatian")
          setTeamsArray(teamsArray.concat(single_data));
        }
    };


    const filterPolish = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setPolish(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "Polish"))}
        else {
          setPolish(true)
          const single_data = new_array.filter(data => data.language === "Polish")
          setTeamsArray(teamsArray.concat(single_data));
        }
    };


    const filterArabic = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setArabic(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "Arabic"))}
        else {
          setArabic(true)
          const single_data = new_array.filter(data => data.language === "Arabic")
          setTeamsArray(teamsArray.concat(single_data));
        }
    };


    const filterKorean = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setKorean(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "Korean"))}
        else {
          setKorean(true)
          const single_data = new_array.filter(data => data.language === "Korean")
          setTeamsArray(teamsArray.concat(single_data));
        }
    };


    const filterDutch = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setDutch(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "Dutch"))}
        else {
          setDutch(true)
          const single_data = new_array.filter(data => data.language === "Dutch")
          setTeamsArray(teamsArray.concat(single_data));
        }
    };


    const filterJapanese = (e) => {
      const new_array = [...initialArray]
      if (e.target.checked === false) {
        setJapanese(false)
        setTeamsArray(teamsArray.filter(data => data.language !== "Japanese"))}
        else {
          setJapanese(true)
          const single_data = new_array.filter(data => data.language === "Japanese")
          setTeamsArray(teamsArray.concat(single_data));
        }
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


        <div className="continentss"> 
        <FormControlLabel
            control=
            {<Checkbox 
            checked={SouthAmerica}
            onChange={(event) => filterSouthAmerica(event)}
            
            />}
              label="South America"
          />

        <FormControlLabel
            control={<Checkbox 
            checked={NorthAmerica}
            onChange={(event) => filterNorthAmerica(event)}
              />}
            label="North America"
          />

        <FormControlLabel
            control={<Checkbox checked={Europe}
            onChange={(event) => filterEurope(event)}
            />}
            label="Europe"
            />     

        <FormControlLabel
                control={<Checkbox checked={Africa}
                onChange={(event) => filterAfrica(event)}
                />}
                label="Africa"
              />     

        <FormControlLabel
                control={<Checkbox checked={Asia}
                onChange={(event) => filterAsia(event)}
                />}
                label="Asia"
              />     
              </div>

        </div>

        <div className="Filter">
        <div className="MenuItem"> Language Spoken</div> 

    <div>
    <FormControlLabel
        control={<Checkbox checked={Spanish}
        onChange={(event) => filterSpanish(event)} />}
       label="Spanish"
      />     

      <FormControlLabel
        control={<Checkbox checked={Portuguese}
        onChange={(event) => filterPortuguese(event)} />}
       label="Portuguese"
      />   

      <FormControlLabel
        control={<Checkbox checked={English}
        onChange={(event) => filterEnglish(event)} />}
       label="English"
      />   

</div>

<div>
      <FormControlLabel
        control={<Checkbox checked={French}
        onChange={(event) => filterFrench(event)} />}
       label="French"
      />   

      <FormControlLabel
        control={<Checkbox checked={Croatian}
        onChange={(event) => filterCroatian(event)} />}
       label="Croatian"
      />   

      <FormControlLabel
        control={<Checkbox checked={Polish}
        onChange={(event) => filterPolish(event)} />}
       label="Polish"
      />   

</div>

<div>
      <FormControlLabel
        control={<Checkbox checked={Arabic}
        onChange={(event) => filterArabic(event)} />}
       label="Arabic"
      />   

      <FormControlLabel
        control={<Checkbox checked={Korean}
        onChange={(event) => filterKorean(event)} />}
       label="Korean"
      />   
      
      <FormControlLabel
        control={<Checkbox checked={Dutch}
        onChange={(event) => filterDutch(event)} />}
       label="Dutch"
      />  

      <FormControlLabel
      control={<Checkbox checked={Japanese}
      onChange={(event) => filterJapanese(event)} />}
      label="Japanese"
      />   

      </div>
      </div>
  

        <div className="Sorting"> 
        <div className="MenuItem"> Sort </div>
     
        <select 
              //onChange={(e) => setSort({sort: e.target.value})}
              onChange={(e) => handleClickB(e)}
              value={sort}
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
      
      {fav.values((item) => (
          <div>
            <p>{item.country}</p>
            <p>{item.cups}</p>
          </div>

      ))} 

      {/*{fav.map((item, index) => (
          <div>
            <p>{item.country}</p>
            <p>{item.cups}</p>
          </div>

      ))} */}

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

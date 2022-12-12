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
//import MultiValue from 'react-select/dist/declarations/src/components/MultiValue';
//import images from "./assets/Images"
//import heart from "./Images/heart.jpeg";

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
  const [sort, setSort] = useState("ascending");
  //teamsArray.sort((a, b) => a.firstLetter > b.firstLetter);
  //setTeamsArray(teamsArray) // Defaults to teams sorted in alphabetical order

  // Initializing Section
  const [fav, setFav] = useState(new Set()) // Set keeping track of favorite teams
 // const [fav, setFav] = useState([]) // Array keeping track of favorite teams
  const [favsSum, setfavsSum] = useState(0) // Aggregator value is adding the number of cups won between favorite teams


  const [teamsArray, setTeamsArray] = useState(teams) // Array of all teams

  // Changing states

  // Favorites

  /*
    function AddToFavs(item, array) {
      if (array.includes(item)){
        return array.splice(array.indexOf(item), 1) 
          }
      else {
        return [...array, item]
        }
          
      // Cumulative Sum of Cups
      var numberCups = 0;
        for (var i = 0; i < fav.length(); i++) {
        numberCups += fav[i].cups;}
        setfavsSum(numberCups);
    };
*/

  // Reset
  const handleClickReset = () => {
    setSouthAmerica(false)
    setNorthAmerica(false)
    setAfrica(false)
    setAsia(false)
    setEurope(false)

    setSpanish(false)
    setPortuguese(false)
    setFrench(false)
    setEnglish(false)
    setPolish(false)
    setCroatian(false)
    setArabic(false)
    setKorean(false)
    setJapanese(false)
    setDutch(false)

    setSort("ascending")
  }


  // Change Sort

    const handleClickB = (e) => {
      let sort1 = e.target.value
      setSort(sort1)
    }

    const sortFunction = (array) => {
      if (sort === "descending") {
        return array.sort((a, b) => a.country < b.country);
      } else {
        return array.sort((a, b) => a.country > b.country);
      }
    }

    // Change filter

    // Continents
    const filterSouthAmerica = (array) => {
      if (SouthAmerica) {
        return (array.filter(data => data.continent === "South America"))
      }
      else{
        return array
      }
    }

    const filterNorthAmerica = (array) => {
      if (NorthAmerica) {
        return (array.filter(data => data.continent === "North America"))
      }
      else{
        return array
      }
    }
  
    const filterAsia = (array) => {
      if (Asia) {
        return (array.filter(data => data.continent === "Asia"))
      }
      else{
        return array
      }
    }

    const filterAfrica = (array) => {
      if (Africa) {
        return (array.filter(data => data.continent === "Africa"))
      }
      else{
        return array
      }
    }

    const filterEurope = (array) => {
      if (Europe) {
        return (array.filter(data => data.continent === "Europe"))
      }
      else{
        return array
      }
    }

    // Language

    const filterSpanish = (array) => {
      if (Spanish) {
        return (array.filter(data => data.language === "Spanish"))
      }
      else{
        return array
      }
    }

    const filterPortuguese = (array) => {
      if (Portuguese) {
        return (array.filter(data => data.language === "Portuguese"))
      }
      else{
        return array
      }
    }

    const filterEnglish = (array) => {
      if (English) {
        return (array.filter(data => data.language === "English"))
      }
      else{
        return array
      }
    }

    const filterFrench= (array) => {
      if (French) {
        return (array.filter(data => data.language === "French"))
      }
      else{
        return array
      }
    }


    const filterCroatian = (array) => {
      if (Croatian) {
        return (array.filter(data => data.language === "Croatian"))
      }
      else{
        return array
      }
    }

    const filterPolish= (array) => {
      if (Polish) {
        return (array.filter(data => data.language === "Polish"))
      }
      else{
        return array
      }
    }


    const filterArabic= (array) => {
      if (Arabic) {
        return (array.filter(data => data.language === "Arabic"))
      }
      else{
        return array
      }
    }

    const filterKorean= (array) => {
      if (Korean) {
        return (array.filter(data => data.language === "Korean"))
      }
      else{
        return array
      }
    }

    const filterDutch= (array) => {
      if (Dutch) {
        return (array.filter(data => data.language === "Dutch"))
      }
      else{
        return array
      }
    }

    const filterJapanese= (array) => {
      if (Japanese) {
        return (array.filter(data => data.language === "Japanese"))
      }
      else{
        return array
      }
    }
    

    useEffect(() => {
      let teamsArray = [...teams];
      let favsSet = new Set(fav);
      let favsSum1 = favsSum;

      teamsArray = filterSouthAmerica(teamsArray);
      teamsArray = filterNorthAmerica(teamsArray);
      teamsArray = filterAfrica(teamsArray);
      teamsArray = filterAsia(teamsArray);
      teamsArray = filterEurope(teamsArray);

      teamsArray = filterSpanish(teamsArray);
      teamsArray = filterPortuguese(teamsArray);
      teamsArray = filterEnglish(teamsArray);
      teamsArray = filterFrench(teamsArray);
      teamsArray = filterPolish(teamsArray);
      teamsArray = filterCroatian(teamsArray);
      teamsArray = filterDutch(teamsArray);
      teamsArray = filterArabic(teamsArray);
      teamsArray = filterKorean(teamsArray);
      teamsArray = filterJapanese(teamsArray);

      teamsArray = sortFunction(teamsArray);

   
      //setfavsSum(favsSum1);
      setTeamsArray(teamsArray);

    }, [
      SouthAmerica, NorthAmerica, Asia, Africa, Europe, Spanish, Portuguese, 
      English, French, Croatian, Polish, Arabic, Korean, Dutch, Japanese, sort, fav, favsSum,]
    )


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
            control= {<Checkbox 
            checked={SouthAmerica}
            onChange={(e) => {setSouthAmerica(e.target.checked);}}
            />}
              label="South America"
          />

        <FormControlLabel
            control={<Checkbox 
            checked={NorthAmerica}
            onChange={(e) => { setNorthAmerica(e.target.checked); }}
              />}
            label="North America"
          />

        <FormControlLabel
            control={<Checkbox 
            checked={Europe}
            onChange={(e) => { setEurope(e.target.checked); }}
            />}
            label="Europe"
            />     

        <FormControlLabel
                control={<Checkbox 
                checked={Africa}
                onChange={(e) => { setAfrica(e.target.checked); }}
                />}
                label="Africa"
              />     

        <FormControlLabel
                control={<Checkbox 
                checked={Asia}
                onChange={(e) => { setAsia(e.target.checked); }}
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
        onChange={(e) => { setSpanish(e.target.checked); }}
        />}
       label="Spanish"
      />     

      <FormControlLabel
        control={<Checkbox checked={Portuguese}
        onChange={(e) => { setPortuguese(e.target.checked); }}
        />}
       label="Portuguese"
      />   

      <FormControlLabel
        control={<Checkbox checked={English}
        onChange={(e) => { setEnglish(e.target.checked); }} />}
       label="English"
      />   

</div>

<div>
      <FormControlLabel
        control={<Checkbox checked={French}
        onChange={(e) => { setFrench(e.target.checked); }} />}
       label="French"
      />   
 

      <FormControlLabel
        control={<Checkbox checked={Croatian}
        onChange={(e) => { setCroatian(e.target.checked); }} />}
       label="Croatian"
      />   

      <FormControlLabel
        control={<Checkbox checked={Polish}
        onChange={(e) => { setPolish(e.target.checked); }}/>}
       label="Polish"
      />   

</div>

<div>
      <FormControlLabel
        control={<Checkbox checked={Arabic}
        onChange={(e) => { setArabic(e.target.checked); }} />}
       label="Arabic"
      />   

      <FormControlLabel
        control={<Checkbox checked={Korean}
        onChange={(e) => { setKorean(e.target.checked); }}/>}
       label="Korean"
      />   
      
      <FormControlLabel
        control={<Checkbox checked={Dutch}
        onChange={(e) => { setDutch(e.target.checked); }} />}
       label="Dutch"
      />  

      <FormControlLabel
      control={<Checkbox checked={Japanese}
      onChange={(e) => { setJapanese(e.target.checked); }} />}
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


        <div className = 'ResetAndInfo'> 
        <div className="Resetting">  
        
        <div className="MenuItem"> Reset </div>
        <div> 
        <FormControlLabel
          control=
          {<Checkbox 
            onChange={(e) => handleClickReset(e)}/>}
          />   
          </div>

        </div>
      

        {/* PopUp window with Instructions */}
        <Popup trigger={<button className="info"> <img src={info} width="30vw" height="30vw" /></button>} position="right">
        <div className="popupInfo">
        <div className="descriptionMain1"> In this page you will be able to: </div>
        <div className="descriptionMain"> - Filter current World Cup teams by their continent and main language</div>
        <div className="descriptionMain"> - Sort these teams from A-Z, or from Z-A</div>
        <div className="descriptionMain"> - Add and remove from Favorites by clicking on the "FAVS" button, where you will be able to see the cumulative sum of world cups won</div>
        <div className="descriptionMain"> - Click the Reset button to reset your choices. </div>
        </div>
        </Popup>
  
        


        </div>
        </div>

        <div>  . </div>

      </div>

      <div className="FavsSection">
      
      <div className="tituloFavs"> FAVORITES </div>
      
      <div className="FavsCards"> 
      {Array.from(fav).map((item, index) => (
          <div className="FavItem">
            <p>{item.country}</p>
            <p>Number of Cups: {item.cups}</p>
          </div>

      ))} 
</div>


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
          fav={fav} 
          setFav = {setFav}
          setfavsSum = {setfavsSum}/>
        ))}
        
      </div>
</div>
    </div>
    
  );

}

export default App;

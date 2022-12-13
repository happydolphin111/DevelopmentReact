
import {useSate} from "react";
//import heart from "/assets/images/*";

export default function TeamCard({fav, setFav, setfavsSum, item}) {

    const {country, flag, language, continent, cups} = item;

    const handleClickA = () => {
      const newFav = new Set(fav)

      if (!newFav.has(item)) {
        newFav.add(item)}
      else {
        console.log('del', item, newFav.has(item))
        newFav.delete(item)}
      setFav(newFav)


       // Cumulative Sum of Cups
      let numberCups = 0;
      const NewFavsArray = Array.from(newFav)
      for (var i = 0; i < NewFavsArray.length; i++) {
      numberCups += NewFavsArray[i].cups;}
      setfavsSum(numberCups);
    }


    return (
    <div className="TeamCard"> 
    
    <div className="teamdivision">
    <img src={flag} height="90" alt={country} + "Flag"/>
    </div>

    <div className="teamdivision">
    <div className="Country"> {country} </div>

    <div className="descr">
    <div className="Header"> Language: </div>
    <div className="Section"> {language}</div>
    </div>

    <div className="descr">
    <div className="Header"> Continent: </div>
    <div className="Section"> {continent}</div>
    </div>

    <div className="descr">
    <div className="Header"> Cups: </div>
    <div className="Section"> {cups}</div>

    </div>

    <button onClick={handleClickA} > FAV / REMOVE </button>
    </div>
    </div>
    );
}
      

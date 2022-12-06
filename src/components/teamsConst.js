
import {useSate} from "react";
//import heart from "/assets/images/*";

export default function TeamCard(props) {

    // Giving props a variable name to facilitate use
    const country = props.country
    const flag = props.flag
    const language = props.language
    const continent = props.continent
    const cups = props.cups
    const ToFavs = props.ToFavs

 

    const handleClickA =() => {
      ToFavs(props)
    }

    return (
    <div className="TeamCard"> 
    
    <div className="teamdivision">
    <img src={process.env.PUBLIC_URL + {flag}} alt="Country's Flag"/>
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

    <button onClick={handleClickA}> Fav </button>
    </div>
    </div>
    );
}
      

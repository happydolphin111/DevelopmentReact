import './App.css';

export default function TeamsCards(props) {

    // Giving props a variable name to facilitate use
    const country = props.country
    const flag = props.flag
    const language = props.language
    const continent = props.continent
    const cups = props.cups

    return (
    <div> 
    <img src={flag} alt="Country's Flag"/>
    
    <div className="Country"> {country} </div>

    <div className="Header"> Language: </div>
    <div className="Section"> {language}</div>

    <div className="Header"> Continent: </div>
    <div className="Section"> {continent}</div>

    <div className="Header"> Cups: </div>
    <div className="Section"> {cups}</div>
    </div>
    );
}
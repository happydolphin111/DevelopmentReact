import logo from './logo.svg';
import './App.css';
import "bootstrap"
import "./Countries - Flags"
import Teams from "./teams.json"
import TeamConstructor from "./teamsConst"


function App() {

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
  const [sortLetter, setSortLetter] = useState("FirstLetter");

  // State Variable for aggregator: favorites
  const [favs, setFavs] = useState("TheBest")




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;

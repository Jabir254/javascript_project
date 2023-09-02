import "./App.css";
import {User} from "./User";

function App(){
  const planets = [
    {name: "Mars" , isGasPlanet:false},
    {name: "Earth", isGasPlanent: false},
    {name:"Jupiter", isGasPlanent:true},
    {name: "Venus", isGasPlanent:false},
    {name: "Neptune", isGasPlanent:true},
    {name:"Uranus", isGasPlanent:true},
  ];

  return (<div className="App">
    {planets.map((planet, key) =>{
      if (!planet.isGasPlanent) return <h1>{planet.name}</h1>
    })}
  </div>
  );
}

export default App;
import "./App.css";

function App(){

  const names = ["pedro", "jake", "jessica", "Mike", "Dustin", "lucas"];

  return (
    <div className ="App">
      {names.map((name, key) => {
        return <ul>
          <li>{name}</li>
        </ul>
      })}
    </div>
  );
}

export default App;
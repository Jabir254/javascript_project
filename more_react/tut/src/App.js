import "./App.css";

function App() {
  const name = "Jabir"
  return (<div className="App">
    Hello world!
    <GetName name ="Pedro" age={21} email="pedro@pedro.com" />
  </div>
  );
}


const GetName = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  )
};

export default App;
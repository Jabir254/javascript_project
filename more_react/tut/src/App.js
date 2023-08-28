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
  return <h2>Pedro</h2>;
};
const GetNamecomponent = () => {
  return <h1>Pedro</h1>;
};

export default App;
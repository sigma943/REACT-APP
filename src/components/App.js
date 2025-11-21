import './App.css';

function App() {
  const name = "Dawid";
  const names = ['Dawid', 'Daniel', 'Maks', 'Barbara', 'Marceli'];

  return (
    <div className="App">
        <p> {name.length > 10 ? name : 'Hello friends!'} </p>
        <p> { names.map((name) => <li key={name}>{name}</li> ) }</p>
    </div>
  );
}

export default App;

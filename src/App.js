import './App.css';
import ListTask from './Components/ListTask/ListTask';
import AddTask from './Components/AddTask/AddTask';
function App() {
  return (
    <div className="App">
     <h1> to do task </h1>
     <AddTask/>
     <ListTask/>
    </div>
  );
}

export default App;

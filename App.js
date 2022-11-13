
import './App.css';
import { AnotherComponent } from './components/AnotherComponent';
import Start from "./components/start";


function App() {
  return (
    <div className="App">
      <AnotherComponent title="Super Component"/>
      <Start />
      <AnotherComponent title="Gdje je kraj ovim komponentama?"/>
      <AnotherComponent/>
    </div>
  );
}

export default App;

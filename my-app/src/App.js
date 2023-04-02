// import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StateFullGreeting from './components/StateFullGreeting';
import StateFullGreetingWithCallback from './components/StateFullGreetingWithCallback';
import StateFullGreetingPrewState from './components/StateFullGreetingPrewState';



function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting =" Nice to meet you " name="Aso" age='21'/>
      <StateFullGreeting  greeting="Nice to meet you from class component" name="Banafsha" age="22"/>
      <StateFullGreetingWithCallback />
      <StateFullGreetingPrewState />
    </div>
  );
}

export default App;

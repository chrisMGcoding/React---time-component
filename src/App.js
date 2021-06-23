import logo from './logo.svg';
import './App.css';
import DemoComponent from './component/exemple';

function App() {

  let dateCourante = new Date();
  let tempsJavaScript = dateCourante.getTime();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoComponent/>
        <div><p>le temps JS est de : {tempsJavaScript} milliseconde</p></div>
        <div><p>le temps PHP est de : {tempsJavaScript/1000} seconde</p></div>
        <div>
          <p>la date pour les humains est : {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}</p>
        </div>
      </header>
      <footer>
        <p>Un site de MolenGeek</p>
      </footer>
    </div>
  );
}

export default App;

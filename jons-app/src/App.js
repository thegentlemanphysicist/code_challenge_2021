import jonphoto from './jonphoto.jpg'
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Why should you hire Jon?
        </p>
        <img src={jonphoto} className="jon-photo" style={{ width: '300px' }} alt="me" />
        <p>He's awesome!!</p>
        <p>This is not in version 1.0.0</p>
      </header>
    </div>
  );
}

export default App;

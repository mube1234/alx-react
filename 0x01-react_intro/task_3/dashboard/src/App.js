import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>

      <div className='App-body'>
        <p>
          Login to access the full dashboard
        </p>
        <form>
          <label for='email'>Email: </label>
          <input type='email' id='email' name='email' />

          <label for='password'>Password: </label>
          <input type='password' id='password' name='password' />
          <button>OK</button>
        </form>
        
      </div>
      
      <div className='App-footer'>
        <p>
          Copyright 2020 - holberton School
        </p>
      </div>
    </div>
  );
}

export default App;
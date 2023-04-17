import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>first react app</h1>
       <img src="https://jayswines.com/wp-content/uploads/2017/01/Buy-Hennessy-XO-700ml-online-in-Nairobi.png"alt="" srcset=""></img>
       
        <button type='button'onClick={buttonClicked}>order drinks</button>
       
      </header>
    </div>
  );
}

function buttonClicked(){
  alert("you clicked me");
}

export default App;


import './App.css';
import myimg from './assets/StorefrontV2.jpg'
function App() {
  return (
    <div className="App">
      <header >
        <h1>Cookies and Beyond</h1>
        <p>Where cookie maniacs gather</p>
      </header>
      <img className='bgimg' src={myimg} />
    </div>
  );
}

export default App;

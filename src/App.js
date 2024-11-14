import "./App.css";
import myimg from "./assets/StorefrontV2.jpg";
import productData from "./products";


function App() {
  return (
    <div className="App">
      <header>
        <h1>Cookies and Beyond</h1>
        <p>Where cookie maniacs gather</p>
      </header>
      <div>
        <img className="bgImg" src={myimg} />
      </div>
       <div>
      <div className="prodShelf">
        <div className="prodItem">
          <img className="prodImg" src={productData[0].img} />
          <h3>{productData[0].name}</h3>
          <p>{productData[0].price}</p>
        </div>
        <div className="prodItem">
          <img className="prodImg" src={productData[1].img} />
          <h3>{productData[1].name}</h3>
          <p>{productData[1].price}</p>
        </div>
      </div>
    </div>
     </div>
  );
}

export default App;

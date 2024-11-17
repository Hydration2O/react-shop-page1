import "./App.css";
import myimg from "./assets/StorefrontV2.jpg";
import productData from "./products";

function App() {
  const productList = productData.map((prod) => {
    return (
      <div className="prodItem">
        <img className="prodImg" src={prod.img} />
        <h1>{prod.name}</h1>
        <p>{prod.price}</p>
      </div>
    );
  });
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
          {productList}
        </div>
      </div>
    </div>
  );
}

export default App;

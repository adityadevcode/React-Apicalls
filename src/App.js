//Axios api call
import "./App.css";
import { useState, useEffect } from "react";
import Products from "./components/Products";
import axios from "axios";

function App() {
  const [productlist, updateProductlist] = useState([]);

  useEffect(() => {
    data();
  }, []);

  async function data() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      updateProductlist(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  if (productlist.length === 0) {
    return <h2>Fetching data ...</h2>;
  }

  return (
    <>
      <div className="product-list">
        {productlist.map((p) => (
          <Products {...p} key={p.id}></Products>
        ))}
      </div>
    </>
  );
}

export default App;




// fetch method
import "./App.css";
import { useState, useEffect } from "react";
import Products from "./components/Products";

function App() {
  const [productlist, updateProductlist] = useState([]);

  useEffect(() => {
    data();
  }, []);

  async function data() {
    let res = await fetch("https://fakestoreapi.com/products");
    let dataList = await res.json();
    updateProductlist(dataList);
    console.log(res);
  }

  //product length is zero
  if (productlist.length == 0) {
    return <h2>Fetching data ...</h2>;
  }

    // return (
    //   productlist.map((p)=><Products{...p}></Products>
    //   )
    // );
  

  // (p)=><Products name={p.title} price={p.price}></ProductCard>)

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




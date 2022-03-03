import React, { useContext } from "react";
import "./productlist.css";
import Product from "../../components/product/product";
import Context from "../../store/Context";

function ProductList() {
  const context = useContext(Context);
  return (
    <div className="container12">
      <div className="searchresultarea">
        {context.products.map((p) => (
          <Product
            key={p.id}
            id={p.id}
            imageurl={p.imageurl}
            price={p.price}
            model={p.model}
            date={p.date}
            city={p.city}
            addProductToCart={context.addProductToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

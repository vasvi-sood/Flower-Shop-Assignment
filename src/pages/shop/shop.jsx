import React, {useContext} from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
  const { addToCart, afterPayItems} = useContext(ShopContext);

  const prods= PRODUCTS.filter((product)=> afterPayItems[product.id]!=1)
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Vasvi's Flower Shop</h1>
      </div>

      <div className="products">
        {prods.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

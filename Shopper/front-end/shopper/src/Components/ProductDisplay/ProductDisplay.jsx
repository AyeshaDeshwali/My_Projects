import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt=""
            style={{ width: "15px", height: "15px" }}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt=""
            style={{ width: "15px", height: "15px" }}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt=""
            style={{ width: "15px", height: "15px" }}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt=""
            style={{ width: "15px", height: "15px" }}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2107/2107737.png"
            alt=""
            style={{ width: "15px", height: "15px" }}
          />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          sed. Excepturi eius qui dicta, quibusdam commodi nostrum dolores
          assumenda dolorum officia, voluptate ipsa quaerat blanditiis
          recusandae impedit nam minima cum!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XX</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span>Women, T_Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Moden, Latest, Crop Top
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsDB from "../data/products";
import reducerKeys from "../app/reducers/reducerKeys";

const Toko = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    // Fetch products action example
    dispatch({
      type: reducerKeys.product.FETCH_PRODUCTS,
      payload: productsDB /* fetched products */,
    });
  }, [dispatch]);

  const addToCart = (product) => {
    // Add to cart action example
    dispatch({ type: reducerKeys.cart.ADD_TO_CART, payload: product });
  };

  return (
    <div>
      {/* Display products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} : {product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* Display cart items */}
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Toko;

import { useContext } from "react";
import { SvContext } from "../Components/SeviceContext/SeviceContext";
import ProductCart from "../Components/ProductCart";
import ExtraBanner from "../Components/ExtraBanner/ExtraBanner";
import Checkout from "../Components/Checkout/Checkout";

const Cart = () => {
  const { Cart, wishlist } = useContext(SvContext);

  return (
    <div className="container mx-auto lg:padding-primary my-5">
      <ExtraBanner title={"YOUR BAG"} />
      <div className="my-10 flex flex-row justify-between gap-28">
        <div className="flex-1">
          {Array.from(new Set(Cart.map((item) => item.id))).map((id) => (
            <ProductCart
              key={id}
              id={id}
              name={Cart.find((item) => item.id === id).name}
              brand={Cart.find((item) => item.id === id).brand}
              imgUrl={Cart.find((item) => item.id === id).imgUrl}
              price={Cart.find((item) => item.id === id).price}
            />
          ))}
        </div>
        <div>
          <Checkout
            count={Cart.reduce(
              (sum, item) => Number(sum) + Number(item.price),
              0
            )}
            text={"Checkout"}
            path={"/payment"}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;

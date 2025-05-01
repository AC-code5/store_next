import { useEffect, useState } from "react";
import axios from "axios";
import { IProductItem } from "./ProductItem";
import AddToCart from "./AddToCart";
interface CartItemsProps {
  id: number;
  quantity: number;
}
function CartItems({ id, quantity }: CartItemsProps) {
  const [product, setProduct] = useState({} as IProductItem);
  useEffect(() => {
    axios(`http://localhost:3001/products/${id}`).then((res) => {
      const { data } = res;
      setProduct(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-8">
      <img className="col-span-3" src={product.image} />
      <div className="col-span-9  p-4" dir="rtl">
        <h2 className="font-bold text-xl">{product.title}</h2>
        <p>
          تعداد: <span className="font-light">{quantity}</span>
        </p>
        <p>
          قیمت محصول: <span>{product.price}</span>
        </p>
        <div className="mt-12">
          <AddToCart id={id.toString()} />
        </div>
      </div>
    </div>
  );
}

export default CartItems;

"use client";

import { UseShopingCartContext } from "@/context/ShopingCartContext";

interface IAddToCart {
  id: string;
}
function AddToCart({ id }: IAddToCart) {
  const {
    cartItems,
    handelIncreaseProductQuantity,
    getProductQuantity,
    handelDecreaseProductQuantity,
    handelRemoveProduct,
  } = UseShopingCartContext();
  return (
    <>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => handelIncreaseProductQuantity(parseInt(id))}
        >
          خرید
        </button>
        <span className="text-gray-500 bg-gray-200 px-4 py-2 rounded-md mx-2">
          {getProductQuantity(parseInt(id))}
        </span>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => handelDecreaseProductQuantity(parseInt(id))}
        >
          حذف
        </button>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 w-full"
        onClick={() => handelRemoveProduct(parseInt(id))}
      >
        حذف کامل از سبد
      </button>
    </>
  );
}
export default AddToCart;

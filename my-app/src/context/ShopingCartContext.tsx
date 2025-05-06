"use client";
import { createContext, useContext, useEffect, useState } from "react";
type ShopingCartContextProviderProps = {
  children: React.ReactNode;
};
type CartItem = {
  id: number;
  quantity: number;
};

type ShopingCartContextType = {
  cartItems: CartItem[];
  handelIncreaseProductQuantity: (id: number) => void;
  getProductQuantity: (id: number) => number;
  handelDecreaseProductQuantity: (id: number) => void;
  handelRemoveProduct: (id: number) => void;
  cartTotalQuantity: number;
};
const ShopingCartContext = createContext<ShopingCartContextType>(
  {} as ShopingCartContextType
);

export const UseShopingCartContext = () => {
  return useContext(ShopingCartContext);
};

export function ShopingCartContextProvider({
  children,
}: ShopingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartTotalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const getProductQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const handelIncreaseProductQuantity = (id: number) => {
    setCartItems((prev) => {
      const IsNotProductExist = prev.find((item) => item.id === id) == null;

      if (IsNotProductExist) {
        return [...prev, { id: id, quantity: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handelDecreaseProductQuantity = (id: number) => {
    setCartItems((prev) => {
      const IsLastOne = prev.find((item) => item.id == id)?.quantity == 1;
      if (IsLastOne) {
        return prev.filter((item) => item.id != id);
      } else {
        return prev.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handelRemoveProduct = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id != id));
  };

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShopingCartContext.Provider
      value={{
        cartItems,
        handelIncreaseProductQuantity,
        getProductQuantity,
        cartTotalQuantity,
        handelDecreaseProductQuantity,
        handelRemoveProduct,
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}

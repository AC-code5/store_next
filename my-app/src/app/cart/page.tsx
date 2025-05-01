"use client";
import Container from "@/components/Container";
import CartItems from "@/components/CartItems";
import { UseShopingCartContext } from "@/context/ShopingCartContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { IProductItem } from "@/components/ProductItem";
import { formatNumber } from "@/utils/number";
import Link from "next/link";

interface IDiscount {
  id: number;
  code: string;
  percentage: number;
}

function Cart() {
  const { cartItems } = UseShopingCartContext();
  const [product, setProduct] = useState<IProductItem[]>([]);
  const [discountCode, setDiscountCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    axios(`http://localhost:3001/products`).then((res) => {
      const { data } = res;
      setProduct(data);
    });
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const selectedProduct = product.find((p) => p.id == item.id);
    return total + (selectedProduct?.price || 0) * item.quantity;
  }, 0);

  const handelApplyDiscount = () => {
    axios(`http://localhost:3001/discounts?code=${discountCode}`).then(
      (res) => {
        const data = res.data as IDiscount[];
        const discountPrice = (totalPrice * data[0].percentage) / 100;
        const finalPrice = totalPrice - discountPrice;
        setFinalPrice(finalPrice);
        setDiscountPrice(discountPrice);
        setDiscountCode(data[0].code);
      }
    );
  };

  if (cartItems.length === 0) {
    return (
      <Container>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-12">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            سبد خرید شما خالی است
          </h2>
          <p className="text-gray-600 mb-8">
            محصولات مورد نظر خود را به سبد خرید اضافه کنید
          </p>
          <Link
            href="/store"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            مشاهده محصولات
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-right">
          سبد خرید
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {cartItems.map((item) => (
                <CartItems key={item.id} {...item} />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-right">
                خلاصه سفارش
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">قیمت کل:</span>
                  <span className="text-lg font-semibold text-gray-800">
                    {formatNumber(totalPrice)}$
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">تخفیف:</span>
                  <span className="text-lg font-semibold text-green-600">
                    {formatNumber(discountPrice)}$
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">قیمت نهایی:</span>
                  <span className="text-xl font-bold text-blue-600">
                    {formatNumber(finalPrice)}$
                  </span>
                </div>

                <div className="mt-6">
                  <div className="flex gap-2">
                    <input
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                      type="text"
                      placeholder="کد تخفیف"
                      value={discountCode}
                    />
                    <button
                      onClick={handelApplyDiscount}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      اعمال کد تخفیف
                    </button>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 mt-6">
                  تکمیل خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;

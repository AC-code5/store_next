"use client";
import Container from "@/components/Container";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import cookies from "js-cookie";
import { redirect } from "next/navigation";
function Dashboard() {
  const [newProducts, setNewProducts] = useState([
    {
      image: "",
      title: "",
      price: "",
      description: "",
    },
  ]);
  const handleLogout = () => {
    cookies.remove("token");
    redirect("/login");
  };
  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProducts({ ...newProducts, [name]: value });
  };
  const handleSubmit = (e) => {
    axios({
      method: "POST",
      url: "http://localhost:3001/products",
      data: {
        id: Math.floor(Math.random() * 1000).toString(),
        title: newProducts.title,
        description: newProducts.description,
        price: newProducts.price,
        image: newProducts.image,
      },
    });
  };
  return (
    <div className="bg-gray-100 h-screen " dir="rtl">
      <Container>
        <div className="grid grid-cols-3 gap-4 mb-4 mt-4 shadow-md rounded-md p-6">
          <input
            name="image"
            onChange={handleChangeProduct}
            type="text"
            placeholder="عکس"
            className="w-full p-2 rounded-md shadow-md"
          />
          <input
            name="title"
            onChange={handleChangeProduct}
            type="text"
            placeholder="عنوان"
            className="w-full p-2 rounded-md shadow-md"
          />
          <input
            name="price"
            onChange={handleChangeProduct}
            type="text"
            placeholder="قیمت"
            className="w-full p-2 rounded-md shadow-md"
          />
        </div>

        <textarea
          name="description"
          onChange={handleChangeProduct}
          className="w-full mt-4 bg-gray-200 p-2 rounded-md shadow-md"
          placeholder="توضیحات"
          rows={6}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded-md shadow-md mt-4"
        >
          ثبت محصول جدید
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded-md shadow-md mt-4 "
        >
          خروج از داشبورد
        </button>
      </Container>
    </div>
  );
}

export default Dashboard;

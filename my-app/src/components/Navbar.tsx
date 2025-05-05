"use client";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { UseShopingCartContext } from "@/context/ShopingCartContext";
import Search from "./Search";
import { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    {
      href: "/",
      title: "خانه",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
    {
      href: "/dashboard",
      title: "داشبورد",
    },
    {
      href: "/login",
      title: "__ورود",
    },
  ];
  const { cartTotalQuantity } = UseShopingCartContext();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium ${
                  pathname === item.href
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Search />
            <Link
              href="/cart"
              className="flex items-center space-x-2 space-x-reverse hover:text-blue-600 transition-colors duration-200"
            >
              <span className="font-medium hidden sm:inline">سبد خرید</span>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartTotalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartTotalQuantity}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50 rounded-md"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;

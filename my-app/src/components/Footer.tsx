import Link from "next/link";
import { FaGithub, FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 rounded-3xl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold"> Next Store </h3>
            <p className="text-gray-400 max-w-xs">
              فروشگاهی اینترنتی با قیمت های عالی و محصولات تضمین شده
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-4"> دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="text-gray-400 hover:text-white transition"
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-white transition"
                >
                  داشبورد
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-white transition"
                >
                  لاگین
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-4">
              نکس استور را دنبال کنید
            </h3>
            <div className="flex flex-wrap gap-6">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTelegram className="size-6" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter className="size-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram className="size-6" />
              </a>
              <a
                href="https://github.com/AC-code5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub className="size-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p dir="ltr" className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Next Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

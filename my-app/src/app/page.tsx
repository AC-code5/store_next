import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <div className="py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              به فروشگاه ما خوش آمدید
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              بهترین محصولات با بهترین قیمت‌ها را از ما بخواهید
            </p>
            <Link
              href="/store"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
            >
              مشاهده محصولات
            </Link>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">ارسال سریع</h3>
              <p className="text-gray-600">ارسال سریع به سراسر کشور</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">قیمت مناسب</h3>
              <p className="text-gray-600">بهترین قیمت‌ها با بهترین کیفیت</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">ضمانت اصالت</h3>
              <p className="text-gray-600">ضمانت اصالت تمامی محصولات</p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              دسته‌بندی محصولات
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["الکترونیک", "پوشاک", "کتاب", "ورزشی"].map((category) => (
                <Link
                  key={category}
                  href={`/store?category=${category}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-2xl mb-2">📦</div>
                  <h3 className="font-medium">{category}</h3>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-blue-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">عضویت در خبرنامه</h2>
            <p className="mb-6">
              برای اطلاع از آخرین محصولات و تخفیف‌ها عضو خبرنامه ما شوید
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 border-2 border-blue-50 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                عضویت
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

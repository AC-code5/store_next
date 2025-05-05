"use client";
import Container from "@/components/Container";
import { useState } from "react";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (username === "admin" && password === "1234") ||
      (username === "mahdi" && password === "1386")
    ) {
      cookies.set("token", "1234567890", {
        expires: 7,
      });
      router.push("/dashboard");
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold text-right mb-8 text-gray-800">
              ورود به سیستم
            </h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-right mb-2 text-gray-700 font-medium">
                  نام کاربری
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-right"
                  type="text"
                  placeholder="نام کاربری خود را وارد کنید"
                  required
                />
              </div>
              <div>
                <label className="block text-right mb-2 text-gray-700 font-medium">
                  رمز عبور
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-right"
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-lg shadow-md hover:shadow-lg"
              >
                ورود
              </button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-500" dir="rtl">
              <p>نام کاربری: admin</p>
              <p>رمز عبور: 1234</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;

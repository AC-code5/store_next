import Container from "@/components/Container";
import ProductItem, { IProductList } from "@/components/ProductItem";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

interface IstoreProps {
  searchParams: {
    page?: string;
    per_page?: string;
    title?: string;
  };
}

async function Store({ searchParams }: IstoreProps) {
  const page = searchParams.page ?? "1";
  const per_page = searchParams.per_page ?? "5";
  const title = searchParams.title ?? "";

  const result = await fetch(
    `http://localhost:3001/products?_page=${page}&_per_page=${per_page}&title=${title}`
  );
  const data = (await result.json()) as IProductList;

  return (
    <Container>
      <div className="py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">فروشگاه</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            محصولات با کیفیت و متنوع را با بهترین قیمت از ما خریداری کنید
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {data.data.map((item) => (
            <Link
              href={`/store/${item.id}`}
              key={item.id}
              className="group transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <ProductItem {...item} />
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Pagination pageCount={data.pages} />
          </div>
        </div>

        {/* Empty State */}
        {data.data.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              محصولی یافت نشد
            </h2>
            <p className="text-gray-600">
              متاسفانه محصولی با این مشخصات پیدا نشد
            </p>
          </div>
        )}
      </div>
      <Footer />
    </Container>
  );
}

export default Store;

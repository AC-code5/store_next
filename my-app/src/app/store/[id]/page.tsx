import Container from "@/components/Container";
import { IProductItem } from "@/components/ProductItem";
import AddToCart from "@/components/AddToCart";
import { formatNumber } from "@/utils/number";

interface PageProps {
  params: {
    id: string;
  };
}

async function Product({ params }: PageProps) {
  const result = await fetch(`http://localhost:3001/products/${params.id}`);
  const data = (await result.json()) as IProductItem;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* بخش اطلاعات محصول */}
        <div className="col-span-12 md:col-span-9 mt-8 shadow-md p-3" dir="rtl">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="text-gray-500">{data.description}</p>
          <p className="text-gray-500">
            قیمت: {formatNumber(data.price)} تومان
          </p>
          <AddToCart id={params.id} />
        </div>

        {/* بخش تصویر محصول */}
        <div className="col-span-12 md:col-span-3">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-auto object-cover rounded-md"
            loading="lazy"
          />
        </div>
      </div>
    </Container>
  );
}

export default Product;

// import Container from "@/components/Container";
// import { IProductItem } from "@/components/ProductItem";
// import AddToCart from "@/components/AddToCart";
// import { formatNumber } from "@/utils/number";
// interface IProduct {
//   params: {
//     promise: Promise<{ id: string }>;
//   };
//   searchParams: Promise<{ id: string }>;
// }
// async function Product({ params }: IProduct) {
//   const result = await fetch(`http://localhost:3001/products/${params.id}`);
//   const data = (await result.json()) as IProductItem;
//   return (
//     <Container>
//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-9 mt-8 shadow-md p-3" dir="rtl">
//           <h1 className="text-2xl font-bold">{data.title} </h1>
//           <p className="text-gray-500">{data.description}</p>
//           <p className="text-gray-500">
//             قیمت: {formatNumber(data.price)} تومان
//           </p>
//           <AddToCart id={params.id} />
//         </div>
//         <div className="col-span-3">
//           <img src={data.image}
//             alt={data.title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </Container>
//   );
// }
// export default Product;

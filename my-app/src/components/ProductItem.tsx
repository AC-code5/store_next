export interface IProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface IProductList {
  data: IProductItem[];
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number;
  prev: number | null;
}
function ProductItem({ title, price, image }: IProductItem) {
  return (
    <div>
      <div className="shadow-md">
        <img src={image} />
        <div className="p-2 text-right rtl">
          <h3 className="font-bold">{title}</h3>
          <p>
            قیمت: <span>{price}$</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

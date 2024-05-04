import { Product } from "../../types/product";

const ProductItem = ({ product }: { product: Product }) => {
  const { title, price, image, description, category, rating } = product;
  return (
    <li className="grid grid-cols-3 gap-2 p-0 list-none">
      <p className="border border-black p-2">{category}</p>
      <p className="border border-black p-2">{title}</p>
      <p className="border border-black p-2">{description}</p>
      <img src={image} alt={product.title} />
      <span className="border border-black p-2">${price}</span>
      <span className="border border-black p-2">
        {rating.count} {rating.rate}
      </span>
    </li>
  );
};

export default ProductItem;

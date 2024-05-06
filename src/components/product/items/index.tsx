import { Link } from "react-router-dom";
import { Product } from "../../../types/product";

const ProductItem = ({ product }: { product: Product }) => {
  const { id, title, price, image, description, category, rating } = product;
  return (
    <li className="border border-black p-2.5">
      <Link to={`/products/${id}`}>
        <p className="border border-black p-2">{category}</p>
        <p className="border border-black p-2">{title}</p>
        <p className="border border-black p-2">{description}</p>
        <img
          src={image}
          alt={product.title}
          className="object-contain w-full h-[150px]"
        />
        <span className="border border-black p-2">${price}</span>
        <span className="border border-black p-2">
          {rating.count} {rating.rate}
        </span>
      </Link>
    </li>
  );
};

export default ProductItem;

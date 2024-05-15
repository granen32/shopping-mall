import { Link } from "react-router-dom";
import { Product } from "@/graphql/product";

const ProductItem = ({ product }: { product: Product }) => {
  const { id, title, price, imageUrl, description, createdAt } = product;
  return (
    <li className="border border-black p-2.5">
      <Link to={`/products/${id}`}>
        <p className="border border-black p-2">{createdAt}</p>
        <p className="border border-black p-2">{title}</p>
        <p className="border border-black p-2">{description}</p>
        <img
          src={imageUrl}
          alt={product.title}
          className="object-contain w-full h-[150px]"
        />
        <span className="border border-black p-2">${price}</span>
      </Link>
    </li>
  );
};

export default ProductItem;

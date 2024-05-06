import { Product } from "@/types/product";

const ProductDetail = ({ item }: { item: Product }) => {
  const { title, description, price, category, image, rating } = item;
  const { rate, count } = rating;
  return (
    <div>
      <h2>상품 상세</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>{category}</p>
      <img src={image} alt={title} />
      <p>{rate}</p>
      <p>{count}</p>
    </div>
  );
};

export default ProductDetail;

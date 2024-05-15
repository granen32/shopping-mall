import { Product } from "@/graphql/product";

const ProductDetail = ({ item }: { item: Product }) => {
  const { title, description, imageUrl, price, createdAt } = item;
  return (
    <div>
      <h2>상품 상세</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>{createdAt}</p>
      <img src={imageUrl} alt={title} />
      {/* <p>{rate}</p>
      <p>{count}</p> */}
    </div>
  );
};

export default ProductDetail;

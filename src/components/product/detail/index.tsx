import { ProductResponse } from "@/graphql/product";

const ProductDetail = (product: ProductResponse) => {
  console.log(product, "item");
  const { title, description, imageUrl, price, createdAt } = product.product;
  return (
    <div>
      <h2>상품 상세</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>{createdAt}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default ProductDetail;

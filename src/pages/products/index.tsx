import { useQuery } from "react-query";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types/product";
import ProductItem from "../../components/productItem";

const ProductListPage = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCT, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <ul>
        {data?.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
export default ProductListPage;

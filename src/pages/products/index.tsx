import { useQuery } from "react-query";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types/product";
import ProductItem from "../../components/product/items";

const ProductListPage = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCT, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className="p-0 list-none grid grid-cols-3 gap-2.5">
        {data?.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
export default ProductListPage;

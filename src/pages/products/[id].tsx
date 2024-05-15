import { useQuery } from "react-query";
import { QueryKeys, restfetcher } from "@/queryClient";
import { Product } from "@/types/product";
import { useParams } from "react-router-dom";
import ProductDetail from "@/components/product/detail";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    restfetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );
  if (!data) return null;
  return <ProductDetail item={data} />;
};

export default ProductDetailPage;

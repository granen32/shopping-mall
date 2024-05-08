import { useQuery } from "react-query";
import { QueryKeys, fetcher } from "@/queryClient";
import { Product } from "@/types/product";
import { useParams } from "react-router-dom";
import ProductDetail from "@/components/product/detail";

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data } = useQuery<Product>([QueryKeys.PRODUCT, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );

  if (!data) return null;
  return <ProductDetail item={data} />;
};

export default ProductDetailPage;

import { useQuery } from "react-query";
import { graphqlfetcher, QueryKeys } from "@/queryClient";
import { ProductDeTailResponse } from "@/graphql/product";
import { useParams } from "react-router-dom";
import ProductDetail from "@/components/product/detail";
import { GET_PRODUCT } from "@/graphql/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<ProductDeTailResponse>(
    [QueryKeys.PRODUCTS, id],
    () => graphqlfetcher(GET_PRODUCT, { id }) as Promise<ProductDeTailResponse>
  );
  console.log(data);
  if (!data) return null;
  return <ProductDetail product={data.product} />;
};

export default ProductDetailPage;

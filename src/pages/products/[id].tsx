import { useQuery } from "react-query";
import { graphqlfetcher, QueryKeys } from "@/queryClient";
import { ProductResponse } from "@/graphql/product";
import { useParams } from "react-router-dom";
import ProductDetail from "@/components/product/detail";
import { GET_PRODUCT } from "@/graphql/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<ProductResponse>(
    [QueryKeys.PRODUCTS, id],
    () => graphqlfetcher(GET_PRODUCT, { id }) as Promise<ProductResponse>
  );
  if (!data) return null;
  return <ProductDetail product={data.product} />;
};

export default ProductDetailPage;

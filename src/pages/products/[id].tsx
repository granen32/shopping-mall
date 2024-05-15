import { useQuery } from "react-query";
import { graphqlfetcher, QueryKeys } from "@/queryClient";
import { Product } from "@/graphql/product";
import { useParams } from "react-router-dom";
import ProductDetail from "@/components/product/detail";
import { GET_PRODUCT } from "@/graphql/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>(
    [QueryKeys.PRODUCTS, id],
    () => graphqlfetcher(GET_PRODUCT, { id }) as Promise<Product>
  );
  if (!data) return null;
  return <ProductDetail item={data} />;
};

export default ProductDetailPage;

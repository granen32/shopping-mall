import { useQuery } from "react-query";
import { QueryKeys, graphqlfetcher } from "@/queryClient";
import ProductItem from "@/components/product/items";
import { GET_PRODUCTS, Products } from "@/graphql/product";

const ProductList = () => {
  const { data } = useQuery<Products>(
    QueryKeys.PRODUCTS,
    () => graphqlfetcher(GET_PRODUCTS) as Promise<Products>
  );

  return (
    <>
      {data && data.products.length > 0 ? (
        <ul className="grid grid-cols-4 gap-x-[20px] gap-y-7.5">
          {data.products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </ul>
      ) : (
        <div className="text-center text-[50px] font-[500] w-full pb-[90px] pt-[60px] border-t box-border border-[#E5E5E5]">
          No results were found.
        </div>
      )}
    </>
  );
};

export default ProductList;

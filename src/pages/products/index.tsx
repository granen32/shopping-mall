import { useQuery } from "react-query";
import { graphqlfetcher, QueryKeys } from "@/queryClient";
import ProductItem from "@/components/product/items";
import { GET_PRODUCTS, Products } from "@/graphql/product";

const ProductListPage = () => {
  const { data } = useQuery<Products>(
    QueryKeys.PRODUCTS,
    () => graphqlfetcher(GET_PRODUCTS) as Promise<Products>
  );

  return (
    <div className="max-w-[1480px] mx-auto pt-[145px] w-full">
      <div className="hero-txt">
        <h1 className="heading-1">
          <span className="y-w block">
            <span className="y">Opal</span>
          </span>
          <span className="y-w block">
            <span className="y">Media Kit</span>
          </span>
        </h1>
        <p>
          <span className="y-w block">
            <span className="y">
              Get the basic company facts, stories, investors, photos and
              answers to
            </span>
          </span>
          <span className="y-w block">
            <span className="y">
              the most frequently asked questions. All content downloaded may be
            </span>
          </span>
          <span className="y-w block">
            <span className="y">used for editorial purposes only.</span>
          </span>
        </p>
      </div>
      <ul className="grid grid-cols-3 gap-x-[20px] gap-y-7.5">
        {data?.products?.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
export default ProductListPage;

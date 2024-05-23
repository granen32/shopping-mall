import ProductList from "@/components/product/list";

const ProductListPage = () => {
  return (
    <div className="max-w-[1480px] mx-auto pt-[145px]">
      <div className="hero-txt mb-[50px]">
        <h1 className="heading-1">
          <span className="y-w block">
            <span className="y">Eigene</span>
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
      <ProductList />
    </div>
  );
};
export default ProductListPage;

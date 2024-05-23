import Breadcrumb from "@/components/common/breadcrumb";
import { ProductResponse } from "@/graphql/product";

const ProductDetail = (product: ProductResponse) => {
  console.log(product, "item");
  const { title, description, imageUrl, price, createdAt, id } =
    product.product;
  return (
    <div className="mt-[148px] mx-auto max-w-[1480px] w-full">
      <Breadcrumb />
      <div className="hero-txt mb-[50px] text-right">
        <h1 className="heading-1">
          <span className="y-w block mb-[33px]">
            <span className="y">Press Articles.</span>
          </span>
        </h1>
        <p>
          <span className="y-w block text-[#767676]">
            <span className="y">Product list at Eigene.</span>
          </span>
        </p>
      </div>
      <div aria-label="product_detail" className="flex justify-between">
        <div className="grid gap-2.5 max-w-[968px] box-border w-full">
          <div className="p-4 mx-auto">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
        <div className="max-w-[420px] w-full">
          <div className="pb-[12px]">
            <span className="inline-block text-[16px] leading-[16px] text-[#757575]">
              {id}
            </span>
          </div>
          <h3 className="font-bold leading-[1.2] text-[34px]">{description}</h3>
          <div className="mt-[30px] text-[24px] leading-[36px] flex">
            <span className="text-[#000] font-bold mr-[6px]">
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
            </span>
          </div>
          <div className="pb-5 border-b-[1px] mb-[20px]">
            <p className="text-[#868686] text-[16px]">
              (최소주문수량 1개 이상
              <span className="">/ 최대주문수량 10개 이하</span>)
            </p>
          </div>
          <p className="text-[16px] mb-[20px]">
            {createdAt && <span>{createdAt}</span>}
          </p>
          <div className="text-[0] leading-0" aria-label="buy button">
            <button className="bg-black px-[15px] py-[5px] inline-flex text-[16px] text-white">
              BUY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import { Link } from "react-router-dom";
import { Product } from "@/graphql/product";

const ProductItem = ({ product }: { product: Product }) => {
  const { id, title, imageUrl, description } = product;
  return (
    <li className="block rounded-[15px] mb-[25px]">
      <Link to={`/products/${id}`} className="mb-1 block">
        <div className="h-[460px] rounded-[12px] relative border-[1px] border-[#ececec]">
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="pl-[24px] pr-[24px] pt-[25px]">
              <div className="flex justify-between">
                <div className="copy-heading-5 !font-300 text-black mb-[10px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {title}
                </div>
              </div>
              <div className="copy-heading-6 !font-400 tracking-common text-[#767676] text-ellipsis overflow-hidden line-clamp-2 h-[48px]">
                {description}
              </div>
              <div className="max-w-[200px] h-[200px] object-fit mt-[10px] mx-auto">
                <img src={imageUrl} alt={title} />
              </div>
            </div>
            <div>
              <div className="pl-[24px] pr-2 pb-10">
                <div className="copy-body-4 text-[#767676] mb-[19px] !font-400 tracking-common">
                  Press Release and Photo gallery.
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full md:w-[188px] h-[40px] appearance-none flex items-center justify-center text-[14px] rounded-[4px] font-medium bg-white border-[1px] border-[#ececec] copy-body-4">
                    Move
                  </div>
                  <div className="text-[18px] font-300 text-[#666666] mt-1 leading-none -mb-1">
                    2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;

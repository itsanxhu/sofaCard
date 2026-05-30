import { Link } from "lucide-react";

const Card = ({ id, title, category, sku, productName, brand, img }) => {
  return (
    <div className="w-96 h-22 p-1.5 bg-olive-100 rounded-xl">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="w-20 h-19 overflow-hidden rounded-lg">
            <img
              className={`w-full h-full object-cover object-center rounded-lg ${
                id === 2 ? "scale-150" : ""
              }`}
              src={img}
              alt="Sofa img"
            />
          </div>

          <div className="flex flex-col justify-between py-1">
            <div>
              <p className="font-medium text-[13px]">{title}</p>
              <p className="text-[9px] text-neutral-400">{category}</p>
            </div>
            <p className="font-medium text-[13px]">{sku}</p>
          </div>
        </div>

        <div className="flex mr-14 gap-2 py-1">
          <Link size={12} className="text-neutral-400 mt-1" />
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-medium text-[13px]">{productName}</p>
              <p className="text-[9px] text-neutral-400">PRODUCT NAME</p>
            </div>
            <div>
              <p className="font-medium text-[13px]">{brand}</p>
              <p className="text-[9px] text-neutral-400">BRAND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

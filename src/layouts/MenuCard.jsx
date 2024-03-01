import { FaShoppingCart } from "react-icons/fa";

export const MenuCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <div>
        <img className="rounded-xl" src={props.img} alt="img" />
      </div>
      <div className="p-2 mt-5">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold text-xl">{props.title}</h3>
          <h3 className="font-semibold text-xl">{props.value}</h3>
        </div>

        <div className="mt-2">
        <h3 className="font-semibold text-md">{props.desc}</h3>
        </div>

        <div className="flex flex-row justify-between mt-3">
          <div className="flex gap-2">
            <button className="px-3 text-sm border-2 border-[#aa6504] bg-[#e9d98a] hover:text-[#aa6504] transition-all rounded-lg">
              Hot
            </button>
            <button className="px-3 text-sm border-2 border-[#aa6504] bg-[#e9d98a] hover:text-[#aa6504] transition-all rounded-lg">
              Cold
            </button>
          </div>
          <span className="flex items-center bg-[#e9d98a] px-3 py-2 rounded-full cursor-pointer">
            <FaShoppingCart size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

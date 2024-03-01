import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Button } from "../layouts/Button";

export const ProductCard = (props) => {
  return (
    <div className="w-full bg-white p-3 rounded-lg lg:w-1/4">
      <img className="rounded-lg" src={props.img} alt="img" />
      <div className="flex flex-col items-center gap-3 mt-5">
        <h2 className="font-semibold text-xl">{props.title}</h2>
        <div className="flex cursor-pointer">
          <BsStarFill className="text-[#AB6B2E]" />
          <BsStarFill className="text-[#AB6B2E]" />
          <BsStarFill className="text-[#AB6B2E]" />
          <BsStarFill className="text-[#AB6B2E]" />
          <BsStarHalf className="text-[#AB6B2E]" />
        </div>
        <h3>{props.price}</h3>
        <Button title="ADD TO CART" />
      </div>
    </div>
  );
};

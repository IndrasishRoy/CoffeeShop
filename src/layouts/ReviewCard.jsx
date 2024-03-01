import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { LoremIpsum } from "lorem-ipsum";

export const ReviewCard = (props) => {
  const lorem = new LoremIpsum();

  return (
    <div className="flex flex-col w-full bg-white p-3 rounded-lg gap-5 lg:w-2/6">
      <div className="flex flex-row items-center justify-center lg:justify-start">
        <div>
          <img className="rounded-full" src={props.img} alt="img" />
        </div>
        <div className="mx-3">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <div className="flex cursor-pointer">
            <BsStarFill className="text-[#AB6B2E]" />
            <BsStarFill className="text-[#AB6B2E]" />
            <BsStarFill className="text-[#AB6B2E]" />
            <BsStarFill className="text-[#AB6B2E]" />
            <BsStarHalf className="text-[#AB6B2E]" />
          </div>
        </div>
        <span className="ml-16">
          <FaQuoteRight className="text-[#efe8c5]" size={42} />
        </span>
      </div>
      <p>{lorem.generateWords(25)}</p>
    </div>
  );
};

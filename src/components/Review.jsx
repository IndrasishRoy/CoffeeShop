import { ReviewCard } from "../layouts/ReviewCard";
import img1 from "../assets/img/Amber-Turd.jpeg";
import img2 from "../assets/img/Carl-Jones.jpeg";
import img3 from "../assets/img/Anne-Hardy.jpeg";

export const Review = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-[#efe8c5] px-5 lg:px-32">
      <h1 className="font-semibold text-center text-4xl mt-24 lg:mt-14">
        Customer's Review
      </h1>
      <div className="flex flex-col py-4 my-8 justify-center gap-5 lg:flex-row">
        <ReviewCard img={img1} title="Amber Turd" />
        <ReviewCard img={img2} title="Carl Jones" />
        <ReviewCard img={img3} title="Anne Hardy" />
      </div>
    </div>
  );
};

import { Button } from "../layouts/Button";
import img from "../assets/img/making-coffee.jpg";
import { LoremIpsum } from "lorem-ipsum";

export const About = () => {
  const lorem = new LoremIpsum();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-[#efe8c5]">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        About Us
      </h1>

      <div className="flex flex-col items-center gap-2 lg:flex-row">
        <div className="w-full lg:w-2/4">
          <img className="rounded-lg" src={img} alt="img" />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-3">
          <h2 className="font-semibold text-3xl">
            What Makes Our Coffee So Special?
          </h2>
          <p>{lorem.generateParagraphs(2)}</p>
          <p>{lorem.generateParagraphs(1)}</p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

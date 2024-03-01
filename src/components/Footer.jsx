import { LoremIpsum } from "lorem-ipsum";

export const Footer = () => {
  const lorem = new LoremIpsum();
  return (
    <div className="bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] rounded-t-3xl text-black mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 px-5 md:px-32">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold pb-4 text-xl">CafeSeeker</h1>
          <p className="text-sm">
            Welcome to the heaven only for coffee seekers!{" "}
            <span>{lorem.generateWords(20)}</span>
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              Home
            </a>
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              About Us
            </a>
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              Products
            </a>
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              Review
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              Cappuccino
            </a>
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              Expresso
            </a>
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              Latte
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact US</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              CafeSeeker@gmail.com
            </a>
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              +91 78902 87248
            </a>
            <a
              className="cursor-pointer hover:text-[#efe8c5] transition-all"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-[#efe8c5]"> Indrasish Roy </span>
          | All rights reserved
        </p>
      </div>
    </div>
  );
};

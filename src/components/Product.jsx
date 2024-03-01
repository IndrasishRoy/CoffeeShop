import { ProductCard } from "../layouts/ProductCard";
import img1 from "../assets/img/nespresso.jpg";
import img2 from "../assets/img/aeropresso.jpg";
import img3 from "../assets/img/chemex.jpg";

export const Product = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#efe8c5]">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-024 mb-8">
        Our Products
      </h1>

      <div className="flex flex-col gap-12 justify-center lg:flex-row">
        <ProductCard img={img1} title="Nespresso" price="$7.99" />
        <ProductCard img={img2} title="AeroPress" price="$12.99" />
        <ProductCard img={img3} title="Chemex" price="$14.99" />
      </div>
    </div>
  );
};

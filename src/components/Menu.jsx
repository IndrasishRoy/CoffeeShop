import { MenuCard } from '../layouts/MenuCard';
import img1 from '../assets/img/cappuccino.jpg';
import img2 from '../assets/img/expresso.jpg';
import img3 from '../assets/img/americano.jpeg';
import img4 from '../assets/img/doppio.jpeg';
import img5 from '../assets/img/macchiato.jpg';
import img6 from '../assets/img/latte.jpg';

export const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#efe8c5]'>
      <h1 className='font-semibold text-center text-4xl mt-24 mb-8 '>Our Menu</h1>

      <div className='flex flex-wrap pb-8 gap-8 justify-center'>
        <MenuCard img={img1} title="Cappuccino" value="$6.79" desc="The main attraction of our cafe and everyone's favourite. Spl. Offer - Buy 2 Get 1 biscuit worth of $0.50 just for free. Always available!" />
        <MenuCard img={img2} title="Expresso" value="$4.00" desc="Special type of coffee made from espresso beans, served in a demitasse cup. Spl. Offer - Buy 2 and Get 50% OFF, avail this offer right now. Always available!" />
        <MenuCard img={img3} title="Americano" value="$8.00" />
        <MenuCard img={img4} title="Doppio" value="$12.89" />
        <MenuCard img={img5} title="Macchiato" value="$15.99" />
        <MenuCard img={img6} title="Latte" value="$10.00" />
      </div>
    </div>
  );
};
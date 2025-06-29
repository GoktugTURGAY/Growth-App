import { FaCheck, FaCartPlus } from 'react-icons/fa';
import Cta from './Cta';

const Card = ({
  product: { productName, type, description, price, features },
}) => {
  return (
    <article className="text-dark flex flex-col justify-between rounded-lg bg-white px-8 py-12 md:last:hidden xl:last:flex">
      <header>
        <h4 className="mb-4 text-3xl font-bold">{productName}</h4>
        <span className="mb-2 block text-base text-gray-600">{type}</span>
        <span className="mb-6 line-clamp-2 text-lg leading-[1.7]">
          {description}
        </span>
        <span className="mb-6 block text-2xl font-extrabold tracking-wide">
          {price} $
        </span>
      </header>
      <ul className="mb-8 flex flex-col gap-4">
        {features.map((feature, index) => (
          <li className="flex items-center gap-2 text-lg" key={index}>
            <FaCheck />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Cta text="Add to Cart" icon={<FaCartPlus />} />
    </article>
  );
};

export default Card;

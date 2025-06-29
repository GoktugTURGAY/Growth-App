import Card from './Card';
import { FaArrowRight } from 'react-icons/fa';
import products from '../assets/products';

const Products = () => {
  const { digital, physical } = products;
  const displayedDigital = digital.slice(0, 3);
  const displayedPhysical = physical.slice(0, 3);

  return (
    <section className="bg-dark text-dark-50 py-20">
      <div className="max-w-extra-big mx-auto px-8">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-3 text-5xl font-bold">Products</h2>
          <p className="text-xl leading-relaxed">
            Our growth-driven products are crafted to empower modern startup
            teams and founders with practical, high-impact solutions.
          </p>
        </header>

        <section className="mb-20">
          <h3 className="mb-8 text-3xl font-bold">Digital Products</h3>
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {displayedDigital.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <a className="group text-xl" href="#">
              <span className="mr-1.5 pb-0.5 underline decoration-transparent underline-offset-6 transition-all duration-250 ease-in-out group-hover:decoration-current hover:underline-offset-8">
                View More
              </span>
              <FaArrowRight className="inline-block transition-transform duration-250 ease-in-out group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        <section>
          <h3 className="mb-8 text-3xl font-bold">Physical Products</h3>
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {displayedPhysical.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <a className="group text-xl" href="#">
              <span className="mr-1.5 pb-0.5 underline decoration-transparent underline-offset-6 transition-all duration-250 ease-in-out group-hover:decoration-current hover:underline-offset-8">
                View More
              </span>
              <FaArrowRight className="inline-block transition-transform duration-250 ease-in-out group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Products;

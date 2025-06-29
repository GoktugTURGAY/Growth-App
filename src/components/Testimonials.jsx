import testimonials from '../assets/testimonials.json';
import { Splide, SplideSlide } from '../../node_modules/@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Testimonials = () => {
  return (
    <Splide
      className="max-w-small bg-dark text-dark-50 mx-auto my-32 md:rounded-xl"
      aria-label="Testimonials carousel"
      data-splide='{"height":"450px", "rewind":true, "speed":1200, "autoplay":true, "interval":5000,  "rewindByDrag":true, "arrows":false}'
    >
      {testimonials.map(({ author, job, testimonial, img }, index) => (
        <SplideSlide
          className="flex items-center justify-center gap-10 px-5 py-6 sm:px-15 md:px-34"
          key={index}
        >
          <img className="hidden h-45 rounded-lg md:block" src={img} alt="" />
          <figure>
            <blockquote className="mb-4">
              <p className="relative indent-8 text-xl">
                <span className="absolute -top-1 -left-9 text-4xl">
                  &#8220;
                </span>
                {testimonial}
                <span className="absolute text-4xl">&#8221;</span>
              </p>
            </blockquote>
            <figcaption className="space-y-2">
              <span className="block text-lg">&mdash; {author}</span>
              <span className="block text-lg text-gray-400">{job}</span>
            </figcaption>
          </figure>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Testimonials;

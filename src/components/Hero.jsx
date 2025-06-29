import Cta from './Cta';

const Hero = ({
  mainHeading = 'Empowering Startups with Scalable Growth Solutions',
  subHeading = ' Collaborate, organize, and manage progress effortlessly with our powerful startup growth solution.',
}) => {
  return (
    <header className="mt-30 overflow-x-hidden md:mt-45">
      <div className="lg:max-w-big mx-auto h-(--hero-height) max-w-2xl bg-(image:--hero-bg-mobile) bg-[bottom_center] bg-no-repeat px-4 text-center [--hero-height:850px] sm:px-8 sm:[--hero-height:750px] md:[--hero-height:700px] lg:bg-(image:--hero-bg) lg:bg-contain lg:bg-[center_bottom] lg:text-left">
        <h1 className="animate-slide-down mb-4 text-3xl leading-[1.2] font-bold md:text-4xl lg:w-[70%] lg:text-6xl lg:leading-16">
          {mainHeading}
        </h1>
        <p className="animate-slide-down mb-6 text-2xl leading-relaxed font-light [animation-delay:100ms] lg:w-[45%]">
          {subHeading}
        </p>
        <div className="animate-slide-down mx-auto flex max-w-[300px] flex-col justify-center gap-5 [animation-delay:150ms] md:mx-0 md:max-w-full md:flex-row lg:justify-start">
          <Cta />
          <a
            className="inline-block rounded-lg border-transparent bg-gray-100 px-10 py-3 text-center text-lg font-medium shadow-md transition-colors duration-250 hover:bg-gray-200"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;

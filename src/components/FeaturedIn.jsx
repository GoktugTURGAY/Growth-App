const FeaturedIn = () => {
  return (
    <section className="my-24 grayscale-50">
      <div className="max-w-small mx-auto px-8 opacity-40 brightness-0">
        <h2 className="mb-4 text-center text-3xl font-bold">Featured In</h2>

        <div className="grid grid-cols-2 justify-center text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-10 lg:[&_img]:h-full">
          <figure className="flex justify-center last:hidden sm:nth-4:hidden md:nth-4:block lg:last:block">
            <img
              className="size-25 object-contain"
              src="../src/assets/images/featured-in/Uber-Logo.png"
              alt=""
            />
          </figure>
          <figure className="flex justify-center last:hidden sm:nth-4:hidden md:nth-4:block lg:last:block">
            <img
              className="size-25 object-contain"
              src="../src/assets/images/featured-in/The_Economist-Logo.png"
              alt=""
            />
          </figure>
          <figure className="flex justify-center last:hidden sm:nth-4:hidden md:nth-4:block lg:last:block">
            <img
              className="size-25 object-contain"
              src="../src/assets/images/featured-in/New-York-Times-logo.png"
              alt=""
            />
          </figure>
          <figure className="flex justify-center last:hidden sm:nth-4:hidden md:nth-4:block lg:last:block">
            <img
              className="size-25 object-contain"
              src="../src/assets/images/featured-in/Google-logo.png"
              alt=""
            />
          </figure>
          <figure className="flex justify-center last:hidden sm:nth-4:hidden md:nth-4:block lg:last:block">
            <img
              className="size-25 object-contain lg:size-auto"
              src="../src/assets/images/featured-in/Netflix-logo.png"
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;

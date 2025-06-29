import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  function expandSection(index) {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <section>
      <div className="max-w-small mx-auto px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <ul className="flex flex-col">
          {data.map(({ question, answer }, index) => (
            <li key={index}>
              <h3 className="mb-4 text-xl font-semibold">
                <button
                  onClick={() => expandSection(index)}
                  className={`flex w-full cursor-pointer justify-between p-5 text-left transition-colors duration-100 ease-in-out ${index === activeIndex ? 'bg-primary text-primary-50' : 'bg-gray-100'}`}
                  type="button"
                  aria-controls="text"
                  aria-expanded={`${index === 0 ? true : false}`}
                >
                  <span>{question}</span>
                  <FaChevronDown />
                </button>
              </h3>
              <p
                id="text"
                className={`mb-6 border-b border-b-[#ccc] pb-4 text-lg leading-[1.8] transition-all duration-1000 ease-in-out ${index === activeIndex ? 'visible max-h-full translate-y-0 opacity-100' : 'invisible max-h-0 -translate-y-5 opacity-0'}`}
              >
                {answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;

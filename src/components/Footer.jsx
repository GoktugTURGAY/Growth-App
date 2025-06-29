import companyLogoWhite from '../assets/images/growth/company-logo-white.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const underlineAnimation =
    "relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:content-[''] hover:after:origin-left hover:after:scale-x-100 after:bg-gray-50";
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-dark-50 mt-24 py-24">
      <div className="max-w-big mx-auto grid grid-cols-1 gap-8 px-8 leading-[1.8] sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img
            className="mb-4"
            src={companyLogoWhite}
            alt="Growth Company Logo"
          />
          <small className="text-sm">
            <span className="mb-2 block">
              Copyright &copy; <time dateTime="2025">{currentYear} </time>
              Growth.
            </span>
            <span className="mb-6 block">All rights reserved.</span>
          </small>
          <address>
            <ul className="flex gap-2 text-4xl">
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300 ease-in-out"
                  href="#"
                  target="_blank"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300 ease-in-out"
                  href="#"
                  target="_blank"
                  aria-label="Follow us on Twitter"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300 ease-in-out"
                  href="#"
                  target="_blank"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div>
          <ul className="flex flex-col gap-3">
            <li>
              <a className={underlineAnimation} href="#">
                Store
              </a>
            </li>
            <li>
              <a className={underlineAnimation} href="#">
                Products
              </a>
            </li>
            <li>
              <a className={underlineAnimation} href="#">
                Services
              </a>
            </li>
            <li>
              <a className={underlineAnimation} href="#">
                Subscription
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-3">
            <li>
              <a className={underlineAnimation} href="#">
                About Us
              </a>
            </li>
            <li>
              <a className={underlineAnimation} href="#">
                Our Staff
              </a>
            </li>
            <li>
              <a className={underlineAnimation} href="#">
                Values
              </a>
            </li>
            <li>
              <a className={underlineAnimation} href="#">
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-3">
            <li>
              <a className={underlineAnimation} href="#">
                News & Notifications
              </a>
            </li>
            <li>
              <a className={underlineAnimation} href="#">
                Career
              </a>
            </li>
            <li>
              <a className={underlineAnimation} href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className={underlineAnimation} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

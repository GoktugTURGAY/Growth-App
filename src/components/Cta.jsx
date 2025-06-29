import { FaCartPlus } from 'react-icons/fa';

const Cta = ({
  text = 'Get Started',
  textSize = 'text-lg',
  textColor = 'text-primary-50',
  bgColor = 'bg-primary',
  bgColorHover = 'hover:bg-primary-hover',
  href = '#',
  paddingInline = 'px-10',
  paddingBlock = 'py-3',
  icon,
  active,
  eventHandler,
}) => {
  return (
    <a
      onClick={() => active && eventHandler()}
      className={`inline-block rounded-lg border-transparent text-center ${bgColor} ${paddingInline} ${paddingBlock} ${textSize} font-medium ${textColor} inline-flex items-center justify-center gap-3 shadow-lg transition-colors duration-250 ${bgColorHover} text-center`}
      href={href}
    >
      <span className={icon ? 'pb-0.5' : 'hidden'}>{icon}</span>
      <span>{text}</span>
    </a>
  );
};

export default Cta;

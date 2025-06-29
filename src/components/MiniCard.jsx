const MiniCard = ({ title, text, icon }) => {
  return (
    <li className="flex flex-col items-start">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-lg leading-relaxed">{text}</p>
      <span className="after:bg-primary bg-primary text-primary-50 -order-1 mb-5 flex size-14 items-center justify-center rounded-lg text-xl">
        {icon}
      </span>
    </li>
  );
};

export default MiniCard;

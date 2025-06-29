import {
  FaCalendarCheck,
  FaDatabase,
  FaSmile,
  FaHeadset,
} from 'react-icons/fa';
import MiniCard from './MiniCard';

//  <FaCalendarCheck />  <FaDatabase />      <FaSmile />   <FaHeadset />
const Benefits = () => {
  const benefits = [
    {
      title: 'Streamlined Productivity',
      text: "Boost your team's efficiency with tools designed to simplify task management, appointment scheduling, and collaboration — all in one place.",
      icon: <FaCalendarCheck />,
    },
    {
      title: 'Data-Driven Decisions',
      text: 'Make smarter business moves with powerful analytics, real-time reporting, and visual dashboards tailored to your growth goals.',
      icon: <FaDatabase />,
    },
    {
      title: 'Scalable for Any Stage',
      text: "Whether you're launching or scaling, our flexible platform adapts to your needs with no user limits, customizable features, and enterprise-grade capabilities.",
      icon: <FaSmile />,
    },
    {
      title: 'Exceptional Support & Onboarding',
      text: ' From day one, you’ll get access to onboarding resources, expert guidance, and priority customer support to ensure a smooth and successful experience.',
      icon: <FaHeadset />,
    },
  ];

  const benefitsQuadruple = benefits.slice(0, 4);

  return (
    <section className="my-20">
      <div className="max-w-big mx-auto px-8">
        <header className="mb-12">
          <h2 className="mb-3 text-4xl font-bold">Why Choose Growth App?</h2>
          <p className="text-xl leading-relaxed">
            Discover the advantages of partnering with us:
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-24">
          {benefitsQuadruple.map(({ title, text, icon }, index) => (
            <MiniCard key={index} title={title} text={text} icon={icon} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;

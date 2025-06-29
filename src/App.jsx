import accordionData from './assets/frequentlyAskedQuestions.json';
import MainNav from './components/MainNav';
import Main from './components/Main';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <MainNav />
      <Main>
        <Hero />
        <FeaturedIn />
        <Products />
        <Benefits />
        <Testimonials />
        <FAQ data={accordionData} />
        <Footer />
      </Main>
    </>
  );
};

export default App;

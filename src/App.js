import './App.css';
import Home from './components/Home';
import Upcoming from './components/Upcoming';
import News from './components/News';
import HeadToHead from './components/HeadToHead';
import TopFighters from './components/TopFighters';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
   <section className='bg-[#0F0F0F]'>
      <Home />
      <Upcoming />
      <News />
      <HeadToHead />
      <TopFighters />
      <History />
      <Contact />
      <Footer />
   </section>
  );
}

export default App;

import './App.css';
import Home from './components/Home';
import Upcoming from './components/Upcoming';
import News from './components/News';
import HeadToHead from './components/HeadToHead';
import TopFighters from './components/TopFighters';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegacyMedia from './components/LegacyMedia';
import TopStories from './components/TopStories';
import Topknockouts from './components/Topknockouts';
import Comunity from './components/Comunity';

function App() {
  return (
   <section className='bg-[#0F0F0F]'>
      <Home />
      <Upcoming />
      <News />
      <HeadToHead />
      <LegacyMedia />
      <TopFighters />
      <TopStories />
      <Topknockouts />
      <Comunity />
      <History />
      <Contact />
      <Footer />
   </section>
  );
}

export default App;

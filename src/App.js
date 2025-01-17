import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import Home from './pages/home/Home';

function App() {
  const [tab, setSelectedTab] = useState('Home');

  return (
    <div className="min-h-screen bg-white text-black">
      <Header tab={tab} setSelectedTab={setSelectedTab} />
      <div className="h-[88lvh] sm:h-[calc(100lvh-75px)] md:h-[calc(100lvh-125px)] overflow-y-scroll sm:scrollbar-thin">
        <div className="">
          {tab === 'Home' ? <Home /> :
            tab === 'About' ? <div /> :
              tab === 'Services' ? <div /> :
                tab === 'Contact' ? <div /> :
                  'None'}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

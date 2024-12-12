import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState } from 'react';

function App() {
  const [tab, setSelectedTab] = useState('Home');

  return (
    <div className="flex flex-col min-h-[100lvh] min-w-[100lvw] sm:w-full bg-zinc-950 text-gray-300">
      <Header tab={tab} setSelectedTab={setSelectedTab} />
      <div className='w-full h-[88lvh] overflow-scroll sm:overflow-x-hidden sm:scrollbar-thin'>
        {/* Body */}
        <div className='flex flex-col flex-1 flex-grow min-h-[100%]'>
          {tab}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

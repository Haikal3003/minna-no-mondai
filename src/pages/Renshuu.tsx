import { useState } from 'react';
import { Highlighter } from '../components/ui/highlighter';
import KotobaForm from '../components/renshuu/kotoba/KotobaForm';
import KanjiForm from '../components/renshuu/kanji/KanjiForm';
import type { RenshuuTab } from '../types/renshuu.type';
import { useNavigate } from 'react-router-dom';

export default function Renshuu() {
  const tabs: RenshuuTab[] = ['kotoba', 'kanji'];
  const [activeTab, setActiveTab] = useState<RenshuuTab>('kotoba');
  const navigate = useNavigate();

  const handleStart = (settings: any, type: 'kotoba' | 'kanji') => {
    navigate(`/latihan/start/${type}`, { state: settings });
  };

  return (
    <div className="py-20">
      <h1 className="uppercase text-center font-bold text-2xl mb-10">
        <Highlighter color="#000" action="underline" strokeWidth={1}>
          Latihan
        </Highlighter>
      </h1>

      <div className="flex justify-center mb-6 space-x-4">
        {tabs.map((tab) => (
          <button key={tab} className={`capitalize px-4 py-2 rounded font-semibold cursor-pointer ${activeTab === tab ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        {activeTab === 'kotoba' && <KotobaForm onStart={(settings) => handleStart(settings, 'kotoba')} />}
        {activeTab === 'kanji' && <KanjiForm />}
      </div>
    </div>
  );
}

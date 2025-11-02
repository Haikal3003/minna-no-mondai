import { useState, useEffect } from 'react';
import { Highlighter } from '../components/ui/highlighter';
import { getKanjis } from '../hooks/getKanjis';
import KanjiList from '../components/kanji/KanjiList';

export default function Kanji() {
  const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const [levelFilter, setLevelFilter] = useState<string>('N5');
  const [kanjis, setKanjis] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getKanjis(levelFilter.replace('N', ''));
      setKanjis(data);
      setLoading(false);
    }

    fetchData();
  }, [levelFilter]);

  return (
    <div className="py-20">
      <h1 className="uppercase text-center font-bold text-2xl mb-10">
        <Highlighter color="#000" action="underline" strokeWidth={1}>
          Kanji
        </Highlighter>
      </h1>

      <div className="flex justify-center mt-5 space-x-4">
        {levels.map((level) => (
          <button key={level} onClick={() => setLevelFilter(level)} className={`px-4 py-2 rounded-md font-semibold transition-colors ${levelFilter === level ? 'bg-black text-white shadow-lg' : 'bg-gray-200 text-black hover:bg-gray-300'}`}>
            {level}
          </button>
        ))}
      </div>

      <KanjiList kanjis={kanjis} isLoading={loading} />
    </div>
  );
}

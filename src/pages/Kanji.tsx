import { useState, useEffect } from 'react';
import { Highlighter } from '../components/ui/highlighter';
import FilterDropdown, { type LevelType } from '../components/kanji/FilterDropdown';
import { getKanjis } from '../hooks/getKanjis';
import KanjiList from '../components/kanji/KanjiList';

export default function Kanji() {
  const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const [levelFilter, setLevelFilter] = useState<LevelType>('N5');
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
      <h1 className="uppercase text-center font-bold text-2xl">
        <Highlighter color="#000" action="underline" strokeWidth={1}>
          Kanji
        </Highlighter>
      </h1>

      <div className="flex justify-center mt-5">
        <FilterDropdown levelFilter={levelFilter} setLevelFilter={setLevelFilter} levels={levels} />
      </div>

      <KanjiList kanjis={kanjis} isLoading={loading} />
    </div>
  );
}

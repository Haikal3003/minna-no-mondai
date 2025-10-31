import { useState } from 'react';
import { Highlighter } from '../components/ui/highlighter';
import { datas } from '../data';
import type { Kotoba, KotobaSource } from '../types/kotoba.type';
import VocabTable from '../components/kotoba/VocabTable';
import FilterDropdown from '../components/kotoba/FilterDropdown';

export default function Kotoba() {
  const sources: KotobaSource[] = ['irodori1', 'irodori2'];

  const [activeSource, setActiveSource] = useState<KotobaSource>('irodori1');
  const [chapterFilter, setChapterFilter] = useState<string>('1');

  const chapters = Array.from(
    new Set(
      Object.values(datas)
        .flat()
        .map((d) => d.chapter)
        .filter(Boolean)
    )
  ) as string[];

  const filteredData: Kotoba[] = (datas[activeSource] as unknown as Kotoba[]).filter((d) => d.chapter === chapterFilter);

  return (
    <div className="py-20 px-4 max-w-5xl mx-auto">
      {/* Judul */}
      <h1 className="uppercase text-center font-bold text-2xl mb-10">
        <Highlighter color="#000" action="underline" strokeWidth={1}>
          Kosakata
        </Highlighter>
      </h1>

      {/* Tab Source */}
      <div className="flex justify-center mb-6 space-x-4">
        {sources.map((src) => (
          <button
            key={src}
            className={`px-4 py-2 rounded font-semibold cursor-pointer ${activeSource === src ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => {
              setActiveSource(src);
              setChapterFilter('1');
            }}
          >
            {src}
          </button>
        ))}
      </div>

      {/* Filter Bab */}
      <FilterDropdown chapterFilter={chapterFilter} chapters={chapters} setChapterFilter={setChapterFilter} />

      {/* Tabel Kosakata */}
      <VocabTable filteredData={filteredData} />
    </div>
  );
}

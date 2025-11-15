import { useState } from 'react';
import type { KotobaSource } from '../../../types/kotoba.type';

interface KotobaFormProps {
  onStart?: (settings: { bab: number; source: KotobaSource; questionCount: number }) => void;
}

export default function KotobaForm({ onStart }: KotobaFormProps) {
  const [bab, setBab] = useState(1);
  const [source, setSource] = useState<KotobaSource>('irodori1');
  const [questionCount, setQuestionCount] = useState(20);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const settings = { bab, source, questionCount };

    if (onStart) {
      onStart(settings);
    } else {
      alert(`Mulai quiz:\nBab ${bab}\nSource: ${source}\nJumlah soal: ${questionCount}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border-2 border-gray-700 rounded-lg bg-white flex flex-col gap-4 w-full sm:w-1/2">
      {/* Bab */}
      <div>
        <label className="block mb-1 font-semibold">Pilih Bab:</label>
        <select className="w-full border rounded p-2" value={bab} onChange={(e) => setBab(Number(e.target.value))}>
          {Array.from({ length: 18 }, (_, i) => (
            <option key={i} value={i + 1}>
              Bab {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Source */}
      <div>
        <label className="block mb-1 font-semibold">Pilih Materi:</label>
        <select className="w-full border rounded p-2" value={source} onChange={(e) => setSource(e.target.value as KotobaSource)}>
          <option value="irodori1">Irodori 1</option>
          <option value="irodori2">Irodori 2</option>
        </select>
      </div>

      {/* Jumlah Soal */}
      <div>
        <label className="block mb-1 font-semibold">Jumlah Soal:</label>
        <select className="w-full border rounded p-2" value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))}>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={9999}>Semua</option>
        </select>
      </div>

      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors">
        Mulai Quiz
      </button>
    </form>
  );
}

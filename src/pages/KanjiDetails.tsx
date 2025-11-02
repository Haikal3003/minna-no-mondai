import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { KanjiDetailsProps } from '../types/kanji.type';
import { getKanjiDetails } from '../hooks/getKanjiDetails';
import KanjiHeader from '../components/kanji/KanjiHeader';
import KanjiVideo from '../components/kanji/KanjiVideo';
import KanjiExamplesTable from '../components/kanji/KanjiExamplesTable';
import KanjiStrokes from '../components/kanji/KanjiStrokes';

export default function KanjiDetails() {
  const { word } = useParams<{ word: string }>();

  const [kanjiDetails, setKanjiDetails] = useState<KanjiDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!word) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getKanjiDetails(word);
        setKanjiDetails(result);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [word]);

  if (loading) return <div className="p-4 text-gray-500">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!kanjiDetails) return <div className="p-4">Tidak ada data ditemukan.</div>;

  return (
    <div className="py-20 text-black min-h-screen">
      <KanjiHeader word={word!} kunyomi={kanjiDetails.kanji.kunyomi.hiragana} onyomi={kanjiDetails.kanji.onyomi.katakana} meaning={kanjiDetails.kanji.meaning.english} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <KanjiVideo videoUrl={kanjiDetails.kanji.video?.mp4} />
        </div>

        <div className="md:col-span-2">
          <KanjiStrokes strokes={kanjiDetails.kanji.strokes.images} />
        </div>
      </div>

      <KanjiExamplesTable examples={kanjiDetails.examples} />
    </div>
  );
}

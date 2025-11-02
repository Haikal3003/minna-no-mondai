import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { KanjiDetailsProps } from '../types/kanji.type';
import { getKanjiDetails } from '../hooks/getKanjiDetails';
import KanjiHeader from '../components/kanji/KanjiHeader';
import KanjiVideo from '../components/kanji/KanjiVideo';
import KanjiExamplesTable from '../components/kanji/KanjiExamplesTable';
import KanjiStrokes from '../components/kanji/KanjiStrokes';
import { translateToIndonesia } from '../utils/translate-meanings';

export default function KanjiDetails() {
  const { word } = useParams<{ word: string }>();

  const [kanjiDetails, setKanjiDetails] = useState<KanjiDetailsProps | null>(null);
  const [translatedMeaning, setTranslatedMeaning] = useState<string>('');
  const [translatedExamples, setTranslatedExamples] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!word) return;

    const fetchAndTranslate = async () => {
      setLoading(true);
      try {
        const details = await getKanjiDetails(word);
        setKanjiDetails(details);

        const mainMeaning = details.kanji.meaning.english || '-';
        const meaningID = await translateToIndonesia(mainMeaning);
        setTranslatedMeaning(meaningID || mainMeaning);

        const examplesEnglish = details.examples.map((e: { meaning: { english: string } }) => e.meaning.english);
        const examplesID = await Promise.all(examplesEnglish.map(translateToIndonesia));
        setTranslatedExamples(examplesID);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchAndTranslate();
  }, [word]);

  if (loading) return <div className="loader fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!kanjiDetails) return <div className="p-4">Tidak ada data ditemukan.</div>;

  return (
    <div className="py-20 text-black min-h-screen">
      <KanjiHeader word={word!} kunyomi={kanjiDetails.kanji.kunyomi.hiragana} onyomi={kanjiDetails.kanji.onyomi.katakana} meaning={kanjiDetails.kanji.meaning.english} translatedMeaning={translatedMeaning} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <KanjiVideo videoUrl={kanjiDetails.kanji.video?.mp4} />
        </div>

        <div className="md:col-span-2">
          <KanjiStrokes strokes={kanjiDetails.kanji.strokes.images} />
        </div>
      </div>

      <KanjiExamplesTable examples={kanjiDetails.examples} translatedExamples={translatedExamples} />
    </div>
  );
}

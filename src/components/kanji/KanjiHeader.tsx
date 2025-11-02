interface KanjiHeaderProps {
  word: string;
  kunyomi: string;
  onyomi: string;
  meaning: string;
  translatedMeaning: string;
}

export default function KanjiHeader({ word, kunyomi, onyomi, meaning, translatedMeaning }: KanjiHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 items-center mb-10">
      <div className="p-8 bg-black text-white font-bold rounded-md shadow-lg">
        <h1 className="text-7xl max-md:text-6xl">{word}</h1>
      </div>

      <div className="space-y-3">
        <div>
          <h2 className="font-semibold">Kunyomi</h2>
          <p className="text-gray-700">{kunyomi || '-'}</p>
        </div>
        <div>
          <h2 className="font-semibold">Onyomi</h2>
          <p className="text-gray-700">{onyomi || '-'}</p>
        </div>
        <div>
          <h2 className="font-semibold">Arti</h2>
          <p className="text-gray-700">{translatedMeaning || meaning || '-'}</p>
        </div>
      </div>
    </div>
  );
}

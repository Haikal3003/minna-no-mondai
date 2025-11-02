interface KanjiExamplesTableProps {
  examples: {
    japanese: string;
    meaning: { english: string };
  }[];

  translatedExamples: string[];
}

export default function KanjiExamplesTable({ examples, translatedExamples }: KanjiExamplesTableProps) {
  return (
    <div className="mb-10">
      <h1 className="font-semibold text-xl mb-4">Contoh Kotoba</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 rounded-lg text-md text-center">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-400">No</th>
              <th className="px-4 py-2 border border-gray-400">Kotoba</th>
              <th className="px-4 py-2 border border-gray-400">Arti</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {examples.map((example, idx) => (
              <tr key={idx}>
                <td className="px-4 py-2 border border-gray-300">{idx + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{example.japanese}</td>
                <td className="px-4 py-2 border border-gray-300 text-gray-700">{translatedExamples[idx] || example.meaning.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

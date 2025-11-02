interface KanjiStrokesProps {
  strokes: string[];
}

export default function KanjiStrokes({ strokes }: KanjiStrokesProps) {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-4">Urutan Tulis</h1>
      <ul className="flex flex-wrap gap-4">
        {strokes.map((image, idx) => (
          <li key={idx} className="relative">
            <span className="absolute top-2 left-2 text-white bg-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{idx + 1}</span>
            <img src={image} alt={`stroke-${idx}`} className="w-[100px] h-[100px] bg-white border-2 border-gray-700 rounded-md p-3 d" />
          </li>
        ))}
      </ul>
    </div>
  );
}

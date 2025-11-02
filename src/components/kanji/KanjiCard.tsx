import { useNavigate } from 'react-router-dom';

interface KanjiCardProps {
  kanji: string;
}

export default function KanjiCard({ kanji }: KanjiCardProps) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/kanji/${kanji}`)} className="border-2 border-gray-700 cursor-pointer rounded-lg font-normal text-center text-2xl p-6 bg-white transition hover:bg-gray-700 hover:text-white">
      {kanji}
    </div>
  );
}

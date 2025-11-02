import { useParams } from 'react-router-dom';

export default function KanjiDetails() {
  const { word } = useParams<{ word: string }>();

  return (
    <div>
      <h1>{word}</h1>
    </div>
  );
}

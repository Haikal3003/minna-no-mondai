import { Highlighter } from '../components/ui/highlighter';

export default function Kanji() {
  return (
    <div className="py-20">
      <h1 className="uppercase text-center font-bold text-2xl">
        <Highlighter color="#000" action="underline" strokeWidth={1}>
          Kanji
        </Highlighter>
      </h1>
    </div>
  );
}

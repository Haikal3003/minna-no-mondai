import { Highlighter } from '../components/ui/highlighter';

export default function Bunpou() {
  return (
    <div className="py-20">
      <h1 className="uppercase text-center font-bold text-2xl">
        <Highlighter color="#000" action="underline" strokeWidth={1}>
          Bunpou
        </Highlighter>
      </h1>
    </div>
  );
}

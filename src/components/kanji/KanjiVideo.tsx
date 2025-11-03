import { Highlighter } from '../ui/highlighter';

interface KanjiVideoProps {
  videoUrl?: string;
}

export default function KanjiVideo({ videoUrl }: KanjiVideoProps) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="font-semibold text-xl max-md:text-lg mb-4 text-left w-full">
        <Highlighter action="highlight" color="#FFC9C9" strokeWidth={2}>
          Video Penulisan
        </Highlighter>
      </h1>

      {videoUrl ? (
        <video controls className="rounded-xl border-2 border-gray-700 w-full md:w-full max-md:max-w-sm max-md:w-4/5" src={videoUrl}></video>
      ) : (
        <div className="bg-gray-300 text-gray-700 p-6 rounded-lg text-center w-full md:w-full max-md:max-w-sm max-md:w-4/5">Video penulisan belum tersedia.</div>
      )}
    </div>
  );
}

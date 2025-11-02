interface KanjiVideoProps {
  videoUrl?: string;
}

export default function KanjiVideo({ videoUrl }: KanjiVideoProps) {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-4 text-left">Video Penulisan</h1>
      {videoUrl ? <video controls className="rounded-xl w-full border-2 border-gray-700" src={videoUrl}></video> : <div className="bg-gray-300 text-gray-700 p-6 rounded-lg text-center">Video penulisan belum tersedia.</div>}
    </div>
  );
}

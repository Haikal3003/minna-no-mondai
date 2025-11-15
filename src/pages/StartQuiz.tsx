import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { irodori1 } from '../data/kotoba/irodori1';
import { irodori2 } from '../data/kotoba/irodori2';
import type { KotobaSource } from '../types/kotoba.type';

type Question = {
  question: string;
  correct: string;
  options: string[];
  selected?: string;
  answered?: boolean;
};

export default function StartQuiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { type } = useParams<'type'>();
  const settings = location.state as { bab: number; source: KotobaSource; questionCount: number };

  const [quizData, setQuizData] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const shuffleArray = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (!settings) {
      navigate('/latihan');
      return;
    }

    const data = type === 'kotoba' ? (settings.source === 'irodori1' ? irodori1 : irodori2) : [];

    const filtered = data.filter((i) => Number(i.chapter) === settings.bab);
    const shuffled = shuffleArray(filtered).slice(0, settings.questionCount);

    const questions: Question[] = shuffled.map((item) => ({
      question: item.hiragana || item.katakana,
      correct: item.meaning,
      options: shuffleArray([
        item.meaning,
        ...shuffleArray(filtered.filter((x) => x.id !== item.id))
          .slice(0, 3)
          .map((x) => x.meaning),
      ]),
    }));

    setQuizData(questions);
  }, [settings, navigate]);

  const handleAnswer = (opt: string) => {
    if (quizData[currentIndex].answered) return;

    setQuizData((prev) => prev.map((q, idx) => (idx === currentIndex ? { ...q, answered: true, selected: opt } : q)));

    if (opt === quizData[currentIndex].correct) setScore((s) => s + 1);

    if (currentIndex + 1 < quizData.length) setCurrentIndex((i) => i + 1);
    else setShowResult(true);
  };

  if (!settings) return null;

  if (showResult) {
    return (
      <div className="py-20 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Hasil Quiz</h2>
        <p className="text-lg mb-4 text-center">
          Skor kamu: {score} / {quizData.length} ({((score / quizData.length) * 100).toFixed(0)}%)
        </p>

        <div className="flex flex-col gap-3">
          {quizData.map((q, idx) => {
            const isCorrect = q.selected === q.correct;
            return (
              <div key={idx} className="p-3 border rounded">
                <p className="font-semibold mb-1">
                  {idx + 1}. {q.question}
                </p>
                <p className={`mb-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  Jawabanmu: {q.selected || 'Belum dijawab'} ({isCorrect ? 'Benar' : 'Salah'})
                </p>
                {!isCorrect && <p className="text-gray-700">Jawaban yang benar: {q.correct}</p>}
              </div>
            );
          })}
        </div>

        <button onClick={() => navigate('/latihan')} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Kembali
        </button>
      </div>
    );
  }

  const q = quizData[currentIndex];
  if (!q) return <p>Loading...</p>;
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col border-2 border-black p-8 bg-white rounded-md w-[450px]">
        <div className="flex justify-end mb-4">
          <h2 className="text-sm w-[60px] h-[40px] flex justify-center items-center rounded-md border-2 border-black bg-purple-400 text-white">
            {currentIndex + 1} / {quizData.length}
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold mb-6 text-center">{q.question}</p>
          <div className="flex flex-col gap-3 w-full">
            {q.options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt)} className="px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 text-left cursor-pointer">
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

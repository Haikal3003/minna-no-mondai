import { Highlighter } from '../components/ui/highlighter';

export default function About() {
  return (
    <div className="flex justify-center items-center h-screen px-32">
      <div>
        <h1 className=" text-4xl font-bold text-red-400 mb-1 text-center">
          <Highlighter color="#000" action="underline" strokeWidth={1}>
            Tentang Minna no Mondai
          </Highlighter>
        </h1>

        <div className=" py-4 space-y-4">
          <p>
            Selamat datang di Minna no Mondai — tempat belajar bahasa Jepang yang seru dan interaktif! Website ini dibuat untuk membantu siapa pun yang ingin meningkatkan kemampuan bahasa Jepang, khususnya dalam memahami gramatika,
            kosakata, dan pola kalimat yang sering muncul dalam ujian seperti JLPT (Japanese Language Proficiency Test).
          </p>

          <p>Di sini, kamu bisa menemukan berbagai latihan soal (mondai) dari level dasar hingga menengah, lengkap dengan penjelasan, jawaban, dan contoh penggunaan dalam percakapan sehari-hari.</p>

          <p>Kami percaya bahwa belajar bahasa Jepang tidak harus membosankan — dengan latihan yang terstruktur dan suasana belajar yang menyenangkan, kamu bisa menguasainya sedikit demi sedikit setiap hari.</p>
        </div>
      </div>
    </div>
  );
}

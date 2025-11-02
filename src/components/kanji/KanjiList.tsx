import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import KanjiCard from './KanjiCard';

interface KanjiListProps {
  kanjis: string[];
  isLoading: boolean;
  itemsPerPage?: number;
}

export default function KanjiList({ kanjis, isLoading, itemsPerPage = 80 }: KanjiListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(kanjis.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = kanjis.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [kanjis]);

  if (isLoading) {
    return <p className="text-center py-10">Loading kanji...</p>;
  }

  if (!kanjis.length) {
    return <p className="text-center py-10">Tidak ada kanji ditemukan.</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 gap-4 p-5">{paginatedData.length === 0 ? <h1>Kanji tidak ditemukan</h1> : paginatedData.map((kanji, i) => <KanjiCard key={i} kanji={kanji} />)}</div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}

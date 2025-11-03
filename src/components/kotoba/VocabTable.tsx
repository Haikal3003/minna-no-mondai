import { useState } from 'react';
import type { Kotoba } from '../../types/kotoba.type';
import Pagination from '../Pagination/index';

interface VocabTableProps {
  filteredData: Kotoba[];
  itemsPerPage?: number;
}

export default function VocabTable({ filteredData, itemsPerPage = 20 }: VocabTableProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-red-300 z-50">
          <thead className="bg-indigo-500 text-white text-sm">
            <tr>
              <th className="border border-black p-2">No</th>
              <th className="border border-black p-2">Kanji</th>
              <th className="border border-black p-2">Bacaan</th>
              <th className="border border-black p-2">Arti</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center p-4 text-gray-500">
                  Kosakata tidak ditemukan
                </td>
              </tr>
            ) : (
              paginatedData.map((item: Kotoba, index: number) => (
                <tr key={item.id} className="text-center text-sm max-sm:text-xs">
                  <td className="border border-black p-2">{startIndex + index + 1}</td>
                  <td className="border border-black p-2">{item.kanji || '-'}</td>
                  <td className="border border-black p-2">{item.hiragana || item.katakana || '-'}</td>
                  <td className="border border-black p-2">{item.meaning}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination angka */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}

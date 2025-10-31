interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {pageNumbers.map((num) => (
        <button key={num} onClick={() => onPageChange(num)} className={`px-3 py-1 rounded border ${num === currentPage ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-black border-gray-300'}`}>
          {num}
        </button>
      ))}
    </div>
  );
}

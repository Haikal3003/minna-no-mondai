interface FilterDropdownProps {
  chapterFilter: string;
  setChapterFilter: (value: string) => void;
  chapters: string[];
}

export default function FilterDropdown({ chapterFilter, setChapterFilter, chapters }: FilterDropdownProps) {
  return (
    <div className="flex justify-between mb-6 gap-4 flex-col sm:flex-row">
      <select value={chapterFilter} onChange={(e) => setChapterFilter(e.target.value)} className="border p-2 rounded w-full sm:w-auto">
        {chapters.map((chap) => (
          <option key={chap} value={chap}>
            Bab {chap}
          </option>
        ))}
      </select>
    </div>
  );
}

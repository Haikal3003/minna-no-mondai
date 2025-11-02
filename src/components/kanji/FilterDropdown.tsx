export type LevelType = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

interface FilterDropdownProps {
  levelFilter: string;
  setLevelFilter: (value: LevelType) => void;
  levels: string[];
}

export default function FilterDropdown({ levelFilter, setLevelFilter, levels }: FilterDropdownProps) {
  return (
    <div className="flex justify-between mb-6 gap-4 flex-col sm:flex-row">
      <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value as LevelType)} className="border p-2 rounded w-full sm:w-auto">
        {levels.map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl}
          </option>
        ))}
      </select>
    </div>
  );
}

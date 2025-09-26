import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/tw-merge";

export type SelectOption = {
  value: string | number;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  value: string | number;
  onSelect: (value: string | number) => void;
  className?: string;
};

export default function Select({
  options,
  value,
  onSelect,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string | number) => {
    onSelect(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative inline-block text-left", className)}>
      <button
        type="button"
        className="inline-flex justify- text-start w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
        {isOpen ? (
          <ChevronUp className="ml-auto h-5 w-5" />
        ) : (
          <ChevronDown className="ml-auto h-5 w-5" />
        )}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-primary ring-opacity- z-50 max-h-[150px] overflow-y-auto">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

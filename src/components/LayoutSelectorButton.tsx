import type React from 'react';

type LayoutSelectorButtonProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
};

export default function LayoutSelectorButton({ children, onClick, isSelected }: LayoutSelectorButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-colors bg-neutral-100 text-neutral-600 hover:bg-neutral-200 ${isSelected ? 'bg-black! text-white' : ''}`}
    >
      {children}
    </button>
  );
}

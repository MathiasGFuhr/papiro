interface BackToTopProps {
  show: boolean;
  onClick: () => void;
}

export const BackToTop = ({ show, onClick }: BackToTopProps) => {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-40"
      aria-label="Voltar ao topo"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
};

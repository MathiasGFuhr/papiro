interface ScrollProgressProps {
  progress: number;
}

export const ScrollProgress = ({ progress }: ScrollProgressProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

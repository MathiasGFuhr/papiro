"use client";

import { useTheme } from '../../contexts/ThemeContext';

export function ThemeTest() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Teste do Tema
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Tema atual: <span className="font-bold">{theme}</span>
      </p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
      >
        Alternar Tema
      </button>
    </div>
  );
}

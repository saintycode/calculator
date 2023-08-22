import React, { useState } from 'react';

export default function Calculator() {
  const [result, setResult] = useState(null);
  const [theme, setTheme] = useState('light');

  const handleClick = (value) => {
    setResult(result === null ? value : result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult(null);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`max-w-md mx-auto bg-${theme === 'light' ? 'white' : 'black'} rounded-lg shadow-lg p-6`}>
      <div className="flex justify-end">
        <button onClick={toggleTheme} className={`p-2 border border-gray-300 rounded text-center ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'} text-gray-800`}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
      <div className="mb-6">
        <input
          type="text"
          value={result !== null ? result : ''}
          className={`w-full p-2 border border-gray-300 rounded ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} text-${theme === 'light' ? 'gray-800' : 'white'}`}
          readOnly
        />
      </div>
      <div className={`grid grid-cols-4 gap-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        <button
          onClick={() => handleClick('1')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          1
        </button>
        <button
          onClick={() => handleClick('2')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          2
        </button>
        <button
          onClick={() => handleClick('3')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          3
        </button>
        <button
          onClick={() => handleClick('+')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          +
        </button>
        <button
          onClick={() => handleClick('4')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          4
        </button>
        <button
          onClick={() => handleClick('5')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          5
        </button>
        <button
          onClick={() => handleClick('6')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          6
        </button>
        <button
          onClick={() => handleClick('-')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          -
        </button>
        <button
          onClick={() => handleClick('7')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          7
        </button>
        <button
          onClick={() => handleClick('8')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          8
        </button>
        <button
          onClick={() => handleClick('9')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          9
        </button>
        <button
          onClick={() => handleClick('*')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          *
        </button>
        <button
          onClick={() => handleClick('0')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          0
        </button>
        <button
          onClick={() => handleClick('.')}
          className={`p-2 border border-gray-300 rounded text-center`}
        >
          .
        </button>
        <button
          onClick={clear}
          className={`col-span-2 p-2 border border-gray-300 rounded text-center`}
        >
          Clear
        </button>
        <button
          onClick={calculate}
          className={`col-span-2 p-2 border border-gray-300 rounded text-center`}
        >
          Calculate
        </button>
      </div>
    </div>
  );
}

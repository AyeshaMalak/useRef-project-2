import { useRef , useState} from 'react';
import './App.css';

function App() {
  const inputRef = useRef("");
  const [_ , setRender] = useState(0);


  const handleInputChange = (e) => {
    inputRef.current = e.target.value;
    setRender(prev => prev +1)
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Track Input Without Re-rendering
        </h1>

        <input
          type="text"
          placeholder="Type something..."
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 transition duration-300 ease-in-out"
        />

        <div className="text-xl font-medium text-gray-700 mt-4">
          Current Input Value: <span className="text-blue-500">{inputRef.current}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const topics = [
//   { id: 9,  name: 'General Knowledge', emoji: '🧠' },
//   { id: 17, name: 'Science & Nature',  emoji: '🔬' },
//   { id: 21, name: 'Sports',            emoji: '⚽' },
//   { id: 23, name: 'History',           emoji: '📜' },
//   { id: 11, name: 'Film',              emoji: '🎬' },
//   { id: 12, name: 'Music',             emoji: '🎵' },
//   { id: 15, name: 'Video Games',       emoji: '🎮' },
//   { id: 14, name: 'Television',        emoji: '📺' },
// ];

// export default function HomePage() {
//   const navigate = useNavigate();
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [amount, setAmount] = useState(10);
//   const [difficulty, setDifficulty] = useState('medium');
//   const [error, setError] = useState('');

//   const handleStart = () => {
//     if (!selectedTopic) {
//       setError('Please select a topic to continue.');
//       return;
//     }
//     setError('');
//     navigate('/quiz', {
//       state: {
//         categoryId: selectedTopic.id,
//         categoryName: selectedTopic.name,
//         amount,
//         difficulty,
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">

//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-indigo-600">🧩 QuizApp</h1>
//           <span className="text-sm text-gray-400 font-medium">Powered by Open Trivia DB</span>
//         </div>
//       </header>

//       <main className="max-w-4xl mx-auto px-6 py-12">

//         {/* Hero */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
//             Test Your Knowledge!
//           </h2>
//           <p className="text-gray-500 text-lg">
//             Pick a topic, choose your difficulty, and see how well you score.
//           </p>
//         </div>

//         {/* Topic Grid */}
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">
//           1. Choose a Topic
//         </h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
//           {topics.map((topic) => (
//             <button
//               key={topic.id}
//               onClick={() => { setSelectedTopic(topic); setError(''); }}
//               className={`
//                 flex flex-col items-center justify-center gap-2
//                 p-5 rounded-2xl border-2 font-semibold text-sm
//                 transition-all duration-200 hover:scale-105
//                 ${selectedTopic?.id === topic.id
//                   ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
//                   : 'border-gray-200 bg-white text-gray-600 hover:border-indigo-300'}
//               `}
//             >
//               <span className="text-3xl">{topic.emoji}</span>
//               {topic.name}
//             </button>
//           ))}
//         </div>

//         {/* Settings Row */}
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">
//           2. Configure Your Quiz
//         </h3>
//         <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

//           {/* Number of Questions */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-600 mb-2">
//               Number of Questions
//             </label>
//             <select
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50"
//             >
//               <option value={5}>5 Questions</option>
//               <option value={10}>10 Questions</option>
//               <option value={15}>15 Questions</option>
//               <option value={20}>20 Questions</option>
//             </select>
//           </div>

//           {/* Difficulty */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-600 mb-2">
//               Difficulty
//             </label>
//             <div className="flex gap-3">
//               {['easy', 'medium', 'hard'].map((level) => (
//                 <button
//                   key={level}
//                   onClick={() => setDifficulty(level)}
//                   className={`
//                     flex-1 py-2.5 rounded-xl text-sm font-semibold capitalize
//                     transition-all duration-200 border-2
//                     ${difficulty === level
//                       ? level === 'easy'   ? 'bg-green-100 border-green-500 text-green-700'
//                       : level === 'medium' ? 'bg-yellow-100 border-yellow-500 text-yellow-700'
//                       :                     'bg-red-100 border-red-500 text-red-700'
//                       : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300'}
//                   `}
//                 >
//                   {level}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Error */}
//         {error && (
//           <p className="text-red-500 text-sm font-medium mb-4 flex items-center gap-2">
//             ⚠️ {error}
//           </p>
//         )}

//         {/* Start Button */}
//         <button
//           onClick={handleStart}
//           className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl active:scale-95"
//         >
//           🚀 Start Quiz
//         </button>

//       </main>

//       <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-200 mt-6">
//         © 2025 QuizApp. Built with React & Tailwind CSS.
//       </footer>
//     </div>
//   );
// }
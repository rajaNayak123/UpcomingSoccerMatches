import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/matches')
      .then(res => setMatches(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Upcoming Soccer Matches</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {matches.map((match, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border rounded-lg shadow-sm"
              >
                <span>{match.homeTeam} vs {match.awayTeam}</span>
                <span className="text-sm text-gray-500">
                  {dayjs(match.date).format('MMM D, YYYY h:mm A')}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;

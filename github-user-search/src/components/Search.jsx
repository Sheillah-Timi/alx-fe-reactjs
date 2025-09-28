// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData, getUserDetails } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]); // enriched results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      // call search endpoint
      const items = await fetchUserData(username.trim(), location.trim(), minRepos);

      if (!items || items.length === 0) {
        setError("Looks like we cant find the user");
        setLoading(false);
        return;
      }

      // fetch details for each result so we can show location & repo count
      const detailPromises = items.slice(0, 10).map((it) => getUserDetails(it.login)); // limit to first 10 for speed
      const details = await Promise.allSettled(detailPromises);

      const enriched = items.slice(0, 10).map((it, idx) => {
        const det = details[idx];
        if (det.status === "fulfilled") {
          return {
            id: it.id,
            login: it.login,
            avatar_url: it.avatar_url,
            html_url: it.html_url,
            score: it.score,
            name: det.value.name || null,
            location: det.value.location || null,
            public_repos: det.value.public_repos || 0,
          };
        } else {
          // if details failed, still return basic item
          return {
            id: it.id,
            login: it.login,
            avatar_url: it.avatar_url,
            html_url: it.html_url,
            score: it.score,
            name: null,
            location: null,
            public_repos: 0,
          };
        }
      });

      setResults(enriched);
    } catch (err) {
      // test expects exactly this string:
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">GitHub User Search</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <input
          aria-label="username-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2 col-span-1 sm:col-span-1"
        />
        <input
          aria-label="location-input"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2 col-span-1 sm:col-span-1"
        />
        <input
          aria-label="minrepos-input"
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded p-2 col-span-1 sm:col-span-1"
        />
        <button
          type="submit"
          className="col-span-1 sm:col-span-3 bg-blue-600 text-white rounded py-2 mt-2"
        >
          Search
        </button>
      </form>

      <div className="mt-4">
        {loading && <p>Loading...</p>}

        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && results.length > 0 && (
          <ul className="space-y-3">
            {results.map((user) => (
              <li key={user.id} className="flex items-center bg-gray-50 p-3 rounded shadow-sm">
                <img src={user.avatar_url} alt={user.login} className="w-14 h-14 rounded-full mr-4" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{user.name || user.login}</p>
                      <p className="text-sm text-gray-600">@{user.login}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Repos: {user.public_repos}</p>
                      <a className="text-sm text-blue-600" href={user.html_url} target="_blank" rel="noreferrer">View</a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{user.location || "Location not available"}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;

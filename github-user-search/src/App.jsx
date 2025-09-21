import { useState } from "react";
import { getUser } from "./services/githubApi";

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const data = await getUser("octocat"); // GitHub test account
    setUser(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>GitHub User Search</h1>
      <button onClick={fetchUser}>Fetch Octocat</button>
      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>{user.html_url}</p>
        </div>
      )}
    </div>
  );
}

export default App;

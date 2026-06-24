// Dashboard.jsx

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <h2>{user.name}'s Dashboard</h2>
      ) : (
        <h2>No User Logged In</h2>
      )}
    </div>
  );
}

export default Dashboard;
import { useNavigate } from "react-router-dom";
import "./App.css";
import { use } from "react";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <button className="users-button" onClick={() => navigate("/users")}>
          Users
        </button>
      </header>
    </div>
  );
}

export default App;

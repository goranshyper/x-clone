import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    // BEM - className ce biti malim slovima
    <div className="app">

      {/* Sidebar */}
      <Sidebar />
      
      {/* Feed */}
      <Feed />

      {/* Desni blok */}

    </div>
  );
}

export default App;

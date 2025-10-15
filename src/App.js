import "./App.css";
import Main from "./Pages/Main";
import Navbar from "./Pages/Navbar";
import FloatingButtons from "./Pages/TopButton";

function App() {
  return (
    <div>
      <Navbar />
      <FloatingButtons />
      <Main />
    </div>
  );
}

export default App;

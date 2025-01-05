import Home from "./pages/Home.tsx";
import List from "./pages/List.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

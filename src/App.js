import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/fira-code/700.css";

import { Link, Routes, Route } from "react-router-dom";

import Console from "./components/Terminal/Console";

const Home = () => {
  return (
    <div>
      <p>Under construction. Go to the terminal site:</p>
      <Link to="terminal">terminal</Link>
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="terminal" element={<Console />}></Route>
    </Routes>
  );
}

export default App;

import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/fira-code/700.css";

import Console from "./components/Console";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.margin}>
      {/* Displays the console component. */}
      <Console />
    </div>
  );
}

export default App;

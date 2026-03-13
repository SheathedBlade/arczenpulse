import './App.css';
import { Footer, Navbar } from './components';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  return (
    <div className="bg-sakura-day-surface dark:bg-sakura-night-surface">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;

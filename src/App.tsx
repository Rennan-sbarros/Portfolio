import { Header } from "./components/core/header";
import { About } from "./components/pages/about";
import { Home } from "./components/pages/home";
import { Projects } from "./components/pages/projects";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;

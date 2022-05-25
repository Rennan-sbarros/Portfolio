import { Footer } from "./components/core/footer";
import { Header } from "./components/core/header";
import { About } from "./components/pages/about";
import { Home } from "./components/pages/home";
import { Projects } from "./components/pages/projects";
import { Skills } from "./components/pages/skills";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

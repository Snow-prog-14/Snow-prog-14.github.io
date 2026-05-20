import Header from "./components/Header";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import About from "./components/About";
import TechnicalDirections from "./components/TechnicalDirections";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Banner />
      <Experience />
      <About />
      <TechnicalDirections />
      <Projects />
      <Footer />
    </main>
  );
}

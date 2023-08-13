import Category from "./components/Category";
import CompanyLogos from "./components/CompanyLogos";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopDestinations from "./components/TopDestinations";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <TopDestinations />
      <CompanyLogos />
    </main>
  );
}

export default App;

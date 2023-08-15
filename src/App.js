import Book from "./components/Book";
import Category from "./components/Category";
import CompanyLogos from "./components/CompanyLogos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";
import TopDestinations from "./components/TopDestinations";

function App() {
  return (
    <main className="lg:px-7">
      <Navbar />
      <Hero />
      <Category />
      <TopDestinations />
      <Book />
      <CompanyLogos />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;

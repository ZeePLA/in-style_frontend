import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Greeting from "../components/Greeter";

function HomePage() {
  return (
    <>
      <Header path="/profile" pathName="Profile" />
      <Greeting />
      <SearchBar />
      <Footer />
    </>
  );
}

export default HomePage;

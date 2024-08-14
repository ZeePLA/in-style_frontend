import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchDataComponent from "../components/fetch";

function LoginPage() {
  const handleLogin = (email, password) => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Header path="/profile" pathName="Profile" />
      <FetchDataComponent />
      <Footer />
    </>
  );
}

export default LoginPage;

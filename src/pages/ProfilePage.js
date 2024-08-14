import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Profile() {
  return (
    <section>
      <h1>Profile Page</h1>
    </section>
  );
}

function ProfilePage() {
  return (
    <>
      <Header path="/" pathName="Home" />
      <Profile />
      <Footer />
    </>
  );
}

export default ProfilePage;

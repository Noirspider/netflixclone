import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Movies from "./components/Movies.jsx";
import MyFooter from "./components/Footer.jsx";

function App() {
  return (
    <>
      <MyNavbar />
      <Header />
      <div style={{ padding: "0 2rem" }}>
        <Movies title="Star Trek" category="Star Trek Collection" />
        <Movies title="Christmas" category="Christmas" />
        <Movies title="Spider-man" category="Spider-Man Collection" />
        <Movies title="One Piece" category="One Piece Collection" />
        <Movies title="star wars" category="Star Wars Colleciton" />
        <Movies title="marvel" category="Marvel Collection" />
      </div>
      <MyFooter />
    </>
  );
}

export default App;

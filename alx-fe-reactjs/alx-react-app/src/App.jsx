// src/App.jsx
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MainContent />

      {/* UserProfile examples */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="John" age="30" bio="Software dev who enjoys reading" />

      <Footer />
    </>
  );
}

export default App;

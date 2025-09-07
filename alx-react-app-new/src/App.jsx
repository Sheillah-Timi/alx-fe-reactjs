import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import Counter from "./components/Counter"; // ✅ import Counter

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile
        name="Alice Johnson"
        age={28}
        bio="A travel enthusiast who loves exploring new cities."
      />
      <UserProfile
        name="Michael Lee"
        age={34}
        bio="Foodie and culture lover, always on the move."
      />

      {/* ✅ Add Counter Component */}
      <Counter />

      <Footer />
    </div>
  );
}

export default App;

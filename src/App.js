import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Slider from "./components/Slider";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
}

export default App;

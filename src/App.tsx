import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<HeroSection />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

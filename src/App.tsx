import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/" element={<HeroSection />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

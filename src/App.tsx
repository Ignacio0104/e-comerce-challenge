import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import CartProvider from "./context/CartProvider";
import { useState } from "react";
import ResponsiveMenu from "./components/ResponsiveMenu";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = (bool: boolean) => {
    setShowMenu(bool);
  };
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header menu={setShowMenu}></Header>
          {showMenu && <ResponsiveMenu menu={setShowMenu} />}
          <Routes>
            <Route path="/" element={<HeroSection />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

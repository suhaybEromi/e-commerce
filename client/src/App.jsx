import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import ShopContextProvider from "./Context/ShopContext";
import men_banner from "./Components/assets/men_banner.png";
import women_banner from "./Components/assets/women_banner.png";
import kid_banner from "./Components/assets/kid_banner.png";

function App() {
  return (
    <>
      <div>
        <ShopContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />

              <Route
                path="/mens"
                element={<ShopCategory banner={men_banner} category="men" />}
              />
              <Route
                path="/womens"
                element={
                  <ShopCategory banner={women_banner} category="women" />
                }
              />
              <Route
                path="/kids"
                element={<ShopCategory banner={kid_banner} category="kid" />}
              />

              {/* <Route path="/product/:productId" element={<Product />} /> */}
              <Route path="/product" element={<Product />}>
                <Route path=":productId" element={<Product />} />
              </Route>

              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSignup />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;

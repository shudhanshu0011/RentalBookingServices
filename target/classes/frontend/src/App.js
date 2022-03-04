import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Reviews from "./pages/reviews";
import Faq from "./pages/faq";
import Home from "./pages/home";
import { Button } from "./components/button/button";
import ProductList from "./pages/searchproduct/productlist";
import Context from "./store/Context";
import Cart from "./components/Cart";
import { NavBar } from "./AppStyles";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [isToggle, setToggle] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, [context]);
  return (
    <Router>
      <div className="navbar1">
        <div className="logo1">
          <img src="https://github.com/shudhanshu0011/RentalBookingServices/blob/main/src/main/resources/static/images/logo.png?raw=true"></img>
        </div>
        <div className="navigation">
          <div className="logo2">
            <img src="https://github.com/shudhanshu0011/RentalBookingServices/blob/main/src/main/resources/static/images/logo.png?raw=true"></img>
          </div>
          <div className="listyourbike1">
            <Button
              className="listyourbike2"
              type="button"
              buttonStyle="btn--mobile--primary"
              buttonSize="btn--mobile"
            >
              List your bike
            </Button>
          </div>
          <div className="random3">
            <input type="checkbox" id="active" />
            <label for="active" class="menu-btn">
              <i class="fas fa-bars"></i>
            </label>
            <div class="wrapper">
              <ul>
                <li>
                  <Link to="/" className="navtext1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="navtext1">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="navtext1">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="navtext1">
                    About
                  </Link>
                </li>
                <Button
                  className="listyourbike"
                  type="button"
                  buttonStyle="btn--primary--solid"
                  buttonSize="btn--small"
                >
                  Login/Sign Up
                </Button>
              </ul>
            </div>
          </div>
          <Link to="/" className="navtext">
            Home
          </Link>
          <Link to="/reviews" className="navtext">
            Reviews
          </Link>
          <Link to="/faq" className="navtext">
            FAQ's
          </Link>
          <Link to="/about" className="navtext">
            About
          </Link>
        </div>
        <div className="listyourbike">
          <Button
            className="listyourbike"
            type="button"
            buttonStyle="btn--primary--outline"
            buttonSize="btn--small"
          >
            List your bike
          </Button>
        </div>
        <div className="menu1">
          <div className="dropdown">
            <Button
              className="listyourbike"
              type="button"
              buttonStyle="btn--primary--solid"
              buttonSize="btn--small"
            >
              Login/Sign Up
            </Button>
            <div className="dropdown-content">
              <a href="#">Login</a>
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
        <div className="cartt">
          <GlobalStyles />
          <NavBar>
            <Cart
              isToggle={isToggle}
              setToggle={setToggle}
              carts={context.carts}
              removeProductFromCart={context.removeProductFromCart}
              clearCart={context.clearCart}
            />
          </NavBar>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
      <footer>
        <div className="ft3rd">
          <div class="background">
            <div class="container">
              <div class="screen">
                <div class="screen-header">
                  <div class="screen-header-left">
                    <div class="screen-header-button close"></div>
                    <div class="screen-header-button maximize"></div>
                    <div class="screen-header-button minimize"></div>
                  </div>
                  <div class="screen-header-right">
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div class="screen-body">
                  <div class="screen-body-item left">
                    <div class="app-title">
                      <span>CONTACT</span>
                      <span>US</span>
                    </div>
                    <div class="app-contact">CONTACT INFO : +91-1234567890</div>
                  </div>
                  <div class="screen-body-item">
                    <div class="app-form">
                      <div class="app-form-group">
                        <input class="app-form-control" placeholder="NAME" />
                      </div>
                      <div class="app-form-group">
                        <input class="app-form-control" placeholder="EMAIL" />
                      </div>
                      <div class="app-form-group">
                        <input
                          class="app-form-control"
                          placeholder="CONTACT NO"
                        />
                      </div>
                      <div class="app-form-group message">
                        <input class="app-form-control" placeholder="MESSAGE" />
                      </div>
                      <div class="app-form-group buttons">
                        <button class="app-form-button">CANCEL</button>
                        <button class="app-form-button">SEND</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ft12">
          <div className="ft1st">
            <div className="ft1st-1">
              <div>
                Mail
                <br />
                <span>support@bikebros.com</span>
              </div>
            </div>
            <div className="ft1st-2">
              <span>About Us</span>
              <br />
              <span>Terms of Use</span>
              <br />
              <span>Safety</span>
              <br />
              <soan>Support</soan>
              <br />
              <span>Contact Us</span>
              <br />
            </div>
          </div>
          <div className="ft2nd">
            <div className="ft2nd-1">
              <div>
                Call Us
                <br />
                <span>+91-1234567890</span>
              </div>
            </div>
            <div className="ft2nd-2">
              <span>Privacy Policy</span>
              <br />
              <span>Payment and Security</span>
              <br />
              <span>How BikeBros Works?</span>
              <br />
              <span>FAQ's</span>
              <br />
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
export default function Header() {
  return (
    <header id="header">
    {/*header*/}

    <div className="header-bottom">
      {/*header-bottom*/}
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="mainmenu pull-left">
              <ul className="nav navbar-nav collapse navbar-collapse">
                <li>
                  <a href="index.html" className="active">
                    Home
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    Shop
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul role="menu" className="sub-menu">
                    <li>
                      <a href="shop.html">Products</a>
                    </li>
                    <li>
                      <a href="product-details.html">Product Details</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                   
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">
                    Blog
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul role="menu" className="sub-menu">
                    <li>
                      <a href="blog.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact</a>
                </li>
                <li>
                <Nav.Link href={"/Sign_in"}>Login </Nav.Link>
                </li>
                <li>
                <Nav.Link href={"/Sign_up"}>Register</Nav.Link>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    {/*/header-bottom*/}
  </header>
  )
}

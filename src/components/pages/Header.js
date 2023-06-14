import React, { useState, useEffect } from 'react';
import { FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, button } from 'react-bootstrap';
import axios from 'axios';

export default function Header() {

  // let search = players.filter(player => {
  //   const nameMatch = player.name.toLowerCase().includes(name.toLowerCase());
  //   const countryMatch = player.country.toLowerCase().includes(country.toLowerCase());
  //   const club_idMatch = typeof player.club_id === 'string' && player.club_id.toLowerCase().includes(club_id.toLowerCase());

  //   return nameMatch && countryMatch && club_idMatch;
  // });

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
                    <Link to="/" className="active">
                      Home
                    </Link>
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
                      <li></li>
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
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Nav.Link href="/Sign_in">Login</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/Sign_up">Register</Nav.Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <div>

                  {/* <FormControl
                    type="text"
                    name="reach"
                    value={reach}
                    onChange={(e) => setReach(e.target.value)}
                  /> */}
                  <div className="mt-3 float-left">
                    {/* <input
                      className="form-control search mb-3 ml-5"
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                      type="search"
                      placeholder="Name"
                      aria-label="Name"
                    />
                    <input
                      className="form-control search mb-3 ml-5"
                      name="country"
                      value={country}
                      onChange={handleCountryChange}
                      type="search"
                      placeholder="Country"
                      aria-label="Country"
                    />
                    <input
                      className="form-control search mb-3 ml-5"
                      name="club_id"
                      value={club_id}
                      onChange={handleClubIdChange}
                      type="search"
                      placeholder="Club"
                      aria-label="Club"
                    />
                  </div>
                  <button type='submit'>Tìm</button> */}

            </div>

                <table className="table table-bordered table-hover mt-6 ml-5">
                  {/* <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Image</th>
                      <th className="text-center">Tên Cầu Thủ</th>
                      <th className="text-center">Tuổi</th>
                      <th className="text-center">Quốc tịch</th>
                    </tr>
                  </thead> */}
                  {/* <tbody>
                      {search.map((player, index) => (
                        <Item key={index} index={index} player={player} onDelete={this.onDelete} />
                      ))}
                    </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/*header-bottom*/}
    </header>
  );
}


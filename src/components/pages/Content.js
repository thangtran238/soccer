import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function Content() {
  const [players, setPlayer] = useState([]);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/players")
      .then((res) => {
        const data = res.data;
        setPlayer(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSearch = () => {
    const filteredPlayers = players.filter((player) => {
      const playerName = player.name.toLowerCase();
      const lowercaseKeyword = keyword.toLowerCase();
      return playerName.includes(lowercaseKeyword);
    });

    setPlayer(filteredPlayers);
  };

  return (
    <div>
 <div class="formcontrol" style={{display: "flex", marginLeft: "1000px",paddingBottom:"80px"}}>

        <input
          className="form-control search mb-10 ml-20"
          style={{ width: 600 }}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="search"
          placeholder="Searchhhh"
          aria-label="Search"
        />
        <button
          className="card-button btn btn-primary"onClick={handleSearch}>
          Tìm kiếm
        </button>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                {/*/price-range*/}
                <div className="shipping text-center">
                  <img src="images/home/gallery2.jpg" alt="" />
                </div>
                {/*/price-range*/}
                <div className="shipping text-center">
                  <img src="images/home/shipping.jpg" alt="" />
                </div>

                <div className="shipping text-center">
                  <img src="images/home/shipping.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                {/*features_items*/}
                <h2 className="title text-center">Cầu thủ nổi bật</h2>

                {players.map((player, index) => (
                  <Card
                    key={index}
                    id={player.id}
                    name={player.name}
                    age={player.age}
                    image={player.image}
                    country={player.country}
                  />
                ))}
              </div>
              {/*features_items*/}
              <div className="category-tab">
                {/*category-tab*/}
                <div className="features_items">
                  {/*features_items*/}
                  <h2 className="title text-center">Cầu thủ trẻ</h2>

                  {players
                    .filter((player) => player.age < 20)
                    .map((suit) => (
                      <Card
                        id={suit.id}
                        name={suit.name}
                        age={suit.age}
                        image={suit.image}
                        country={suit.country}
                      />
                    ))}
                </div>
              </div>
              {/*/category-tab*/}
              <div className="recommended_items">
                {/*recommended_items*/}
                <h2 className="title text-center">Ngôi sao</h2>
                <div className="features_items">
                  {/*features_items*/}
                  <h2 className="title text-center">Cầu thủ trẻ</h2>

                  {players
                    .filter((player) => player.category_id == 2)
                    .map((suit) => (
                      <Card
                        id={suit.id}
                        name={suit.name}
                        age={suit.age}
                        image={suit.image}
                        country={suit.country}
                      />
                    ))}
                </div>
              </div>
              {/*/recommended_items*/}
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        {/*Footer*/}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="companyinfo">
                  <h2>
                    <span>e</span>-shopper
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="images/home/iframe1.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o" />
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="images/home/iframe2.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o" />
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="images/home/iframe3.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o" />
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="images/home/iframe4.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o" />
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="address">
                  <img src="images/home/map.png" alt="" />
                  <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Service</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="#">Online Help</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Order Status</a>
                    </li>
                    <li>
                      <a href="#">Change Location</a>
                    </li>
                    <li>
                      <a href="#">FAQ’s</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Quock Shop</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="#">T-Shirt</a>
                    </li>
                    <li>
                      <a href="#">Mens</a>
                    </li>
                    <li>
                      <a href="#">Womens</a>
                    </li>
                    <li>
                      <a href="#">Gift Cards</a>
                    </li>
                    <li>
                      <a href="#">Shoes</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Policies</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Privecy Policy</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#">Billing System</a>
                    </li>
                    <li>
                      <a href="#">Ticket System</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="#">Company Information</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Store Location</a>
                    </li>
                    <li>
                      <a href="#">Affillate Program</a>
                    </li>
                    <li>
                      <a href="#">Copyright</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-sm-offset-1">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <form action="#" className="searchform">
                    <input type="text" placeholder="Your email address" />
                    <button type="submit" className="btn btn-default">
                      <i className="fa fa-arrow-circle-o-right" />
                    </button>
                    <p>
                      Get the most recent updates from <br />
                      our site and be updated your self...
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p className="pull-left">
                Copyright © 2013 E-SHOPPER Inc. All rights reserved.
              </p>
              <p className="pull-right">
                Designed by{" "}
                <span>
                  <a target="_blank" href="http://www.themeum.com">
                    Themeum
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*/Footer*/}
    </div>
  );
}

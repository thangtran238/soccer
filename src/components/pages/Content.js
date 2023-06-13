import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function Content() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:3000/players")
      .then((res) => {
        const data = res.data;
        setAllPlayers(data);
        setFilteredPlayers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const filteredResults = allPlayers.filter((player) => {
      const isNameMatched = name !== '' && player.name.toLowerCase() === name.toLowerCase();
      const isCountryMatched = country !== '' && player.country.toLowerCase() === country.toLowerCase();
      const isAgeMatched = age !== '' && player.age.toString() === age;
      return isNameMatched || isCountryMatched || isAgeMatched;
    });

    setFilteredPlayers(filteredResults);
  };

  return (
    <div>
      <section>
      <form onSubmit={onSubmit} className="small-form">
          <div className="mt-3">
            <input
              className="form-control search mb-3"
              name="name"
              value={name}
              onChange={handleNameChange}
              type="search"
              placeholder="Name"
              aria-label="Name"
            />
            <input
              className="form-control search mb-3"
              name="club_id"
              value={country}
              onChange={handleCountryChange}
              type="search"
              placeholder="Country"
              aria-label="Country"
            />
            <input
              className="form-control search mb-3"
              name="age"
              value={age}
              onChange={handleAgeChange}
              type="search"
              placeholder="Age"
              aria-label="Age"
            />
          </div>
          <button type="submit">Tìm</button>
        </form>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <div className="shipping text-center">
                  <img src="images/home/gallery2.jpg" alt="" />
                </div>
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
                <h2 className="title text-center">Cầu thủ nổi bật</h2>
                {filteredPlayers.map((player, index) => (
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
              <div className="features_items">
                <h2 className="title text-center">Cầu thủ trẻ</h2>
                {/* Add code to filter and render young players */}
              </div>
              <div className="features_items">
                <h2 className="title text-center">Ngôi sao</h2>
                {/* Add code to filter and render star players */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

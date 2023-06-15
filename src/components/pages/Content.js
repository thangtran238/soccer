import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function Content() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [country, setCountry] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios
      .get("https://soccer-player.onrender.com/players")
      .then((res) => {
        const data = res.data;
        setAllPlayers(data);
        setFilteredPlayers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [keyword, country, ageRange]);

  const handleSearch = () => {
    const filteredPlayers = allPlayers.filter((player) => {
      const playerName = player.name.toLowerCase();
      const lowercaseKeyword = keyword.toLowerCase();
      const isCountryMatched =
        country === "" ||
        player.country.toLowerCase() === country.toLowerCase() ||
        (country === "All" && player.country !== "");

      const isAgeRangeMatched =
        ageRange === "" || ageRangeFilter(ageRange, player.age);

      return (
        playerName.includes(lowercaseKeyword) &&
        isCountryMatched &&
        isAgeRangeMatched
      );
    });

    setFilteredPlayers(filteredPlayers);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleAgeRangeChange = (event) => {
    setAgeRange(event.target.value);
  };

  const ageRangeFilter = (range, age) => {
    switch (range) {
      case "All":
        return true;
      case "18-25":
        return age >= 18 && age <= 25;
      case "26-35":
        return age >= 26 && age <= 35;
      case ">35":
        return age > 35;
      default:
        return false;
    }
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <form className="small-form">
                  <div className="mt-3">
                    <h4>Countries</h4>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="country"
                          value=""
                          checked={country === ""}
                          onChange={handleCountryChange}
                          defaultChecked
                        />
                        All Countries
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="country"
                          value="Spain"
                          checked={country === "Spain"}
                          onChange={handleCountryChange}
                        />
                        Spain
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="country"
                          value="England"
                          checked={country === "England"}
                          onChange={handleCountryChange}
                        />
                        England
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="country"
                          value="France"
                          checked={country === "France"}
                          onChange={handleCountryChange}
                        />
                        France
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Ages</h4>
                    <label>
                      <input
                        type="radio"
                        name="ageRange"
                        value="All"
                        checked={ageRange === "All"}
                        onChange={handleAgeRangeChange}
                        defaultChecked

                      />
                      All Ages
                    </label>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="ageRange"
                          value="18-25"
                          checked={ageRange === "18-25"}
                          onChange={handleAgeRangeChange}
                        />
                        18-25
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="ageRange"
                          value="26-35"
                          checked={ageRange === "26-35"}
                          onChange={handleAgeRangeChange}
                        />
                        26-35
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="ageRange"
                          value=">35"
                          checked={ageRange === ">35"}
                          onChange={handleAgeRangeChange}
                        />
                        35+
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-9 padding-right">
              <div
                className="form-outline"
                style={{ display: "flex", paddingBottom: "80px" }}
              >
                <input
                  className="form-control search py-4"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  type="search"
                  placeholder="Search Player By Name"
                  aria-label="Search"
                />
              </div>
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
                {filteredPlayers
                  .filter((player) => player.age < 24)
                  .map((player) => (
                    <Card
                      key={player.id}
                      id={player.id}
                      name={player.name}
                      age={player.age}
                      image={player.image}
                      country={player.country}
                    />
                  ))}
              </div>
              <div className="features_items">
                <h2 className="title text-center">Ngôi sao</h2>
                {filteredPlayers
                  .filter((player) => player.category_id === 2)
                  .map((player) => (
                    <Card
                      key={player.id}
                      id={player.id}
                      name={player.name}
                      age={player.age}
                      image={player.image}
                      country={player.country}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

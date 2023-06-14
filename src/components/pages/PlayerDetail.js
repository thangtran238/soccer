import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/players/${id}`)
      .then((res) => {
        const data = res.data;
        setPlayer(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!player) {
    return <div>Loading player data...</div>;
  }

  return (
    <>
    <div>
      <Link to="/">Return to homepage</Link>
    </div>
    <div className="mx-auto d-flex justify-content-center align-items-center">
      <img
        src={`/images/${player.image}`}
        className="object-fit-cover"
        alt=""
        width={200}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">Player Details</h5>
        <p className="card-text">Name: {player.name}</p>
        <p className="card-text">Age: {player.age}</p>
        <p className="card-text">Country: {player.country}</p>
        <p className="card-text">CLB: {player.CLB}</p>
      </div>
    </div>
    </>
  );
};

export default PlayerDetail;

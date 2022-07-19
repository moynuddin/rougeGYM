import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/Card.scss";
const Card = ({ exercise }) => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  });

  function handleCard(exercise) {
    navigate(`details/${exercise.id}`);
  }
  return (
    <div
      className="card-container"
      data-aos="zoom-in-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <div className="card" onClick={() => handleCard(exercise)}>
        <img src={exercise?.gifUrl} alt={exercise?.bodyPart} />
        <h2 className="exercise-name">{exercise?.name}</h2>
        <Stack direction="row" spacing={1}>
          <Chip label={exercise?.bodyPart} />
          <Chip label={exercise?.target} variant="outlined" />
          <Chip label={exercise?.equipment} color="primary" />
        </Stack>
      </div>
    </div>
  );
};

export default Card;

import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/Card.scss";
const Card = ({ exercise }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const handleCard = (id) => {
    console.log("Exercise Details", exercise.id);
  };
  return (
    <div
      className="card-container"
      data-aos="zoom-in-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <div className="card" onClick={handleCard}>
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

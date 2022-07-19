import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL, getExercise } from "../exerciseDB/exercise";
import IndividualExercise from "../components/IndividualExercise";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Detail = () => {
  let exerciseID = useParams();
  const [exerciseData, setExerciseData] = useState({});
  useEffect(() => {
    getExercise(`${BASE_URL}/exercises/exercise/${exerciseID.id}`)
      .then((res) => {
        setExerciseData(res.data);
      })
      .catch((error) => console.log("Exercise Data", error));
  }, [exerciseID.id]);

  return (
    <>
      <Header hide={true} />
      <IndividualExercise exerciseData={exerciseData} />
      <Footer />
    </>
  );
};

export default Detail;

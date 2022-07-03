import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/List.scss";
import { BASE_URL, getExercise } from "../exerciseDB/exercise";
import Category from "../components/Category";

import Card from "../components/Card";
const List = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isParentData, setIsParentData] = useState(null);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = list?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const searchedExercise = isParentData?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };
  useEffect(() => {
    getExercise(BASE_URL)
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <Category tochild={isParentData} sendToParent={setIsParentData} />
      <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="1000">
        <h2 className="exercise-title">Exercises you should know</h2>
      </div>
      <div className="exercise-card">
        {!isParentData
          ? currentExercise.map((data) => (
              <Card exercise={data} key={data?.id} />
            ))
          : searchedExercise?.map((data) => (
              <Card exercise={data} key={data?.id} />
            ))}
      </div>
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            color="primary"
            count={Math.ceil(
              !isParentData
                ? list.length
                : isParentData.length / exercisesPerPage
            )}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        </Stack>
      </div>
    </div>
  );
};

export default List;

import React, { useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaSearch,
} from "react-icons/fa";
import { specificExercise } from "../Utility/helper";
import "../components/Category.scss";
import { getExercise } from "../exerciseDB/exercise";
const Category = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <FaLongArrowAltLeft
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
      >
        Left
      </FaLongArrowAltLeft>
    );
  };
  const RightArrow = () => {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <FaLongArrowAltRight
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
      >
        Right
      </FaLongArrowAltRight>
    );
  };

  const handleSearch = async (e) => {
    const searchInput = e.target.value;
    if (e.keyCode === 13) {
      const { data } = await getExercise();
      const filteredData = data.filter(
        (exe) =>
          exe.bodyPart.toLowerCase().includes(searchInput) ||
          exe.equipment.toLowerCase().includes(searchInput) ||
          exe.name.toLowerCase().includes(searchInput) ||
          exe.target.toLowerCase().includes(searchInput)
      );
      props.sendToParent(filteredData);
    }
  };

  const handleExercise = async (name) => {
    const bodyPartExercise = name;
    const { data } = await getExercise();
    const categoryData = data.filter((e) =>
      e.bodyPart.toLowerCase().includes(bodyPartExercise)
    );
    props.sendToParent(categoryData);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  return (
    <div>
      <div
        className="search-wrapper"
        data-aos="zoom-out-right"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <FaSearch />
        <input
          type="search"
          placeholder="Search exercises..."
          onKeyUp={handleSearch}
        />
      </div>

      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {specificExercise.map((exercise) => (
          <div
            className="card-wrapper"
            key={exercise?.body}
            onClick={() => handleExercise(exercise.body)}
          >
            <img src={exercise?.imgURL} alt={exercise?.img} />
            <p className="body-content">{exercise.body}</p>
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default Category;

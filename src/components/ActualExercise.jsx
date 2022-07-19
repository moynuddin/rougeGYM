import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaYoutube,
} from "react-icons/fa";
import { youtubeAPI, youtube_URL } from "../exerciseDB/exercise";
import "../components/ActualExercise.scss";
const ActualExercise = ({ name }) => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    youtubeAPI(`${youtube_URL}/?q=${name}&hl=en&gl=US`)
      .then((res) => {
        setVideo(res.data);
      })
      .catch((error) => console.log("Error in youtube API", error));
  }, [name]);

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
  function handleVideo(video) {
    window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank");
  }
  return (
    <>
      <div className="thumbnail">
        <div className="similar-exercise">
          Watch <span> {name} </span>
          detailed exercise videos.
        </div>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {video?.contents?.slice(0, 20).map((v) => (
            <div
              className="video-wrapper"
              key={v?.video?.videoId}
              onClick={() => handleVideo(v?.video)}
            >
              <img src={v?.video?.thumbnails[0]?.url} alt="thumbnail" />
              <div className="youtube-icon">
                <FaYoutube />
              </div>
            </div>
          ))}
        </ScrollMenu>
      </div>
    </>
  );
};

export default ActualExercise;

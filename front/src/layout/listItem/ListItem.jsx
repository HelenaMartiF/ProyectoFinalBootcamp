import "./listItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://www.youtube.com/embed/vC2oN32ol0w?si=PJ3kCUspt0T4tbhw";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526794/img/frnqhojeh4mgytvzdtt6.jpg"
        alt=""
      />
      {isHovered && (
        <>
        <iframe
            src={trailer}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
            className="trailerIframe"
          ></iframe>
          <div className="itemInfo_ListItem">
            <div className="icons_ListItem">
              <PlayArrowIcon className="icon_ListItem" />
              <AddIcon className="icon_ListItem" />
              <ThumbUpOffAltIcon className="icon_ListItem" />
              <ThumbDownOffAltIcon className="icon_ListItem" />
            </div>
            <div className="itemInfoTop_ListItem">
              <span>1 hour 14 mins</span>
              <span className="limit_ListItem">+16</span>
              <span>1999</span>
            </div>
            <div className="desc_LisItem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre_ListItem">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
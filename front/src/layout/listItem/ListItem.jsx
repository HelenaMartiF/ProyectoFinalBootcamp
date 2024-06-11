
import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { API } from '../../services/api';
import { useState} from 'react';

export default function ListItem(item) {
  const [isHovered, setIsHovered] = useState(false);

  const trailer = item.item.trailer;
    /* "/atlasTrailer.mp4"; */


    const putAddFav = async (id) =>{
      try {
        API.put("addFavorito", id).then((res) =>{
          console.log("addFavorito", res.data);
        })
      } catch (error) {
        console.log("errFav", error);
      }
    }

  return (
    <div
      className="listItem"
      style={{ left: isHovered && item.index * 225 - 50 + item.index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.item.portada} alt="" />
      {isHovered && (
        <>
          <iframe
            src={trailer}
            autoPlay = "autoPlay"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            
            title="Trailer"
            className="trailerIframe"
            
          ></iframe>
          <div className="itemInfo_ListItem">
            <div className="icons_ListItem">
              <PlayArrowIcon className="icon_ListItem" />
              <AddIcon className="icon_ListItem" onClick={()=>putAddFav(item.item._id)}/>
              <ThumbUpOffAltIcon className="icon_ListItem" />
              <ThumbDownOffAltIcon className="icon_ListItem" />
            </div>
            <div className="itemInfoTop_ListItem">
              <span>{item.item.duracion}</span>
              <span className="limit_ListItem">{item.item.tipo}</span>
              <span>{item.item.fecha}</span>
            </div>
            <div className="desc_LisItem">
              {item.item.descripcion}
            </div>
            
          </div>
        </>
      )}
    </div>
  );
}

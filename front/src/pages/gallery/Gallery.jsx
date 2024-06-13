import Navigator from "../../core/navigator/Navigator";
import SliderGallery from "../../layout/sliderGallery/SliderGallery";
import GalleryLists from "../../layout/galleryLists/GalleryLists";
import "./Gallery.scss";
import { useEffect, useState } from "react";
import { API } from "../../services/api";

const Gallery = () => {
  const [listas, setLista] = useState([]);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        /* Petición de listas a API */
        API.get("listas").then((res) => {
          setLista(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getRandomLists();
  }, []); /* añadimos array vacío para que UseEffect solo se ejecute una vez */

  return (
    <div className="gallery">
      <Navigator />
      <SliderGallery />
      {listas.map((listas) => (
        <GalleryLists key={listas._id} lista={listas} />
      ))}
    </div>
  );
};

export default Gallery;

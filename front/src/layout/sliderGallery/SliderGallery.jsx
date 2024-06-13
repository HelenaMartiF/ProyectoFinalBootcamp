import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./sliderGallery.scss";

function sliderGallery() {
  return (
    <div
      className=".main_container_sliderGallery{
"
    >
      <img className="main_container_img_sliderGallery" src="./joker.jpg" />

      <div className="info_sliderGallery">
        <img className="info_img_sliderGallery" src="./logoJoker.png" />
        <span className="desc_sliderGallery">
          El tergiversado cuento de hadas que es la historia de Arthur Fleck,
          una tragedia que se convierte en comedia, acaba en el momento en el
          que la empobrecida, degenerada Gotham cae por fin en el caos más
          absoluto y decide ponerse la máscara. Vienen años de terror absoluto,
          y no parece haber salvación.
        </span>
        <div className="buttons_gallery">
          <button className="play">
            <PlayArrowIcon />
            <span>Reproducir</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            Más información
          </button>
        </div>
      </div>
    </div>
  );
}

export default sliderGallery;

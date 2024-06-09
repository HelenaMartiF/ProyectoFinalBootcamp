import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back_watch">
        <ArrowBackIcon />
        Home
      </div>
      <iframe
        className="video_watch"
        src="https://www.youtube.com/embed/vC2oN32ol0w?autoplay=1&controls=1"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        sandbox="allow-popups"
      ></iframe>
    </div>
  );
}

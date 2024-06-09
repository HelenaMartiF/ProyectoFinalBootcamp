/* import SliderGallery from '../../layout/sliderGallery/SliderGallery'; */
import Navigator from '../../core/navigator/Navigator';
import SliderGallery from '../../layout/sliderGallery/SliderGallery';
import GalleryLists from '../../layout/galleryLists/GalleryLists';
import './Gallery.scss'


const Gallery = () => {
  return (
    <div className="gallery">
      <Navigator/>
      <SliderGallery/>
      <GalleryLists/>
      <GalleryLists/>
      <GalleryLists/>
      <GalleryLists/>

    </div>
  );
};

export default Gallery;

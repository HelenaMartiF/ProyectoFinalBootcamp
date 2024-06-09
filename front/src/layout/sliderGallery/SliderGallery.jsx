import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './sliderGallery.scss'



function sliderGallery() {
  return (
    <div className='.main_container_sliderGallery{
'>
      
      <img className='main_container_img_sliderGallery' src="./bannerInicio2.jpg"/>
      
      <div className='info_sliderGallery'>
        <img className='info_img_sliderGallery' src="./brigada3.png"/>
        <span className='desc_sliderGallery'>
          En 2029, la unidad de élite de la policía Illang lucha contra un grupo de terroristas que se opone a la unificación de las dos Coreas. ¿Será este el único enemigo que acecha?
        </span>
        <div className='buttons_gallery'>
          <button className='play'>
            <PlayArrowIcon/>
            <span>Reproducir</span>
          </button>
          <button className='more'>
            <InfoOutlinedIcon/>
            Más información
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default sliderGallery
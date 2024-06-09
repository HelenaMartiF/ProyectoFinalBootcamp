
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './sliderMovies.scss'

function SliderMovies() {
  return (
    <div className='main_container'>
      <div className='category'>
        <select name='genero' id='genero'>
            <option>Género</option>
            <option value="Acción">Acción</option>
            <option value="Aventuras">Aventuras</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Musical">Musical</option>
            <option value="Suspense">Suspense</option>
            <option value="Terror">Terror</option>
        </select>
      </div>
      <img className='main_container_img' src="./bannerInicio2.jpg"/>
      
      <div className='info'>
        <img className='info_img' src="./brigada3.png"/>
        <span className='desc'>
          En 2029, la unidad de élite de la policía Illang lucha contra un grupo de terroristas que se opone a la unificación de las dos Coreas. ¿Será este el único enemigo que acecha?
        </span>
        <div className='buttons'>
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

export default SliderMovies
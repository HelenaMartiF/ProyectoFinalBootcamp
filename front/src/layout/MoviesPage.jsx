import React from 'react'

function MoviesPage() {
  return (
    <div>
    ESTO ES PELÍCULAS:
    va a contener TODAS las películas y un FILTRO para generos
    {/* Boton para ir atrás */}
    <button className="back-button" onClick={() => history.back()}> ATRÀS
    </button>
    </div>
  )
}

export default MoviesPage
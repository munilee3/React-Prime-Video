import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const options = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
  }
  return (
    <>
      <Slider {...options}>
        {moviesList.map(movie => (
          <MovieItem key={movie.id} movieDetails={movie} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider

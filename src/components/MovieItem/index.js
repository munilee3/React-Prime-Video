import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="thumbnail-btn">
            <img src={movieDetails.thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="media-player-container">
            <button
              type="button"
              onClick={() => close()}
              className="closing-btn"
              aria-label="close"
              data-testid="closeButton"
            >
              <IoMdClose className="closing-icon" />
            </button>
            <div className="media-player">
              <ReactPlayer url={movieDetails.videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

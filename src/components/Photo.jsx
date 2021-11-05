import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo(props) {
  return (
    <div className="photo">
      <Link to={`/photo/${props.id}`}>
        <img src={props.url} alt="" />
      </Link>
    </div>
  )
}

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

export default Photo;

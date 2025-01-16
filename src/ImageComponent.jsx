import PropTypes from 'prop-types' 


function ImageComponent({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="სურათი" style={{ width: '300px', height: '200px' }} />
    </div>
  );
}


ImageComponent.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default ImageComponent;
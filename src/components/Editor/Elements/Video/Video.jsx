import './Video.css';

const Image = ({ attributes, element, children }) => {
  const { url, width = '100%', height = '400' } = element;

  const handleYoutube = (url) => {
    if (url.includes('youtube')) {
      return url.replace('watch?v=', 'embed/');
    } else {
      return url;
    }
  };

  return (
    <div {...attributes} className='element-video'>
      <div contentEditable={false} style={{ height: height, width: width }}>
        <div className='video-wrapper'>
          <iframe
            src={handleYoutube(url)}
            title={url}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
            width={width}
            height={height}
          />
        </div>
      </div>
      {children}
    </div>
  );
};
export default Image;

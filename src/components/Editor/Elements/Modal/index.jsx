import ImageModal from './ImageModal';
import SocialModal from './SocialModal';
import VideoModal from './VideoModal';
import './styles.css';

const Modal = ({ setShowModal, handleAddToNode, modalValues }) => {
  const { title } = modalValues;
  return (
    <div className='my-modal-wrapper'>
      {title === 'Picture' && (
        <ImageModal
          setShowModal={setShowModal}
          handleAddToNode={handleAddToNode}
        />
      )}
      {title === 'Video' && (
        <VideoModal
          setShowModal={setShowModal}
          handleAddToNode={handleAddToNode}
        />
      )}
      {title === 'Social' && (
        <SocialModal
          setShowModal={setShowModal}
          handleAddToNode={handleAddToNode}
        />
      )}
    </div>
  );
};

export default Modal;

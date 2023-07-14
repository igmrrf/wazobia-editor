import { useRef } from 'react';
import { MdClose } from 'react-icons/md';
import './styles.css';

const Modal = ({ setShowModal, handleAddToNode }) => {
  const inputRef = useRef(null);

  const handleImagePopUp = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (FileReader && file) {
      const fileReader = new FileReader();
      fileReader.onload = function () {
        handleAddToNode({
          type: 'image',
          url: fileReader.result,
          children: [{ text: '' }],
        });
        setShowModal(false);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className='my-modal-wrapper'>
      <div className='px-10 py-10 border rounded bg-white text-black'>
        <div className='flex justify-between items-center'>
          <p>Embed</p>
          <MdClose size={20} />
        </div>
        <h1 className='text-md py-4'>Upload Image</h1>
        <div>
          <label
            htmlFor='image-upload'
            className='text-xs uppercase font-light'
          >
            File Upload
          </label>
          <input
            id='image-upload'
            name='image-upload'
            type='file'
            className='invisible'
            ref={inputRef}
            onChange={handleImageChange}
          />
          <div className='w-[40vw] h-[20vh] border-dashed border-neutral-500 border mb-5 flex justify-center items-center'>
            <button
              className='border border-green-500 border-solid btn text-sm p-2 border-r-2'
              onClick={handleImagePopUp}
            >
              Import Image from Device
            </button>
          </div>
        </div>
        <div>
          <button className='mr-8 mb-4 border-green-500 bg-green-500 border-spacing-4 px-5 py-2 text-white'>
            Embed
          </button>
          <button
            onClick={() => setShowModal(false)}
            className='mr-8 mb-4 border-neutral-700 border-solid border-spacing-4 px-5 py-2'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

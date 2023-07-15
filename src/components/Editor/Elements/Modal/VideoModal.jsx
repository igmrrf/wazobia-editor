import { useState } from 'react';
import { MdClose } from 'react-icons/md';

const VideoModal = ({ setShowModal, handleAddToNode }) => {
  const [platform, setPlatform] = useState('');
  const [url, setUrl] = useState('');

  const handleEmbed = (event) => {
    event.preventDefault();

    handleAddToNode({
      type: 'video',
      url,
      children: [{ text: '' }],
    });
  };
  return (
    <div className='px-10 py-10 border rounded bg-white text-black'>
      <div className='flex justify-between items-center'>
        <p>Embed</p>
        <MdClose size={20} className='cursor-pointer' onClick={() => setShowModal(false)} />
      </div>

      <div className='w-[40vw] h-min-[20vh]'>
        <div className='my-5'>
          <label
            htmlFor='video-media-platform'
            className='text-xs uppercase font-light block'
          >
            Video Provider
          </label>
          <select
            id='video-media-platform'
            name='video-media-platform'
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
            className='block bg-gray-100 outline-none w-[100%] my-2 p-3 h-auto'
          >
            <option value='facebook'>Youtube</option>
            <option value='twitter'>Vimeo</option>
            <option value='instagram'>JW Player</option>
          </select>
        </div>

        <div className='my-5'>
          <label
            htmlFor='video-media-url'
            className='text-xs uppercase font-light block'
          >
            url
          </label>
          <input
            id='video-media-url'
            name='video-media-url'
            type='text'
            placeholder='Enter Video URL'
            className='block bg-gray-100 outline-none w-[100%] my-2 p-3'
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          onClick={handleEmbed}
          className='mr-8 mb-4 opacity-100 bg-[#0A7227] border-spacing-4 px-5 py-2 text-white'
        >
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
  );
};

export default VideoModal;

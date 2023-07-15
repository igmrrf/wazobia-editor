import { useState } from 'react';
import { MdClose } from 'react-icons/md';

const SocialModal = ({ handleAddToNode, setShowModal }) => {
  const [social, setSocial] = useState('');
  const [code, setCode] = useState('');
  const [url, setUrl] = useState('');

  const handleEmbed = (event) => {
    event.preventDefault();

    handleAddToNode({
      type: 'social',
      code,
      url,
      children: [{ text: '' }],
    });
  };
  return (
    <div className='px-10 py-10 border rounded bg-white text-black'>
      <div className='flex justify-between items-center'>
        <p>Embed</p>
        <MdClose
          className='hover:text-green-800 cursor-pointer'
          size={20}
          onClick={() => setShowModal(false)}
        />
      </div>

      <div className='w-[50vw] h-min-[25vh]'>
        <div className='my-5'>
          <label
            htmlFor='social-media-platform'
            className='text-xs uppercase font-light'
          >
            social media platform
          </label>
          <select
            id='social-media-platform'
            name='social-media-platform'
            value={social}
            className='bg-gray-100 outline-none w-[100%] my-2 p-3 h-auto'
            onChange={(event) => setSocial(event.target.value)}
          >
            <option value='facebook'>Facebook</option>
            <option value='twitter'>Twitter</option>
            <option value='instagram'>Instagram</option>
            <option value='linkedin'>TikTok</option>
            <option value='whatsapp'>SnapChat</option>
          </select>
        </div>

        <div className='my-5'>
          <label
            htmlFor='social-media-url'
            className='text-xs uppercase font-light'
          >
            url
          </label>
          <input
            id='social-media-url'
            name='social-media-url'
            placeholder='Enter Social URL'
            type='text'
            className='block bg-gray-100 outline-none w-[100%] my-2 p-3'
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
        <div className='my-5'>
          <label
            htmlFor='social-media-code'
            className='text-xs uppercase font-light'
          >
            code
          </label>
          <input
            id='social-media-code'
            name='social-media-code'
            type='text'
            placeholder='Enter Embed Code'
            className='bg-gray-100 outline-none w-[100%] my-2 p-3'
            onChange={(event) => setCode(event.target.value)}
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
export default SocialModal;

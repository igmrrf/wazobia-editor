import { useState } from 'react';
import { BiSolidImage, BiSolidVideo } from 'react-icons/bi';
import { MdBubbleChart } from 'react-icons/md';
const options = [
  {
    title: 'Picture',
    formats: 'jpeg, png',
    Icon: <BiSolidImage size={30} />,
  },
  {
    title: 'Video',
    formats: 'JW Player, Youtube, Vimeo',
    Icon: <BiSolidVideo size={30} />,
  },
  {
    title: 'Social',
    formats: 'Instagram, Twitter, TikTok, Snapchat png',
    Icon: <MdBubbleChart size={30} />,
  },
];
const EmbedInput = ({
  show,
  editor,
  setShowModal,
  showModal,
  setShowEmbed,
}) => {
  const [formData, setFormData] = useState({
    url: '',
    width: '',
    height: '',
  });
  const handleUpload = (item) => {
    console.log({ item });
    setShowModal(true);
    setTimeout(() => {
      setShowEmbed(false);
    }, 100);
  };

  return (
    <div>
      {show && (
        <div className='popup'>
          {options.length &&
            options.map((item, i) => (
              <div
                key={i}
                className='flex col-span-2 w-min-[200px] w-80 gap-3 py-2 hover:bg-slate-100'
                onClick={() => handleUpload(item)}
              >
                {item.Icon}
                <div>
                  <h1>{item.title}</h1>
                  <span style={{ fontSize: '14px' }}>{item.formats}</span>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default EmbedInput;

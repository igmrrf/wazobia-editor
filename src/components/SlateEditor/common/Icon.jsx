import {
  AiOutlineDelete,
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowRight,
  AiOutlineTable,
} from 'react-icons/ai';
import { BiSolidImage } from 'react-icons/bi';
import {
  BsBlockquoteLeft,
  BsLink45Deg,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
} from 'react-icons/bs';
import { FaSubscript, FaSuperscript } from 'react-icons/fa';
import {
  MdAdd,
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatUnderlined,
  MdStrikethroughS,
  MdVideoLibrary,
} from 'react-icons/md';

const iconList = {
  bold: <MdFormatBold size={20} />,
  italic: <MdFormatItalic size={20} />,
  strikethrough: <MdStrikethroughS size={20} />,
  underline: <MdFormatUnderlined size={20} />,
  headingOne: <BsTypeH1 size={20} />,
  headingTwo: <BsTypeH2 size={20} />,
  headingThree: <BsTypeH3 size={20} />,
  blockquote: <MdFormatQuote size={20} />,
  superscript: <FaSuperscript size={15} />,
  subscript: <FaSubscript size={15} />,
  alignLeft: <MdFormatAlignLeft size={20} />,
  alignCenter: <MdFormatAlignCenter size={20} />,
  alignRight: <MdFormatAlignRight size={20} />,
  orderedList: <MdFormatListNumbered size={20} />,
  unorderedList: <MdFormatListBulleted size={20} />,
  link: <BsLink45Deg size={20} />,
  image: <BiSolidImage size={20} />,
  video: <MdVideoLibrary size={20} />,
  add: <MdAdd size={20} />,
  table: <AiOutlineTable size={20} />,
  row: <AiOutlineInsertRowBelow size={20} />,
  column: <AiOutlineInsertRowRight size={20} />,
  removeTable: <AiOutlineDelete size={20} />,
  quote: <BsBlockquoteLeft size={20} />,
};

const Icon = (props) => {
  const { icon } = props;
  return iconList[icon];
};

export default Icon;

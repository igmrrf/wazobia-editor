import { useCallback, useMemo, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { Editor, Point, Transforms, createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import EmbedInput from './Elements/Embed/EmbedInput';
import Image from './Elements/Image/Image';
import Link from './Elements/Link/Link';
import Modal from './Elements/Modal';
import Video from './Elements/Video/Video';
import Toolbar from './Toolbar/Toolbar';
import withEmbeds from './plugins/withEmbeds.js';
import withLinks from './plugins/withLinks.js';
import withTables from './plugins/withTable.js';
import './style.css';
import { fontFamilyMap, sizeMap } from './utils/SlateUtilityFunctions.js';

const Element = (props) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case 'headingOne':
      return <h1 {...attributes}>{children}</h1>;
    case 'headingTwo':
      return <h2 {...attributes}>{children}</h2>;
    case 'headingThree':
      return <h3 {...attributes}>{children}</h3>;
    case 'blockquote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'alignLeft':
      return (
        <div
          style={{ textAlign: 'left', listStylePosition: 'inside' }}
          {...attributes}
        >
          {children}
        </div>
      );
    case 'alignCenter':
      return (
        <div
          style={{ textAlign: 'center', listStylePosition: 'inside' }}
          {...attributes}
        >
          {children}
        </div>
      );
    case 'alignRight':
      return (
        <div
          style={{ textAlign: 'right', listStylePosition: 'inside' }}
          {...attributes}
        >
          {children}
        </div>
      );
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'orderedList':
      return (
        <ol type='1' {...attributes}>
          {children}
        </ol>
      );
    case 'unorderedList':
      return <ul {...attributes}>{children}</ul>;
    case 'link':
      return <Link {...props} />;

    case 'table':
      return (
        <table>
          <tbody {...attributes}>{children}</tbody>
        </table>
      );
    case 'table-row':
      return <tr {...attributes}>{children}</tr>;
    case 'table-cell':
      return <td {...attributes}>{children}</td>;
    case 'image':
      return <Image {...props} />;
    case 'video':
      return <Video {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.strikethrough) {
    children = (
      <span style={{ textDecoration: 'line-through' }}>{children}</span>
    );
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.superscript) {
    children = <sup>{children}</sup>;
  }
  if (leaf.subscript) {
    children = <sub>{children}</sub>;
  }
  if (leaf.color) {
    children = <span style={{ color: leaf.color }}>{children}</span>;
  }
  if (leaf.bgColor) {
    children = (
      <span style={{ backgroundColor: leaf.bgColor }}>{children}</span>
    );
  }
  if (leaf.fontSize) {
    const size = sizeMap[leaf.fontSize];
    children = <span style={{ fontSize: size }}>{children}</span>;
  }
  if (leaf.fontFamily) {
    const family = fontFamilyMap[leaf.fontFamily];
    children = <span style={{ fontFamily: family }}>{children}</span>;
  }
  return <span {...attributes}>{children}</span>;
};

const WazobiaEditor = () => {
  const editor = useMemo(
    () =>
      withHistory(withEmbeds(withTables(withLinks(withReact(createEditor()))))),
    []
  );

  const [showEmbed, setShowEmbed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalValues, setModalValues] = useState(null);

  const [value, setValue] = useState(initialValue);

  const renderElement = useCallback((props) => <Element {...props} />, []);

  const handleAddToNode = (node, at) => {
    const children = [...editor.children];

    children.forEach((node) =>
      editor.apply({ type: 'remove_node', path: [0], node })
    );

    const slackNode = {
      type: 'paragraph',
      children: [
        {
          text: 'You can delete images with the cross in the top left. Try deleting this sheep:',
        },
      ],
    };

    if (node) {
      // const nodes = Node.isNode(options.nodes)
      //   ? [options.nodes]
      //   : options.nodes;
      const nodes = [...children, node, slackNode];

      nodes.forEach((node, i) =>
        editor.apply({ type: 'insert_node', path: [i], node: node })
      );
    }

    const point = at && Point.isPoint(at) ? at : Editor.end(editor, []);
    console.log({ point });

    if (point) {
      Transforms.select(editor, point);
    }
  };

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div>
      <input placeholder='Add title' type='text' className='title-input text-2xl' width={'40vw'}  />
      <Slate
        editor={editor}
        initialValue={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Toolbar />
        <div className='editor-wrapper'>
          <Editable
            placeholder='Write something'
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            className='p-4 '
            style={{ outline: 'none' }}
          />
          <div className='popup-wrapper '>
            <BiPlus
              color='black'
              onClick={() => setShowEmbed(!showEmbed)}
              size={30}
              className='m-3 inline-block text-gray-600 rounded-xl border border-[#CEE3D4]-500 bg-[#CEE3D4]-500 text-sm'
              style={{
                backgroundColor: '#CEE3D4',
              }}
            />
            <EmbedInput
              editor={editor}
              show={showEmbed}
              setShowEmbed={setShowEmbed}
              setShowModal={setShowModal}
              setModalValues={setModalValues}
            />
          </div>
        </div>
      </Slate>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          handleAddToNode={handleAddToNode}
          modalValues={modalValues}
        />
      )}
    </div>
  );
};

export default WazobiaEditor;

const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'Enter Description Here',
      },
    ],
  },
];

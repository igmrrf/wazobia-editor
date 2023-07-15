const withEmbeds = (editor) => {
  const { isVoid } = editor;

  editor.isVoid = (element) =>
    ["video", "image"].includes(element.type) ? true : isVoid(element);
  return editor;
};

export default withEmbeds;


// const withImages = (editor) => {
//   const { insertData, isVoid } = editor;

//   editor.isVoid = (element) => {
//     return element.type === 'image' ? true : isVoid(element);
//   };

//   editor.insertData = (data) => {
//     const text = data.getData('text/plain');
//     const { files } = data;

//     if (files && files.length > 0) {
//       for (const file of files) {
//         const reader = new FileReader();
//         const [mime] = file.type.split('/');

//         if (mime === 'image') {
//           reader.addEventListener('load', () => {
//             const url = reader.result;
//             insertImage(editor, url);
//           });

//           reader.readAsDataURL(file);
//         }
//       }
//     } else if (isImageUrl(text)) {
//       insertImage(editor, text);
//     } else {
//       insertData(data);
//     }
//   };

//   return editor;
// };


// import React, { useMemo } from 'react'
// import imageExtensions from 'image-extensions'
// import isUrl from 'is-url'
// import isHotkey from 'is-hotkey'
// import { Transforms, createEditor, Descendant } from 'slate'
// import {
//   Slate,
//   Editable,
//   useSlateStatic,
//   useSelected,
//   useFocused,
//   withReact,
//   ReactEditor,
// } from 'slate-react'
// import { withHistory } from 'slate-history'
// import { css } from '@emotion/css'

// import { Button, Icon, Toolbar } from '../components'
// import { ImageElement } from './custom-types'
// import Button from '../common/Button';
// import Icon from '../common/Icon';

// const ImagesExample = () => {
//   const editor = useMemo(
//     () => withImages(withHistory(withReact(createEditor()))),
//     []
//   )

//   return (
//     <Slate editor={editor} initialValue={initialValue}>
//       <Toolbar>
//         <InsertImageButton />
//       </Toolbar>
//       <Editable
//         onKeyDown={event => {
//           if (isHotkey('mod+a', event)) {
//             event.preventDefault()
//             Transforms.select(editor, [])
//           }
//         }}
//         renderElement={props => <Element {...props} />}
//         placeholder="Enter some text..."
//       />
//     </Slate>
//   )
// }


// const insertImage = (editor, url) => {
//   const text = { text: '' }
//   const image = { type: 'image', url, children: [text] }
//   Transforms.insertNodes(editor, image)
// }

// const Element = props => {
//   const { attributes, children, element } = props

//   switch (element.type) {
//     case 'image':
//       return <Image {...props} />
//     default:
//       return <p {...attributes}>{children}</p>
//   }
// }

// const Image = ({ attributes, children, element }) => {
//   const editor = useSlateStatic()
//   const path = ReactEditor.findPath(editor, element)

//   const selected = useSelected()
//   const focused = useFocused()
//   return (
//     <div {...attributes}>
//       {children}
//       <div
//         contentEditable={false}
//         className={css`
//           position: relative;
//         `}
//       >
//         <img
//           src={element.url}
//           className={css`
//             display: block;
//             max-width: 100%;
//             max-height: 20em;
//             box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
//           `}
//         />
//         <Button
//           active
//           onClick={() => Transforms.removeNodes(editor, { at: path })}
//           className={css`
//             display: ${selected && focused ? 'inline' : 'none'};
//             position: absolute;
//             top: 0.5em;
//             left: 0.5em;
//             background-color: white;
//           `}
//         >
//           <Icon>delete</Icon>
//         </Button>
//       </div>
//     </div>
//   )
// }

// const InsertImageButton = () => {
//   const editor = useSlateStatic()
//   return (
//     <Button
//       onMouseDown={event => {
//         event.preventDefault()
//         const url = window.prompt('Enter the URL of the image:')
//         if (url && !isImageUrl(url)) {
//           alert('URL is not an image')
//           return
//         }
//         url && insertImage(editor, url)
//       }}
//     >
//       <Icon>image</Icon>
//     </Button>
//   )
// }

// const isImageUrl = url => {
//   if (!url) return false
//   if (!isUrl(url)) return false
//   const ext = new URL(url).pathname.split('.').pop()
//   return imageExtensions.includes(ext)
// }



// // export default ImagesExample
const toolbarGroups = [
  [
    {
      id: 1,
      format: 'format',
      type: 'dropdown',
      options: [
        { text: 'Paragraph', value: 'paragraph' },
        { text: 'Code', value: 'code' },
        { text: 'Image', value: 'image' },
        { text: 'Video', value: 'video' },
        { text: 'Link', value: 'image' },
        { text: 'Table', value: 'table' },
      ],
    },
  ],
  [
    {
      id: 20,
      format: 'link',
      type: 'link',
    },
    {
      id: 21,
      format: 'image',
      type: 'embed',
    },
  ],
  [
    {
      id: 17,
      format: 'alignLeft',
      type: 'block',
    },
    {
      id: 18,
      format: 'alignCenter',
      type: 'block',
    },
    {
      id: 19,
      format: 'alignRight',
      type: 'block',
    },
  ],
  [
    {
      id: 3,
      format: 'bold',
      type: 'mark',
    },
    {
      id: 4,
      format: 'italic',
      type: 'mark',
    },
  ],
  [
    {
      id: 15,
      format: 'orderedList',
      type: 'block',
    },
    {
      id: 16,
      format: 'unorderedList',
      type: 'block',
    },
    {
      id: 25,
      format: 'quote',
      type: 'block',
    },
  ],
];

export default toolbarGroups;

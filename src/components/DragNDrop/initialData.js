const initialData = {
  habits: {
    habit1: {
      id: 'habit1',
      content: 'Make Bed',
    },
    habit2: {
      id: 'habit2',
      content: 'Running',
    },
    habit3: {
      id: 'habit3',
      content: 'Read a book',
    },
    habit4: {
      id: 'habit4',
      content: 'Jump someone',
    },
    habit5: {
      id: 'habit5',
      content: 'Fight Nate Diaz',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: '1% Better',
      habitIDs: ['habit1', 'habit2', 'habit3', 'habit4'],
    },
    'column-2': {
      id: 'column-1',
      title: 'Completed',
      habitIDs: ['habit5'],

    },
  },
  columnOrder: ['column-1', 'column-2'],
};

export default initialData;

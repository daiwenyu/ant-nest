import React from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Board({ children }) {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}

function Drag({ children }) {
  const [{}, drag] = useDrag();
  return <div ref={drag}>{children}</div>;
}

function Drop({ children }) {
  return <div>{children}</div>;
}

export default {
  Board,
  Drag,
  Drop,
};

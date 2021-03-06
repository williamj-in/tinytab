import React, { useState, useEffect } from 'react';
import Shortcut from './Shortcut';
import { Droppable } from 'react-beautiful-dnd';

export default function Shortcuts(props) {
  const { list, editShortcut, deleteShortcut } = props;

  return (
    <Droppable droppableId={'all-shortcuts'} direction="horizontal" style={{ transform: 'none' }}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ display: 'flex', flexDirection: 'row', marginTop: -60 }}
        >
          {list.map((item, index) => (
            <Shortcut
              key={item.id}
              title={item.title}
              index={index}
              url={item.url}
              id={item.id}
              editShortcut={editShortcut}
              deleteShortcut={deleteShortcut}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

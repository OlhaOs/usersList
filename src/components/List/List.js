import React from 'react';
import './List.css';
export default function List({ list, children }) {
  const additionalClass = list.some(item => item.thumbnailUrl) ? 'albumImages' : '';


  return (
    <>
      <ul className={`list ${additionalClass}`}>
        {list.map(item => (
          <li key={item.id} className='listItem'>
            {!item.thumbnailUrl && (item.name || item.title)}
            {children &&
              React.cloneElement(children, {
                id: item.id,
                thumbnailUrl: item.thumbnailUrl,
                title: item.title,
              })}
          </li>
        ))}
      </ul>
    </>
  );
}

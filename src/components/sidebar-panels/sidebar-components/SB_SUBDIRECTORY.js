import React from 'react';
import SB_FILE from './SB_FILE';
import { IoIosArrowDown as CaretIcon } from 'react-icons/io';

export default (props) => {
  return (
    <div
      className={`subdirectory ${
        props.collapsedMenus.includes(props.title) ? 'collapsed' : ''
      }`}>
      <h1
        className="menu-header"
        onClick={() => {
          props.modMenu(props.title);
        }}>
        <CaretIcon />
        {props.title}
      </h1>

      <ul className="subdirectory-files">
        {props.files.map((file) => {
          return (
            <li>
              <SB_FILE
                title={file}
                openWindows={props.openWindows} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

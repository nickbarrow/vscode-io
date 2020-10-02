import React from 'react';
import { Link } from 'react-router-dom';
import getFileIcon from '../../../utils/getFileIcon';

// This function should never recieve undefined files.
export default function SB_FILE(props) {
  const EXE_FILE_TYPES = [
    'js',
    'html'
  ]
  // Flag if a file should be a link ('executable').
  let ext = props.title.substr(props.title.lastIndexOf('.') + 1);
  let exe = EXE_FILE_TYPES.includes(ext);
  
  return (
    <div className="file">
      {exe ? (
        <Link
          to={`/${props.title}`}
          onClick={() => {
            props.openWindows(props.title);
          }}>
          <h1 className="file-title">
            <span className="file-icon">{getFileIcon(props.title)}</span>
            {props.title}
          </h1>
        </Link>
      ) : (
        <h1 className="file-title">
          <span className="file-icon">{getFileIcon(props.title)}</span>
          {props.title}
        </h1>
      )}
    </div>
  );
}

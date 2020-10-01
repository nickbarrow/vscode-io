import React from 'react';
import { Link } from 'react-router-dom';
import getFileIcon from '../../utils/getFileIcon';

export default function SidebarFile (props) {
  return (
    <li>
      { props.link ? (
        <Link
          to={`/${props.link}`}
          onClick={() => { props.openWindows(props.link) }}>
          <h1 className="file">
            {getFileIcon(props.link)}{props.name}
          </h1>
        </Link>
      ) : (
        <h1 className="file">
          {getFileIcon(props.link)}{props.name}
        </h1>
      )}
    </li>
  )
}
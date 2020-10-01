import React from 'react';
import { Link } from 'react-router-dom';
import { VscClose as CloseIcon } from 'react-icons/vsc';
import getFileIcon from '../../utils/getFileIcon';
import '../../../styles/WindowTabs.scss';

function assignFallbackTab(openWindows, activeWindow) {
  if (openWindows.length > 1) {
    for (let i = openWindows.length-1; i >= 0; i--)
      if (openWindows[i] !== activeWindow) return openWindows[i];
  } else return null;
}

export default function WindowTabs(props) {
  var fallbackTab = assignFallbackTab(props.openWindows, props.activeWindow);

  return (
    <div className="window-tabs" key={props.activeWindow}>
      <ul className="tabs-list">
        {/* Map open windows */}
        { props.openWindows.map(window => {
          return (
            // Style active tab
            <li
              className={`${props.activeWindow === window ? 'active' : '' }`}
              onClick={() => { props.setActiveWindow(window) }}>
              {/* Make the headers links to window. */}
              <Link
                to={`/${window}`}>
                {/* Use getFileIcon() to get corresponding icon */}
                {getFileIcon(window)}{window}
              </Link>

              {/* Only make close a link if not active window and a fallback exists.
                  This way you can close other windows and not redirect. */}
              { props.activeWindow === window && fallbackTab ? (
                <Link to={`/${fallbackTab}`}>
                  <span
                    className="close-tab"
                    onClick={() => { props.closeWindow(window) }}>
                    <CloseIcon />
                  </span>
                </Link>
              ) : (
                <span
                  className="close-tab"
                  onClick={() => { props.closeWindow(window) }}>
                  <CloseIcon />
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

import React from 'react';

export default function ChangesPanel() {
  return (
    <div className="sidebar-panel">
      <div className="panel-menu">
        <h1 className="menu-header">Changelog</h1>

        <div className="menu-body">
          <ul className="menu__list">
            <li className="menu__list-item">
              {"<> Added a thing"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
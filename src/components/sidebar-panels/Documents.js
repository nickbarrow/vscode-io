import React from 'react';
import SB_MENU from "./sidebar-components/SB_MENU";

const FILES = {
  "subdirectories": [
    ['build', ['Craft.js', 'Consumables.js', 'Inventory.html']],
    ['node-modules', ['@types', '@other', '@modules']],
    ['src', ['About.js', 'Camp.js']]  
  ],
  "files": [
    'gulpfile.js',
    'package.json',
    'package_lock.json',
    'README.md'  
  ]
};

export default function Documents(props) {
  return (
    <div className="sidebar-panel">

      <SB_MENU 
        title={"FILES"}
        subdirectories={FILES.subdirectories}
        files={FILES.files}
        modMenu={props.modMenu}
        collapsedMenus={props.collapsedMenus}
        openWindows={props.openWindows}
        />

      {/* <div
        className={`panel-menu ${
          props.collapsedMenus.includes('files') ? '' : 'expanded'
        }`}>
        <h1
          className="menu-header"
          onClick={() => {
            this.modMenu('files');
          }}>
          <CaretIcon />
          Files
        </h1>
        <div className="menu-body">
          <ul className="menu__list">
            <li className="menu__list-item">
              <div className="submenu">
                <h1 className="submenu-header">
                  <CaretIcon />
                  build
                </h1>
              </div>
            </li>

            <li className="menu__list-item">
              <div
                className={`submenu ${
                  props.collapsedMenus.includes('node-modules')
                    ? ''
                    : 'expanded'
                }`}>
                <h1
                  className="submenu-header"
                  onClick={() => {
                    this.modMenu('node-modules');
                  }}>
                  <CaretIcon />
                  node_modules
                </h1>

                <ul className="submenu-list">
                  <li className="submenu-list__item">
                    <CaretIcon />
                    @types
                  </li>
                  <li className="submenu-list__item">
                    <CaretIcon />
                    @other
                  </li>
                  <li className="submenu-list__item">
                    <CaretIcon />
                    @stuff
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu__list-item">
              <div
                className={`submenu ${
                  props.collapsedMenus.includes('src') ? '' : 'expanded'
                }`}>
                <h1
                  className="submenu-header"
                  onClick={() => {
                    props.modMenu('src');
                  }}>
                  <CaretIcon />
                  src
                </h1>

                <ul className="submenu-list">
                  {props.files.map((file) => {
                    return (
                      <SidebarFile
                        name={file}
                        link={file}
                        openWindows={props.openWindows}
                      />
                    );
                  })}
                </ul>
              </div>
            </li>

            <li className="menu__list-item">
              <h1 className="file">
                <GulpIcon color={'tomato'} size={20} />
                gulpfile.js
              </h1>
            </li>
            <li className="menu__list-item">
              <h1 className="file">
                <JSONIcon color={'yellow'} size={20} />
                package.json
              </h1>
            </li>
            <li className="menu__list-item">
              <h1 className="file">
                <JSONIcon color={'yellow'} size={20} />
                package_lock.json
              </h1>
            </li>
            <li className="menu__list-item">
              <h1 className="file">
                <ReadmeIcon color={'lightblue'} size={20} />
                README.md
              </h1>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`panel-menu  ${
          props.collapsedMenus.includes('items') ? '' : 'expanded'
        }`}>
        <h1 className="menu-header">
          <CaretIcon />
          Items
        </h1>
        <div className="menu-body"></div>
      </div> */}
    </div>
  );
}

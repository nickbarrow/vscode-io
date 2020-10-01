import React from 'react';

import { VscJson as JSONIcon } from 'react-icons/vsc';
import { DiGulp as GulpIcon } from 'react-icons/di';
import { SiJavascript as JSIcon } from 'react-icons/si';
import { HiOutlineInformationCircle as ReadmeIcon } from 'react-icons/hi';
import { IoIosArrowDown as CaretIcon } from 'react-icons/io';

import SidebarFile from '../sidebar-panels/SidebarFile';

export default function FilesPanel (props) {

  return (
    <div className="sidebar-panel">
      {/* Panel menus */}
      <div className={`panel-menu ${ props.collapsedMenus.includes('files') ? '' : 'expanded' }`}>
        <h1
          className="menu-header"
          onClick={() => {
            this.modMenu('files'); }}>
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
                  props.collapsedMenus.includes('node-modules') ? '' : 'expanded' }`}>
                <h1
                  className="submenu-header"
                  onClick={() => { this.modMenu('node-modules') }}>
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
                  props.collapsedMenus.includes('src') ? '' : 'expanded' }`}>
                <h1
                  className="submenu-header"
                  onClick={() => { props.modMenu('src') }}>
                  <CaretIcon />
                  src
                </h1>

                <ul className="submenu-list">
                  { props.files.map(file => {
                    return <SidebarFile name={file} link={file} openWindows={props.openWindows} />
                  }) }
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
      </div>
    </div>
  )
}
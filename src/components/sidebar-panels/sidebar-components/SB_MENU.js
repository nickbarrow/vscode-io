import React from 'react';
import { IoIosArrowDown as CaretIcon } from 'react-icons/io';
import SB_FILE from './SB_FILE';
import SB_SUBDIRECTORY from './SB_SUBDIRECTORY';

export default function SB_MENU(props) {
  return (
    <div className={`panel-menu ${props.collapsed ? '' : 'expanded'}`}>
      <h1
        className="menu-header"
        onClick={() => {
          this.modMenu(props.title);
        }}>
        <CaretIcon />
        {props.title}
      </h1>

      { props.subdirectories.map((subdir) => {
          return (
            <SB_SUBDIRECTORY
              title={subdir[0]}
              files={subdir.slice(1)[0]}  // idk why but this slice makes it nested?
              modMenu={props.modMenu}
              collapsed={props.collapsedMenus.includes(subdir[0])}
              collapsedMenus={props.collapsedMenus}
              openWindows={props.openWindows} />
          );
        })
      }
      
      <div className="loose-files">
        { props.files.map((file) => {
            return (
              <SB_FILE
                title={file}
                openWindows={props.openWindows} />
            );
          })
        }
      </div>
    </div>
  );
}

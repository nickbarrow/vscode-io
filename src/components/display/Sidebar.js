import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import '../../../styles/Sidebar.scss';
import {
  HiOutlineDocumentDuplicate as DocumentsIcon,
  HiOutlineSearch as SearchIcon,
  HiOutlineViewGridAdd as ExtensionsIcon,
  HiOutlineTerminal as TerminalIcon,
  HiOutlineInformationCircle as ReadmeIcon
} from 'react-icons/hi';
import { RiGitBranchLine as GitIcon } from 'react-icons/ri';

import FilesPanel from '../sidebar-panels/FilesPanel';
import ChangesPanel from "../sidebar-panels/ChangesPanel";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      openTab: 'docs',
      collapsedMenus: []
    };
  }

  // Collapse or expand menus.
  modMenu = (menu) => {
    let collapsedMenus = this.state.collapsedMenus;
    // Check if menu exists in openMenus.
    var idx = collapsedMenus.indexOf(menu);
    // Splice out that menu if already open.
    if (idx >= 0) collapsedMenus.splice(idx, 1);
    else collapsedMenus.push(menu);
    this.setState({ collapsedMenus });
  };

  openFile = (file, filetype) => {
    return <Redirect to={`/${file}`} />;
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__tabs">
          <ul className="tab__list">
            <li>
              <DocumentsIcon
                size={'30'}
                color={this.state.openTab === 'docs' ? 'white' : 'gray'}
              />
            </li>
            <li>
              <SearchIcon
                size={'30'}
                color={this.state.openTab === 'search' ? 'white' : 'gray'}
              />
            </li>
            <li>
              <GitIcon
                size={'30'}
                color={this.state.openTab === 'git' ? 'white' : 'gray'}
              />
            </li>
            <li>
              <ExtensionsIcon
                size={'30'}
                color={this.state.openTab === 'ext' ? 'white' : 'gray'}
              />
            </li>
            <li>
              <TerminalIcon
                size={'30'}
                color={this.state.openTab === 'term' ? 'white' : 'gray'}
              />
            </li>
          </ul>
        </div>

        {/* Menus container */}
        <div className="sidebar__menus">
          {/* Tab menu panels */}
          <FilesPanel
            collapsedMenus={this.state.collapsedMenus}
            files={this.props.files}
            modMenu={this.modMenu}
            openWindows={this.props.openWindows} />

          <ChangesPanel />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { UserContext } from '../../providers/UserProvider';
import '../../../styles/Sidebar.scss';
import {
    HiOutlineDocumentDuplicate as DocumentsIcon,
    HiOutlineSearch as SearchIcon,
    HiOutlineViewGridAdd as ExtensionsIcon,
    HiOutlineTerminal as TerminalIcon,
    HiOutlineInformationCircle as ReadmeIcon
} from 'react-icons/hi';
import { IoIosArrowDown as CaretIcon } from 'react-icons/io';
import { RiGitBranchLine as GitIcon } from 'react-icons/ri';
import { VscJson as JSONIcon } from 'react-icons/vsc';
import { DiGulp as GulpIcon } from 'react-icons/di';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            openTab: 'docs',
            openMenus: ['files', 'node-modules'],
            openFiles: []
        }
    }

    modMenu = (menu) => {
        let openMenus = this.state.openMenus;
        // Check if menu exists in openMenus.
        var idx = openMenus.indexOf(menu);
        // Splice out that menu if already open.
        if (idx >= 0) openMenus.splice(idx, 1);
        else openMenus.push(menu);
        this.setState({ openMenus });
    }

    render () {

        return (
            <div className="sidebar">
                <div className="sidebar__tabs">
                    <ul className="tab__list">
                        <li><DocumentsIcon size={"30"} color={ this.state.openTab === "docs" ? "white" : "gray"} /></li>
                        <li><SearchIcon size={"30"} color={ this.state.openTab === "search" ? "white" : "gray"} /></li>
                        <li><GitIcon size={"30"} color={ this.state.openTab === "git" ? "white" : "gray"} /></li>
                        <li><ExtensionsIcon size={"30"} color={ this.state.openTab === "ext" ? "white" : "gray"} /></li>
                        <li><TerminalIcon size={"30"} color={ this.state.openTab === "term" ? "white" : "gray"} /></li>
                    </ul>
                </div>
    
                {/* Menus container */}
                <div className="sidebar__menus">
                    {/* Tab menu panels */}
                    <div className="sidebar-panel">
                        {/* Panel menus */}
                        <div
                            className={`panel-menu ${ this.state.openMenus.includes("files") ? "active" : "" }`}>
                            <h1
                                className="menu-header"
                                onClick={() => { this.modMenu('files') } }>
                                <CaretIcon />Files</h1>
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
                                        <div className={`submenu ${ this.state.openMenus.includes('node-modules') ? 'active' : '' }`}>
                                            <h1 
                                                className="submenu-header"
                                                onClick={() => { this.modMenu('node-modules') } }>
                                                <CaretIcon />
                                                node_modules
                                            </h1>
                                            <ul className="submenu-list">
                                                <li className="submenu-list__item"><CaretIcon />@types</li>
                                                <li className="submenu-list__item"><CaretIcon />@other</li>
                                                <li className="submenu-list__item"><CaretIcon />@stuff</li>
                                            </ul>
                                        </div>
                                    </li>
    
                                    <li className="menu__list-item">
                                        <div className={`submenu ${ this.state.openMenus.includes('src') ? 'active' : '' }`}>
                                            <h1 className="submenu-header">
                                                <CaretIcon />
                                                src
                                            </h1>
                                        </div>
                                    </li>
    
                                    <li className="menu__list-item">
                                        <h1 className="file"><GulpIcon color={"tomato"} size={20} />gulpfile.js</h1>
                                    </li>
                                    <li className="menu__list-item">
                                        <h1 className="file"><JSONIcon color={"yellow"} size={20} />package.json</h1>
                                    </li>
                                    <li className="menu__list-item">
                                        <h1 className="file"><JSONIcon color={"yellow"} size={20} />package_lock.json</h1>
                                    </li>
                                    <li className="menu__list-item">
                                        <h1 className="file"><ReadmeIcon color={"lightblue"} size={20} />README.md</h1>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                        <div className={`panel-menu  ${ this.state.openMenus.includes("items") ? "active" : "" }`}>
                            <h1 className="menu-header"><CaretIcon />Items</h1>
                            <div className="menu-body">
                            </div> 
                        </div>
    
                    </div>
                </div>
            </div>
        );
    }
};
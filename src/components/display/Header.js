import React, { useContext, useState } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { Link } from 'react-router-dom';
import '../../../styles/Header.scss';

const Header = (props) => {
    const user = useContext(UserContext);
    const { photoURL } = user || {};
    const [openMenu, setOpenMenu] = useState(null);
    const closeMenus = () => setOpenMenu(null);

    return (
        <div className="toolbar">
            <div className="toolbar__left">
                {user && (
                    <Link to="/user">
                        <img
                            src={photoURL}
                            className="google-user-img"
                            alt="Google User"
                        />
                    </Link>
                )}
                <ul className="left-menu">
                    <li
                        className="toolbar-menu__item"
                        onClick={() => {
                            setOpenMenu('File');
                        }}
                        onMouseLeave={() => {
                            closeMenus();
                        }}>
                        File
                        <div
                            className={`toolbar__dropdown-menu ${
                                openMenu === 'File' ? 'active' : ''
                            }`}>
                            <ul>
                                <li>New File</li>
                                <li>New Window</li>
                                <hr />
                                <li>Open File</li>
                                <li>Open Folder</li>
                                <li>Open Workspace</li>
                                <hr />
                                <li>Save</li>
                                <li>Save as...</li>
                                <li>Save All</li>
                                <hr />
                                <li>Auto Save</li>
                                <li>Preferences</li>
                                <hr />
                                <li>Exit</li>
                            </ul>
                        </div>
                    </li>
                    <li
                        className="toolbar-menu__item"
                        onClick={() => {
                            setOpenMenu('Edit');
                        }}
                        onMouseOut={() => {
                            // closeMenus();
                        }}>
                        Edit
                    </li>
                    <li
                        className="toolbar-menu__item"
                        onClick={() => {
                            setOpenMenu('Selection');
                        }}
                        onMouseOut={() => {
                            // closeMenus();
                        }}>
                        Selection
                    </li>
                    <li
                        className="toolbar-menu__item"
                        onClick={() => {
                            setOpenMenu('View');
                        }}
                        onMouseOut={() => {
                            // closeMenus();
                        }}>
                        View
                    </li>
                    <li
                        className="toolbar-menu__item"
                        onClick={() => {
                            setOpenMenu('Go');
                        }}
                        onMouseOut={() => {
                            // closeMenus();
                        }}>
                        Go
                    </li>
                    <li
                        className="toolbar-menu__item"
                        onClick={() => {
                            setOpenMenu('Run');
                        }}
                        onMouseOut={() => {
                            // closeMenus();
                        }}>
                        Run
                    </li>
                    <li
                        className="toolbar-menu__item"
                        onClick={() => {
                            setOpenMenu('Terminal');
                        }}
                        onMouseOut={() => {
                            // closeMenus();
                        }}>
                        Terminal
                    </li>
                </ul>
            </div>

            <div className="toolbar_center">
                <p>
                    <span className="path__gray">
                        React
                        <span className="path__slash">/</span>
                        Native
                        <span className="path__slash">/</span>
                    </span>
                    {props.path}
                </p>
            </div>
        </div>
    );
};

export default Header;

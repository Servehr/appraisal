import { useState, Context } from "react";

export const Head = () => 
{
    return (
        <>
            <header id="topnav" className="navbar navbar-default navbar-fixed-top" role="banner">
                <div className="logo-area">
                    <span id="trigger-sidebar" className="toolbar-trigger toolbar-icon-bg">
                        <a href="#/" data-toggle="tooltips" data-placement="right" title="Toggle Sidebar">
                            <span className="icon-bg">
                                <i className="ti ti-menu"></i>
                            </span>
                        </a>
                    </span>
                    
                    <a className="navbar-brand" href="index.html">Avenxo</a>

                    <div className="toolbar-icon-bg hidden-xs" id="toolbar-search">
                        <div className="input-group">
                            <span className="input-group-btn"><button className="btn" type="button"><i className="ti ti-search"></i></button></span>
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <span className="input-group-btn"><button className="btn" type="button"><i className="ti ti-close"></i></button></span>
                        </div>
                    </div>

                </div>

                <ul className="nav navbar-nav toolbar pull-right">

                    <li className="toolbar-icon-bg visible-xs-block" id="trigger-toolbar-search">
                        <a href="#/" title="x"><span className="icon-bg"><i className="ti ti-search"></i></span></a>
                    </li>
                    
                    <li className="toolbar-icon-bg hidden-xs">
                        <a href="#/" title="x">
                            <span className="icon-bg">
                                <i className="ti ti-world"></i>
                            </span>
                        </a>
                    </li>

                    <li className="toolbar-icon-bg hidden-xs">
                        <a href="#/" title="x"><span className="icon-bg"><i className="ti ti-view-grid"></i></span></a>
                    </li>

                    <li className="toolbar-icon-bg hidden-xs" id="trigger-fullscreen">
                        <a href="#/" title="x" className="toggle-fullscreen"><span className="icon-bg"><i className="ti ti-fullscreen"></i></span></a>
                    </li>

                    <li className="dropdown toolbar-icon-bg hidden-xs">
                        <a href="#/" className="hasnotifications dropdown-toggle" data-toggle='dropdown'><span className="icon-bg"><i className="ti ti-email"></i></span><span
                        className="badge badge-deeporange">2</span></a>
                        <div className="dropdown-menu notifications arrow">
                            <div className="topnav-dropdown-header">
                                <span>Messages</span>
                            </div>
                            <div className="scroll-pane">
                                <ul className="media-list scroll-content">
                                    <li className="media notification-message">
                                        <a href="#/">
                                            <div className="media-left">
                                                <img className="img-circle avatar" src="assets/demo/avatar/avatar_01.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading"><strong>Vincent Keller</strong> <span className="text-gray">‒ Design should be ...</span></h4>
                                                <span className="notification-time">2 mins ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-message">
                                        <a href="#/">
                                            <div className="media-left">
                                                <img className="img-circle avatar" src="assets/demo/avatar/avatar_09.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading"><strong>Frend Pratt</strong> <span className="text-gray">‒ I will start with the ...</span></h4>
                                                <span className="notification-time">40 mins ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-message">
                                        <a href="#/">
                                            <div className="media-left">
                                                <img className="img-circle avatar" src="assets/demo/avatar/avatar_02.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading"><strong>Cynthia Hines</strong> <span className="text-gray">‒ Interior bits are ...</span></h4>
                                                <span className="notification-time">6 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-message">
                                        <a href="#/">
                                            <div className="media-left">
                                                <img className="img-circle avatar" src="assets/demo/avatar/avatar_03.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading"><strong>Robin Horton</strong> <span className="text-gray">‒ Are you even ...</span></h4>
                                                <span className="notification-time">8 days ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-message">
                                        <a href="#/">
                                            <div className="media-left">
                                                <img className="img-circle avatar" src="assets/demo/avatar/avatar_04.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading"><strong>Amanda Torrez</strong> <span className="text-gray">‒ The message is ...</span></h4>
                                                <span className="notification-time">16 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-message">
                                        <a href="#/">
                                            <div className="media-left">
                                                <img className="img-circle avatar" src="assets/demo/avatar/avatar_05.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading"><strong>Khan Farhan</strong> <span className="text-gray">‒ Expected the stuff ...</span></h4>
                                                <span className="notification-time">2 days ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-message">
                                        <a href="#/">
                                            <div className="media-left">
                                                <img className="img-circle avatar" src="assets/demo/avatar/avatar_06.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading"><strong>Will Whedon</strong> <span className="text-gray">‒ The movie of this ...</span></h4>
                                                <span className="notification-time">4 days ago</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="#/">See all messages</a>
                            </div>
                        </div>
                    </li>
                    
                    <li className="dropdown toolbar-icon-bg">
                        <a href="#/" className="hasnotifications dropdown-toggle" data-toggle='dropdown'>
                            <span className="icon-bg"><i className="ti ti-bell"></i></span><span className="badge badge-deeporange">2</span></a>
                        <div className="dropdown-menu notifications arrow">
                            <div className="topnav-dropdown-header">
                                <span>Notifications</span>
                            </div>
                            <div className="scroll-pane">
                                <ul className="media-list scroll-content">
                                    <li className="media notification-success">
                                        <a href="#/">
                                            <div className="media-left">
                                                <span className="notification-icon"><i className="ti ti-check"></i></span>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading">Update 1.0.4 successfully pushed</h4>
                                                <span className="notification-time">8 mins ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-info">
                                        <a href="#/">
                                            <div className="media-left">
                                                <span className="notification-icon"><i className="ti ti-check"></i></span>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading">Update 1.0.3 successfully pushed</h4>
                                                <span className="notification-time">24 mins ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-teal">
                                        <a href="#/">
                                            <div className="media-left">
                                                <span className="notification-icon"><i className="ti ti-check"></i></span>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading">Update 1.0.2 successfully pushed</h4>
                                                <span className="notification-time">16 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-indigo">
                                        <a href="#/">
                                            <div className="media-left">
                                                <span className="notification-icon"><i className="ti ti-check"></i></span>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading">Update 1.0.1 successfully pushed</h4>
                                                <span className="notification-time">2 days ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="media notification-danger">
                                        <a href="#/">
                                            <div className="media-left">
                                                <span className="notification-icon"><i className="ti ti-arrow-up"></i></span>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="notification-heading">Initial Release 1.0</h4>
                                                <span className="notification-time">4 days ago</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="#/">See all notifications</a>
                            </div>
                        </div>
                    </li>

                    <li className="dropdown toolbar-icon-bg">
                        <a href="#/" title="x" className="dropdown-toggle username" data-toggle="dropdown">
                            <img className="img-circle" src="assets/demo/avatar/avatar_15.png" alt="" />
                        </a>
                        <ul className="dropdown-menu userinfo arrow">
                            <li><a href="#/"><i className="ti ti-user"></i><span>Profile</span><span className="badge badge-info pull-right">80%</span></a></li>
                            <li><a href="#/"><i className="ti ti-panel"></i><span>Account</span></a></li>
                            <li><a href="#/"><i className="ti ti-settings"></i><span>Settings</span></a></li>
                            <li className="divider"></li>
                            <li><a href="#/"><i className="ti ti-stats-up"></i><span>Earnings</span></a></li>
                            <li><a href="#/"><i className="ti ti-view-list-alt"></i><span>Statement</span></a></li>
                            <li><a href="#/"><i className="ti ti-money"></i><span>Withdrawals</span></a></li>
                            <li className="divider"></li>
                            <li><a href="#/"><i className="ti ti-shift-right"></i><span>Sign Out</span></a></li>
                        </ul>
                    </li>

                </ul>

            </header>   
        </>
    )

}


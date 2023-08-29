import { useState, Context } from "react";
import { Sidebar } from "./sidebar/Sidebar"
import female from '../passports/female.jpg'
import './view.css'

export const Header = () => 
{
    const [open, setOpen] = useState<boolean>(false)

    return (
      <>
        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
              <a href="index.html" className="logo d-flex align-items-center">
                {/* <img src="assets/img/logo.png" alt=""/> */}
                <span  style={{fontSize: '20px', marginLeft: '30px'}} className="d-none d-lg-block">180-CONDUCT</span>
              </a>
              {/* <i className="bi bi-list toggle-sidebar-btn" onClick={() => setOpen(!open)}></i> */}
              <i className="bi bi-list toggle-sidebar-btn ml-5"  style={{fontSize: '22px'}}></i>
            </div>
        
            <div className="search-bar">
              <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                <button type="submit" title="Search" className="showMe"><i className="bi bi-search showOnHover"></i></button>
              </form>
            </div>
        
            <nav className="header-nav ms-auto">
              <ul className="d-flex align-items-center">
        
                <li className="nav-item d-block d-lg-none">
                  <a className="nav-link nav-icon search-bar-toggle " href="#/">
                    <i className="bi bi-search"></i>
                  </a>
                </li>
        
                <li className="nav-item dropdown">
        
                  <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-bell" style={{fontSize: '18px'}}></i>
                    <span className="badge bg-primary badge-number" style={{fontSize: '11px'}}>4</span>
                  </a>
        
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li className="dropdown-header">
                      You have 4 new notifications
                      <a href="#/"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li className="notification-item">
                      <i className="bi bi-exclamation-circle text-warning"></i>
                      <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                      </div>
                    </li>
        
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li className="notification-item">
                      <i className="bi bi-x-circle text-danger"></i>
                      <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                      </div>
                    </li>
        
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li className="notification-item">
                      <i className="bi bi-check-circle text-success"></i>
                      <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hrs. ago</p>
                      </div>
                    </li>
        
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li className="notification-item">
                      <i className="bi bi-info-circle text-primary"></i>
                      <div>
                        <h4>Dicta reprehenderit</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hrs. ago</p>
                      </div>
                    </li>
        
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li className="dropdown-footer">
                      <a href="#/">Show all notifications</a>
                    </li>
        
                  </ul>
        
                </li>
        
                <li className="nav-item dropdown">
        
                  <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-chat-left-text" style={{fontSize: '18px'}}></i>
                    <span className="badge bg-success badge-number" style={{fontSize: '11px'}}>3</span>
                  </a>
        
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                    <li className="dropdown-header">
                      You have 3 new messages
                      <a href="#/"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li className="message-item">
                      <a href="#/">
                        <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle"/>
                        <div>
                          <h4>Maria Hudson</h4>
                          <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                          <p>4 hrs. ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li className="message-item">
                      <a href="#/">
                        <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle"/>
                        <div>
                          <h4>Anna Nelson</h4>
                          <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                          <p>6 hrs. ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li className="message-item">
                      <a href="#/">
                        <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle"/>
                        <div>
                          <h4>David Muldon</h4>
                          <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                          <p>8 hrs. ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li className="dropdown-footer">
                      <a href="#">Show all messages</a>
                    </li>
        
                  </ul>
        
                </li>
        
                <li className="nav-item dropdown pe-3">
        
                  <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src={female} alt="Profile" className="rounded-circle" width={25} height={25}/>
                    <span className="d-none d-md-block dropdown-toggle ps-2">M. Maduchukwu</span>
                  </a>
        
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                      <h6>Kevin Anderson</h6>
                      <span>Web Designer</span>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="#/profile">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="#/dashboard">
                        <i className="bi bi-gear"></i>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="#dashboard">
                        <i className="bi bi-question-circle"></i>
                        <span>Need Help?</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="#/">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                      </a>
                    </li>
        
                  </ul>
                </li>
        
              </ul>
            </nav>
        
        </header>
        <Sidebar option={open}/>
      </> 
    )

}

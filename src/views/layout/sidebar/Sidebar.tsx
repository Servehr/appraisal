import React, { useEffect, useState } from 'react';
import { BsSlashSquare } from 'react-icons/bs';
import logo from '../../../../public/assets/img/card.jpg';
import { PictureCard } from '../../../core/components/Pictures';
import './index.css'
import female from '../../passports/female.jpg'

type properties = {
    option: boolean
}

export const Sidebar = ({option}: properties) => 
{
  const sidebar = option ?  `sidebar showOrHide` : `sidebar`
  console.log(`Are we on: ${option}`)
  
  return (
        <aside id="sidebar" className={sidebar}>
            <ul className="sidebar-nav pl-2" id="sidebar-nav">
                <div className="row mb-4">
                    <div className='col-3'></div>
                    <div className='col-4 align-content justify-content pt-3'>
                        <PictureCard width={85} height={85} radius={'circle'} padding={0} image={female}>
                            <h5 style={{fontSize:'17px', margin: '3px 0px 3px -28px'}}>Kehinde Maduchukwu</h5>
                            <h6 style={{fontSize:'13px', margin: '3px 0px 3px -10px'}}>Software Developer</h6>
                        </PictureCard>
                    </div>
                    <div className='col-4'></div>
                </div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#/dashboard">
                    <i className="bi bi-house" style={{fontSize: '14px', marginTop: '0px'}}></i>
                    <span>Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#tables-navs" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-display" style={{fontSize: '14px'}}></i><span>Management</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="tables-navs" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                        <li style={{marginLeft: '25px'}}>
                            <a href="#/user">
                                <i className="bi bi-person-plus" style={{fontSize: '13px', marginTop: '2px'}}></i>
                                <span style={{fontSize: '12px'}}>User</span>
                            </a>
                        </li>
                        {/* <li style={{marginLeft: '25px'}}>
                            <a href="tables-general.html">
                                <i className="bi bi-key" style={{fontSize: '13px', marginTop: '2px'}}></i>
                                <span style={{fontSize: '12px'}}>Security</span>
                            </a>
                        </li> */}
                        <li style={{marginLeft: '25px'}}>
                            <a href="#/company">
                                <i className="bx bxs-building-house" style={{fontSize: '13px', marginTop: '1px'}}></i>
                                <span style={{fontSize: '12px'}}>Company</span>
                            </a>
                        </li>
                        <li style={{marginLeft: '25px'}}>
                            <a href="#/department">
                                <i className="bi bi-diagram-3" style={{fontSize: '13px', marginTop: '1px'}}></i>
                                <span style={{fontSize: '12px'}}>Department</span>
                            </a>
                        </li>
                        <li style={{marginLeft: '25px'}}>
                            <a href="#/roles">
                                <i className="bi bi-bag-check" style={{fontSize: '11px', marginTop: '1px'}}></i>
                                {/* <span style={{fontSize: '12px'}}>Authorization</span> */}
                                <span style={{fontSize: '12px'}}>Roles</span>
                            </a>
                        </li>
                        <li style={{marginLeft: '25px'}}>
                            <a href="#/privilege">
                                <i className="bi bi-bag-check" style={{fontSize: '11px', marginTop: '1px'}}></i>
                                {/* <span style={{fontSize: '12px'}}>Authorization</span> */}
                                <span style={{fontSize: '12px'}}>Privilege</span>
                            </a>
                        </li>
                        <li style={{marginLeft: '25px'}}>
                            <a href="#/permission">
                                <i className="bi bi-bag-check" style={{fontSize: '11px', marginTop: '1px'}}></i>
                                {/* <span style={{fontSize: '12px'}}>Authorization</span> */}
                                <span style={{fontSize: '12px'}}>Permission</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#/performance">
                    <i className="ri ri-shield-star-fill" style={{fontSize: '14px', marginTop: '1px'}}></i>
                    <span>Performance</span>
                    </a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="goal">
                    <i className="bi bi-calendar-check" style={{fontSize: '14px', marginTop: '-2px'}}></i>
                    <span>Metrics</span>
                    </a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#/resource">
                    <i className="bi bi-folder2-open" style={{fontSize: '14px', marginTop: '-2px'}}></i>
                    <span>Resources</span>
                    </a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="report">
                        <i className="bi bi-slash-square" style={{fontSize: '14px', marginTop: '0px'}}></i>
                        <BsSlashSquare fontSize={12} style={{marginRight: '10px'}}/>
                        <span>Reports</span>
                    </a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#ques" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-file-earmark-pdf" style={{fontSize: '14px', marginTop: '2px'}}></i><span>Metrics</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="ques" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li style={{marginLeft: '25px'}}>
                            <a href="#/questionaire">
                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '13px', marginTop: '2px'}}></i>
                                <span style={{fontSize: '12px'}}>Questions</span>
                            </a>
                        </li>
                        <li style={{marginLeft: '25px'}}>
                            <a href="#/answer">
                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '13px', marginTop: '2px'}}></i>
                                <span style={{fontSize: '12px'}}>Answers</span>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                        <i className="ri ri-settings-5-line" style={{fontSize: '14px', marginTop: '2px'}}></i><span>Settings</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li style={{marginLeft: '25px'}}>
                            <a href="appraisal-setting">
                                <i className="bi bi-key" style={{fontSize: '13px', marginTop: '2px'}}></i>
                                <span style={{fontSize: '12px'}}>Appraisal</span>
                            </a>
                        </li>
                    </ul>
                </li> */}
                {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-blank.html">
                    <i className="bi bi-chat-left-dots" style={{fontSize: '14px', marginTop: '2px'}}></i>
                    <span>Chat Room</span>
                    </a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#/">
                    <i className="bi bi-power" style={{fontSize: '14px', marginTop: '-2px'}}></i>
                    <span>Logout</span>
                    </a>
                </li>
            </ul>
        </aside>
  );
}

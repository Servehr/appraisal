import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import female from '../passports/female.jpg'
import { Performer, Pulsates, RecentActivities } from '../../core/components';
import  pulsate  from '../../service/data/pulsate.json'
import  perform  from '../../service/data/performer.json'
import  activities  from '../../service/data/recentActivities.json'
import useStore from '../../store/Store';
import { IAuthState } from '../../store/types/IAuthState';


export const Dashboard = () => 
{
  
//   const [user, setUser] = useState<IAuthState>()
   const user = useStore(state => state.user)

   const [text, changeText] = useState<string>("")
   const setText = (e: string) => {
        changeText(e)        
        const u: any = user.email = text
   }

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
    <>
        <Header/>
        <main id="main" className="main">

            <div className="row" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                <div className="col-sm-4">
                    <h5>Dashboard</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <section className="section dashboard">
                <div className="container">
                    <div className="row">
                        {
                            pulsate.dashboardSummary.map((pul: any, index: number) => <Pulsates icon={pul.icon} heading={pul.heading} figure={pul.figure} text={pul.text} color={pul.color}/> )
                        }
                    </div>

                    <div className="row">
                        <div className="col p-2">
                            { <Performer Performers={perform.topPerformer} width={30} height={30}/> }
                        </div>
                        <div className="col p-2">
                            <div className="card">
                                <div className="filter">
                                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li className="dropdown-header text-start">
                                        <h6>Filter</h6>
                                        </li>

                                        <li><a className="dropdown-item" href="#">Today</a></li>
                                        <li><a className="dropdown-item" href="#">This Month</a></li>
                                        <li><a className="dropdown-item" href="#">This Year</a></li>
                                    </ul>
                                </div>

                            <div className="card-body">
                                <h5 className="card-title" style={{fontSize: '18px', marginTop: '5px', marginBottom: '-8px'}}>Recent Activity</h5>

                                <div className="activity">
                                        { <RecentActivities Recents={activities.recent} /> }
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title" style={{fontSize: '18px', marginTop: '5px'}}>Performance Chart</h5>
                                    <div id="columnChart"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

  </main>
    </>
  );
}

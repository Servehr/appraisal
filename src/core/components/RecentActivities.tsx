import React from 'react'
import { Arrays } from './Array';


type Recent = 
{
    time: string
    event: string;
    style: string;
}

type Recents = {
    Recents: Recent[]
}

export const RecentActivities = ({ Recents }: Recents) => 
{
    return (
        <div className="card top-selling overflow-auto">
            <div className="card-body">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            Recents.map((activities, index) => { 
                                let clax = `bi bi-circle-fill activity-badge text-${activities.style} align-self-start`
                                return <div className="activity-item d-flex">                                
                                            <div className="activite-label">{activities.time}</div>
                                            <i className={clax}></i>
                                            <div className="activity-content">
                                                {activities.event}
                                            </div>
                                        </div>
                                } 
                            )   
                        }
                        {/* <Arrays fullname={activities.time} department={activities.event} pics={activities.style} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

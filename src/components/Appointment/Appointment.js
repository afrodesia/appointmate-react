import React from 'react'
import './appointment.css'


const Appointment = React.createClass({
        getInitialState: function() {
            return {
                data: [
                    {
                        "name": "Ken Torry",
                        "date": "November 23, 2016",
                        "time": "1:00pm",
                        "service": "Flyer",
                        "notes": "Some dummy text right here for notes"
                    },
                    {
                        "name": "Dave Chappel",
                        "date": "November 23, 2016",
                        "time": "1:50pm",
                        "service":"Logo Design",
                        "notes": "Some dummy text right here for notes"
                    },
                    {
                        "name": "Patty Mills",
                        "date": "November 28, 2016",
                        "time": "3:00pm",
                        "service":"Logo design",
                        "notes": "Some dummy text right here for notes"
                    },
                    {
                        "name": "Mark Torres",
                        "date": "December 3, 2016",
                        "time": "11:00am",
                        "service":"Web Development",
                        "notes": "Some dummy text right here for notes"
                    },
                    {
                        "name": "Liz Paterson",
                        "date": "December 4, 2016",
                        "time": "1:00pm",
                        "service": "HTML Email",
                        "notes": "Some dummy text right here for notes"
                    }
                ]
            }
        },
        render: function() {
  
            return (
                <section className="appointment container">
                    <div className="item-list media-list">
                        <ul className="item-list media-list">
                            <li className="info media-body">
                                <div className="info-head">
                                    <span className="info-time pull-right">{this.state.data[0].time}</span>
                                    <h3 className="info-name">{this.state.data[0].name}</h3>
                                    <p className="info-date">{this.state.data[0].date}</p>
                                    <hr/>
                                    <p className="info-notes">{this.state.data[0].notes}</p>
                                    <p className="info-service pull-right">{this.state.data[0].service}</p>
                                </div>
                            </li>
                        </ul>

                    </div>
                </section>
        );
    }
})
export default Appointment
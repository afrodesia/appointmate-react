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
            let filteredApts = this.state.data
            filteredApts = filteredApts.map(function(item, index){
                return(
                    <li className="info media-body" key={index}>
                        <div className="info-head">
                            <span className="info-time pull-right">{this.state.data[index].time}</span>
                            <h3 className="info-name">{this.state.data[index].name}</h3>
                            <p className="info-date">{this.state.data[index].date}</p>
                            <hr/>
                            <p className="info-notes">{this.state.data[index].notes}</p>
                            <p className="info-service pull-right">{this.state.data[index].service}</p>
                        </div>
                    </li>
                )
            }.bind(this))
            return (
                <section className="appointment container">
                    <h2>Appointments</h2>
                    <div className="item-list media-list">
                        <ul className="item-list media-list">
                            {filteredApts}
                        </ul>

                    </div>
                </section>
        );
    }
})
export default Appointment
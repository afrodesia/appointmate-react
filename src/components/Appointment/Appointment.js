import React from 'react'
import $ from 'jquery'
import './appointment.css'


const Appointment = React.createClass({

        getInitialState: function() {
            return {
                myAppointments: []
            }
        },
        componentDidMount: function() {
            this.serverRequest = $.get('./data/data.json', function(result){
                var tempApts = result
                this.setState({
                    myAppointments : tempApts
                })
            }.bind(this))
        },
        componentWillUnmount: function() {
            this.serverRequest.abort()
        },
        render: function() {
            let filteredApts = this.state.myAppointments
            filteredApts = filteredApts.map(function(item, index) {
                return(
                    <li className="info media-body" key={index}>
                        <div className="info-head">
                            <span className="info-time pull-right">{this.state.myAppointments[index].time}</span>
                            <h3 className="info-name">{this.state.myAppointments[index].name}</h3>
                            <p className="info-date">{this.state.myAppointments[index].date}</p>
                            <hr/>
                            <p className="info-notes">{this.state.myAppointments[index].notes}</p>
                            <p className="info-service pull-right">{this.state.myAppointments[index].service}</p>
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
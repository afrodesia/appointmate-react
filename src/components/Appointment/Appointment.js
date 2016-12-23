import React from 'react'
import $ from 'jquery'

import AppointmentList from './AppointmentList'
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
                    <AppointmentList key={index} singleItem={item} />
                )
            })

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
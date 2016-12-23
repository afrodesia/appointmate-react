import React from 'react'
import $ from 'jquery'
import _ from 'lodash'

import AppointmentList from './AppointmentList'
import AddAppointment from './AddAppointment'
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
        deleteMessage: function(item){
            // var deleteItem = deleteMessage
            var allApts = this.state.myAppointments
            var newApts = _.without(allApts, item)
            this.setState({
                myAppointments: newApts
            })
        },
        render: function() {
            var filteredApts = this.state.myAppointments
            filteredApts = filteredApts.map(function(item, index) {
                return(
                    <AppointmentList 
                        key={index} 
                        singleItem={ item }
                        whichItem={ item }
                        onDelete={ this.deleteMessage }
                     />
                )
            }.bind(this))

            return (
                <section className="appointment container">
                    <AddAppointment />
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
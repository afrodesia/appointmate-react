import React from 'react'
// import $ from 'jquery'
// import _ from 'lodash'
import SearchAppointments from './SearchAppointments'
import './appointment.css'


const AddAppointment = React.createClass({

        toggleAppDisplay : function(){
            this.props.handleToggle()
        },
        handleAdd: function(e){
            var tempItem = {
                name: this.refs.inputName.value,
                date: this.refs.inputDate.value,
                time: this.refs.inputTime.value,
                service: this.refs.inputService.value,
                notes: this.refs.inputNote.value
            }
            e.preventDefault()
            this.props.addApp(tempItem)
        },
        render: function() {
            var displayAppBody = {
                display: this.props.bodyVisible ? 'block' : 'none'
            }

            return( 
                <div className="panel panel-primay add-appointment">
                    <h2 className="panel-heading" onClick={this.toggleAppDisplay} > <i className="fa fa-plus-circle" aria-hidden="true"></i> Add Appointment</h2>
                    
                    <SearchAppointments />


                    <div className="panel-body" style={ displayAppBody} >
                    <form className="" onSubmit={ this.handleAdd }>
                        <div className="form-group">
                            <label htmlFor="Name">First & Last Name</label>
                            <input id="name" type="text" ref="inputName" className="form-control" 
                            name="msg" placeholder="Add Name" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="date">Book a date</label>
                            <input id="date" type="date" ref="inputDate" className="form-control" 
                            name="msg" placeholder="March 15th, 2017" />
                        </div>  

                        <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <input id="time" type="time" ref="inputTime" className="form-control" 
                            name="msg" placeholder="" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service">Service Needed</label>
                            <input id="service" type="text" ref="inputService" className="form-control" 
                            name="msg" placeholder="Web Development, UI Design, App Development, etc.. " />
                        </div>  

                        <div className="form-group">
                            <label htmlFor="ANote">Add your notes</label>
                            <textarea className="form-control" rows="4" cols="50"
                  id="notes" ref="inputNote" placeholder="Appointment Notes"></textarea>
                        </div>
                        <div className="form-group"> 
                            <button type="submit" ref="add" className="btn btn-danger ">Add Appointment</button>
                        </div>
                    </form>
                    </div>
                </div>

       )
    }
})
export default AddAppointment
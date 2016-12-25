import React from 'react'
// import $ from 'jquery'
// import _ from 'lodash'
import './appointment.css'


const AddAppointment = React.createClass({

        toggleAppDisplay : function(){
            this.props.handleToggle()
        },
        render: function() {
            var displayAppBody = {
                display: this.props.bodyVisible ? 'block' : 'none'
            }

            return( 
                <div className="panel panel-primay add-appointment">
                    <h2 className="panel-heading" onClick={this.toggleAppDisplay} > <i className="fa fa-plus-circle" aria-hidden="true"></i> Add Appointment</h2>
                    <div className="panel-body" style={ displayAppBody} >
                    <form className="">
                        <div className="form-group">
                            <label htmlFor="lName">First Name</label>
                            <input id="msg" type="text" className="form-control" 
                            name="msg" placeholder="" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lName">Last Name</label>
                            <input id="msg" type="text" className="form-control" 
                            name="msg" placeholder="" />
                        </div> 

                        <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <input id="msg" type="text" className="form-control" 
                            name="msg" placeholder="" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service">Service Needed</label>
                            <input id="msg" type="text" className="form-control" 
                            name="msg" placeholder="" />
                        </div>  

                        <div className="form-group">
                            <label htmlFor="ANote">Add your notes</label>
                            <textarea id="msg" value="" type="text" className="text-box form-control" 
                            name="msg" placeholder=""> </textarea>
                        </div>
                        <div className="form-group"> 
                            <button type="button" className="btn btn-danger ">Add Appointment</button>
                        </div>
                    </form>
                    </div>
                </div>

       )
    }
})
export default AddAppointment
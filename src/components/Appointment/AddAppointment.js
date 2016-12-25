import React from 'react'
// import $ from 'jquery'
// import _ from 'lodash'
import './appointment.css'


const AddAppointment = React.createClass({
        render: function() {
            return( 
                <section className="panel panel-primay">
                    <h2><i className="fa fa-plus-circle" aria-hidden="true"></i> Add Appointment</h2>
                    <form className="add-appointment">
                        <div className="form-group">
                            <label for="lName">First Name</label>
                            <input id="msg" type="text" className="form-control" 
                            name="msg" placeholder="" />
                        </div>

                        <div className="form-group">
                            <label for="lName">Last Name</label>
                            <input id="msg" type="text" className="form-control" 
                            name="msg" placeholder="" />
                        </div> 

                        <div className="form-group">
                            <label for="time">Time</label>
                            <input id="msg" type="text" className="form-control" 
                            name="msg" placeholder="" />
                        </div> 

                        <div className="form-group">
                            <label for="ANote">Add your notes</label>
                            <textarea id="msg" type="text" className="text-box form-control" 
                            name="msg" placeholder=""> </textarea>
                        </div> 

                        <button type="button" className="btn btn-danger ">Add Appointment</button>

                    </form>
                </section>

       )
    }
})
export default AddAppointment
import React from 'react'
// import $ from 'jquery'
import _ from 'lodash'
import './appointment.css'


const AppointmentList = React.createClass({
        handleDelete: function(){
            this.props.onDelete(this.props.whichItem)
        },
        render: function() {
            
            return(

                    <li className="info media-body">

                        <div className="media-right">
                            <a className="list-delete 
                            " onClick={this.handleDelete}>
                            <i className="fa fa-times-circle" aria-hidden="true"></i>
                             
                            </a>
                        </div>

                        <div className="info-head">
                            <span className="info-time pull-right">{this.props.singleItem.time}</span>
                            <h3 className="info-name">{this.props.singleItem.name}</h3>
                            <p className="info-date">{this.props.singleItem.date}</p>
                            <hr/>
                            <p className="info-notes">{this.props.singleItem.notes}</p>
                            <p className="info-service pull-right">{this.props.singleItem.service}</p>
                        </div>
                    </li>

       )
    }
})
export default AppointmentList
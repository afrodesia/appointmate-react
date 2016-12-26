import React from 'react'

const SearchAppointments = React.createClass({

	render : function(){
		return(
			 <section className="SearchBar">
               
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-btn">
                        <button className="btn btn-danger" type="button">Search Appointments!</button>
                      </span>
                    </div>

            </section>

		)
	}
})

export default SearchAppointments

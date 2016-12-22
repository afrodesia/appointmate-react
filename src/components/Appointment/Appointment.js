import React from 'react'

const Appointment = React.createClass({
        getInitialState: function() {
            return {
                title: 'Appointment',
                show: true
            }
        },
        render: function() {
            var showTitle;
            if(this.state.show) {
                showTitle = 'New'
            }
            return (
                <section className="appointment">
                    <div className="container">
                        <h2>{ showTitle } {this.state.title }</h2>
                        <p></p>
                    </div>
                </section>
        );
    }
})
export default Appointment
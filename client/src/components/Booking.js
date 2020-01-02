import React from 'react';
import '../style/Booking.css';
import { withBooking } from '../context/BookingProvider.js';

class Booking extends React.Component {
    componentDidMount() {
        this.props.getProfessionals(this.props.match.params.location)
    }


    render() {
        return (
            <div className="local-booking-pro-container">
                <section className="booking-header-section">
                    <h2
                    className="booking-header-locals">Local Videographers
                </h2>
                </section>
                {this.props.pros.map(pro =>
                <div className="pro-list-container">
                    <div className="pro-name">
                        <h3 className="pro-name-text">{pro.name}</h3>
                    </div>
                    <div className="pro-email">
                        <h4 className="pro-email-text">{pro.email}</h4>
                    {/* <h4>{pro.userType}</h4> */}
                    </div>
                    <div className="pro-image">
                        <img src={pro.imgURL} className="pro-img-url" alt="professional videographer headshot"/>
                    </div>
                </div>
                )}
            </div>
        )
    }
}



export default withBooking(Booking)
import React from 'react';
import '../style/Destination.css';
import { withBooking } from '../context/BookingProvider.js';
import { Link } from 'react-router-dom';

class Destination extends React.Component {
    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     // }
    // }
    componentDidMount() {
        this.props.getLocations()
    }

    render() {
        // console.log(this.props.users[0] && this.props.users[0].location )
        return(
            <div className="destination-container">
                <h2 className="destination-header-text">Destinations</h2>
                {this.props.locations.map(location =>
                <Link to={`/booking/${location.name}`}><div className="location-text" key={location.id + "-" + location}><h3>{location.name}</h3><img src={location.imgURL} alt="famous tourist shots of various countries" width={400} key={location.id + "-" + location.imgURL}/></div>
                </Link>
                )}
            </div>
        )
    }
}


export default withBooking(Destination)
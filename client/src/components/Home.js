import React, { Component } from 'react';
import { withUsers } from '../context/UserProvider.js';


class Home extends Component {

    componentDidMount(){
        this.props.getUsers()
    }
    
    render() {
        return(
            <div className="home-route-container">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}


export default withUsers(Home)
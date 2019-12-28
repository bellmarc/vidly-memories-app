import React from 'react';
import axios from 'axios';

const BookingContext = React.createContext()
let userAxios = axios.create();

userAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

class BookingProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            users: [],
            pros: [],
            locations: [],
        }
    }

    getLocations = () => {
        userAxios.get("/location")//find pro userType
        .then (res =>{
            this.setState({
                locations:[...res.data]
            })
        })
        .catch(err => console.log(err))
    }
//getPros fcn, rcvs location requested as a param, does get req to users, BE: Users.find all users where user type & location is req.params.location

        getProfessionals = (location) => {
            console.log(location)
            userAxios.get(`/api/user/location/${location}`)
            .then( res => {
                console.log(res.data)
                this.setState({
                    pros:[...res.data]
                })
            })
            .catch(err => console.log(err))
        }

    render() {
        return (
            <BookingContext.Provider
                value={{
                    ...this.state,
                    getLocations: this.getLocations,
                    getProfessionals: this.getProfessionals
                }}>
                { this.props.children }
            </BookingContext.Provider>
        )
    }
}

export default BookingProvider

export const withBooking = C => props => (
    <BookingContext.Consumer>
        { value => <C {...value} {...props}/>}
    </BookingContext.Consumer>
)
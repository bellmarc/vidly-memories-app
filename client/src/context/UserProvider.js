import React from 'react';
import axios from 'axios';

const UserContext = React.createContext()

class UserProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            users: {},
            token: ""
        }
    }

    getUsers = () => {
        axios.get("/api/user")
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    userLogin = (user) => {
        console.log(user)
        axios.post("/auth/login", user)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user,token })
        })
        .catch(err => console.log(err))
    }

    userSignUp = (user) => {
        axios.post("/auth/signup", user)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user,token })
        })
        .catch(err => console.dir(err))
    }

    render() {
        return (
            <UserContext.Provider
                value={{
                    ...this.state,
                    users: this.state.users,
                    getUsers: this.getUsers,
                    userLogin: this.userLogin,
                    userSignUp: this.userSignUp
                }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default UserProvider

export const withUsers = C => props => (
    <UserContext.Consumer>
        { value => <C {...value} {...props}/>}
    </UserContext.Consumer>
)
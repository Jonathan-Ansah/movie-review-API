import React, { Component } from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state= {
            users:[],
        }
    }
    componentDidMount(){
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=PJJkp08mCQbqC3NcW2SSNKP2ieBQpItr')
        .then((res)=> res.json())
        .then(users=>{
            console.log("users:", users)
            this.setState({users: users})
        })
        .catch(err=> console.log(err))
    }
    render() {
        return (
            <div>
                <h1>Users</h1>
                <hr/>
                
                    {this.state.users.results.map((user)=>(
                        <div>
                            <p>{user.title}</p>
                        </div>
                    ))}
                
            </div>
        );
    }
}

export default Users;

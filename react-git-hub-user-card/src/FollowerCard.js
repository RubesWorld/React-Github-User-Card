import axios from 'axios';
import React from 'react'

class FollowerCard extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/rubesworld/followers")
            .then((res)=>{
                this.setState({
                    followers: res.data
                })
            })
            .catch(err=>{
                console.log(err)
            });
            axios.get(`https://api.github.com/users/${this.state.name}/followers`)
            .then((res)=>{
                this.setState({
                    followers: res.data
                })
            })
            .catch(err=>{
                console.log(err)
            });
    }

    render(){
    return (
        <div>
            <h1>Followers:</h1>
            <ul>
                    {this.state.followers.map((item)=>{
                        return (<li key={item.id}>{item.login}</li>)
                    })}
                
            </ul>
        </div>
        
        )
    }
}

export default FollowerCard;
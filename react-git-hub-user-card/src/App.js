import axios from 'axios'
import React from 'react'
import './App.css';

//Component Imports
import FollowerCard from './FollowerCard';


const info = [
    {
      name: "",
      bio: "",
      followers: "",
      following: "",
      location: ""
    }
]

class App extends React.Component {
  state = {
    user: info
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/RubesWorld")
      .then((res)=> {
        console.log(res);
        this.setState({
            user: res.data
        })
      })
      .catch((err)=>{
        console.log(err)
      });
  }

  render(){

    return (
      <>
          <div className="main-card">
              <div className="top-half">
                <h1>GitHub UserCard!</h1>
                <div className="img-container">
                  <img  src={this.state.user["avatar.url"]} alt="github image" width="200" height="200"/>
                </div>
                <h2>{this.state.user.login}</h2>
                <h2>{this.state.user.location}</h2>
                <p>{this.state.user.bio}</p>
              </div>
            <FollowerCard/>
          </div>
    </> 
  )
  } 
}

export default App;

import axios from 'axios'
import React from 'react'
import './App.css';

//Component Imports
import UserCard from './UserCard';


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
            <h1>GitHub UserCard!</h1>
            <UserCard info={this.state.user}/>
          </div>
    </> 
  )
  } 
}

export default App;

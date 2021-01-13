import axios from 'axios'
import React from 'react'
import './App.css';

//Component Imports
import UserCard from './UserCard';
import Form from './Form'


const info = [
    {
      name: "",
      bio: "",
      followers: [],
      following: [],
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
      })
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

  handleChange = e =>{
    this.setState({
      name: e.target.value
    });
  }

  handleClick = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.name}`)
      .then((res)=>{
        this.setState({
          user: res.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })
      
  }

  render(){

    return (
      <>
          <div className="main-card">
            <Form handleClick={this.handleClick} handleChange={this.handleChange}/>
            <UserCard info={this.state.user}/>
          </div>
    </> 
  )
  } 
}

export default App;

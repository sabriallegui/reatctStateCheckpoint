import logo from './logo.svg';
import React from 'react';
import './App.css';
import Thecounter from './Thecounter'


class App extends React.Component {
  state = {
    fullName: 'Someone',
    bio: 'I am somebody and I do secret stuff',
    imgSrc: 'https://media.istockphoto.com/vectors/male-adult-avatar-profile-picture-vector-vector-id530297753?k=20&m=530297753&s=612x612&w=0&h=9S93RkTYjWEqiT17zcr3drxLnfo3ZUHQwr3fWspNt6E=',
    profession: 'Doing secret jobs',
    show: true
  }
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
        <>
          <h1>Show the count</h1>
          <Thecounter />
        </>
      </div>
    );
  }
}

export default App;
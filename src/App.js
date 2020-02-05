import React, { Component } from 'react'
import TopBar from './components/TopBar'
import Notes from './components/Notes'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  /*   componentDidMount() {
      fetch('http://localhost:8080/api/users')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          console.log(myJson);
        });
    } */


  render() {
    return (
      <div>
        <TopBar />
        <Notes />
      </div>
    )
  }
}

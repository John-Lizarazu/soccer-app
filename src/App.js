import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       soccerVideos:[],
    };
  }
componentDidMount(){
  fetch("https://www.scorebat.com/video-api/v1/")
  .then((response)=>response.json())
  .then((data)=>this.setState({soccerVideos:data}))
}
  render() {
    return (
      <div></div>
    )
  }
}
export default App
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
    return(
      <div className="main-container">
      
        {this.state.soccerVideos.map((soccerVideo)=>(
        <div className="card-container">
          <a href = {soccerVideo.url} target="_blank" rel="noreferrer">
            <img 
            src={soccerVideo.thumbnail} 
            alt="pic"
            height="150"
            width="150"/>
          </a><br/>
          <p>{soccerVideo.title}</p>
        </div>)
        )})
      </div>
    );

  }
}
export default App
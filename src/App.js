import React, { Component } from 'react'
import SearchBox from './SearchBox/SearchBox'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       soccerVideos:[],
       searchField:'',
    };
  }

componentDidMount(){
  fetch("https://www.scorebat.com/video-api/v1/")
  .then((response)=>response.json())
  .then((data)=>this.setState({soccerVideos:data}))
}

  render() {
    const {soccerVideos,searchField}= this.state
    const filteredSearch=soccerVideos.filter
    return(
      <div className="App">
      <SearchBox placeholder="Search..." handleChange={(e) => this.setState({searchField:e.target.value})}/>
      <soccerVideos searchField = {filteredSearch}/>
      <div className="main-container">
        {this.state.soccerVideos.map((soccerVideo)=>(
        <div className="card-container">
          <a href = {soccerVideo.url} target="_blank" rel="noreferrer">
            <img 
            src={soccerVideo.thumbnail} 
            alt="pic"
            height="200"
            width="250"/>
          </a><br/>
          <p>{soccerVideo.title}</p>
        </div>)
        )})
      </div>
      </div>
    );

  }
}
export default App
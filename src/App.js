import {React,Component} from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightPanel from './RightPanel';
import Navbar from './Navbar'
import './App.css';

class App extends Component {
  state={
    playlists: [],
    selectedPlaylist: null,
    videos: []
  }

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists=()=>{
    fetch('https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList', {
      method: 'POST',
      headers: {
        'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'X-Tenant-Key': 'TYKE070323',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Content_Type: 2 }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ playlists: data.data });
      })
      .catch((err) => console.error(err));
  }

  fetchVideos = (playlist) => {
    fetch('https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1', {
      method: 'POST',
      headers: {
        'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'X-Tenant-Key': 'TYKE070323',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Index: playlist.PlayListId,
        ContentType: [2],
        IsTagged: false,
        URL: '',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ selectedPlaylist: playlist, videos: data.data.Feeds });
      })
      .catch((err) => console.error(err));
  };
  render(){
    let{playlists,selectedPlaylist,videos}=this.state
    return(
      
        <div className="app">
          <Sidebar />
          
          <div>
            <Navbar />
          <div className='inner-app'>
            <MainContent  playlists={playlists} fetchVideos={this.fetchVideos}/>
            <RightPanel videos={videos} />
          </div>
          
          </div>
          
        </div>
      )
    
  } 
}

export default App;

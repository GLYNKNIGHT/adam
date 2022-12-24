
import video from './video.mp4'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
    <br></br>
        <video width="95%" height="auto" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
        </video>
      <br></br>
        <a sta
          className="App-link"
          href="https://www.watersidefarm-campsite.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Waterside House Campsite 
        </a>
<br></br>
        <div className="google-map-code">
        <iframe title="google" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d90251.13875234386!2d-2.9011073122203412!3d54.592328905663514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swaterside%20farm%20campsite!5e1!3m2!1sen!2suk!4v1671800374103!5m2!1sen!2suk" width="370px" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
        </div>
        <br></br>
      </header>
    </div>
  );
}

export default App;

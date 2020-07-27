import React, {Component} from 'react';
import './containers/App.scss';
import BackgroundSlider from 'react-background-slider'
// import GlobalStyle from './styles/Global';
import { Navbar }from "./components/Header/Navbar";
import { Card } from './components/Header/Card';
// import firebase from './firebase';
// import 'firebase/auth';
// import { BrowserRouter as Router} from "react-router-dom";
// import TripController from './TripController';


// background images
import rome from './components/Header/img/rome.jpg'
import amsterdam from './components/Header/img/amsterdam.jpg'
import austin from './components/Header/img/austin.jpg'
import australia from './components/Header/img/australia.jpg'
import costa from './components/Header/img/costa.jpg'
import dubi from './components/Header/img/dubi.jpg'
import effiel from './components/Header/img/effiel.jpg'
import egypt from './components/Header/img/egypt.jpg'
import iceland from './components/Header/img/iceland.jpg'
import italy from './components/Header/img/italy.jpg'
import japan from './components/Header/img/japan.jpg'
import japan2 from './components/Header/img/japan2.jpg'
import london from './components/Header/img/london.jpg'
import moscow from './components/Header/img/moscow.jpg'
import paris from './components/Header/img/paris.jpg'
import peru from './components/Header/img/peru.jpg'
import peters from './components/Header/img/peters.jpg'
import petra from './components/Header/img/petra.jpg'
import portland from './components/Header/img/portland.jpg'
import santorini from './components/Header/img/santorini.jpg'
import rio from './components/Header/img/rio.jpg'
import york from './components/Header/img/york.jpg'




class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     navbarOpen: false,
   }
 }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }
  
  
 render() {
    return (
    
    //  <Router>
       <div className='app'>
        
        <BackgroundSlider className= "images2"
  images={[rome,amsterdam,austin,australia,costa,dubi,effiel,egypt,iceland,italy,japan,japan2, london, moscow,paris,peru, peters, petra, portland,york,rio,santorini]}
  duration={4} 
  transition={2} />
        <Card />
        <Navbar
         navbarState={this.state.navbarOpen} 
         handleNavbar={this.handleNavbar}
        />
        </div>
    //  </Router>

    );
  }
}


export default App;


 





















  {/* <GlobalStyle /> */}


  // function App(){
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [userEmail, setUserEmail] = useState("New User");
//   const [userName, setUserName] = useState("New User");
//   const [currentUserId, setCurrentUserId] = useState(null);
//   const [navbarOpen, setNavBarOpen] = useState(false);


// userSignInStatus={isSignedIn} 
// userName={userName}
// navbarState={navbarOpen}
// handleNavbar={handleNavbar}

{/* <TripController 
googleSignin={googleSignin}
currentUserId={currentUserId} 
userSignInStatus={isSignedIn} 
userName={userName} 
userEmail={userEmail}
/>   */}

// provider = new firebase.auth.GoogleAuthProvider();

// const firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     setUserName(user.displayName);
//     setUserEmail(user.email);
//     setIsSignedIn(true);
//     setCurrentUserId(user.uid);
//   } else {
//     setIsSignedIn(false);
//   }
// });

// const googleSignin = () => {
//   firebase.auth().signInWithRedirect(provider).then(function(result) {
//     setIsSignedIn(true);
//   }).catch(function(error) {
//     console.log(error);
//   });
// }
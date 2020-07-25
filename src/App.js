import React , { Component } from 'react';
import './containers/App.scss';
import BackgroundSlider from 'react-background-slider'
// import GlobalStyle from './styles/Global';
import Navbar from "./components/Nav/Navbar";
import Card from './components/Header/HeaderWord';



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
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }
  
  render() 
  {
    return (
     
      <>
      <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
       {/* <GlobalStyle /> */}
       <Card />
       
        <BackgroundSlider className= "images2"
  images={[rome,amsterdam,austin,australia,costa,dubi,effiel,egypt,iceland,italy,japan,japan2, london, moscow,paris,peru, peters, petra, portland,york,rio,santorini]}
  duration={4} 
  transition={2} />
   
    
      </>
    );
  }
}

export default App;
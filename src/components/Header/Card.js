// import React, {useState} from "react";
// import { useSpring, animated as a } from 'react-spring'
// import './styles.scss'
// // import Nav from './Navbar'
// // import {NavLink} from 'react-router-dom';
// // import firebase from '../../firebase';
// // import PropTypes from 'prop-types';



// export function Card() {
//   const [flipped, set] = useState(false)
//   const { transform, opacity } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 }
//   })
//   return (
//     <div onClick={() => set(state => !state)}>
//       <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
//       <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
//     </div>
//   )
// }
  // export default Card;































//----------------------------------------------------------------->
  // export function Header(props){
  //   // const {userSignInStatus} = props;

  //   function doSignOut(){
  //     firebase.auth().signOut().then(function(){
  //       console.log('Successfully signed out!');
  //     }).catch((error) => {
  //       console.log(error.message);
  //     })
  //   }
  
  //   const setVisibility = () => {
  //     if (userSignInStatus) {
  //       return (
  //         <React.Fragment>
  //           <NavLink  to="/signin">My Trips</NavLink>
  //           <NavLink exact={false} onClick={() => doSignOut()} to='vasya'>Sign Out</NavLink>
  //         </React.Fragment>
  //       )
  //     } else {
  //       return (
  //         <React.Fragment>
  //         <NavLink  to="/signin">Sign In</NavLink>
  //       </React.Fragment>
  //       )
  //     }
  //   }
  //   return(
  //     <React.Fragment>
  //     <Nav/>
  //     {setVisibility()} 
  //     </React.Fragment>
  //   )  
  // }

  // Header.propTypes = {
  //   userSignInStatus: PropTypes.bool,
  //   userName: PropTypes.string,
  // }
 


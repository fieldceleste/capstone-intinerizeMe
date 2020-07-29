// import React from 'react'
// // import styled from "styled-components";
// import { useSpring, animated, config } from "react-spring";
// // import firebase from '../../firebase';
// // import PropTypes from 'prop-types';
// import './styles.scss'

// import Logo from "./Brand";
// import BurgerMenu from "./BurgerMenu";
// import CollapseMenu from "./CollapseMenu";



// export function Navbar(props) {
//   // const {userSignInStatus} = props;

//   // function doSignOut(){
//   //   firebase.auth().signOut().then(function(){
//   //     console.log('Successfully signed out!');
//   //   }).catch((error) => {
//   //     console.log(error.message);
//   //   })
//   // }

//   const barAnimation = useSpring({
//     from: { transform: 'translate3d(0, -10rem, 0)' },
//     transform: 'translate3d(0, 0, 0)',
//   });

//   const linkAnimation = useSpring({
//     from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
//     to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
//     delay: 800,
//     config: config.wobbly,
//   });

// //   const setVisibility = () => {
// //     if (userSignInStatus) {
// //       return (
// //         <React.Fragment>
// //           <NavLinks style={linkAnimation}>
// //           <a href ="/trips">My Trips</a>
// //           <a href ='/newtrip'>Add Trip</a>
// //           <a href exact={false} onClick={() => doSignOut()} to='vasya'>Sign out</a>
// //           </NavLinks>
// //         </React.Fragment>
// //       )
// //     } else {
// //   return (
// //     <React.Fragment>
// //           <NavLinks style={linkAnimation}>
// //             <a href="/signin">Signin</a>
// //           </NavLinks>
// //    </React.Fragment>
// //    )
// //   }
// //  }

// return (
//   <React.Fragment>
//   <div className="header">
//     <NavBar style={barAnimation}>
//          <FlexContainer>
//           <Logo />
//           <NavLinks style={linkAnimation}>
//           <a href="/addtrip">Add Trip</a>
//           <a href="/">Home</a>
//           </NavLinks>
//           {/* {setVisibility()}  */}
//           <BurgerWrapper>
//             <BurgerMenu
//               navbarState={props.navbarState} 
//               handleNavbar={props.handleNavbar}
//             />
//           </BurgerWrapper>
//         </FlexContainer>
//       </NavBar>
//       <CollapseMenu 
//         navbarState={props.navbarState} 
//         handleNavbar={props.handleNavbar}
//       />
//     </div>
// </React.Fragment>
//  )
// }

// // Navbar.propTypes = {
// //   userSignInStatus: PropTypes.bool,
// //   userName: PropTypes.string,
// // }








// const NavBar = styled(animated.nav)`
//   position: fixed;
//   width: 100%;
//   top: 0;
//   left: 0;
//   background: #14b1ab;
//   z-index: 1;
//   font-size: 1.4rem;
// `;

// const FlexContainer = styled.div`
//   max-width: 120rem;
//   display: flex;
//   margin: auto;
//   padding: 0 2rem;;
//   justify-content: space-between;
//   height: 5rem;
// `;

// const NavLinks = styled(animated.ul)`
//   justify-self: end;
//   list-style-type: none;
//   margin: auto 0;
  
//   & a {
//     color: #dfe6e9;
//     text-transform: uppercase;
//     font-weight: 600;
//     border-bottom: 1px solid transparent;
//     margin: 0 1.5rem;
//     transition: all 300ms linear 0s;
//     text-decoration: none;
//     cursor: pointer;
//     &:hover {
//       color: #fdcb6e;
//       border-bottom: 1px solid #fdcb6e;
//     }
//     @media (max-width: 768px) {
//       display: none;
//     }
//   }
// `;
 
// const BurgerWrapper = styled.div`
//   margin: auto 0;
//   @media (min-width: 769px) {
//     display: none;
//   }
//   `;
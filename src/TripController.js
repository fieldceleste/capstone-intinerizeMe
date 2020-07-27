// import React from 'react';
// import {Switch, Route} from 'react-router-dom';
// import SignIn from './components/Auth/SignIn';
// import RegisterRoute from './components/Auth/Register';
// import PropTypes from 'prop-types';
// import {withFirestore} from 'react-redux-firebase';

// function TripController(props){

//   const {googleSignin, currentUserId, userName, userEmail} = props;



// return(
//   <React.Fragment>
//     <Switch>
//       <Route path="/signin">
//         <SignIn
//           thisUserId = {currentUserId}
//           onCLickGoogleSignin = {googleSignin}
//           thisUserName={userName}
//           thisUserEmail={userEmail}

//         />
//       </Route>
//       <Route path="/register">
//         <RegisterRoute
//         />
//          {/* <Route path="/">
//           <HomePageController/>
//         </Route> */}
//       </Route>
//       </Switch>
//     </React.Fragment>
//   )
// }

// TripController.propTypes = {
//   googleSignin: PropTypes.func,
//   userName: PropTypes.string,
//   userEmail: PropTypes.string,
//   currentUserId: PropTypes.string
// }

// export default withFirestore(TripController);
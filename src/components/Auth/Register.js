// import React from 'react';
// import firebase from 'firebase/app';
// import { useHistory } from 'react-router-dom';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import './../Header/styles.scss'




// function RegisterRoute(props){

//   let history = useHistory();

//   function doSignUp(event){
//     event.preventDefault();
//     const username = event.target.username.value;
//     const email = event.target.email.value;
//     const password = event.target.password.value;
    

//     firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
//       let user = firebase.auth().currentUser;
//       user.updateProfile({
//         displayName: username,
//         }).then(function() {
//           console.log("Username added:", user.displayName);
//         }).catch(function(error) {
//           console.log(error);
//         });
//       console.log('successfully signed up!');
//       history.push('/signin');
//     }).catch(function(error) {
//       console.log(error.message);
//     });
//   }

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       height: '90vh',
//       marginRight:"50%",
//       display:"flex",
//       flexDirection:"column",
//       alignItems:"flex-end",
//       marginRight:theme.spacing(1)
      
//     },

//     paper: {
//       margin: theme.spacing(8, 4),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', 
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));
 
//   const classes = useStyles();

//   return (
//     // <React.Fragment>
//       <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid 
//       xs={12} sm={8} md={8} 
//       component={Paper}
//        elevation={4} 
//        square >
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Register
//           </Typography>
//           <form onSubmit={doSignUp} className={classes.form} noValidate>
//           <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="user"
//               label="UserName"
//               name="username"
//               autoFocus
//             />

//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign Up
//             </Button>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//     )
//   }
// export default RegisterRoute;


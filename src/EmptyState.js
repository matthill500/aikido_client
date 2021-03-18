  import React from "react";

 import {
   Button,
   withStyles,
   createStyles,
   Card,
   CardHeader,
   Container,
   CircularProgress
 } from "@material-ui/core";
 import { Replay, Error } from "@material-ui/icons";
 
 import { Link } from "react-router-dom";
 

 const styles = ({ spacing }) =>
   createStyles({
       container: {
        display: 'flex', height:'100vh', alignItems:'center', justifyContent: 'center'
       },
     wrapper: {
       padding: spacing(4),
       textAlign: "center",
     },
     icon: {
       fontSize: "3em",
     },
     header: {
       display: "flex",
       flexDirection: "column-reverse",
       justifyContent: "center",
     },
     iconContainer: {
       textAlign: "center",
     },
   });
 
 const EmptyState = ({
   message,
   classes,
   action,
   loading = false,
   actionLabel = "Try Again",
 }) => (
    <Container fixed className={classes.container}>
   <Card elevation={3} className={classes.wrapper}>
     <div className={classes.iconContainer}>
       <Error color="error" className={classes.icon} />
     </div>
     <CardHeader
       title={message ? message : "There was a problem"}
       className={classes.header}
     />
     {action ? (
       <Button
         className={classes.iconContainer}
         variant="contained"
         color="secondary"
         endIcon={<Replay />}
         onClick={action}
         disabled={loading}
         endIcon={loading ? <CircularProgress size={18} /> : <Replay /> }
       >
         {actionLabel}
       </Button>
     ) : (
       <Button component={Link} to="/" color="primary" variant="contained">
         Home
       </Button>
     )}
   </Card>
   </Container>
 );
 
 export default withStyles(styles)(EmptyState);
 
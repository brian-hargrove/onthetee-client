import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Redirect, Router } from 'react-router-dom';


class Logout extends Component {
    state = { 
        navigate: false
     };

     logout = () => {
         localStorage.clear('token');
         this.setState({navigate: true});
         this.history.push("/");
     };

    render() { 
        const {navigate} = this.state;

        // if (navigate) {
        //     return 
        //     <Router>
        //         <Redirect to="/" push={true} />;
        //     </Router>
        // }

        return (
            <Button onClick={this.logout}>Logout</Button>
          );
    }
}


 
export default Logout;
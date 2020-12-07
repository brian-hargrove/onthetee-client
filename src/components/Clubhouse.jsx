import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Footer from './Footer';
import Switch from 'react-bootstrap/esm/Switch';


class Clubhouse extends Component {
    // constructor(props) {
    //     super(props);

    
    // }
    render() { 
        return ( 
            <div>
                <h1>THE CLUBHOUSE</h1>
                <p> Welcome back to the clubhouse</p>
                    <Switch>
                        <li><Link to="/enterround" >Enter Your Round</Link></li> 
                        <li><Link to="scorecard">View your rounds</Link></li>
                    </Switch>
                   
                   
            
               
                
               <Footer />
               
            </div>
         );
    }
}
 
export default Clubhouse;
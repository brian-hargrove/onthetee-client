import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Footer from './Footer';
import Switch from 'react-bootstrap/esm/Switch';
import '../styles/Clubhouse.css'

class Clubhouse extends Component {
    // constructor(props) {
    //     super(props);

    
    // }
    render() { 
        return ( 
            <div className="clubhouse">
                <h1 id="clubhouseTitle">THE CLUBHOUSE</h1>
                <p id="ptitle"> Welcome back to the clubhouse</p>
                    <Switch>
                        <li className="list"><Link to="/enterround" >Enter Your Round</Link></li> 
                        <li className="list"><Link to="scorecard">View your rounds</Link></li>
                    </Switch>
            </div>
         );
    }
}
 
export default Clubhouse;
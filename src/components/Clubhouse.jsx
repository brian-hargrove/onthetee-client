import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Scorecard from "./Scorecard";
import EnterScore from "./EnterScore"
import Switch from 'react-bootstrap/esm/Switch';


class Clubhouse extends Component {
    constructor(props) {
        super(props);

        // userName(){
        //     fetch`${process.env.REACT_APP_URL}/user`, {

        //     }
        // }
    }
    render() { 
        return ( 
            <div>
                <h1>THE CLUBHOUSE</h1>
                <p> Welcome back to the clubhouse</p>
                    <Switch>
                        <li><Link to="/enterround" >Enter Your Round</Link></li> 
                        
                    </Switch>
                   
                   
            
               
                
                <Scorecard />
                {/* <EnterScore /> */}
               
            </div>
         );
    }
}
 
export default Clubhouse;
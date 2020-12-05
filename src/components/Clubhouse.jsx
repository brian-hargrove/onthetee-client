import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import Scorecard from "./Scorecard";
import Sahm from "./Sahm"


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
                <h1>Welcome to the Clubhouse</h1>
                <p> Welcome back to the clubhouse</p>
                <Scorecard />
                <Sahm />
            </div>
         );
    }
}
 
export default Clubhouse;
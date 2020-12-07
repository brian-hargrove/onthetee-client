import React, { Component } from 'react';
import { Table, Button } from 'reactstrap'
import APIURL from '../helpers/environment';
import '../styles/Scorecard.css';

class Scorecard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            golfcourse:"",
            date:"",
            hole1:"",
            hole2:"",
            hole3:"",
            hole4:"",
            hole5:"",
            hole6:"",
            hole7:"",
            hole8:"",
            hole9:"",
            hole10:"",
            hole11:"",
            hole12:"",
            hole13:"",
            hole14:"",
            hole15:"",
            hole16:"",
            hole17:"",
            hole18:"",
            notes: "",
            scores: ""
        }

    }
    



    populateCard (){

        fetch(`${process.env.REACT_APP_URL}/score/all`,{
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }),
        })
        .then((response)=>response.json())
        .then((body)=>{this.setState({scores:body})})

        
        .catch((error)=>console.log(error));
        
    }
    
    displayScores (){
        console.log(this.state.scores)
        return this.state.scores.map(score=>{
            return (<tr>
                <td>
                    {score.date}
                </td>
                <td>
                    {score.golfcourse}
                </td>
                <td>
                    {score.hole1} 
                </td>
                <td>
                    {score.hole2}
                </td>
                <td>
                    {score.hole3}
                </td>
                <td>
                    {score.hole4}
                </td>
                <td>
                    {score.hole5}
                </td>
                <td>
                    {score.hole6}
                </td>
                <td>
                    {score.hole7}
                </td>
                <td>
                    {score.hole8}
                </td>
                <td>
                    {score.hole9}
                </td>
                <td>
                    {score.hole1 + score.hole2 + score.hole3 + score.hole4 + score.hole5 + score.hole6 + score.hole7 + score.hole8 + score.hole9}
                </td>
                <td>
                    {score.hole10}
                </td>
                <td>
                    {score.hole11}
                </td>
                <td>
                    {score.hole12}
                </td>
                <td>
                    {score.hole13}
                </td>
                <td>
                    {score.hole14}
                </td>
                <td>
                    {score.hole15}
                </td>
                <td>
                    {score.hole16}
                </td>
                <td>
                    {score.hole17}
                </td>
                <td>
                    {score.hole18}
                </td>
                <td>
                    {score.hole10 + score.hole11 + score.hole12 + score.hole13 + score.hole14 + score.hole15 + score.hole16 + score.hole17 + score.hole18}
                </td>
                <td>
                    {score.hole1 + score.hole2 + score.hole3 + score.hole4 + score.hole5 + score.hole6 + score.hole7 + score.hole8 + score.hole9 + score.hole10 + score.hole11 + score.hole12 + score.hole13 + score.hole14 + score.hole15 + score.hole16 + score.hole17 + score.hole18}
                </td>
              

            </tr>
            )
        })
    }

    deleteScore(){
        fetch(`${process.env.REACT_APP_URL}/score/:id`, {
            method: "DELETE",
            headers: new Headers ({
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('token'),
            }),
        }).then(()=>console.log("Round deleted"))
    }

    render() { 
        return (
            <div className="divScorecard">
               
                <Table className="scoreTable" hover>
                    <thead >
                        <tr >
                            <th>Date</th>
                            <th id="thCourse">Golf Course</th>
                            <th> 1</th>
                            <th> 2</th>
                            <th> 3</th>
                            <th> 4</th>
                            <th> 5</th>
                            <th> 6</th>
                            <th> 7</th>
                            <th> 8</th>
                            <th> 9</th>
                            <th>IN</th>                          
                            <th> 10</th>
                            <th> 11</th>
                            <th> 12</th>
                            <th> 13</th>
                            <th> 14</th>
                            <th> 15</th>
                            <th> 16</th>
                            <th> 17</th>
                            <th> 18</th>
                            <th>OUT</th>
                            <th>Total</th>
                           
                        </tr>
                        
                    </thead>
                    <tbody>
                        {this.state.scores ? this.displayScores() : this.populateCard()}                        
                    </tbody>
                   
                </Table>
            </div>
         );
    }
}
 
export default Scorecard;
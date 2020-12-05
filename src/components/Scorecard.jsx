import React, { Component } from 'react';
import { Table } from 'reactstrap'

class Scorecard extends Component {
    state = {  }

    populateCard (){

        fetch(`http://localhost:3000/scorecard/all`,{
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                
            }),
        })
        .then((response)=>response.json())
        .then((body)=>console.log(body))
        .catch((error)=>console.log(error));
    }
    
    render() { 
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr color="success">
                            <th>#</th>
                            <th>Date</th>
                            <th>Hole</th>
                            <th> 1</th>
                            <th> 2</th>
                            <th> 3</th>
                            <th> 4</th>
                            <th> 5</th>
                            <th> 6</th>
                            <th> 7</th>
                            <th> 8</th>
                            <th> 9</th>
                            <th>Out</th>
                            <th> 10</th>
                            <th> 11</th>
                            <th> 12</th>
                            <th> 13</th>
                            <th> 14</th>
                            <th> 15</th>
                            <th> 16</th>
                            <th> 17</th>
                            <th> 18</th>
                            <th>In</th>
                            <th>Tot</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Sahm Golf Course</th>
                            <th>Yards</th>
                            <th>338</th>
                            <th>353</th>
                            <th>330</th>
                            <th>159</th>
                            <th>354</th>
                            <th>435</th>
                            <th>359</th>
                            <th>177</th>
                            <th>471</th>
                            <th>2976</th>
                            <th>390</th>
                            <th>157</th>
                            <th>415</th>
                            <th>387</th>
                            <th>150</th>
                            <th>478</th>
                            <th>305</th>
                            <th>373</th>
                            <th>430</th>
                            <th>3258</th>
                            <th>6397</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Par</th>
                            <th>4</th>
                            <th>4</th>
                            <th>4</th>
                            <th>3</th>
                            <th>4</th>
                            <th>4</th>
                            <th>4</th>
                            <th>3</th>
                            <th>5</th>
                            <th>35</th>
                            <th>4</th>
                            <th>3</th>
                            <th>4</th>
                            <th>4</th>
                            <th>3</th>
                            <th>5</th>
                            <th>4</th>
                            <th>4</th>
                            <th>4</th>
                            <th>35</th>
                            <th>70</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
         );
    }
}
 
export default Scorecard;
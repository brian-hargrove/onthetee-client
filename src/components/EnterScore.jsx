import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Button, Table } from 'reactstrap';
import APIURL from '../helpers/environment';
import '../styles/EnterScore.css'

class EnterScore extends Component {
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
            rating:"",
            notes: ""
            
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         };
    
           

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })}

    handleHole1=(event)=>{
        this.setState({
            hole1:event.target.value
        })
    }        

    handleHole2=(event)=>{
        this.setState({
            hole2:event.target.value
        })
    }

    addFront9=(event)=>{
        event.preventDefault();
        this.setState({total: parseInt(this.state.hole1)+parseInt(this.state.hole2)})
    }
    handleSubmit(event){
        event.preventDefault();
        const { golfcourse, date, hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9, hole10, hole11, hole12, hole13, hole14, hole15, hole16, hole17, hole18, rating, notes} = this.state;

        this.props.history.push("/clubhouse")
       
    

        fetch(`${process.env.REACT_APP_URL}/score/new`,{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')  
            }),
            body: JSON.stringify({
                score: {
                    golfcourse: golfcourse,
                    date: date,
                    hole1: hole1,
                    hole2: hole2,
                    hole3: hole3,
                    hole4: hole4,
                    hole5: hole5,
                    hole6: hole6,
                    hole7: hole7,
                    hole8: hole8,
                    hole9: hole9,
                    hole10: hole10,
                    hole11: hole11,
                    hole12: hole12,
                    hole13: hole13,
                    hole14: hole14,
                    hole15: hole15,
                    hole16: hole16,
                    hole17: hole17,
                    hole18: hole18,
                    rating: rating,
                    notes: notes
                }
            }),
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            alert("Your round has been entered")
        })
        .catch((error)=>{console.log(error);
            alert("You must be logged in to save a round.")
    });
    }


    render() { 
        return(
            <div>
            <h3>Enter your score below</h3> 
            <h5 className="returnClubhouse"><a href="/clubhouse">Return to the clubhouse</a></h5>
            <Form onSubmit={this.handleSubmit} >
            <Table size="sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Golf Course</th>
                        <th>Hole 1</th>
                        <th>Hole 2</th>
                        <th>Hole 3</th>
                        <th>Hole 4</th>
                        <th>Hole 5</th>
                        <th>Hole 6</th>
                        <th>Hole 7</th>
                        <th>Hole 8</th>
                        <th>Hole 9</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Input
                                type="date"
                                name="date"
                                className="hole"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="text"
                                name="golfcourse"
                                className="hole"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="number"
                                name="hole1"
                                id="hole1"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="number"
                                name="hole2"
                                id="hole2"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="number"
                                name="hole3"
                                id="hole3"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="number"
                                name="hole4"
                                id="hole4"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="number"
                                name="hole5"
                                id="hole5"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="number"
                                name="hole6"
                                id="hole6"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="number"
                                name="hole7"
                                id="hole7"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="number"
                                name="hole8"
                                id="hole8"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                        <td>
                            <Input
                                type="number"
                                name="hole9"
                                id="hole9"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Hole 10</th>
                        <th>Hole 11</th>
                        <th>Hole 12</th>
                        <th>Hole 13</th>
                        <th>Hole 14</th>
                        <th>Hole 15</th>
                        <th>Hole 16</th>
                        <th>Hole 17</th>
                        <th>Hole 18</th>
                        {/* <th>Rating</th>
                        <th>Notes</th> */}
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    <td>
                            <Input
                                type="number"
                                name="hole10"
                                id="hole10"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    <td>
                            <Input
                                type="number"
                                name="hole11"
                                id="hole11"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    <td>
                            <Input
                                type="number"
                                name="hole12"
                                id="hole12"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    <td>
                            <Input
                                type="number"
                                name="hole13"
                                id="hole13"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    <td>
                            <Input
                                type="number"
                                name="hole14"
                                id="hole14"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    <td>
                            <Input
                                type="number"
                                name="hole15"
                                id="hole15"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    <td>
                            <Input
                                type="number"
                                name="hole16"
                                id="hole16"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    <td>
                            <Input
                                type="number"
                                name="hole17"
                                id="hole17"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    <td>
                            <Input
                                type="number"
                                name="hole18"
                                id="hole18"
                                className="hole"
                                min="0" max="20"
                                onChange={this.handleChange}
                            ></Input>
                        </td>
                    </tr>
                </thead>
              
            </Table>
            <div>
                <FormGroup id="rating">
                    <Label htmlFor="rating" >Rating</Label>
                    <Input 
                        type="select" 
                        name="rating" 
                        id="ratingChoice" 
                        placeholder="Rate Your Round"  
                        onChange={this.handleChange}
                    >
                            <option>-- Rate Your Round --</option>
                            <option value="5">5 - Masterful</option>
                            <option value="4">4 - ProAm Time</option>
                            <option value="3">3 - It was a Nice Walk</option>
                            <option value="2">2 - It Wasn't me, It was the beer</option>
                            <option value="1">1 - It was bad, but better than work</option>
                    </Input>
                </FormGroup>
                </div>
                <div>
                    <FormGroup id="notes">
                        <Label htmlFor="notes">Notes</Label>
                        <Input
                            type="textarea"
                            name="notes"
                            id="enterNotes"
                            placeholder="Enter notes you would like to make about round or the course"
                            onChange={this.handleChange}
                        
                        ></Input>
                    </FormGroup>
                </div>
                <Button
                id="buttonScore"
                type="submit"
            >
                Save Score
            </Button>
            <Button
                type="reset"
                id="resetButton"
            >Reset</Button>
            </Form>
           
            </div>
        )
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // return (
        //     <div className="scoreForm">
        //         <h3>Enter your score below</h3> 
        //         <h5 className="returnClubhouse"><a href="/clubhouse">Return to the clubhouse</a></h5>
        //         <Form id="enterScore" onSubmit={this.handleSubmit} >
        //             <FormGroup>
        //                 <Label htmlfor="date" id="date">Date</Label>
        //                 <Input
        //                     type="date"
        //                     name="date"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="golfcourse" id="golfCourse">Golf Course</Label>
        //                 <Input
        //                     type="text"
        //                     name="golfcourse"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
                    
        //             <FormGroup>
        //                 <Label htmlfor="hole1" id="hole1">Hole 1</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole1"
        //                     className="hole"
                            
        //                     // onChange={this.handleChange}
        //                     onChange={this.handleHole1}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole2" id="hole2">Hole 2</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole2"
        //                     className="hole"
        //                     // onChange={this.handleChange}
        //                     onChange={this.handleHole2}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole3" id="hole3">Hole 3</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole3"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole4" id="hole4">Hole 4</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole4"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole5" id="hole5">Hole 5</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole5"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole6" id="hole6">Hole 6</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole6"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole7" id="hole7">Hole 7</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole7"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole8" id="hole8">Hole 8</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole8"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole9" id="hole9">Hole 9</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole9"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole10" id="hole10">Hole 10</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole10"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole11" id="hole11">Hole 11</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole11"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole12" id="hole12">Hole 12</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole12"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole13" id="hole13">Hole 13</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole13"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole14" id="hole14">Hole 14</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole14"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole15" id="hole15">Hole 15</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole15"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole16" id="hole16">Hole 16</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole16"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole17" id="hole17">Hole 17</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole17"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="hole18" id="hole18">Hole 18</Label>
        //                 <Input
        //                     type="number"
        //                     name="hole18"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlfor="notes" id="notes">Course Notes</Label>
        //                 <Input
        //                     type="text"
        //                     name="notes"
        //                     className="hole"
        //                     onChange={this.handleChange}
        //                 ></Input>
        //             </FormGroup>
        //             <Button
        //                 className="buttonScore"
        //                 type="submit"
                        
        //             >Save Score
        //             </Button>
        //         </Form>
        //     </div>
        //  );
    }
}
 
export default EnterScore;
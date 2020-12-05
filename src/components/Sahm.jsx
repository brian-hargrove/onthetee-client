import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';

class Sahm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
            
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         };
    
 

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })}

    handleSubmit(event){
        event.preventDefault();
        const { hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9, hole10, hole11, hole12, hole13, hole14, hole15, hole16, hole17, hole18} = this.state;
    

        fetch(`${process.env.REACT_APP_URL}/score/new`,{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": "localStorage.getItem(token)"  //! might be incorrect
            }),
            body: JSON.stringify({
                score: {
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
                }
            }),
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
    })
        .catch((error)=>{console.log(error);
      
    });
    }


    render() { 
        return ( 
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlfor="hole1">Hole 1</Label>
                    <Input
                        type="number"
                        name="hole1"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole2">Hole 2</Label>
                    <Input
                        type="number"
                        name="hole2"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole3">Hole 3</Label>
                    <Input
                        type="number"
                        name="hole3"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole4">Hole 4</Label>
                    <Input
                        type="number"
                        name="hole4"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole5">Hole 5</Label>
                    <Input
                        type="number"
                        name="hole5"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole6">Hole 6</Label>
                    <Input
                        type="number"
                        name="hole6"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole7">Hole 7</Label>
                    <Input
                        type="number"
                        name="hole7"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole8">Hole 8</Label>
                    <Input
                        type="number"
                        name="hole8"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole9">Hole 9</Label>
                    <Input
                        type="number"
                        name="hole9"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole10">Hole 10</Label>
                    <Input
                        type="number"
                        name="hole10"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole11">Hole 11</Label>
                    <Input
                        type="number"
                        name="hole11"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole12">Hole 12</Label>
                    <Input
                        type="number"
                        name="hole12"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole13">Hole 13</Label>
                    <Input
                        type="number"
                        name="hole13"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole14">Hole 14</Label>
                    <Input
                        type="number"
                        name="hole14"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole15">Hole 15</Label>
                    <Input
                        type="number"
                        name="hole15"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole16">Hole 16</Label>
                    <Input
                        type="number"
                        name="hole16"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole17">Hole 17</Label>
                    <Input
                        type="number"
                        name="hole17"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlfor="hole18">Hole 18</Label>
                    <Input
                        type="number"
                        name="hole18"
                        className="hole"
                        onChange={this.handleChange}
                    ></Input>
                </FormGroup>
                <Button
                    className="button"
                    type="submit"
                >Save Score</Button>
            </Form>
         );
    }
}
 
export default Sahm;
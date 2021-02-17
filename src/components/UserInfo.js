import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import APIURL from "../helpers/environment";
import "../styles/UserInfo.css";

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hand: "",
      favCourse: "",
      favGolfer: "",
      modal: true,
    };

    this.userInfoSubmit = this.userInfoSubmit.bind(this);
    this.userInfoChange = this.userInfoChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  userInfoChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  toggle() {
    this.setState(
      (prevState) => (
        {
          modal: !prevState.modal,
        },
        (window.location.href = "/clubhouse")
      )
    );
  }

  userInfoSubmit(event) {
    event.preventDefault();

    let hand = this.state.hand;
    let favCourse = this.state.favCourse;
    let favGolfer = this.state.favGolfer;

    fetch(`${process.env.REACT_APP_URL}/userinfo/new`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
      body: JSON.stringify({
        userinfo: {
          hand: hand,
          favCourse: favCourse,
          favGolfer: favGolfer,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("userinfo", data);
        window.location.href = "/clubhouse";
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="userInfoForm">
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader id="modalHeaderUserInfo" toggle={this.toggle}>
            Welcome to On The Tee
          </ModalHeader>
          <ModalBody id="modalBodyUserInfo">
            <p id="userInfoPara">
              Before we begin, we would like to get to know you.
            </p>
            <Form className="userInfoForm" onSubmit={this.userInfoSubmit}>
              <FormGroup>
                <Input
                  id="hand"
                  name="hand"
                  placeholder="Are you right-handed, left-handed or both"
                  type="text"
                  value={this.state.hand}
                  onChange={this.userInfoChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  id="favCourse"
                  name="favCourse"
                  placeholder="What is your favorite course?"
                  type="text"
                  value={this.state.favCourse}
                  onChange={this.userInfoChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  id="favGolfer"
                  name="favGolfer"
                  placeholder="Who is your favorite golfer"
                  type="text"
                  value={this.state.favGolfer}
                  onChange={this.userInfoChange}
                ></Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter id="modalFooterUserInfo">
            <Button id="userInfoButton" type="submit" onClick={this.toggle}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );

    // return (
    //     <div className="userInfoForm">
    //         <h1>Welcome to On The Tee</h1>
    //         <p> Before you begin, we would like to get to know you.</p>
    //         <Form className="userInfoForm" onSubmit={this.userInfoSubmit}>
    //             <FormGroup>
    //                 <Input
    //                     id="hand"
    //                     name="hand"
    //                     placeholder="Are you right-handed, left-handed or both"
    //                     type="text"
    //                     value={this.state.hand}
    //                     onChange={this.userInfoChange}
    //                 ></Input>
    //             </FormGroup>
    //             <FormGroup>
    //                 <Input
    //                     id="favCourse"
    //                     name="favCourse"
    //                     placeholder="What is your favorite course?"
    //                     type="text"
    //                     value={this.state.favCourse}
    //                     onChange={this.userInfoChange}
    //                 ></Input>
    //             </FormGroup>
    //             <FormGroup>
    //                 <Input
    //                     id="favGolfer"
    //                     name="favGolfer"
    //                     placeholder="Who is your favorite golfer"
    //                     type="text"
    //                     value={this.state.favGolfer}
    //                     onChange={this.userInfoChange}
    //                 ></Input>
    //             </FormGroup>
    //             <Button
    //             id="userInfoButton"
    //             type="submit"
    //         >Submit</Button>
    //         </Form>

    //     </div>

    // );
  }
}

export default UserInfo;

import React from "react";
import './UserLogin.css';
import { Form, Button } from 'react-bootstrap';


export default class UserLogin extends React.Component{
    constructor(props) {
      super(props);
    }

   componentDidMount(){
       this.props.onClick();
    }

    render() {
     return (
     <div>
     <div id="loginForm">
     <Form>
      <h1>User Login </h1>
       <Form.Group className="form" id="name">
       <Form.Control type="text" placeholder="UserName" name = "userName" value={this.props.userName} onChange={this.props.onChange} required/>
       </Form.Group>
        <br/>
       <Form.Group className="form" id ="password">
       <Form.Control type="password" placeholder="Password" name ="password" value={this.props.password} onChange={this.props.onChange}/><br/>
       </Form.Group>
       <Form.Text id ="incrt"></Form.Text><br/>
       <Button onClick={this.props.onClick}> Login </Button>
       </Form>
     </div>
     </div>
     );

    }
}


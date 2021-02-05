import React, { useState, Component} from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Login extends Component {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    state={
        email: '',
        password: '',
    };

     handleSubmit = (e) => {
        e.preventDefault();
    }
    
     validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length> 0;
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value})
    }

    render(){
        return(
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control 
                        type="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}/>
                    </Form.Group >
                    <Button type="submit" disabled={!this.validateForm}>Login</Button>
                </Form>
            </div>
        );
    }
    
}

export default Login;
import React, { Component } from "react";
import { AppContext } from "../Context/AppContext";
import { Redirect } from "react-router-dom";
import { Card, Button } from "react-bootstrap"


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const { userAuthentication } = this.context;
        userAuthentication({ email, password });
    };
    render() {
        const { email, password } = this.state;
        const { isAuth } = this.context;
        if (isAuth) {
            return (
                <Redirect
                    push
                    to={{
                        pathname: "/cart",
                    }}
                />
            );
        }

        return (
            <div style={{background:"#edf7f6",padding:"10%",marginBottom:"-18%"}}>
                <div style={{ textAlign: "center",margin:"-10% 30%" ,marginTop:"-13%",marginBottom:"-3%",cursor:"pointer",background:"white"}}>
                    {/* <Card> */}
                        <p
                            style={{
                                marginTop:"100px",
                                color: "gray",
                                paddingTop:"5%",
                                textAlign: "center",
                                fontSize: "30px",
                                fontFamily: "cursive",
                                fontWeight: "bolder",
                            }}
                        >
                           You Can Login Here!
                        </p>
                        <div style={{fontSize:"20px"}}><i>(It's absolutely free!)</i></div><hr/>
                        <form>
                            <div style={{ fontSize: "18px", lineHeight: 2 ,fontFamily:"cursive"}}>
                                <div style={{marginTop:"60px"}}>
                                    <label style={{marginRight:"60px"}}>Email :  &nbsp;</label>
                                    <input
                                        placeholder="Enter your email"
                                        name="email"
                                        value={email}
                                        type="email"
                                        onChange={this.handleChange}
                                        style={{width:"200px",border:"none",borderBottom:"2px solid orangered"}}
                                    />
                                </div>
                                <div style={{marginTop:"20px"}}>
                                    <label style={{marginRight:"60px"}}>Password : &nbsp;</label>
                                    <input
                                        style={{width:"200px",marginLeft:"-35px",border:"none",borderBottom:"2px solid orangered"}}
                                        placeholder="Enter your password"
                                        name="password"
                                        value={password}
                                        type="password"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div style={{marginTop:"20px"}}>
                                    <Button
                                        variant="secondary"
                                        style={{ marginTop: "10px", fontSize: "20px" ,width:"100px",marginBottom:"60px"}}
                                        onClick={this.handleSubmit}
                                    >
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </form>
                    {/* </Card> */}
                </div>
            </div>
        );
    }
}
Login.contextType = AppContext;
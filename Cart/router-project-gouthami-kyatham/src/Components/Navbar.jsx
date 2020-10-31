import React from 'react'
import { Link } from "react-router-dom"
import { InputGroup, FormControl } from "react-bootstrap"

function Navbar() {
    return (
        <div>
            <div style={{ textAlign: "center",background:"#e8a405", color: "white", cursor: "pointer", fontSize: "14px" }}>$5 Flat Rate Domestic Shipping</div>
            <div style={{ display: "flex",width:"100%", padding: "1%",height:"60px", fontSize: "17px", background: "#041f41", fontWeight: "500"}}>
                <div style={{ flex: 1}}>
                    <Link to="/">
                        <img src="./walmart.jpg" style={{ width: "100px",height:"40px", margin: "-10px 5px" }} alt="walmart" />
                    </Link>
                </div>
                <div style={{ flex: 2}}>
                    <InputGroup className="mb-3" >
                        <FormControl
                            style={{ width: "200px", height: "35px" }}
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append >
                            <InputGroup.Text id="basic-addon2" style={{ width: "30px", height: "35px" ,background:"#e8a405"}}><i class="fa fa-search" style={{color:"black"}}></i></InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

                <div style={{ flex: 1, marginLeft: "3%" }}>
                    <Link to="/products" style={{ textDecoration: "none", color:"white" }}>
                        <span style={{ fontSize: "15px" }}>Products</span>
                    </Link>
                </div>

                <div style={{ flex: 1 }}>
                    <Link to="/contact" style={{ textDecoration: "none", color:"white" }}>
                        <span style={{ fontSize: "15px" }}>Contact</span>
                    </Link>
                </div>
                <div style={{ flex: 1 }}>
                    <Link to="/faq" style={{ textDecoration: "none", color:"white" }}>
                        <span style={{ fontSize: "15px" }}>FAQ</span>
                    </Link>
                </div>

                <div style={{ flex: 1 }}>
                    <Link to="/about-us" style={{ textDecoration: "none", color:"white" }}>
                        <span style={{ fontSize: "15px" }}>About-Us</span>
                    </Link>
                </div>

                
                <div style={{ flex: 1 }}>
                    <Link to="/login" style={{ textDecoration: "none", color:"white" }}>
                        <span style={{ fontSize: "15px" }}><i class="far fa-user"></i> &nbsp;Login</span>
                    </Link>
                </div>
                <div style={{ flex: 1 }}>
                    <Link to="/wishlist" style={{ textDecoration: "none", color:"white" }}>
                        <span style={{ fontSize: "15px" }}><i class="far fa-heart"></i> &nbsp;Wish List</span>
                    </Link>
                </div>

                <div style={{ flex: 1, marginRight: "-50px" }}>
                    <Link to="/cart" style={{ textDecoration: "none", color:"white" }}>
                    <i class="far fa-shopping-cart"> </i>&nbsp;Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

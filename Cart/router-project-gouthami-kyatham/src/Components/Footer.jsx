import React from 'react'
// import { Route, Link } from "react-router-dom"

function Footer() {
    return (
        <div style={{color:"white",background: "#041f41"}}>
            <div style={{marginTop:"17%"}}>
                <hr/>
                <div>
                    <div style={{display:"flex",marginLeft:"9%",lineHeight:2,marginTop:"3%"}}>
                        <div style={{flex:1}}>
                            <h3>Get to Know Us</h3>
                            <ul style={{listStyle:"none",marginLeft:"-10%",fontSize:"12px"}}>
                                <li>
                                    <a>About Us</a>
                                </li>
                                <li>
                                    <a>Careers</a>
                                </li>
                                <li>
                                    <a>Press Releases</a>
                                </li>
                                <li>
                                    <a>Fullkart Cares</a>
                                </li>
                                <li>
                                    <a>Gift a Smile</a>
                                </li>
                            </ul>
                        </div>
                        <div style={{flex:1}}>
                            <h3>Connect with Us</h3>
                            <ul  style={{listStyle:"none",marginLeft:"-10%",fontSize:"12px"}}>
                                <li>
                                    <a>Facebook</a>
                                </li>
                                <li>
                                    <a>Twitter</a>
                                </li>
                                <li>
                                    <a>Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div style={{flex:1}}>
                            <h3>Make Money with Us</h3>
                            <ul  style={{listStyle:"none",marginLeft:"-10%",fontSize:"12px"}}>
                                <li>
                                    <a>Sell on Walmart</a>
                                </li>
                                <li>
                                    <a>Sell under Walmart Accelerator</a>
                                </li>
                                <li>
                                    <a>Become an Affiliate</a>
                                </li>
                                <li>
                                    <a>Fulfilment by Walmart</a>
                                </li>
                                <li>
                                    <a>Advertise Your Products</a>
                                </li>
                                <li>
                                    <a>Walmart Pay on Merchants</a>
                                </li>
                            </ul>
                        </div>
                        <div style={{flex:1}}>
                            <h3 >Let Us Help You</h3>
                            <ul  style={{listStyle:"none",marginLeft:"-10%",fontSize:"12px"}}>
                                <li>
                                    <a>COVID-19 and Walmart</a>
                                </li>
                                <li>
                                    <a>Your Account</a>
                                </li>
                                <li>
                                    <a >Returns Centre</a>
                                </li>
                                <li>
                                    <a>100% Purchase Protection</a>
                                </li>
                                <li>
                                    <a>Walmart App Download</a>
                                </li>
                                <li>
                                    <a>Walmart Assistant Download</a>
                                </li>
                                <li>
                                    <a>Help</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div>
                    <ul style={{display:"flex",margin:"0% 29%",listStyle:"none"}}>
                        <li style={{flex:1}}>
                            <a>Conditions of Use & Sale    &nbsp;      &nbsp;   Privacy Notice  &nbsp;     &nbsp;     Interest-Based Ads   &nbsp;        &nbsp;© 1996-2020, Walmart.com, Inc. or its affiliates </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ position: "relative"}}>
                <hr />
                <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                        <a href="https://www.facebook.com/masaischool/" rel="noreferrer" target="_blank" class="btn-floating btn-fb mx-1">
                            <i class="fab fa-facebook-f fa-lg"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://twitter.com/masaischool" rel="noreferrer" target="_blank"
                            class="text-info btn-floating btn-tw mx-1">
                            <i class="fab fa-twitter fa-lg"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.instagram.com/masaischool/" rel="noreferrer" target="_blank"
                            class="text-danger btn-floating btn-gplus mx-1">
                            <i class="fab fa-instagram fa-lg"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.youtube.com/channel/UCENOACKQiqejXP-bb9sCnMg?view_as=subscriber" rel="noreferrer"
                            target="_blank" class="text-danger btn-floating mx-1">
                            <i class="fab fa-youtube fa-lg"> </i>
                        </a>
                    </li>
                </ul>
                <div class="footer-copyright text-center py-3">
                    <div style={{fontSize:"12px"}}>Walmart.com &copy; 2020</div >
                </div>
            </div>
        </div>

    )
}

export default Footer

import React from "react"

export default function Home() {
    return (
        <div style={{marginRight:"-50px"}}>
            <img src="https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469_960_720.jpg" alt="home" style={{ width: "100%", maxHeight: "600px", position: "absolute"}} />
            <section class="d-none d-md-block d-lg-block d-xl-block d-sm-block" style={{ position: "relative" }}>
                <div class="container">
                    <div class="row" style={{textAlign:"center",color:"white"}}>
                        <div class="col-12 col-md-12" style={{ marginTop: "17%"}}>
                            <h3>Introducing</h3>
                            <h1 style={{fontWeight: "bold",fontSize:"50px" }}>Woodlands Essentials</h1>
                            <h4> Timeless Fleece Designed for Modern Life</h4><br/>
                            <a style={{ color: "black",textDecoration:"none",cursor:"pointer", background: "white",padding:"10px" }}>EXPLORE COMFORT</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
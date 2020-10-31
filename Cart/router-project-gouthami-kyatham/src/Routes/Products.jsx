import React from "react";
import { Dropdown, Carousel } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/9/26/b78a65d0-1f37-491d-b844-91351b324bea1601107735819-DK_Banner_1.jpg"
              alt="second slide"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/00e0c30e-e48b-46e4-854b-3b4c412246ea1598862765967-Dk22.jpg"
              alt="First slide"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/9/26/16b2f09a-30f2-4da0-9c53-585da95fb6411601107735865-DK_Banner.jpg"
              alt="Third slide"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Carousel.Item>
        </Carousel>
        <div
          style={{
            margin: "6% 0%",
            marginBottom: "-10%",
            display: "flex",
            textAlign: "center",
          }}
        >
          {this.state.data &&
            this.state.data.map((item) => (
              <div style={{ flex: 1 }}>
                <div>
                  <img
                    src={item.link}
                    alt="image"
                    style={{ width: "300px", height: "200px" }}
                  />
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="danger"
                      className=" px-5 my-5"
                      style={{ fontSize: "20px" }}
                    >
                      {item.title}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-5">
                      {item.array.map((a) => (
                        <>
                          <Dropdown.Item
                            variant="warning"
                            style={{ fontSize: "20px", background: "white" }}
                          >
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "black",
                                fontStyle: "italic",
                                fontFamily: "monospace",
                              }}
                              to={`/products/${item.title}/${a}`}
                            >
                              {a}
                            </Link>
                          </Dropdown.Item>
                        </>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }
}

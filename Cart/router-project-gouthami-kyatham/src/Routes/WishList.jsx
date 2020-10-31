import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
export default class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.handleData();
  }
  handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3000/WishList/${id}`)
      .then(() => this.handleData());
  };
  handleCart = (id) => {
    const { history } = this.props;
    console.log(this.state.data[0]);
    axios
      .post("http://localhost:3000/cartArr", {
        item: this.state.data[0].item,
        size: this.state.size,
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(() => this.handleDelete(id))
      .then(() => history.push("/cart"));
  };
  handleData = () => {
    axios
      .get(`http://localhost:3000/WishList`)
      .then((res) => {
        console.log(this.state.res);
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    console.log(this.state.data);
    return (
      <>
        <div style={{ margin: "30px 200px", marginBottom: "-15%" }}>
          <h1>My WishList ({this.state.data.length} items) </h1>
          <div
            style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}
          >
            {this.state.data.length > 0 ? (
              <>
                {this.state.data.map((a) => (
                  <div>
                    <Card style={{ width: "26rem", margin: "30px 20px" }}>
                      <Card.Header style={{ height: "320px" }}>
                        {" "}
                        <div style={{ position: "absolute" }}>
                          <img
                            src={a.item.img}
                            style={{ width: "23.5rem", height: "300px" }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            marginLeft: "190px",
                            marginTop: "10px",
                          }}
                          onClick={() => this.handleDelete(a.id)}
                        >
                          {/* <i class="far fa-times-circle"></i> */}
                          <img
                            src="https://www.flaticon.com/svg/static/icons/svg/545/545676.svg"
                            alt=""
                            style={{
                              height: "20px",
                              width: "20px",
                              fontWeight: "bolder",
                            }}
                          />
                        </div>
                      </Card.Header>
                      <Card.Body
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Card.Title>
                          <div style={{ marginTop: "0%" }}>
                            <span
                              style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                              Price : ${a.item.cost}
                            </span>{" "}
                            &nbsp;
                            <span
                              style={{
                                textDecorationLine: "line-through",
                                color: "grey",
                              }}
                            >
                              {" "}
                              ${2 * a.item.cost}
                            </span>
                            <span style={{ color: "orangered" }}>
                              {" "}
                              (50% OFF)
                            </span>
                          </div>
                        </Card.Title>
                        <Card.Text>
                          <button
                            onClick={() => this.handleCart(a.id)}
                            style={{
                              fontSize: "18px",
                              background: "#ff3f6c",
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                              padding: "3% 15%",
                            }}
                          >
                            <i class="fas fa-shopping-bag"></i> ADD TO BAG
                          </button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </>
            ) : (
              <div style={{ alignItems: "center" }}>
                <img style={{ margin: "15% 70%" }} src="./EMPTY_WISHLIST.jpg" />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

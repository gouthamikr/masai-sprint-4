import React, { Component } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

const TopsSize = ["XS", "S", "M", "L", "XL"];
const Onesize = ["Onesize"];
const FootSize = ["5", "6", "7", "8", "9", "10"];

export default class MoreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: this.props.match.params.item,
      itemName: this.props.match.params.id,
      id1: this.props.match.params.id1,
      data: [],
      itemData: [],
      size: "",
      tempData: [],
      cartArr: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3000/products?title=${this.state.itemType}`)
      .then((res) => {
        this.setState({ data: res.data[0] });
      })
      .then(() => this.handlechange())

      .catch((error) => {
        console.log(error);
      });
  }
  handlechange = () => {
    var result = Object.keys(this.state.data).map((key) => [
      key,
      this.state.data[key],
    ]);
    console.log(result);
    let n = result.find((a) => a[0] == this.state.itemName);
    console.log(n);
    let m = n[1].find((a) => a.id == this.state.id1);
    console.log(m);
    this.setState({
      itemData: m,
    });
  };
  handleList = () => {
    Object.assign(
      this.state.itemData,
      { size: this.state.size },
      { name: this.state.itemName }
    );
    this.setState({
      itemData: this.state.itemData,
    });
    const { history } = this.props;
    axios
      .post("http://localhost:3000/WishList", {
        item: this.state.itemData,
        quantity: 1,
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(() => history.push("/wishlist"));
  };
  handleSize = (value) => {
    this.setState({
      size: value,
    });
  };

  handleCart = () => {
    let { history } = this.props;
    let target = [];
    console.log(target);
    let count = 0;
    axios
      .get(`http://localhost:3000/cartArr/`)
      .then((res) =>
        this.setState({
          cartArr: res.data,
        })
      )
      .then(
        () =>
          (target = this.state.cartArr.find(
            (item) =>
              item.item.id === this.state.id1 &&
              item.item.name === this.state.itemName &&
              item.item.size === this.state.size
          ))
      )
      .then(() => {
        if (this.state.cartArr.length > 0) {
          for (var i = 0; i < this.state.cartArr.length; i++) {
            if (
              this.state.cartArr[i].item.id == this.state.id1 &&
              this.state.cartArr[i].item.name == this.state.itemName &&
              this.state.cartArr[i].item.size == this.state.size
            ) {
              target = this.state.cartArr[i];
              console.log(target, this.state.cartArr[i], "target");
              axios
                .get(`http://localhost:3000/cartArr/${target.id}`)
                .then((res) => {
                  console.log(res);
                  this.setState({
                    quantity: res.data.quantity + 1,
                  });
                })
                .then(() =>
                  axios
                    .patch(`http://localhost:3000/cartArr/${target.id}`, {
                      quantity: this.state.quantity,
                    })
                    .then(() => history.push("/cart"))
                );
            } else {
              count++;
            }
          }
        } else {
          Object.assign(
            this.state.itemData,
            { size: this.state.size },
            { name: this.state.itemName }
          );
          this.setState({
            itemData: this.state.itemData,
          });
          axios
            .post("http://localhost:3000/cartArr", {
              item: this.state.itemData,
              quantity: 1,
            })
            .catch(function (error) {
              console.log(error);
            })
            .then(() => history.push("/cart"));
        }
        if (
          this.state.cartArr.length > 0 &&
          count === this.state.cartArr.length
        ) {
          console.log(this.state.itemData);
          Object.assign(
            this.state.itemData,
            { size: this.state.size },
            { name: this.state.itemName }
          );
          this.setState({
            itemData: this.state.itemData,
          });
          axios
            .post("http://localhost:3000/cartArr", {
              item: this.state.itemData,
              quantity: 1,
            })
            .catch(function (error) {
              console.log(error);
            })
            .then(() => history.push("/cart"));
        }
      });
  };
  render() {
    console.log(this.state.data, this.state.itemData);
    const { item, id } = this.props.match.params;
    console.log(item, id);
    console.log(this.props);
    console.log(this.state.itemName, "itemname", this.state.itemType);
    return (
      <>
        <div>
          {this.state.itemData.length != [] ? (
            <>
              <div style={{ display: "flex", lineHeight: 2 }}>
                <div style={{ flex: 1 }}>
                  <img
                    src={this.state.itemData.img}
                    style={{
                      height: "600px",
                      marginLeft: "10%",
                      padding: "6%",
                      width: "500px",
                    }}
                  ></img>
                </div>
                <div style={{ flex: 1, marginTop: "4%" }}>
                  <h1 style={{ fontSize: "45px" }}>{this.state.itemName}</h1>
                  <div style={{ fontSize: "x-large" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Price : ${this.state.itemData.cost}
                    </span>{" "}
                    &nbsp;
                    <span
                      style={{
                        textDecorationLine: "line-through",
                        color: "grey",
                      }}
                    >
                      {" "}
                      ${2 * this.state.itemData.cost}
                    </span>
                    <span style={{ color: "orangered" }}> (50% OFF)</span>
                  </div>
                  <div
                    style={{
                      color: "green",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    inclusive of all taxes
                  </div>

                  <div style={{ margin: "4% 0%" }}>
                    {(() => {
                      if (this.state.itemType == "Footwear") {
                        return (
                          <div>
                            <h5 style={{ color: "black" }}>
                              <span
                                style={{ fontWeight: "bold", fontSize: "16px" }}
                              >
                                SELECT SIZE (UK Size)
                              </span>
                              <span
                                style={{ color: "#fc036b", fontWeight: "bold" }}
                              >
                                {" "}
                                &nbsp; &nbsp; SIZE CHART →{" "}
                              </span>
                            </h5>
                            {FootSize.map((a) => (
                              <button
                                onClick={() => this.handleSize(a)}
                                style={{
                                  background: "white",
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  borderRadius: "50%",
                                  border: "1px solid lightgrey",
                                  padding: "1% 2%",
                                  margin: "1%",
                                }}
                              >
                                {a}
                              </button>
                            ))}
                          </div>
                        );
                      }
                      if (
                        this.state.itemType == "Watches" ||
                        this.state.itemType == "Accessories"
                      ) {
                        return (
                          <div>
                            {Onesize.map((a) => (
                              <div>
                                <h4>Size : </h4>
                                <button
                                  onClick={() => this.handleSize(a)}
                                  style={{
                                    background: "white",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    borderRadius: "50%",
                                    border: "1px solid lightgrey",
                                    padding: "1% 2%",
                                    margin: "1%",
                                  }}
                                >
                                  {a}
                                </button>
                              </div>
                            ))}
                          </div>
                        );
                      }
                      if (this.state.itemType == "Clothing") {
                        return (
                          <div>
                            <h5 style={{ color: "black" }}>
                              <span
                                style={{ fontWeight: "bold", fontSize: "16px" }}
                              >
                                SELECT SIZE
                              </span>
                              <span
                                style={{ color: "#fc036b", fontWeight: "bold" }}
                              >
                                {" "}
                                &nbsp; &nbsp; SIZE CHART →{" "}
                              </span>
                            </h5>
                            {TopsSize.map((a) => (
                              <button
                                onClick={() => this.handleSize(a)}
                                style={{
                                  background: "white",
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  borderRadius: "50%",
                                  border: "1px solid lightgrey",
                                  padding: "1% 2%",
                                  margin: "1%",
                                }}
                              >
                                {a}
                              </button>
                            ))}
                          </div>
                        );
                      }
                    })()}
                  </div>

                  <div style={{ display: "flex", margin: "4% 0%" }}>
                    <div style={{ flex: 1 }}>
                      <Button
                        style={{
                          fontSize: "20px",
                          background: "#ff3f6c",
                          color: "white",
                          border: "none",
                          padding: "4% 30%",
                        }}
                        onClick={this.handleCart}
                      >
                        <i class="fas fa-shopping-bag"></i> ADD TO BAG
                      </Button>
                    </div>
                    <div style={{ flex: 1, marginLeft: "5%" }}>
                      <Button
                        style={{
                          fontSize: "20px",
                          background: "white",
                          color: "black",
                          border: "1px solid lightgrey",
                          padding: "4% 20%",
                        }}
                        onClick={this.handleList}
                      >
                        <i class="fas fa-bookmark"></i> WISHLIST
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",

                      width: "300px",
                    }}
                    className="bg-light"
                  >
                    <div style={{ padding: "0px 10px" }}>
                      <i class="fas fa-shipping-fast"></i>
                    </div>
                    <div>
                      <h6 style={{ fontSize: "15px" }}> Free Shipping</h6>
                      <p
                        style={{ fontSize: "14px", marginTop: "-5px" }}
                        className="text-muted"
                      >
                        Free Standard Shippings
                      </p>
                      <p
                        style={{ fontSize: "14px", marginTop: "-15px" }}
                        className="text-muted"
                      >
                        9-15 Business Days
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",

                      width: "300px",
                    }}
                    className="bg-light"
                  >
                    <div style={{ padding: "0px 10px" }}>
                      <i class="far fa-shield-check"></i>
                    </div>
                    <div>
                      <h6 style={{ fontSize: "15px" }}> Return Policy</h6>
                      <p
                        style={{ fontSize: "14px", marginTop: "-5px" }}
                        className="text-muted"
                      >
                        Return and exchange goods are supported.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

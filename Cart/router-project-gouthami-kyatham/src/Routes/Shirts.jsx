import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export default class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: this.props.match.params.item,
      itemName: this.props.match.params.id,
      data: [],
      itemData: [],
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
    this.setState({
      itemData: n,
    });
  };
  render() {
    console.log(this.state.data, this.state.itemData[1]);
    const { item, id } = this.props.match.params;
    if (this.state.itemData.length === 0) {
      return <h1>Page Not Found</h1>;
    } else if (this.state.itemData.length > 0) {
      if (this.props.match.params.orderBy == "asc") {
        this.state.itemData[1].sort((a, b) => a.cost - b.cost);
      } else if (this.props.match.params.orderBy == "desc") {
        this.state.itemData[1].sort((a, b) => b.cost - a.cost);
      }
    }
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "cursive" }}>
            {" "}
            Welcome to {`${item} > ${this.state.itemData[0]}`}
          </h1>
        </div>
        <div style={{ textAlign: "right", marginRight: "10%" }}>
          <div style={{ fontSize: "20px", fontFamily: "cursive" }}>
            Sort by Price :
            <Link
              to={`/product/${this.state.itemType}/${this.state.itemName}/sort/asc`}
            >
              <button
                style={{
                  fontSize: "14px",
                  border: "none",
                  borderRadius: "5px",
                  fontFamily: "monospace",
                  background: "red",
                  color: "white",
                  padding: "0.5%",
                  margin: "0.5%",
                }}
              >
                Low to High
              </button>
            </Link>
            <Link
              to={`/product/${this.state.itemType}/${this.state.itemName}/sort/desc`}
            >
              <button
                style={{
                  fontSize: "14px",
                  border: "none",
                  borderRadius: "5px",
                  fontFamily: "monospace",
                  background: "red",
                  color: "white",
                  padding: "0.5%",
                  margin: "0.5%",
                }}
              >
                High to Low
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            padding: "1%",
            margin: "1% 10%",
            textAlign: "center",
          }}
        >
          {this.state.itemData.length > 0 ? (
            this.state.itemData[1].map((a) => (
              <>
                <div style={{ flex: 4, textAlign: "center" }}>
                  <Card
                    style={{
                      width: "35rem",
                      padding: "30px",
                      margin: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={a.img}
                      style={{ height: "300px", padding: "2%", width: "250px" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        <h3>${a.cost}</h3>
                      </Card.Title>
                      <Button variant="primary">
                        <Link
                          style={{
                            color: "white",
                            textDecoration: "none",
                            fontSize: "16px",
                          }}
                          to={`/products/${this.state.itemType}/${this.state.itemName}/moredetails/${a.id}`}
                        >
                          More Details
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

import React from "react";
import axios from "axios";

const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      email: "",
      token: ""
    };
  }

  userAuthentication = ({ email, password }) => {
    axios
      .post("https://reqres.in/api/login", {
        email,
        password
      })
      .then((res) => {
        console.log(res);
        this.setState({
          isAuth: true,
          email,
          token: res.data.token
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };

  render() {
    const { state, userAuthentication } = this;
    const value = { ...state, userAuthentication };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };

import React, { Component } from "react";
import axios from "axios";
import API from "../../util/API.json";

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    try {
      axios
        .get(API.API)
        .then((response) => {
          console.log(response);
          this.setState({
            data: response,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}

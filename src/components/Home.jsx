import React, { Component } from "react";
import aboutImage from "../images/view-2.jpg";
import userImage from "../images/user-image.jpg";
import "../styles/homeStyle.css";
import { FullPage, Slide } from "react-full-page";

const overflow_hidden = "overflow-hidden";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.classList.add(overflow_hidden);
  }
  componentWillUnmount() {
    document.body.classList.remove(overflow_hidden);
  }
  render() {
    return (
      <div className="homeWrap">
        <FullPage controls>
          <Slide className="slide-1" />
          <Slide className="slide-2" />
          <Slide className="slide-3" />
        </FullPage>
      </div>
    );
  }
}
export default Home;

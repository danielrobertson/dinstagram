import React, { Component } from "react";
import PhotoCard from "./Components/PhotoCard";
import CommentList from "./Components/CommentList";

class App extends Component {
  render() {
    return (
      <div>
        <PhotoCard />
        <CommentList />
      </div>
    );
  }
}

export default App;

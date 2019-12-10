import React, { Component } from "react";
import Image from "./components/Image";
import images from "./images.json";

class App extends Component {
  state = {
    images
  };
  //on click shuffle cards
  //check for true(clicked) false(if not yet clicked)
  //if false when clicked, turn true
  //if true when clicked, you lose, score is pushed to Top Score Array

  handleOnClick = event => {
    event.preventDefault();
    shuffleArray(images);
  };
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  render() {
    return (
      <>
        {this.state.images.map(image => (
          <section id="images">
            <div className="columns is-multiline is-mobile">
              <Image
                onChange={this.handleOnClick}
                img={image.img}
                name={image.name}
              />
            </div>
          </section>
        ))}
      </>
    );
  }
}

export default App;

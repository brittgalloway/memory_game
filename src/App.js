import React, { Component } from "react";
import Image from "./components/Image";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0
  };
  //on click shuffle cards
  //check for true(clicked) false(if not yet clicked)
  //if false when clicked, turn true
  //if true when clicked, you lose, score is pushed to Top Score Array
  // handleClick = () => {
  //   this.setState({
  //     isClicked: true
  //   });

  //   shuffleArray(images);
  // };

  // shuffleArray = imgOrder => {
  //   let index = imgOrder.length - 1;
  //   while (index > 0) {
  //     const randomized = Math.floor(Math.random() * (index + 1));
  //     const temp = imgOrder[index];
  //     imgOrder[index] = imgOrder[randomized];
  //     imgOrder[randomized] = temp;
  //     index--;
  //   }
  //   return imgOrder;
  // };

  render() {
    return (
      <>
        <section id="images">
          <div className="columns is-multiline is-mobile">
            {this.state.images.map(image => (
              <Image
                key={image.id}
                id={image.id}
                img={image.img}
                name={image.name}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default App;

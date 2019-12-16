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
  handleClick = event => {
    const { id } = event.target;

    const clickedImage = this.state.images.find(img => img.id === parseInt(id));

    if (!clickedImage.isClicked) {
      clickedImage.isClicked = true;
      alert("You clicked " + id);

      const newImgArray = this.state.images.filter(
        img => img.id !== parseInt(id)
      );
      const updatedArray = [clickedImage, ...newImgArray];
      this.setState({
        images: updatedArray
      });
    }

    // shuffleArray(images);
  };

  shuffleArray = imgArray => {
    let index = imgArray.length - 1;
    while (index > 0) {
      const randomized = Math.floor(Math.random() * (index + 1));
      const temp = imgArray[index];
      imgArray[index] = imgArray[randomized];
      imgArray[randomized] = temp;
      index--;
    }
    return imgArray;
  };

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
                handleClick={this.handleClick}
                isClicked={image.isClicked}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default App;

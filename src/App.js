import React, { Component } from "react";
import Nav from "./components/Nav";
import Image from "./components/Image";
import images from "./images.json";
import "./app.css";

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0
  };

  handleClick = event => {
    const { id } = event.target;
    //find the id of the clicked image
    const clickedImage = this.state.images.find(img => img.id === parseInt(id));
    //if clickedImage is false
    if (!clickedImage.isClicked) {
      //switch it to true
      clickedImage.isClicked = true;
      //find the images in the array that are not clicked
      const newImgArray = this.state.images.filter(
        img => img.id !== parseInt(id)
      );
      //insert the clickedImage into the newImgArray
      const updatedArray = [clickedImage, ...newImgArray];
      //update score
      const currentScore = (this.state.score += 1);

      this.setState({
        images: this.shuffleArray(updatedArray),
        score: currentScore
      });
    } else {
      this.state.topScore = this.state.score;
      const highestScore = this.state.topScore;

      clickedImage.isClicked = false;

      this.setState({
        images,
        score: 0,
        topScore: highestScore
      });
    }
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
        <Nav score={this.state.score} topScore={this.state.topScore} />

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

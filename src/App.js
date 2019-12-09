import React, {Component} from 'react';
import Image from "./components/Image"
import images from "./images.json"

class App extends Component{

state = {
    images
  
}

render(){

return(
<>
 {this.state.images.map(image => (
        <section id="images">
          <div className="columns is-multiline is-mobile">
            <Image
          img={image.img}
          name= {image.name}
          />
          </div>
        </section>
  ))}
      </>
)
}
}

export default App;

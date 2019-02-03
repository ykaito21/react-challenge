import React, { Component } from "react";

class Meme extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: []
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({
      randomImg: randMemeImg
    });
  };

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="topText"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <input
            type="text"
            name="bottomText"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />

          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default Meme;

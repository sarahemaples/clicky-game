import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0,
    modelsClicked: [0],
    title: "Click any fierce face to start"
  };
  
  cardClicked = id => {
    if (this.state.modelsClicked.indexOf(id) === -1){
      // if id user clicked is not included in ourr arr, 
      // update arr
      this.setState({ 
        modelsClicked: this.state.modelsClicked.concat(id), 
        title: "You wanna be on top?"
      });
      // call correctClick function
      this.correctClick();
    } else {
      this.incorrectClick();
    }
  }

  correctClick = () => {
    // update our score
    var newScore = this.state.score + 1;
    this.setState({
      friends: this.shuffleCards(friends),
      score: newScore
    });
  }

  incorrectClick = () => {
    // reset score to 0
    this.setState({
      score: 0,
      modelsClicked: [0],
      title: "Unfortunately, your booty is lacking the tooch"
    });
  }

  shuffleCards = (friends) => {
    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    return friends;
  } 

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>{this.state.title}</Title>
        <Score
          score={this.state.score}
          highScore={this.state.highScore} />
        {this.state.friends.map(friend => (
          <FriendCard
            cardClicked={this.cardClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

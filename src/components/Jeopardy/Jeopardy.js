import React, { Component } from 'react';
//import our service
import JeopardyService from "../jeopardyService/jeopardyService";
import Display from "./Display";

class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props){
      super(props);
      this.client = new JeopardyService();
      this.state = {
        data: {
          category: ''
        },
        userAnswer:{
          answer:''},
        score: 0
      }
    }
    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
      return this.client.getQuestion().then(result => {
        this.setState({
          data: result.data[0]
        })
      })
    }
    //when the component mounts, get a the first question
    componentDidMount() {
      this.getNewQuestion();
    }
   
  scoreGame() {
    if (this.state.userAnswer.answer === this.state.data.answer){
    this.setState({
      score: this.state.score + this.state.data.value 
      })
    } else   this.setState({
      score: this.state.score -  this.state.data.value 
      
  })
    
  }
  checkAnswer = (event) => {
      event.preventDefault();
  
    const userAnswer = {...this.state.userAnswer}
    userAnswer[event.target.name] = event.target.value
  
    this.setState({userAnswer}
      
    )
  }
  
  handleSubmit = (event) =>{
    event.preventDefault()
    this.scoreGame()
    this.getNewQuestion()
   
    
    
        
    
    
        }
  
      
  
  
  
  
    //display the results on the screen
    
    render() {
        if (this.state.data.category === undefined){
            return(
                <div> 
                    <h1> Loading ..</h1>
                </div>
            )

        }
      
      return (
        <div style={{display:"flex", justifyContent: "space-evenly"}}>
          <Display
          data={this.state.data}
          userAnswer={this.state.userAnswer}
          score={this.state.score}
          checkAnswer={this.checkAnswer}
          handleSubmit={this.handleSubmit}
          
          />
        </div>
  
          
          
      );
  
        
  
  
    }
  }
  export default Jeopardy;
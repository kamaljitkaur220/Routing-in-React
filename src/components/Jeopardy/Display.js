import React from 'react'


function Display(props){

    return(
<div>
       <strong> Question:</strong>{props.data.question}<br></br>
        <strong>Category:</strong> {props.data.category.title}<br/>
       <br/>
         <strong>Point value:</strong>{props.data.value}<br></br>
        <strong> Your Score:</strong>{props.score}
        <br/>
        <form onSubmit={props.handleSubmit} >
                <div>
        <strong>Your Answer:</strong>
         <input type='text'name='answer'
                value={props.userAnswer.answer}
                onChange={props.checkAnswer}

            
              />   
                </div>
              <button type='submit'>Submit Answer</button>
              </form>
                <br/>
             
              </div>
    )



}

export default Display
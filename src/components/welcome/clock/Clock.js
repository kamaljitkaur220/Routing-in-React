import React, {Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props)
            this.state = {
                date: new Date()
            }

    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),1000)
    }

    componentWillUnmount (){
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    render(){
        return(
                <div className='Clock'>
                   <h1>Eastern Time</h1>
                       <iframe src="https://giphy.com/embed/2zdVnsL3mbrs4xg4fr" 
                       width="100" height="100" frameBorder="0"  allowFullScreen></iframe>
                   
        <h2>{this.state.date.toLocaleTimeString()}</h2>
                </div>
        )
    }

}
export default Clock;
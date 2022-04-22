import { Component } from "react";

class Dialogue extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: "This is a title",
            message: "This is a message. This tells the user what to do in the dialogue.",
            actions: ["Cancel","Accept"]
        }
    }

    render(){
        return(
            <div className="third left">
                <h1>Dialogue Component</h1>
                <div className="dialogue">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.message}</p>
                    {
                        this.state.actions.map((action, index) =>
                            <button className={action + ' card_action'} key={index}>{action}</button>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Dialogue;
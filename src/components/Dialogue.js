import { Component } from "react";

class Dialogue extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Dialogue Component</h1>
                <div className="dialogue">
                    <h1>Dialogue Title</h1>
                    <p>This is a paragraph of text. This text describes the action that the user has to take in order for the dialogue to disappear.</p>
                    <button className="card_action">Action 1</button>
                    <div className="v_div"></div>
                    <button className="card_action active">Action 2</button>
                </div>
            </div>
        );
    }
}

export default Dialogue;
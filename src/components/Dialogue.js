import { Component } from "react";

class Dialogue extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Dialogue Component</h1>
                <div className="dialogue">
                    <h1>Dialogue Title</h1>
                    <p>This is a paragraph of text.</p>
                    <button>Accept</button>
                    <button>Cancel</button>
                </div>
            </div>
        );
    }
}

export default Dialogue;
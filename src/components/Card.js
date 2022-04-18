import { Component } from "react";

class Card extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Card Component</h1>
                <div className="card">
                    <h1>Card Title</h1>
                    <p>This is a paragraph of text.</p>
                    <img className="gallery_img" src="./cat.jpg"></img><br></br>
                    <button className="card_action">Action 1</button>
                    <button className="card_action">Action 2</button>
                </div>
            </div>
        );
    }
}

export default Card;
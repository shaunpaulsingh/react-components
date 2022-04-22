import { Component } from "react";

class Card extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Card Component</h1>
                <div className="card">
                    <h1>Card Title</h1>
                    <img className="card_img" alt="test" src={process.env.PUBLIC_URL + '/cat.jpg'}></img><br></br>
                    
                    <h3>This is the message title of the card</h3>
                    <p>This is more information that can be presented in a description. This tells the user information about this card.</p>
                </div>
            </div>
        );
    }
}

export default Card;
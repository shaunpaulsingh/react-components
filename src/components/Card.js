import { Component } from "react";

class Card extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: "This is a title",
            message: "This is a message. This tells the user what to do in the card.",
            actions: ["CANCEL","ACCEPT"],
            actions_URL: ["https://hellorobotron.com", "https://hellorobotron.com"]
        }
    }

    render(){
        return(
                <div id="Group_8">
                    <svg class="Rectangle_2">
                        <rect id="Rectangle_2" rx="15" ry="15" x="0" y="0" width="486" height="558">
                        </rect>
                    </svg>

                    <img id="cat_bz" alt="img" src="cat_bz.png" srcset={process.env.PUBLIC_URL + '/cat.jpg'}></img>
			
		            <img id="cat_b" alt="img" src="cat_b.png" srcset={process.env.PUBLIC_URL + '/cat_b.png'}></img>
                    <div id="Shaun_Paul_Singh_Singapore_100">
                        <span>Shaun Paul Singh</span><br/><span>Singapore<br/>10:00 AM +0800</span>
                    </div>

                    <div id="This_is_a_title_b">
                        <span>{this.state.title}</span>
                    </div>
                    <div id="This_is_a_description_This_tex_b">
                        <span>{this.state.message}</span>
                    </div>

                    
                    {
                        this.state.actions.map((action, index) =>
                        <div id={"ACTION_" + (index + 1)}>
                            <a href={this.state.actions_URL[index]}><span>{action}</span></a>
                        </div>
                        )
                    }
                </div>
        );
    }
}

export default Card;
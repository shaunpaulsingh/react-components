import { Component } from "react";

class Dialogue extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: "This is a title",
            message: "This is a message. This tells the user what to do in the dialogue.",
            actions: ["CANCEL","ACCEPT"]
        }
    }

    render(){
        return(
            
            <div className="third left">
                <div id="Group_10">
                    <svg class="Rectangle_2_ct">
                        <rect id="Rectangle_2_ct" rx="15" ry="15" x="0" y="0" width="486" height="199">
                        </rect>
                    </svg>
                    <div id="This_is_a_title_cu">
                        <span>{this.state.title}</span>
                    </div>
                    <div id="This_is_a_description_This_tex_cv">
                        <span>{this.state.message}</span>
                    </div>
                    {
                        this.state.actions.map((action, index) =>
                        <div id={"ACTION_" + (index + 1) + "_cx"}>
                            <span>{action}</span>
                        </div>
                        )
                    }
                </div>
               
            </div>
        );
    }
}

export default Dialogue;
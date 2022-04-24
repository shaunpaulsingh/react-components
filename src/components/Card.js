import { Component } from "react";

class Card extends Component{

    render(){
        return(
                <div id="Group_8">
                    <svg class="Rectangle_2">
                        <rect id="Rectangle_2" rx="15" ry="15" x="0" y="0" width="486" height="558">
                        </rect>
                    </svg>

                    <img id="cat_bz" src="cat_bz.png" srcset={process.env.PUBLIC_URL + '/cat.jpg'}></img>
			
		            <img id="cat_b" src="cat_b.png" srcset={process.env.PUBLIC_URL + '/cat_b.png'}></img>
                    <div id="Shaun_Paul_Singh_Singapore_100">
                        <span>Shaun Paul Singh</span><br/><span>Singapore<br/>10:00 AM +0800</span>
                    </div>

                    <div id="This_is_a_title_b">
                        <span>This is a title</span>
                    </div>
                    <div id="This_is_a_description_This_tex_b">
                        <span>This is a description. This text lets the user know what the image is supposed to mean.</span>
                    </div>
                    <div id="ACTION_1">
                        <span>ACTION 1</span>
                    </div>
                    <div id="ACTION_2">
                        <span>ACTION 2</span>
                    </div>
                </div>
        );
    }
}

export default Card;
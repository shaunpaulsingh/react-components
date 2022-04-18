import { Component } from "react";

class TagCloud extends Component{

    render(){
        return(
            <div className="third left">
                <h1>Tag Cloud Component</h1>
                <div className="card">
                    <h1>Title</h1>
                    
                    <div className="tag left active">Cats <span className="tag_icon">x</span></div>
                    <div className="tag left">Dogs</div>
                    <div className="tag left">Mules</div>
                    <div className="tag left">Horses</div>
                    <div className="tag left">Dogs</div>
                    <div className="tag left">Mules</div>
                    <div className="tag left">Horses</div>
                    <div className="tag left">Dogs</div>
                    <div className="tag left">Mules</div>
                    <div className="tag left">Horses</div>

                    <div className="clearall"></div>
                </div>
            </div>
        );
    }
}

export default TagCloud;
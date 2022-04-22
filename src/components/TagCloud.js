import { Component } from "react";

class TagCloud extends Component{
    constructor(props){
        super(props);

        this.state = {
            tags : ['Shaun', 'Jeremy', 'Horses', 'Mules', 'Javascript', 'Java', 'React', 'Spring Boot'],
        }
    }

    render(){
        return(
            <div className="third left">
                <h1>Tag Cloud Component</h1>
                <div className="card">
                    <h1>Title</h1>
                    
                    {this.state.tags.map((tag, index) => (
                        <div className="tag left" key={index}>{tag}</div>
                    ))}

                    <div className="clearall"></div>
                </div>
            </div>
        );
    }
}

export default TagCloud;